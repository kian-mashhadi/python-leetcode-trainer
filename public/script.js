// ============================================================
// THEME
// ============================================================
function applyTheme(theme, animate) {
  if (animate) {
    document.documentElement.classList.add('theme-transition');
    setTimeout(() => document.documentElement.classList.remove('theme-transition'), 320);
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark', true);
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);

// ============================================================
// BREADCRUMB
// ============================================================
function setBreadcrumb(parts) {
  const bc = document.getElementById('breadcrumb');
  if (!bc) return;
  bc.innerHTML = parts.map((p, i) => {
    const isCurrent = i === parts.length - 1;
    return `<span class="bc-item ${isCurrent ? 'bc-current' : ''}">${escapeHtml(p)}</span>`;
  }).join('<span class="bc-sep">›</span>');
}

// ============================================================
// STATE
// ============================================================
let COURSE = [];       // all levels + lessons from API
let ALL_LESSONS = [];  // flat ordered list of all lesson objects

// ============================================================
// PROGRESS — localStorage
// ============================================================
function getCompleted() {
  try { return new Set(JSON.parse(localStorage.getItem('completed') || '[]')); }
  catch { return new Set(); }
}
function saveCompleted(set) {
  localStorage.setItem('completed', JSON.stringify([...set]));
}
function markComplete(lessonId) {
  const done = getCompleted();
  done.add(lessonId);
  saveCompleted(done);
  refreshProgress();
}
function unmarkComplete(lessonId) {
  const done = getCompleted();
  done.delete(lessonId);
  saveCompleted(done);
  refreshProgress();
}
function isComplete(lessonId) {
  return getCompleted().has(lessonId);
}

// ============================================================
// NAVIGATION
// ============================================================
const PAGE_TITLES = { home: 'Home', problems: 'Practice Problems', lab: 'Practice Lab' };

let __internalHashChange = false;
let __currentRoute = '#/home';

function persistRoute(hash) {
  __currentRoute = hash;
  try { localStorage.setItem('last-route', hash); } catch (e) {}
  if (location.hash !== hash) {
    __internalHashChange = true;
    location.hash = hash;
  }
  setActiveTopNav(hash);
}

function setActiveTopNav(hash) {
  let target = 'home';
  if (hash.startsWith('#/level/') || hash.startsWith('#/lesson/')) target = 'learn';
  else if (hash === '#/lab') target = 'lab';
  else if (hash === '#/problems') target = null;
  document.querySelectorAll('.top-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.target === target);
  });
}

function navigateTo(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById(`page-${pageId}`);
  if (page) page.classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`.nav-link[data-page="${pageId}"]`);
  if (link) link.classList.add('active');

  document.querySelectorAll('.level-nav-link').forEach(l => l.classList.remove('active'));

  setBreadcrumb([PAGE_TITLES[pageId] || pageId]);
  closeSidebar();
  if (pageId === 'lab') setTimeout(renderLabIndex, 30);
  window.scrollTo({ top: 0, behavior: 'smooth' });
  persistRoute('#/' + pageId);
}

function openLevel(levelId) {
  renderLevelPage(levelId);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-level').classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.level-nav-link').forEach(l => l.classList.remove('active'));
  const link = document.querySelector(`.level-nav-link[data-level="${levelId}"]`);
  if (link) link.classList.add('active');

  const level = COURSE.find(l => l.id === levelId);
  setBreadcrumb(level ? [`Level ${level.id}`, level.title] : [`Level ${levelId}`]);
  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  try { localStorage.setItem('last-level-id', String(levelId)); } catch (e) {}
  persistRoute('#/level/' + levelId);
}

function openLesson(lessonId) {
  renderLessonPage(lessonId);
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-lesson').classList.add('active');

  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  const level  = lesson ? COURSE.find(lv => lv.lessons.some(l => l.id === lessonId)) : null;
  setBreadcrumb(level && lesson ? [`Level ${level.id}`, lesson.title] : [lessonId]);

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.level-nav-link').forEach(l => l.classList.remove('active'));
  if (level) {
    const link = document.querySelector(`.level-nav-link[data-level="${level.id}"]`);
    if (link) link.classList.add('active');
    try { localStorage.setItem('last-level-id', String(level.id)); } catch (e) {}
  }

  closeSidebar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  persistRoute('#/lesson/' + lessonId);
}

function openLearn() {
  const savedLevel = parseInt(localStorage.getItem('last-level-id') || '', 10);
  if (!Number.isNaN(savedLevel) && COURSE.some(l => l.id === savedLevel)) {
    openLevel(savedLevel);
  } else if (COURSE.length) {
    openLevel(COURSE[0].id);
  } else {
    navigateTo('home');
  }
}

function applyRouteFromHash() {
  let hash = location.hash || '';
  if (!hash) {
    try { hash = localStorage.getItem('last-route') || ''; } catch (e) {}
  }
  if (hash.startsWith('#/lesson/')) {
    const id = hash.slice('#/lesson/'.length);
    if (ALL_LESSONS.some(l => l.id === id)) { openLesson(id); return; }
  }
  if (hash.startsWith('#/level/')) {
    const id = parseInt(hash.slice('#/level/'.length), 10);
    if (COURSE.some(l => l.id === id)) { openLevel(id); return; }
  }
  if (hash === '#/lab')      { navigateTo('lab'); return; }
  if (hash === '#/problems') { navigateTo('problems'); return; }
  navigateTo('home');
}

window.addEventListener('hashchange', () => {
  if (__internalHashChange) { __internalHashChange = false; return; }
  applyRouteFromHash();
});

// Mobile sidebar
const menuToggle = document.getElementById('menuToggle');
const sidebar    = document.getElementById('sidebar');
const overlay    = document.getElementById('overlay');
menuToggle.addEventListener('click', () => { sidebar.classList.toggle('open'); overlay.classList.toggle('active'); });
overlay.addEventListener('click', closeSidebar);
function closeSidebar() { sidebar.classList.remove('open'); overlay.classList.remove('active'); }

// ============================================================
// SIDEBAR COLLAPSE / EXPAND (desktop rail)
// ============================================================
function getSidebarState() {
  return localStorage.getItem('sidebar-state') || 'expanded';
}
function setSidebarState(state) {
  localStorage.setItem('sidebar-state', state);
  document.documentElement.setAttribute('data-sidebar', state);
  const btn = document.getElementById('sidebarToggle');
  if (btn) {
    btn.setAttribute('aria-label', state === 'collapsed' ? 'Expand sidebar' : 'Collapse sidebar');
    btn.setAttribute('title', state === 'collapsed' ? 'Expand sidebar' : 'Collapse sidebar');
  }
}
function toggleSidebarCollapsed() {
  setSidebarState(getSidebarState() === 'collapsed' ? 'expanded' : 'collapsed');
}
const sidebarToggle = document.getElementById('sidebarToggle');
if (sidebarToggle) sidebarToggle.addEventListener('click', toggleSidebarCollapsed);
// Sync the aria/title once on boot (state was applied pre-render in index.html)
setSidebarState(getSidebarState());

// Nav link clicks (Home, Practice Problems)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => { e.preventDefault(); navigateTo(link.dataset.page); });
});

// Top-nav (header) clicks
document.querySelectorAll('.top-nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (target === 'home') navigateTo('home');
    else if (target === 'lab') navigateTo('lab');
    else if (target === 'learn') openLearn();
  });
});

// ============================================================
// LOAD COURSE
// ============================================================
async function loadCourse() {
  try {
    const res = await fetch('/api/course');
    COURSE = await res.json();
    ALL_LESSONS = COURSE.flatMap(level => level.lessons);
    renderSidebarLevels();
    renderHomePreview();
    refreshProgress();
  } catch (e) {
    document.getElementById('level-nav-list').innerHTML =
      '<li><span class="nav-loading" style="color:var(--red)">Failed to load</span></li>';
  }
  applyRouteFromHash();
}

// ============================================================
// SIDEBAR LEVEL LIST
// ============================================================
function renderSidebarLevels() {
  const done = getCompleted();
  const list = document.getElementById('level-nav-list');
  list.innerHTML = COURSE.map(level => {
    const completedCount = level.lessons.filter(l => done.has(l.id)).length;
    const total = level.lessons.length;
    const allDone = completedCount === total;
    const badgeText = level.badgeLabel || `L${level.id}`;
    const tooltip = `${badgeText}: ${level.title} — ${completedCount}/${total}`;
    return `
      <li>
        <button class="level-nav-link" data-level="${level.id}" data-tooltip="${escapeHtml(tooltip)}" onclick="openLevel(${level.id})">
          <span class="level-nav-badge" style="background:${level.color}22;color:${level.color}">${escapeHtml(badgeText)}</span>
          <span class="level-nav-title">${escapeHtml(level.title)}</span>
          <span class="level-nav-progress ${allDone ? 'done' : ''}">${completedCount}/${total}</span>
        </button>
      </li>`;
  }).join('');
}

// ============================================================
// HOME PREVIEW CARDS
// ============================================================
function renderHomePreview() {
  const done = getCompleted();
  const container = document.getElementById('home-path-preview');
  container.innerHTML = COURSE.map(level => {
    const completedCount = level.lessons.filter(l => done.has(l.id)).length;
    const total = level.lessons.length;
    const pct = total > 0 ? (completedCount / total) * 100 : 0;
    const allDone = completedCount === total;
    return `
      <div class="home-level-card ${allDone ? 'complete' : ''}" style="--level-color:${level.color}" onclick="openLevel(${level.id})">
        <div class="hlc-top">
          <span class="hlc-badge" style="background:${level.color}22;color:${level.color}">${allDone ? '✓' : escapeHtml(level.badgeLabel || `L${level.id}`)}</span>
          <span class="hlc-title">${escapeHtml(level.title)}</span>
        </div>
        <div class="hlc-count">${allDone ? '<span style="color:var(--green);font-weight:600">✓ Complete</span>' : `${completedCount}/${total} lessons`}</div>
        <div class="hlc-progress-bg">
          <div class="hlc-progress-fill" style="width:${pct}%;--fill-color:${level.color}"></div>
        </div>
      </div>`;
  }).join('');
}

// ============================================================
// REFRESH PROGRESS INDICATORS
// ============================================================
function refreshProgress() {
  const done = getCompleted();
  const total = ALL_LESSONS.length;
  const completedCount = ALL_LESSONS.filter(l => done.has(l.id)).length;

  // Sidebar footer
  document.getElementById('sidebar-footer').textContent =
    `${completedCount} / ${total} lessons complete`;

  // Re-render sidebar level counts
  document.querySelectorAll('.level-nav-link').forEach(link => {
    const levelId = parseInt(link.dataset.level);
    const level = COURSE.find(l => l.id === levelId);
    if (!level) return;
    const c = level.lessons.filter(l => done.has(l.id)).length;
    const t = level.lessons.length;
    const allDone = c === t;
    const prog = link.querySelector('.level-nav-progress');
    if (prog) { prog.textContent = `${c}/${t}`; prog.className = `level-nav-progress ${allDone ? 'done' : ''}`; }
    link.setAttribute('data-tooltip', `${level.badgeLabel || `L${level.id}`}: ${level.title} — ${c}/${t}`);
  });

  // Re-render home preview if visible
  if (document.getElementById('page-home').classList.contains('active')) {
    renderHomePreview();
  }

  // Update expanded dashboard (defined later in file)
  if (typeof refreshProgressDashboard === 'function') refreshProgressDashboard();
}

// ============================================================
// LEVEL PAGE
// ============================================================
function renderLevelPage(levelId) {
  const level = COURSE.find(l => l.id === levelId);
  if (!level) return;
  const done = getCompleted();
  const completedCount = level.lessons.filter(l => done.has(l.id)).length;
  const total = level.lessons.length;
  const pct = total > 0 ? (completedCount / total) * 100 : 0;

  const prevLevel = COURSE.find(l => l.id === levelId - 1);
  const nextLevel = COURSE.find(l => l.id === levelId + 1);

  const lessonCardsHtml = level.lessons.map((lesson, idx) => {
    const isDone = done.has(lesson.id);
    return `
      <div class="lesson-card ${isDone ? 'done' : ''}" style="--card-accent:${level.color}" onclick="openLesson('${lesson.id}')">
        <div class="lesson-card-check" style="${isDone ? '' : `border-color:${level.color}55`}">
          ${isDone ? '&#x2713;' : `<span style="font-size:0.7rem;color:${level.color};font-weight:700">${idx+1}</span>`}
        </div>
        <div class="lesson-card-body">
          <div class="lesson-card-title">${escapeHtml(lesson.title)}</div>
        </div>
        <div class="lesson-card-right">
          ${isDone
            ? `<span class="lesson-done-badge">&#x2713; Done</span>`
            : `<span class="lesson-start-badge" style="border-color:${level.color}55;color:${level.color};background:${level.color}11">Start &rarr;</span>`}
        </div>
      </div>`;
  }).join('');

  const navButtons = `
    <div class="level-nav-buttons">
      ${prevLevel ? `<button class="btn-ghost" onclick="openLevel(${prevLevel.id})">&larr; ${escapeHtml(prevLevel.badgeLabel || `L${prevLevel.id}`)}: ${escapeHtml(prevLevel.title)}</button>` : ''}
      ${level.lessons.length > 0 ? `<button class="next-btn" onclick="openLesson('${level.lessons[0].id}')">Start ${escapeHtml(level.badgeLabel ? level.title : `Level ${level.id}`)} &rarr;</button>` : ''}
      ${nextLevel ? `<button class="btn-ghost" onclick="openLevel(${nextLevel.id})">${escapeHtml(nextLevel.badgeLabel || `L${nextLevel.id}`)}: ${escapeHtml(nextLevel.title)} &rarr;</button>` : ''}
    </div>`;

  document.getElementById('level-content').innerHTML = `
    <button class="back-btn" onclick="navigateTo('home')" style="margin-bottom:1.5rem">&larr; All Levels</button>
    <div class="level-page-header">
      <div class="level-page-badge" style="background:${level.color}22;color:${level.color}">${escapeHtml(level.badgeLabel || `L${level.id}`)}</div>
      <div class="level-page-info">
        <h1>${escapeHtml(level.title)}</h1>
        <p>${escapeHtml(level.subtitle)}</p>
        <div class="level-page-meta">
          <span>${total} lessons</span>
          <span>${completedCount} completed</span>
        </div>
      </div>
    </div>
    <div class="level-progress-bar">
      <div class="level-progress-fill" style="width:${pct}%;--fill-color:${level.color}"></div>
    </div>
    <div class="lesson-cards">${lessonCardsHtml}</div>
    ${navButtons}
  `;
}

// ============================================================
// LESSON PAGE
// ============================================================
function renderLessonPage(lessonId) {
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;

  const level = COURSE.find(lv => lv.lessons.some(l => l.id === lessonId));
  const lessonIdx = ALL_LESSONS.findIndex(l => l.id === lessonId);
  const prevLesson = lessonIdx > 0 ? ALL_LESSONS[lessonIdx - 1] : null;
  const nextLesson = lessonIdx < ALL_LESSONS.length - 1 ? ALL_LESSONS[lessonIdx + 1] : null;
  const levelIdx = level ? level.lessons.findIndex(l => l.id === lessonId) : 0;
  const isDone = isComplete(lessonId);

  // Progress dots for this level
  const dotsHtml = level ? level.lessons.map((l, i) => {
    const cls = l.id === lessonId ? 'current' : (isComplete(l.id) ? 'done' : '');
    return `<div class="strip-dot ${cls}" title="${escapeHtml(l.title)}"></div>`;
  }).join('') : '';

  // Explanation paragraphs
  const explanationHtml = lesson.explanation
    ? lesson.explanation.map(p => `<p>${escapeHtml(p)}</p>`).join('')
    : '';

  // Mistake block
  const mistakeHtml = lesson.mistake ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x26A0;&#xFE0F; Common Mistake</div>
      <div class="mistake-box" id="mistake-box">
        <button class="mistake-toggle" onclick="toggleMistake()">
          <span class="mistake-toggle-label">
            <span style="color:var(--red)">&#x274C;</span>
            ${escapeHtml(lesson.mistake.title)}
          </span>
          <span class="mistake-arrow" id="mistake-arrow">&#x25BC;</span>
        </button>
        <div class="mistake-body">
          <p class="mistake-desc">${escapeHtml(lesson.mistake.description)}</p>
          <div class="mistake-codes">
            <div>
              <div class="mistake-label bad-label">&#x274C; Incorrect</div>
              <pre class="code-block" style="border-color:rgba(248,81,73,0.25)"><code>${escapeHtml(lesson.mistake.bad)}</code></pre>
            </div>
            <div>
              <div class="mistake-label good-label">&#x2714; Correct</div>
              <pre class="code-block" style="border-color:rgba(63,185,80,0.25)"><code>${escapeHtml(lesson.mistake.good)}</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>` : '';

  // Analogy block
  const analogyHtml = lesson.analogy ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x1F4A1; Real-World Analogy</div>
      <div class="analogy-box">
        <div class="analogy-icon">&#x1F4A1;</div>
        <div class="analogy-body">
          <div class="analogy-label">Think of it like this</div>
          <div class="analogy-text">${escapeHtml(lesson.analogy)}</div>
        </div>
      </div>
    </div>` : '';

  // Step-by-step block
  const stepByStepHtml = (lesson.stepByStep && lesson.stepByStep.length) ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x1F50D; What's Happening Step by Step</div>
      <div class="step-list">
        ${lesson.stepByStep.map(s => `<div class="step-list-item">${escapeHtml(s)}</div>`).join('')}
      </div>
    </div>` : '';

  // Quiz block
  const quizDone = isQuizPassed(lessonId);
  const quizHtml = lesson.quiz ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x2753; Quick Quiz</div>
      <div class="quiz-card" id="quiz-card">
        <div class="quiz-question">${escapeHtml(lesson.quiz.question)}</div>
        <div class="quiz-options">
          ${lesson.quiz.options.map((opt, i) => `
            <button class="quiz-option" data-idx="${i}" onclick="answerQuiz('${lessonId}', ${i}, ${lesson.quiz.correctIndex})">
              <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
              <span>${escapeHtml(opt)}</span>
            </button>
          `).join('')}
        </div>
        <div id="quiz-feedback" class="quiz-feedback ${quizDone ? 'correct' : ''}" style="${quizDone ? '' : 'display:none'}">
          ${quizDone ? `<strong>&#x2713; Correct!</strong> ${escapeHtml(lesson.quiz.explanation)}` : ''}
        </div>
      </div>
    </div>` : '';

  // Coding challenge block
  const challengeDone = isChallengePassed(lessonId);
  const challengeHtml = lesson.challenge ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x1F4BB; Coding Challenge${challengeDone ? ' &#x2713;' : ''}</div>
      <div class="challenge-box">
        <div class="challenge-desc">${formatText(lesson.challenge.description)}</div>
        <div class="challenge-editor-area">
          <textarea class="challenge-editor" id="challenge-editor" spellcheck="false">${escapeHtml(lesson.challenge.starter)}</textarea>
        </div>
        <div class="challenge-controls">
          <button class="challenge-btn primary" onclick="runChallenge('${lessonId}')">&#x25B6; Run &amp; Test</button>
          <button class="challenge-btn" onclick="resetChallenge(${JSON.stringify(escapeHtml(lesson.challenge.starter)).replace(/'/g, '&#39;')})">Reset</button>
          <button class="challenge-btn" onclick="toggleChallengeHint()">&#x1F4AD; Hint</button>
          <button class="challenge-btn" onclick="toggleChallengeSolution('${lessonId}')">&#x1F511; Solution</button>
        </div>
        <div id="challenge-hint" class="lab-reveal hidden" style="margin: 0 1.15rem 1rem">${lesson.challenge.hint ? escapeHtml(lesson.challenge.hint) : 'Try breaking the problem into small steps.'}</div>
        <div id="challenge-solution" class="lab-reveal hidden" style="margin: 0 1.15rem 1rem">
          <strong>Solution:</strong>
          <pre>${escapeHtml(lesson.challenge.solution)}</pre>
        </div>
        <div id="challenge-output" class="challenge-output"></div>
        <div id="challenge-tests" class="challenge-test-results"></div>
        <div id="challenge-status" class="challenge-status ${challengeDone ? '' : 'hidden'}">${challengeDone ? '&#x2713; Challenge complete — well done!' : ''}</div>
      </div>
    </div>` : '';

  // Reflection block
  const reflectionHtml = lesson.reflection ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x1F914; Reflection</div>
      <div class="reflection-box">
        <span class="reflection-label">Explain in your own words</span>
        ${escapeHtml(lesson.reflection)}
      </div>
    </div>` : '';

  // Practice block (existing)
  const practiceHtml = lesson.practice ? `
    <div class="lesson-section">
      <div class="lesson-section-title">&#x270F;&#xFE0F; Practice</div>
      <div class="practice-box">
        <div class="practice-question">${escapeHtml(lesson.practice.question)}</div>
        <div class="practice-hint-row">
          <button class="hint-pill" onclick="togglePracticeHint()">Show hint</button>
          <div class="practice-hint-text hidden" id="practice-hint">${escapeHtml(lesson.practice.hint)}</div>
        </div>
        <button class="practice-answer-toggle" onclick="togglePracticeAnswer()">&#x1F4A1; Show Answer</button>
        <div class="practice-answer hidden" id="practice-answer">${escapeHtml(lesson.practice.answer)}</div>
      </div>
    </div>` : '';

  document.getElementById('lesson-content').innerHTML = `
    <div class="lesson-page">
      <div class="lesson-back-row">
        <button class="back-btn" onclick="openLevel(${level ? level.id : 0})">&larr; Back to ${level ? escapeHtml(level.title) : 'Level'}</button>
      </div>

      <div class="lesson-progress-strip">${dotsHtml}</div>

      <div class="lesson-header">
        ${level ? `<div class="lesson-level-tag" style="background:${level.color}22;color:${level.color}">${escapeHtml(level.badgeLabel ? level.title : `Level ${level.id} • ${level.title}`)}</div>` : ''}
        <h1 class="lesson-title">${escapeHtml(lesson.title)}</h1>
        <div class="lesson-nav-row">
          <span>Lesson ${levelIdx + 1} of ${level ? level.lessons.length : '?'}</span>
          <span>${isDone ? '<span style="color:var(--green)">&#x2713; Completed</span>' : ''}</span>
        </div>
      </div>

      <div class="lesson-section">
        <div class="lesson-section-title">&#x1F4D6; Explanation</div>
        <div class="lesson-explanation">${explanationHtml}</div>
      </div>

      ${analogyHtml}

      ${lesson.code ? `
      <div class="lesson-section">
        <div class="lesson-section-title">&#x1F4BB; Code Example</div>
        <pre class="code-block"><code>${escapeHtml(lesson.code)}</code></pre>
        ${lesson.codeCaption ? `<p class="code-caption">${escapeHtml(lesson.codeCaption)}</p>` : ''}
      </div>` : ''}

      ${stepByStepHtml}
      ${mistakeHtml}
      ${quizHtml}
      ${challengeHtml}
      ${practiceHtml}
      ${reflectionHtml}

      <div class="lesson-footer">
        ${prevLesson ? `<button class="prev-btn" onclick="openLesson('${prevLesson.id}')">&larr; Previous</button>` : ''}
        <button class="complete-btn ${isDone ? 'is-done' : ''}" id="complete-btn" onclick="toggleComplete('${lessonId}')">
          ${isDone ? '&#x2713; Completed' : 'Mark Complete'}
        </button>
        ${nextLesson ? `<button class="next-btn" onclick="openLesson('${nextLesson.id}')">Next Lesson &rarr;</button>` : `<button class="next-btn" onclick="navigateTo('problems')">Go to Practice Problems &rarr;</button>`}
      </div>
    </div>
  `;
}

// ============================================================
// LESSON TOGGLES
// ============================================================
function toggleMistake() {
  const box = document.getElementById('mistake-box');
  const arrow = document.getElementById('mistake-arrow');
  if (!box) return;
  box.classList.toggle('open');
  if (arrow) arrow.style.transform = box.classList.contains('open') ? 'rotate(180deg)' : '';
}

function togglePracticeHint() {
  const hint = document.getElementById('practice-hint');
  if (!hint) return;
  hint.classList.toggle('hidden');
}

function togglePracticeAnswer() {
  const ans = document.getElementById('practice-answer');
  const btn = document.querySelector('.practice-answer-toggle');
  if (!ans) return;
  const hidden = ans.classList.toggle('hidden');
  if (btn) btn.textContent = hidden ? '💡 Show Answer' : '🙈 Hide Answer';
}

function toggleComplete(lessonId) {
  if (isComplete(lessonId)) {
    unmarkComplete(lessonId);
    const btn = document.getElementById('complete-btn');
    if (btn) { btn.classList.remove('is-done'); btn.textContent = 'Mark Complete'; }
    const navRow = document.querySelector('.lesson-nav-row span:last-child');
    if (navRow) navRow.innerHTML = '';
  } else {
    markComplete(lessonId);
    const btn = document.getElementById('complete-btn');
    if (btn) { btn.classList.add('is-done'); btn.innerHTML = '&#x2713; Completed'; }
    const navRow = document.querySelector('.lesson-nav-row span:last-child');
    if (navRow) navRow.innerHTML = '<span style="color:var(--green)">&#x2713; Completed</span>';
  }
  // Refresh dots
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  const level = lesson ? COURSE.find(lv => lv.lessons.some(l => l.id === lessonId)) : null;
  if (level) {
    const done = getCompleted();
    document.querySelectorAll('.strip-dot').forEach((dot, i) => {
      const l = level.lessons[i];
      if (!l) return;
      dot.className = 'strip-dot' + (l.id === lessonId ? ' current' : (done.has(l.id) ? ' done' : ''));
    });
  }
}

// ============================================================
// START COURSE — find first incomplete lesson
// ============================================================
function startCourse() {
  if (COURSE.length === 0) return;
  const done = getCompleted();
  for (const level of COURSE) {
    for (const lesson of level.lessons) {
      if (!done.has(lesson.id)) {
        openLesson(lesson.id);
        return;
      }
    }
  }
  // All done — go to first lesson of first level
  openLesson(COURSE[0].lessons[0].id);
}

// ============================================================
// PROBLEMS (unchanged from original)
// ============================================================
async function loadProblems() {
  try {
    const res = await fetch('/api/problems');
    if (!res.ok) throw new Error();
    const problems = await res.json();
    renderProblemsGrid(problems);
  } catch {
    document.getElementById('problems-grid').innerHTML =
      '<p class="error-text">Could not load problems. Make sure the server is running.</p>';
  }
}

function renderProblemsGrid(problems) {
  const grid = document.getElementById('problems-grid');
  grid.innerHTML = problems.map(p => `
    <div class="problem-card" onclick="showProblem(${p.id})">
      <div class="problem-card-header">
        <span class="problem-num">#${p.id}</span>
        <span class="difficulty-badge difficulty-${p.difficulty.toLowerCase()}">${p.difficulty}</span>
      </div>
      <h3 class="problem-title">${escapeHtml(p.title)}</h3>
      <p class="problem-concept"><span class="concept-label">Concept:</span> ${escapeHtml(p.concept)}</p>
      <p class="problem-learn">${escapeHtml(p.whatYouLearn)}</p>
      <div class="problem-tags">${p.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      <button class="solve-btn">Solve Problem &rarr;</button>
    </div>`).join('');
}

async function showProblem(id) {
  const listEl   = document.getElementById('problems-list');
  const detailEl = document.getElementById('problem-detail');
  detailEl.innerHTML = '<p class="loading-text">Loading problem...</p>';
  listEl.classList.add('hidden');
  detailEl.classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  try {
    const res = await fetch(`/api/problems/${id}`);
    if (!res.ok) throw new Error();
    renderProblemDetail(await res.json());
  } catch {
    detailEl.innerHTML = '<p class="error-text">Could not load this problem.</p>';
  }
}

function renderProblemDetail(problem) {
  document.getElementById('problem-detail').innerHTML = `
    <div class="problem-detail">
      <button class="back-btn" onclick="backToProblems()" style="margin-bottom:1.75rem">&larr; Back to Problems</button>
      <div class="problem-detail-header">
        <div class="problem-detail-title-row">
          <h1>${escapeHtml(problem.title)}</h1>
          <span class="difficulty-badge difficulty-${problem.difficulty.toLowerCase()}">${problem.difficulty}</span>
        </div>
        <div class="problem-meta">
          <span><strong>Concept:</strong> ${escapeHtml(problem.concept)}</span>
          <span><strong>Time:</strong> ${escapeHtml(problem.timeComplexity)}</span>
          <span><strong>Space:</strong> ${escapeHtml(problem.spaceComplexity)}</span>
        </div>
        <div class="problem-tags">${problem.tags.map(t => `<span class="tag">${escapeHtml(t)}</span>`).join('')}</div>
      </div>
      <div class="what-you-learn">
        <span class="learn-icon">&#x1F4A1;</span>
        <div><strong>What you'll learn:</strong> ${escapeHtml(problem.whatYouLearn)}</div>
      </div>
      <div class="detail-section">
        <h2>Problem Explanation</h2>
        <div class="explanation-text">${formatText(problem.explanation)}</div>
      </div>
      <div class="detail-section">
        <h2>Starter Code</h2>
        <p class="section-hint">Try to solve this yourself first. Spend at least 10–15 minutes before using hints.</p>
        <pre class="code-block"><code>${escapeHtml(problem.starterCode)}</code></pre>
      </div>
      <div class="detail-section hints-section">
        <h2>Hints</h2>
        <div class="hint-box" id="hint1-box">
          <button class="hint-toggle" onclick="toggleHint('hint1')">
            <span class="hint-label">&#x1F4AD; Hint 1 &mdash; click to reveal</span>
            <span class="hint-arrow" id="hint1-arrow">&#x25BC;</span>
          </button>
          <div class="hint-content hidden" id="hint1">${formatText(problem.hint1)}</div>
        </div>
        <div class="hint-box" id="hint2-box">
          <button class="hint-toggle" onclick="toggleHint('hint2')">
            <span class="hint-label">&#x1F4AD; Hint 2 &mdash; click to reveal</span>
            <span class="hint-arrow" id="hint2-arrow">&#x25BC;</span>
          </button>
          <div class="hint-content hidden" id="hint2">${formatText(problem.hint2)}</div>
        </div>
      </div>
      <div class="detail-section">
        <h2>Solution</h2>
        <div class="solution-warning"><span>&#x26A0;&#xFE0F;</span><span>Only reveal after trying and using both hints!</span></div>
        <button class="reveal-btn" id="revealBtn" onclick="toggleSolution()">Reveal Solution</button>
        <div class="solution-content hidden" id="solutionContent">
          <pre class="code-block"><code>${escapeHtml(problem.solution)}</code></pre>
          <h3>Step-by-Step Explanation</h3>
          <div class="solution-explanation">${formatText(problem.solutionExplanation)}</div>
        </div>
      </div>
    </div>`;
}

function toggleHint(hintId) {
  const content = document.getElementById(hintId);
  const arrow = document.getElementById(`${hintId}-arrow`);
  const label = document.querySelector(`#${hintId}-box .hint-label`);
  const num = hintId.replace('hint', '');
  if (!content) return;
  const isHidden = content.classList.toggle('hidden');
  if (arrow) arrow.style.transform = isHidden ? '' : 'rotate(180deg)';
  if (label) label.textContent = isHidden ? `💭 Hint ${num} — click to reveal` : `💭 Hint ${num} — revealed`;
}

function toggleSolution() {
  const content = document.getElementById('solutionContent');
  const btn = document.getElementById('revealBtn');
  if (!content) return;
  const isHidden = content.classList.toggle('hidden');
  if (btn) btn.textContent = isHidden ? 'Reveal Solution' : 'Hide Solution';
}

function backToProblems() {
  document.getElementById('problems-list').classList.remove('hidden');
  document.getElementById('problem-detail').classList.add('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// HELPERS
// ============================================================
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;').replace(/</g, '&lt;')
    .replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}
function formatText(str) {
  return escapeHtml(str).replace(/\n/g, '<br>');
}

// ============================================================
// QUIZ + CHALLENGE PROGRESS (localStorage)
// ============================================================
function getPassedSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || '[]')); }
  catch { return new Set(); }
}
function savePassedSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}
function isQuizPassed(lessonId)        { return getPassedSet('quizzes-passed').has(lessonId); }
function isChallengePassed(lessonId)   { return getPassedSet('challenges-passed').has(lessonId); }
function markQuizPassed(lessonId)      { const s = getPassedSet('quizzes-passed'); s.add(lessonId); savePassedSet('quizzes-passed', s); refreshProgress(); }
function markChallengePassed(lessonId) { const s = getPassedSet('challenges-passed'); s.add(lessonId); savePassedSet('challenges-passed', s); refreshProgress(); }
function isLabPassed(problemId)        { return getPassedSet('lab-passed').has(problemId); }
function markLabPassed(problemId)      { const s = getPassedSet('lab-passed'); s.add(problemId); savePassedSet('lab-passed', s); refreshProgress(); }

// ============================================================
// QUIZ INTERACTION
// ============================================================
function answerQuiz(lessonId, chosenIdx, correctIdx) {
  const card = document.getElementById('quiz-card');
  if (!card) return;
  const options = card.querySelectorAll('.quiz-option');
  const feedback = document.getElementById('quiz-feedback');
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson || !lesson.quiz) return;

  const isCorrect = chosenIdx === correctIdx;

  if (isCorrect) {
    options.forEach((btn, i) => {
      btn.disabled = true;
      btn.classList.remove('correct', 'incorrect');
      if (i === correctIdx) btn.classList.add('correct');
    });
    feedback.style.display = '';
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    feedback.innerHTML = `<strong>&#x2713; Correct!</strong> ${escapeHtml(lesson.quiz.explanation)}`;
    markQuizPassed(lessonId);
    return;
  }

  // Wrong answer: disable only the chosen option, do NOT highlight or reveal the correct one.
  const chosenBtn = options[chosenIdx];
  if (chosenBtn) {
    chosenBtn.disabled = true;
    chosenBtn.classList.add('incorrect');
  }

  const chosenText = lesson.quiz.options[chosenIdx] || '';
  feedback.style.display = '';
  feedback.classList.remove('correct');
  feedback.classList.add('incorrect');
  feedback.innerHTML =
    `<strong>&#x2717; Not quite.</strong> "${escapeHtml(chosenText)}" isn&rsquo;t the best answer here &mdash; re-read the question and think about what it is really asking.` +
    `<div style="margin-top:0.5rem;font-size:0.85rem;color:var(--muted)"><strong>Hint:</strong> Eliminate options that are clearly wrong first, then pick the one that most precisely matches the question.</div>` +
    `<div style="margin-top:0.6rem;display:flex;gap:0.5rem;flex-wrap:wrap">` +
      `<button class="hint-pill" onclick="retryQuiz('${lessonId}')">Try Again</button>` +
      `<button class="hint-pill" onclick="revealQuizAnswer('${lessonId}', ${correctIdx})">Reveal Answer</button>` +
    `</div>`;
}

function retryQuiz(lessonId) {
  const card = document.getElementById('quiz-card');
  if (!card) { renderLessonPage(lessonId); return; }
  card.querySelectorAll('.quiz-option').forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('correct', 'incorrect');
  });
  const feedback = document.getElementById('quiz-feedback');
  if (feedback) {
    feedback.style.display = 'none';
    feedback.classList.remove('correct', 'incorrect');
    feedback.innerHTML = '';
  }
}

function revealQuizAnswer(lessonId, correctIdx) {
  const card = document.getElementById('quiz-card');
  if (!card) return;
  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson || !lesson.quiz) return;
  const options = card.querySelectorAll('.quiz-option');
  options.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correctIdx) btn.classList.add('correct');
  });
  const feedback = document.getElementById('quiz-feedback');
  if (feedback) {
    feedback.style.display = '';
    feedback.classList.remove('incorrect');
    feedback.classList.add('correct');
    feedback.innerHTML = `<strong>Answer:</strong> ${escapeHtml(lesson.quiz.options[correctIdx])}<div style="margin-top:0.4rem">${escapeHtml(lesson.quiz.explanation)}</div>`;
  }
}

// ============================================================
// CHALLENGE INTERACTION (uses Pyodide)
// ============================================================
function resetChallenge(escapedStarter) {
  const editor = document.getElementById('challenge-editor');
  if (!editor) return;
  // escapedStarter comes through as HTML-encoded; decode it
  const tmp = document.createElement('textarea');
  tmp.innerHTML = escapedStarter;
  editor.value = tmp.value;
  document.getElementById('challenge-output').textContent = '';
  document.getElementById('challenge-tests').innerHTML = '';
}

function toggleChallengeHint()    { document.getElementById('challenge-hint').classList.toggle('hidden'); }
function toggleChallengeSolution() { document.getElementById('challenge-solution').classList.toggle('hidden'); }

async function runChallenge(lessonId) {
  const editor = document.getElementById('challenge-editor');
  const outEl  = document.getElementById('challenge-output');
  const testsEl = document.getElementById('challenge-tests');
  const statusEl = document.getElementById('challenge-status');
  if (!editor) return;

  const lesson = ALL_LESSONS.find(l => l.id === lessonId);
  if (!lesson || !lesson.challenge) return;

  outEl.textContent = '';
  testsEl.innerHTML = '<div style="color:var(--muted);font-size:0.78rem;padding:0.4rem 0">Loading Python runtime…</div>';

  try {
    await ensurePyodide();
    testsEl.innerHTML = '';
    const result = await runUserCodeWithTests(editor.value, lesson.challenge.tests || [], lesson.challenge.expectedOutput, lesson.challenge.runMode);
    outEl.textContent = result.stdout || '';
    if (result.error) {
      outEl.textContent += (result.stdout ? '\n' : '') + result.error;
      testsEl.innerHTML = `<div class="lab-error-help"><strong>Error tip:</strong> ${friendlyErrorTip(result.error)}</div>`;
      statusEl.classList.add('hidden');
      return;
    }

    if (result.tests && result.tests.length) {
      testsEl.innerHTML = result.tests.map(t => `
        <div class="test-result ${t.pass ? 'pass' : 'fail'}">
          <span class="test-icon">${t.pass ? '&#x2713;' : '&#x2717;'}</span>
          <span>${escapeHtml(t.call)} &rarr; got ${escapeHtml(JSON.stringify(t.actual))}, expected ${escapeHtml(JSON.stringify(t.expected))}</span>
        </div>`).join('');
      const allPass = result.tests.every(t => t.pass);
      if (allPass) {
        markChallengePassed(lessonId);
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = '&#x2713; All tests passed — challenge complete!';
      } else {
        statusEl.classList.add('hidden');
      }
    } else if (result.expectedOutput !== undefined && result.expectedOutput !== null) {
      const userOut = (result.stdout || '').trim();
      const expected = String(result.expectedOutput).trim();
      const pass = userOut === expected;
      testsEl.innerHTML = `<div class="test-result ${pass ? 'pass' : 'fail'}">
        <span class="test-icon">${pass ? '&#x2713;' : '&#x2717;'}</span>
        <span>${pass ? 'Output matches expected.' : `Got: ${escapeHtml(userOut)} | Expected: ${escapeHtml(expected)}`}</span>
      </div>`;
      if (pass) {
        markChallengePassed(lessonId);
        statusEl.classList.remove('hidden');
        statusEl.innerHTML = '&#x2713; Output matches — challenge complete!';
      }
    } else {
      // Pure run-only mode (no tests, no expected output) — just show the output
      statusEl.classList.add('hidden');
    }
  } catch (e) {
    outEl.textContent = String(e);
    testsEl.innerHTML = '';
  }
}

// ============================================================
// PYODIDE LOADER (lazy — first-use)
// ============================================================
let _pyodide = null;
let _pyodideLoadPromise = null;

function ensurePyodide() {
  if (_pyodide) return Promise.resolve(_pyodide);
  if (_pyodideLoadPromise) return _pyodideLoadPromise;

  _pyodideLoadPromise = new Promise((resolve, reject) => {
    if (!window.loadPyodide) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/pyodide.js';
      script.onload = () => initPyodide().then(resolve, reject);
      script.onerror = () => reject(new Error('Failed to load Pyodide from CDN. Check your internet connection.'));
      document.head.appendChild(script);
    } else {
      initPyodide().then(resolve, reject);
    }
  });
  return _pyodideLoadPromise;
}

async function initPyodide() {
  _pyodide = await window.loadPyodide({
    indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.4/full/'
  });
  return _pyodide;
}

// Run user Python code and capture stdout/stderr
// Optionally run test cases that call a function and compare results
async function runUserCodeWithTests(code, tests, expectedOutput, runMode) {
  if (!_pyodide) await ensurePyodide();

  // Clear previous globals to give a clean slate, but keep stdout buffer
  _pyodide.runPython(`
import sys, io
_stdout_buffer = io.StringIO()
sys.stdout = _stdout_buffer
sys.stderr = _stdout_buffer
`);

  let error = null;
  try {
    _pyodide.runPython(code);
  } catch (e) {
    error = String(e.message || e).replace(/^[\s\S]*?(?=Traceback|\w+Error|\w+Exception)/, '');
  }

  const stdout = _pyodide.runPython('_stdout_buffer.getvalue()');

  // Reset stdout
  _pyodide.runPython('sys.stdout = sys.__stdout__\nsys.stderr = sys.__stderr__');

  if (error) return { stdout, error };

  // If there are function tests, run them
  if (tests && tests.length) {
    const results = [];
    for (const t of tests) {
      try {
        // Eval the call expression and capture the result
        const r = _pyodide.runPython(t.call);
        const actualJs = r && r.toJs ? r.toJs({ dict_converter: Object.fromEntries }) : r;
        const pass = deepEqual(actualJs, t.expected);
        results.push({ call: t.call, expected: t.expected, actual: actualJs, pass });
      } catch (e) {
        results.push({ call: t.call, expected: t.expected, actual: '(error: ' + e.message + ')', pass: false });
      }
    }
    return { stdout, tests: results };
  }

  return { stdout, expectedOutput };
}

function deepEqual(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!deepEqual(a[i], b[i])) return false;
    return true;
  }
  if (a && b && typeof a === 'object' && typeof b === 'object') {
    const ak = Object.keys(a), bk = Object.keys(b);
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (!deepEqual(a[k], b[k])) return false;
    return true;
  }
  return false;
}

function friendlyErrorTip(err) {
  if (!err) return '';
  const e = err.toString();
  if (e.includes('NameError'))   return 'Python doesn\'t recognize a name. Check your spelling and that variables/functions are defined before being used.';
  if (e.includes('SyntaxError')) return 'Python can\'t parse this. Check for missing colons (:), unmatched brackets/quotes, or wrong indentation.';
  if (e.includes('IndentationError')) return 'The indentation is off. Use exactly 4 spaces (or 1 tab) per level — and be consistent.';
  if (e.includes('TypeError'))   return 'You combined incompatible types. For example, trying to add a string and a number. Use str() or int() to convert.';
  if (e.includes('IndexError'))  return 'You accessed a list index that doesn\'t exist. Remember: indexing starts at 0, and list[len(list)] is out of range.';
  if (e.includes('KeyError'))    return 'You looked up a dict key that doesn\'t exist. Use dict.get(key) or check "if key in dict" first.';
  if (e.includes('ZeroDivisionError')) return 'You divided by zero. Check that the denominator is not 0 before dividing.';
  if (e.includes('ValueError'))  return 'A function got an argument of the right type but an invalid value. E.g. int("hello") fails because "hello" is not a number.';
  return 'Read the error message carefully — it often tells you the exact line and what went wrong.';
}

// ============================================================
// PRACTICE LAB
// ============================================================
let LAB_PROBLEMS = [];

async function loadPracticeProblems() {
  try {
    const res = await fetch('/api/practice-problems');
    LAB_PROBLEMS = await res.json();
  } catch { LAB_PROBLEMS = []; }
}

function renderLabIndex() {
  const container = document.getElementById('lab-content');
  const passed = getPassedSet('lab-passed');
  container.innerHTML = `
    <div class="page-header">
      <h1>&#x1F9EA; Practice Lab</h1>
      <p>Write and run real Python in your browser. ${passed.size}/${LAB_PROBLEMS.length} problems solved.</p>
    </div>
    <div class="lab-problems-grid">
      ${LAB_PROBLEMS.map((p, i) => `
        <div class="lab-problem-card ${passed.has(p.id) ? 'passed' : ''}" onclick="openLabProblem('${p.id}')">
          <div class="lab-problem-card-header">
            <span class="lab-problem-num">#${i + 1}</span>
            ${passed.has(p.id) ? '<span class="lab-problem-passed-badge">&#x2713; Solved</span>' : ''}
          </div>
          <div class="lab-problem-title">${escapeHtml(p.title)}</div>
          <div class="lab-problem-concept">${escapeHtml(p.concept)}</div>
          <span class="lab-problem-difficulty">${escapeHtml(p.difficulty)}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function openLabProblem(problemId) {
  const p = LAB_PROBLEMS.find(x => x.id === problemId);
  if (!p) return;
  const passed = isLabPassed(problemId);
  const container = document.getElementById('lab-content');
  container.innerHTML = `
    <button class="back-btn" onclick="renderLabIndex()" style="margin-bottom:1.5rem">&larr; All Lab Problems</button>
    <div class="lab-detail">
      <div class="lab-detail-header">
        <div class="lab-detail-meta">
          <span class="lab-problem-num">${escapeHtml(p.concept)}</span>
          <span class="lab-problem-difficulty">${escapeHtml(p.difficulty)}</span>
          ${passed ? '<span style="color:var(--green);font-size:0.8rem;font-weight:700">&#x2713; Solved</span>' : ''}
        </div>
        <h1 class="lab-detail-title">${escapeHtml(p.title)}</h1>
      </div>

      <div class="lab-instructions">${escapeHtml(p.instructions)}</div>

      <div class="lab-example">
        <div class="lab-example-label">Example</div>
        ${escapeHtml(p.example)}
      </div>

      <div class="lab-editor-section">
        <div class="lab-editor-toolbar">
          <span class="lab-editor-label">your_code.py</span>
          <button class="challenge-btn" onclick="resetLabEditor('${p.id}')">Reset</button>
        </div>
        <textarea class="lab-editor" id="lab-editor" spellcheck="false">${escapeHtml(p.starter)}</textarea>
        <div class="lab-controls">
          <button class="lab-btn primary" onclick="runLabCode('${p.id}', false)">&#x25B6; Run Code</button>
          ${(p.tests && p.tests.length) || p.expectedOutput ? `<button class="lab-btn success" onclick="runLabCode('${p.id}', true)">&#x2713; Run Tests</button>` : ''}
          <button class="lab-btn" onclick="toggleLabHint(1)">&#x1F4AD; Hint 1</button>
          <button class="lab-btn" onclick="toggleLabHint(2)">&#x1F4AD; Hint 2</button>
          <button class="lab-btn" onclick="toggleLabSolution()">&#x1F511; Solution</button>
        </div>
        <div id="lab-hint-1" class="lab-reveal hidden"><strong>Hint 1:</strong> ${escapeHtml(p.hint1)}</div>
        <div id="lab-hint-2" class="lab-reveal hidden"><strong>Hint 2:</strong> ${escapeHtml(p.hint2)}</div>
        <div id="lab-solution" class="lab-reveal hidden">
          <strong>Solution:</strong>
          <pre>${escapeHtml(p.solution)}</pre>
          <div style="margin-top:0.5rem">${escapeHtml(p.explanation)}</div>
        </div>
      </div>

      <div class="lab-output-section">
        <div class="lab-output-label">Output</div>
        <div class="lab-output" id="lab-output"></div>
      </div>

      ${(p.tests && p.tests.length) ? `
      <div class="lab-tests-section">
        <div class="lab-tests-header">
          <span class="lab-tests-title">Test Cases (${p.tests.length})</span>
        </div>
        <div class="lab-test-list" id="lab-tests">
          ${p.tests.map(t => `
            <div class="test-result">
              <span class="test-icon" style="color:var(--muted)">○</span>
              <span>${escapeHtml(t.call)} &rarr; ${escapeHtml(JSON.stringify(t.expected))}</span>
            </div>
          `).join('')}
        </div>
      </div>` : ''}
    </div>
  `;
  // Stash starter for reset
  window.__labStarter = p.starter;
}

function resetLabEditor(problemId) {
  const p = LAB_PROBLEMS.find(x => x.id === problemId);
  if (!p) return;
  const editor = document.getElementById('lab-editor');
  if (editor) editor.value = p.starter;
  const out = document.getElementById('lab-output');
  if (out) out.textContent = '';
  const tests = document.getElementById('lab-tests');
  if (tests) renderLabTestPlaceholders(p.tests, tests);
}

function renderLabTestPlaceholders(tests, el) {
  if (!tests) return;
  el.innerHTML = tests.map(t => `
    <div class="test-result">
      <span class="test-icon" style="color:var(--muted)">○</span>
      <span>${escapeHtml(t.call)} &rarr; ${escapeHtml(JSON.stringify(t.expected))}</span>
    </div>
  `).join('');
}

function toggleLabHint(n)   { document.getElementById(`lab-hint-${n}`).classList.toggle('hidden'); }
function toggleLabSolution(){ document.getElementById('lab-solution').classList.toggle('hidden'); }

async function runLabCode(problemId, runTests) {
  const p = LAB_PROBLEMS.find(x => x.id === problemId);
  if (!p) return;
  const editor = document.getElementById('lab-editor');
  const out    = document.getElementById('lab-output');
  const tests  = document.getElementById('lab-tests');
  if (!editor || !out) return;

  out.textContent = '';
  out.innerHTML = '<div class="pyodide-loading"><div class="pyodide-spinner"></div>Loading Python… this may take ~10 seconds the first time.</div>';

  try {
    await ensurePyodide();
    out.textContent = '';

    const testList = runTests ? (p.tests || []) : [];
    const result = await runUserCodeWithTests(editor.value, testList, runTests ? p.expectedOutput : null, p.runMode);
    out.textContent = result.stdout || '(no output)';
    if (result.error) {
      out.textContent += (result.stdout ? '\n' : '') + result.error;
      out.innerHTML += `<div class="lab-error-help"><strong>Error tip:</strong> ${friendlyErrorTip(result.error)}</div>`;
      return;
    }

    if (runTests) {
      if (result.tests && result.tests.length) {
        tests.innerHTML = result.tests.map(t => `
          <div class="test-result ${t.pass ? 'pass' : 'fail'}">
            <span class="test-icon">${t.pass ? '&#x2713;' : '&#x2717;'}</span>
            <span>${escapeHtml(t.call)} &rarr; got ${escapeHtml(JSON.stringify(t.actual))}, expected ${escapeHtml(JSON.stringify(t.expected))}</span>
          </div>`).join('');
        if (result.tests.every(t => t.pass)) {
          markLabPassed(p.id);
          out.innerHTML += '<div style="margin-top:0.5rem;color:var(--green);font-weight:700">&#x2713; All tests passed — solved!</div>';
        }
      } else if (p.expectedOutput) {
        const userOut = (result.stdout || '').trim();
        const expected = String(p.expectedOutput).trim();
        if (userOut === expected) {
          markLabPassed(p.id);
          out.innerHTML += '<div style="margin-top:0.5rem;color:var(--green);font-weight:700">&#x2713; Output matches — solved!</div>';
        } else {
          out.innerHTML += `<div class="lab-error-help">Expected output:\n${escapeHtml(expected)}</div>`;
        }
      }
    }
  } catch (e) {
    out.textContent = 'Error: ' + (e.message || e);
  }
}

// ============================================================
// EXPANDED PROGRESS DASHBOARD
// ============================================================
function refreshProgressDashboard() {
  const lessonsDone = getCompleted().size;
  const lessonsTotal = ALL_LESSONS.length;
  const quizzesDone = getPassedSet('quizzes-passed').size;
  const quizzesTotal = ALL_LESSONS.filter(l => l.quiz).length;
  const challengesDone = getPassedSet('challenges-passed').size;
  const challengesTotal = ALL_LESSONS.filter(l => l.challenge).length;
  const labDone = getPassedSet('lab-passed').size;
  const labTotal = LAB_PROBLEMS.length;

  const overallParts = [
    [lessonsDone, lessonsTotal],
    [quizzesDone, quizzesTotal],
    [challengesDone, challengesTotal],
    [labDone, labTotal]
  ].filter(([_, t]) => t > 0);
  const overallDone = overallParts.reduce((s, [d]) => s + d, 0);
  const overallTotal = overallParts.reduce((s, [_, t]) => s + t, 0);
  const overallPct = overallTotal ? Math.round((overallDone / overallTotal) * 100) : 0;

  const container = document.querySelector('.dashboard-grid');
  if (!container) return;
  const stats = [
    { label: 'Lessons',    done: lessonsDone,    total: lessonsTotal,    color: 'var(--accent)' },
    { label: 'Quizzes',    done: quizzesDone,    total: quizzesTotal,    color: 'var(--green)' },
    { label: 'Challenges', done: challengesDone, total: challengesTotal, color: 'var(--yellow)' },
    { label: 'Lab',        done: labDone,        total: labTotal,        color: 'var(--purple)' },
    { label: 'Overall',    done: overallDone,    total: overallTotal,    color: 'linear-gradient(90deg,var(--accent),var(--purple))', pct: overallPct }
  ];
  container.innerHTML = stats.map(s => `
    <div class="dashboard-stat">
      <div class="dashboard-stat-label">${s.label}</div>
      <div class="dashboard-stat-value">${s.pct !== undefined ? s.pct + '%' : `${s.done} / ${s.total}`}</div>
      <div class="dashboard-stat-bar">
        <div class="dashboard-stat-fill" style="width:${s.total > 0 ? Math.round((s.done/s.total)*100) : 0}%;background:${s.color}"></div>
      </div>
    </div>
  `).join('');
}

// ============================================================
// INSERT DASHBOARD INTO HOME PAGE
// ============================================================
function injectHomeDashboard() {
  const home = document.getElementById('page-home');
  if (!home || home.querySelector('.dashboard-grid')) return;
  const hero = home.querySelector('.hero');
  if (hero) {
    const wrapper = document.createElement('div');
    wrapper.className = 'dashboard-grid';
    hero.insertAdjacentElement('afterend', wrapper);
  }
}

// Render lab index when navigating to lab page
// (We listen for the navigation click on the nav link)
document.querySelectorAll('.nav-link[data-page="lab"]').forEach(link => {
  link.addEventListener('click', () => setTimeout(renderLabIndex, 30));
});

// ============================================================
// INIT
// ============================================================
loadCourse();
loadPracticeProblems().then(() => {
  injectHomeDashboard();
  refreshProgressDashboard();
});
loadProblems();
