module.exports = [
  {
    id: 0, slug: 'intro', title: 'What is Coding?',
    subtitle: 'Understand programming before writing a single line',
    color: '#a371f7',
    lessons: [
      {
        id: 'l0-0', title: 'What is Programming?',
        explanation: ['Programming is giving a computer a list of instructions. Computers are incredibly fast — billions of calculations per second — but completely literal. They do exactly what you tell them, nothing more.', 'Think of writing a recipe: mix the flour, add eggs, bake for 30 minutes. A program is the same idea — a list of precise steps written in a language the computer understands.', 'Every app, website, and game you have ever used was built by someone writing these instructions. When you learn to program, you can build things too.'],
        analogy: 'Programming is like writing a recipe for a robot chef who has never cooked before. You can\'t say "make it taste good". You have to specify "add 2 cups of flour", "bake at 350°F for 30 minutes", "stir until smooth". Skip a step or be vague and dinner is ruined.',
        code: `# A simple Python program (don't worry about details yet)
# Notice how it almost reads like English

name = "Alice"
age = 25

print("Hello, my name is " + name)
print("I am " + str(age) + " years old")

# Output:
# Hello, my name is Alice
# I am 25 years old`,
        codeCaption: 'A simple Python program — readable almost like English',
        stepByStep: [
          '1. Line 1: a comment (starts with #) — humans only, computer skips it',
          '2. Line 2: another comment explaining what the code does',
          '3. Line 4: store the text "Alice" in a variable called name',
          '4. Line 5: store the number 25 in a variable called age',
          '5. Line 7: print "Hello, my name is " joined with the value of name',
          '6. Line 8: print age (converted to text first with str())'
        ],
        mistake: { title: 'Thinking computers are smart', description: 'Computers do NOT guess what you mean. If you type "pint" instead of "print", the computer won\'t figure it out — it will just crash with an error.', bad: 'pint("Hello")   # NameError: name \'pint\' is not defined', good: 'print("Hello")  # correct — exact spelling matters' },
        quiz: {
          question: 'A computer program is best described as:',
          options: [
            'An app you download from the App Store',
            'A precise list of step-by-step instructions for a computer to execute',
            'A type of robot that thinks for itself',
            'Anything written in English'
          ],
          correctIndex: 1,
          explanation: 'A program is exact step-by-step instructions. Apps are made FROM programs — but the program itself is the recipe of instructions, not the finished app.'
        },
        challenge: {
          description: 'Warmup: write a function called describe(name, age) that returns a string like "Alice is 25 years old".',
          starter: 'def describe(name, age):\n    # use an f-string to build the result\n    pass',
          tests: [
            { call: 'describe("Alice", 25)', expected: 'Alice is 25 years old' },
            { call: 'describe("Bob", 40)', expected: 'Bob is 40 years old' },
            { call: 'describe("Z", 1)', expected: 'Z is 1 years old' }
          ],
          solution: 'def describe(name, age):\n    return f"{name} is {age} years old"',
          hint: 'Use an f-string: return f"{name} is {age} years old"'
        },
        practice: { question: 'In your own words: what is a program?', hint: 'Think about the recipe analogy.', answer: 'A program is a list of precise, step-by-step instructions written in a programming language. The computer reads them one by one and executes each one.' },
        reflection: 'Have you ever given someone instructions and they followed them too literally? How is that similar to writing code?'
      },
      {
        id: 'l0-1', title: 'What is Python?',
        explanation: ['Python is a programming language created in 1991. It was designed from the start to be readable — almost like English — making it much easier to learn than most other languages.', 'Python is used everywhere in the real world: AI and machine learning (ChatGPT\'s backend uses Python), web development (Instagram is built with Python), data science, automation, and coding interviews like LeetCode.', 'Most importantly for you: Python is the most popular language for technical interviews and competitive programming. Learning Python is a direct investment in your ability to get a job in tech.'],
        code: `# Python is designed to be readable.
# Here is the SAME task in Python vs Java:

# ── Python ───────────────────────────────
name = input("What is your name? ")
print("Hello, " + name)

# ── Java (same thing) ────────────────────
# import java.util.Scanner;
# public class Main {
#     public static void main(String[] args) {
#         Scanner sc = new Scanner(System.in);
#         String name = sc.nextLine();
#         System.out.println("Hello, " + name);
#     }
# }

# Python: 2 lines. Java: 8 lines.`,
        codeCaption: 'Python is far more readable than most other languages',
        mistake: { title: 'Trying to learn multiple languages at once', description: 'Beginners often try Python, JavaScript, and Java simultaneously. This leads to confusion and learning nothing properly. Pick Python and go deep.', bad: '# Week 1: Python\n# Week 2: JavaScript\n# Week 3: Java\n# Result: confused about all three', good: '# Stick with Python until you can solve real problems.\n# One language mastered > three languages half-learned.' },
        practice: { question: 'Name two real-world uses of Python.', hint: 'Think about AI, websites, data science...', answer: 'Python is used for: AI/machine learning, web development, data science, automation, scripting, and coding interviews/LeetCode.' }
      },
      {
        id: 'l0-2', title: 'What is a Program?',
        explanation: ['A program is just a text file. It ends in .py (for Python) and contains your code. There is nothing magical about it — it is a plain text file you can open in any text editor.', 'When you "run" a program, Python opens your file, starts at line 1, and executes each line in order all the way to the end. It goes line by line, no skipping.', 'If there are 100 lines, Python runs line 1, then 2, then 3... all the way to 100. If something goes wrong on line 50, it stops right there.'],
        code: `# save this as: my_program.py
# run it with: python3 my_program.py

print("Line 1 runs first")
print("Line 2 runs second")
print("Line 3 runs third")

# Output:
# Line 1 runs first
# Line 2 runs second
# Line 3 runs third`,
        codeCaption: 'Python reads top to bottom, one line at a time',
        mistake: { title: 'Using a variable before creating it', description: 'Python reads top to bottom. If you try to use a variable before defining it, Python crashes.', bad: 'print(name)    # ERROR — name doesn\'t exist yet\nname = "Alice" # too late', good: 'name = "Alice" # define it first\nprint(name)    # now you can use it' },
        practice: { question: 'What gets printed?\n\nprint("C")\nprint("A")\nprint("B")', hint: 'Top to bottom.', answer: 'C\nA\nB\n\nPython runs each line in order, so C prints first, then A, then B.' }
      },
      {
        id: 'l0-3', title: 'How Code Runs',
        explanation: ['Python is an "interpreted" language. This means Python reads and runs your code directly — one line at a time — without any extra compilation step. You write code, run it, see the result immediately.', 'Each line in your program is one instruction. Python executes the instruction, then moves to the next. If a line produces output, you see it. If a line just stores data, nothing shows on screen.', 'This real-time, line-by-line execution is why Python is great for beginners: you can test small pieces of code instantly and see exactly what they do.'],
        code: `# Watch how Python executes this step by step

print("Step 1")       # shows output immediately

x = 10                # Step 2: stores 10 in x (no output)
y = 20                # Step 3: stores 20 in y (no output)
result = x + y        # Step 4: adds them, stores 30 (no output)

print("Step 5: result is", result)   # shows: Step 5: result is 30

# Only print() lines produce visible output.
# Assignment lines (=) work silently.`,
        codeCaption: 'Only print() produces visible output. Assignment works silently.',
        mistake: { title: 'Expecting results without print()', description: 'Writing x = 5 + 3 stores the result but shows nothing. You need print() to see a value.', bad: 'x = 5 + 3   # no output — just stores 8\nx           # still nothing visible', good: 'x = 5 + 3\nprint(x)    # output: 8' },
        practice: { question: 'What is the output of:\n\na = 10\nb = 5\nprint(a + b)', hint: 'Only the print line produces output.', answer: '15\n\nThe first two lines store values silently. The print line adds them and shows 15.' }
      },
      {
        id: 'l0-4', title: 'What Errors Mean',
        explanation: ['When your code has a problem, Python shows an error message. This is completely normal — even professional engineers with 20 years of experience write errors constantly. The difference is they know how to read and fix them.', 'Error messages always tell you two things: (1) what went wrong, and (2) which line number it happened on. The most important part is the last line of the message — that\'s the actual error.', 'The most common beginner errors are SyntaxError (broke a grammar rule), NameError (used something that doesn\'t exist), and TypeError (wrong type for an operation). You will see all three soon.'],
        code: `# SyntaxError — Python can't understand the line
# print("Hello"    → SyntaxError: '(' was never closed

# NameError — used something that doesn't exist
# print(hello)     → NameError: name 'hello' is not defined
# (forgot quotes — hello is not a variable)

# TypeError — wrong type for an operation
# print("Age: " + 25)
# → TypeError: can only concatenate str (not "int") to str

# How to fix a TypeError:
print("Age: " + str(25))   # convert 25 to string first
# Output: Age: 25`,
        codeCaption: 'The three most common errors beginners encounter',
        mistake: { title: 'Panicking when you see an error', description: 'Don\'t close the file and give up. Read the error message. Find the line number. Errors are your best teacher.', bad: '# Bad reaction:\n# Error appears → panic → close file → give up', good: '# Good reaction:\n# 1. Read the last line of the error\n# 2. Find the line number it mentions\n# 3. Google the error type if needed\n# 4. Fix it and run again' },
        practice: { question: 'What error does this cause and why?\n\nprint("Hello" + 5)', hint: 'What types are "Hello" and 5?', answer: 'TypeError: "Hello" is a string and 5 is an integer. Python cannot add them directly. Fix: print("Hello" + str(5)) — convert 5 to a string first.' }
      }
    ]
  },
  {
    id: 1, slug: 'first-code', title: 'First Python Code',
    subtitle: 'Write and run your very first Python programs',
    color: '#58a6ff',
    lessons: [
      {
        id: 'l1-0', title: 'What is Python Code?',
        explanation: [
          'Python code is plain text written in a precise way. It lives in a file ending in .py, and the Python interpreter reads that file top to bottom and runs each instruction one by one.',
          'Why this matters: every Python program you ever write is built from this single idea — a sequence of small, precise instructions executed in order. Once you can read a few lines, you can read almost any beginner program.',
          'The rules are surprisingly small: spelling matters, capitalization matters, quotes mark text, and indentation matters. Almost every error you will hit at this stage is one of those rules being broken.'
        ],
        analogy: 'Python code is like a strict cooking recipe. Spell ingredients correctly, use exact amounts, follow the steps in order. Skip a step or be vague and the dish is ruined.',
        code: `# A tiny Python program
# - the first two lines are comments (humans only)
# - the next two lines are real instructions

print("This is real code")
print("It runs top to bottom")

# Output:
# This is real code
# It runs top to bottom`,
        codeCaption: 'Python reads the file from the top — comments are skipped, print() shows text',
        stepByStep: [
          '1. Python opens your .py file',
          '2. Reads line 1: a comment — skipped',
          '3. Reads line 2: another comment — skipped',
          '4. Reads line 4: print(...) — shows the text',
          '5. Reads line 5: print(...) — shows the next line',
          '6. End of file — Python stops'
        ],
        mistake: {
          title: 'Treating code like English',
          description: 'Python is precise. "Print", "PRINT", and "print" are all different. Code is closer to math notation than written English — exact spelling and case matter.',
          bad: 'Print("Hi")     # NameError\nPRINT("Hi")     # NameError',
          good: 'print("Hi")     # correct — exactly lowercase'
        },
        practice: {
          question: 'Predict the output:\n\nprint("hello")\nprint("there")',
          hint: 'Python runs each line in order, top to bottom.',
          answer: 'hello\nthere\n\nThe first print runs, then the second on its own line.'
        },
        challenge: {
          description: 'Mini practice: write two print() lines that output "code" then "works".',
          starter: '# two print() statements\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'code\nworks',
          solution: 'print("code")\nprint("works")',
          hint: 'Each line calls print() with the word in quotes.'
        },
        quiz: {
          question: 'Python code is best described as:',
          options: [
            'Free-form English the computer interprets loosely',
            'Strict text instructions read top to bottom by Python',
            'A picture-based programming style',
            'Commands the computer guesses at'
          ],
          correctIndex: 1,
          explanation: 'Python is strict and line-by-line. Each instruction runs in order from the top of the file.'
        },
        reflection: 'Recap: Python code is precise text in a .py file. The interpreter reads it top to bottom. Spelling, quotes, capitalization, and indentation are part of the language.'
      },
      {
        id: 'l1-1', title: 'Hello World',
        explanation: [
          'Hello World is the traditional first program in any language. Its job is simple: confirm everything is working — the language is installed, your file runs, and you can see output.',
          'Why it matters: it is the smallest possible feedback loop. You write one line, run it, and immediately know whether your setup is good. Every learning step after this builds on the same write → run → see-output cycle.',
          'In Python, Hello World is one line. Compare that to languages like Java where the same program needs 8 lines of boilerplate.'
        ],
        analogy: 'Hello World is like saying "1, 2, 3, testing" into a microphone. You are not giving the speech yet — you are confirming the equipment works.',
        code: `# The most famous one-liner in programming
print("Hello, World!")

# You can print anything as your "hello"
print("Hello, Python!")
print("I am learning to code.")
print("Day 1.")`,
        codeCaption: 'A one-line program that confirms Python is working',
        stepByStep: [
          '1. Python sees the word print — recognises it as the print function',
          '2. Sees the parentheses — knows you are calling it',
          '3. Inside: a string in quotes — that is the value to display',
          '4. Python sends that string to the screen',
          '5. Moves to the next line'
        ],
        mistake: {
          title: 'Forgetting one of the quotes',
          description: 'Strings need an opening AND a closing quote. Forgetting one gives a SyntaxError that points to the wrong place — read carefully.',
          bad: 'print("Hello)     # SyntaxError: unterminated string',
          good: 'print("Hello")    # both quotes present'
        },
        practice: {
          question: 'Predict the output:\n\nprint("Hello")\nprint("World")',
          hint: 'Each print() uses its own line.',
          answer: 'Hello\nWorld\n\nTwo print() calls = two lines of output.'
        },
        challenge: {
          description: 'Mini practice: print "Hello, <your name>!" — replace <your name> with your real name.',
          starter: '# one print() statement\nprint("Hello, ___!")\n',
          tests: [],
          runMode: 'output',
          expectedOutput: null,
          solution: 'print("Hello, Alex!")',
          hint: 'Just put your name where the underscores are. The whole thing must stay inside the quotes.'
        },
        quiz: {
          question: 'What is the main point of Hello World?',
          options: [
            'It teaches you advanced syntax',
            'It confirms your setup works and you can run code',
            'It is required by Python',
            'It is the only valid first program'
          ],
          correctIndex: 1,
          explanation: 'Hello World is a setup check, not a language requirement. Any small print() works — the tradition just standardised on this.'
        },
        reflection: 'Recap: print("Hello, World!") is a tiny smoke test. If you see the output, your environment is ready for everything that follows in this course.'
      },
      {
        id: 'l1-2', title: 'print()',
        explanation: [
          'print() is a function — a built-in tool in Python that takes whatever you put inside the parentheses and shows it on the screen.',
          'Why it matters: print() is how you see results. Without it, your program could compute the right answer and you would never know. It is also the simplest debugging tool you have for the rest of your career.',
          'You can pass print() text, numbers, variables, or several values at once separated by commas. Each call automatically adds a new line at the end.'
        ],
        code: `# print() shows text
print("Hello")            # Hello

# print() shows numbers (no quotes)
print(42)                 # 42
print(3.14)               # 3.14

# print() can take multiple values, separated by commas
print("Age", 25)          # Age 25  (Python adds a space)

# Each print() ends with a new line
print("Line A")
print("Line B")
# Output:
# Line A
# Line B

# Empty print() prints just a blank line
print()`,
        codeCaption: 'print() is the universal "show it on screen" tool',
        stepByStep: [
          '1. Python sees print(',
          '2. Evaluates whatever is between the ( and ) (text, number, math, variable...)',
          '3. Joins multiple comma-separated values with a space',
          '4. Writes the result to the screen',
          '5. Adds a newline at the end so the next print() starts on a fresh line'
        ],
        mistake: {
          title: 'Missing the parentheses',
          description: 'print is a function — it must be called with parentheses. Just typing the word without () does nothing in Python 3.',
          bad: 'print "Hello"     # SyntaxError in Python 3',
          good: 'print("Hello")    # correct — call the function'
        },
        practice: {
          question: 'Predict the output:\n\nprint("Score", 7 + 3)',
          hint: 'Python evaluates the math first, then prints both values with a space.',
          answer: 'Score 10\n\n7 + 3 is computed to 10. The comma tells print() to show both values separated by a space.'
        },
        challenge: {
          description: 'Mini practice: use one print() call (with commas) to output "Sum is 25".',
          starter: '# one print() call with commas\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Sum is 25',
          solution: 'print("Sum is", 10 + 15)',
          hint: 'A comma between values inserts a space. The math runs first.'
        },
        quiz: {
          question: 'Why are the parentheses required after print?',
          options: [
            'Python ignores them',
            'They mark the function call and contain the values to print',
            'They are optional in Python 3',
            'They turn the text into a string'
          ],
          correctIndex: 1,
          explanation: 'Functions in Python are called with (). The values inside the parentheses are the arguments — what you want to print.'
        },
        reflection: 'Recap: print(value) shows value on the screen and ends with a newline. It accepts text, numbers, multiple values, or nothing at all.'
      },
      {
        id: 'l1-3', title: 'Strings inside print()',
        explanation: [
          'A string is text wrapped in quotes — either single quotes or double quotes. They both work the same way; pick one and stay consistent.',
          'Why it matters: most of what you print to a user — labels, messages, prompts — is text, and text in Python is always strings. Knowing how to write a string correctly is a daily-use skill.',
          'Inside a string you can put almost anything: letters, numbers, spaces, punctuation, even emoji. The quotes mark where the text starts and ends; everything between is the value.'
        ],
        code: `# Both quote styles work the same
print("double quotes")
print('single quotes')

# Strings can contain numbers and symbols
print("Score: 100 / 100  ⭐")

# Use the OTHER style if you need a quote inside the text
print("It's a great day")    # ' inside ""
print('He said "hi"')         # " inside ''

# An empty string just prints a blank line
print("")`,
        codeCaption: 'Strings are any text between matching quotes',
        stepByStep: [
          '1. Python sees the opening quote — start collecting characters',
          '2. Keeps collecting every character: letters, numbers, spaces, symbols',
          '3. Sees the matching closing quote — stops collecting',
          '4. The collected text becomes the string value passed to print()',
          '5. print() shows the whole string on screen'
        ],
        mistake: {
          title: 'Mixing quote styles',
          description: 'A string must open and close with the same kind of quote. Opening with " and closing with \' is a SyntaxError.',
          bad: 'print("Hello\')      # SyntaxError',
          good: 'print("Hello")      # both double quotes\nprint(\'Hello\')      # both single quotes'
        },
        practice: {
          question: 'Predict the output:\n\nprint("It\'s 5 o\'clock")',
          hint: 'Single quote inside double quotes is fine.',
          answer: "It's 5 o'clock\n\nThe string opens and closes with double quotes, so the apostrophes inside are just regular characters."
        },
        challenge: {
          description: 'Mini practice: print exactly  She said "yes"  on one line.',
          starter: '# one print() statement\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'She said "yes"',
          solution: 'print(\'She said "yes"\')',
          hint: 'You need double quotes inside the string, so wrap the string in single quotes.'
        },
        quiz: {
          question: 'Which of these is a valid Python string?',
          options: [
            'print(Hello)',
            'print("Hello\')',
            'print("Hello")',
            'print(Hello")'
          ],
          correctIndex: 2,
          explanation: 'A string needs matching quotes on both sides. Only "Hello" with two double quotes is valid here.'
        },
        reflection: 'Recap: strings are text in matching quotes. Pick one style and switch only when you need a quote of that style inside.'
      },
      {
        id: 'l1-4', title: 'Comments',
        explanation: [
          'A comment is a note for humans that Python ignores. Anything after a # on a line is a comment — Python jumps right past it.',
          'Why it matters: real code needs to be understood by other people (and your future self). Good comments explain WHY a piece of code exists, not what each line literally does — the code already shows the what.',
          'Comments also let you temporarily disable a line ("comment it out") without deleting it, which is a common debugging move.'
        ],
        code: `# Whole-line comment — Python skips this
print("Hello")          # end-of-line comment — also skipped

# Comment out a line to disable it temporarily
# print("This line is off")
print("This line runs")

# Good comment explains WHY (intent), not WHAT
# Use a set so duplicate IDs are ignored automatically
seen_ids = set()`,
        codeCaption: 'Anything after # on a line is a comment',
        stepByStep: [
          '1. Python reads the line normally until it sees a #',
          '2. From the # onward, the rest of the line is treated as text',
          '3. Python does not run that text — it moves to the next line',
          '4. A line starting with # is entirely a comment',
          '5. A line with code then # has its code run, the # part ignored'
        ],
        mistake: {
          title: 'Commenting out the wrong line by accident',
          description: 'Adding a # in front of a working line silently disables it. If your output suddenly disappears, check for an accidental #.',
          bad: '# print("Hello")    # nothing prints!',
          good: 'print("Hello")     # remove the leading # to re-enable'
        },
        practice: {
          question: 'Predict the output:\n\n# print("A")\nprint("B")\n# print("C")',
          hint: 'Lines that start with # are skipped.',
          answer: 'B\n\nLines 1 and 3 are comments (skipped). Only the middle print() runs.'
        },
        challenge: {
          description: 'Mini practice: in your editor, comment out the second line so only "first" and "third" print.',
          starter: 'print("first")\nprint("second")\nprint("third")\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'first\nthird',
          solution: 'print("first")\n# print("second")\nprint("third")',
          hint: 'Add a # at the start of the middle line.'
        },
        quiz: {
          question: 'What is the best use of comments?',
          options: [
            'Repeat exactly what each line of code does',
            'Explain WHY the code exists or any non-obvious choice',
            'Add filler so the file looks bigger',
            'Replace the code itself'
          ],
          correctIndex: 1,
          explanation: 'The code already shows the WHAT. Good comments add context — intent, constraints, why a particular approach was chosen.'
        },
        reflection: 'Recap: # starts a comment. Python ignores comments. Use them for intent and for temporarily disabling code, not for narrating obvious lines.'
      },
      {
        id: 'l1-5', title: 'Reading Code Line by Line',
        explanation: [
          'Python is an interpreted, top-to-bottom language. The interpreter reads your file line by line, runs each line, and only then moves on. There is no skipping ahead.',
          'Why it matters: most beginner bugs come from misunderstanding the order things happen. If you use a variable before creating it, or print before assigning, the line order is the cause.',
          'You can run Python code from a file (save as something.py and run python3 something.py in a terminal) or in an online editor like replit.com or programiz.com — both run code in the same line-by-line way.'
        ],
        code: `# Watch the order Python reads this:
print("Step 1")          # runs first  → "Step 1"

x = 10                   # runs second → x is now 10  (no output)
y = 20                   # runs third  → y is now 20  (no output)
total = x + y            # runs fourth → total is 30  (no output)

print("Step 5:", total)  # runs fifth  → "Step 5: 30"

# Output:
# Step 1
# Step 5: 30`,
        codeCaption: 'Only print() lines produce output. Assignment lines run silently.',
        stepByStep: [
          '1. Read line 2 → print "Step 1"',
          '2. Read line 4 → store 10 in x (silent)',
          '3. Read line 5 → store 20 in y (silent)',
          '4. Read line 6 → compute x + y, store 30 in total (silent)',
          '5. Read line 8 → print "Step 5: 30"',
          '6. End of file → stop'
        ],
        mistake: {
          title: 'Using a variable before defining it',
          description: 'Python only knows about a variable AFTER the line that creates it. Trying to use it earlier crashes with a NameError.',
          bad: 'print(name)        # NameError — name doesn\'t exist yet\nname = "Alice"',
          good: 'name = "Alice"\nprint(name)        # works'
        },
        practice: {
          question: 'Predict the output:\n\nprint("A")\nx = 5\nprint(x)\nprint("B")',
          hint: 'Run each line top to bottom.',
          answer: 'A\n5\nB\n\nLine 1 prints A. Line 2 stores 5 silently. Line 3 prints x (which is 5). Line 4 prints B.'
        },
        challenge: {
          description: 'Mini practice: write three lines so the program prints  start  then  10  then  end.',
          starter: '# three lines\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'start\n10\nend',
          solution: 'print("start")\nprint(10)\nprint("end")',
          hint: 'Three print() calls in the right order.'
        },
        quiz: {
          question: 'In what order does Python execute the lines of a file?',
          options: [
            'Bottom to top',
            'Top to bottom, one line at a time',
            'In random order',
            'All lines simultaneously'
          ],
          correctIndex: 1,
          explanation: 'Python is sequential: line 1, then line 2, then line 3 — unless control-flow statements (which you have not learned yet) tell it otherwise.'
        },
        reflection: 'Recap: line order is execution order. Save your file as .py, run it (locally or online), and Python reads it once from top to bottom.'
      },
      {
        id: 'l1-6', title: 'Common First-Code Mistakes',
        explanation: [
          'Most early bugs come from a small set of mistakes. Knowing the list saves you hours.',
          'Why it matters: every Python programmer has hit these. They are not signs that you are bad at coding — they are signs you are coding. The faster you can recognise them, the faster you fix them.',
          'The big five: misspelling print, forgetting quotes around text, missing a closing parenthesis, mismatched quote styles, and inconsistent indentation.'
        ],
        code: `# 1. Misspelling print  →  NameError
# Print("Hi")
# primt("Hi")

# 2. Missing quotes  →  NameError
# print(Hello)

# 3. Missing closing paren  →  SyntaxError
# print("Hello"

# 4. Mismatched quotes  →  SyntaxError
# print("Hello')

# 5. Wrong indentation (a leading space)  →  IndentationError
#  print("Hello")

# All correct:
print("Hello")
print('Hello')
print("It's fine to have ' inside double quotes")`,
        codeCaption: 'The five most common syntax mistakes — recognise them on sight',
        stepByStep: [
          '1. Read the LAST line of the error — that is the actual problem',
          '2. Find the line number it mentions',
          '3. Identify which of the big five mistakes it matches',
          '4. Fix that one specific thing',
          '5. Run again — repeat until clean'
        ],
        mistake: {
          title: 'Giving up after the first error',
          description: 'An error is a clue, not a verdict. Read it, fix the line it points to, and run again. That loop is how every programmer works.',
          bad: '# see error → close editor → quit',
          good: '# see error → read last line → fix the specific issue → re-run'
        },
        practice: {
          question: 'Find ALL the bugs:\n\nPrint("hello")\nprint(world)\nprint("bye"',
          hint: 'Check capitalization, quotes, parentheses.',
          answer: 'print("hello")    # Print → print\nprint("world")    # missing quotes around world\nprint("bye")      # missing closing parenthesis'
        },
        challenge: {
          description: 'Mini practice: fix the broken code so it prints  ok.',
          starter: 'Print("ok"\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'ok',
          solution: 'print("ok")',
          hint: 'Two fixes: capitalization of Print, and a missing closing parenthesis.'
        },
        quiz: {
          question: 'You see  NameError: name \'Hello\' is not defined.  What is the most likely cause?',
          options: [
            'Python is broken',
            'You wrote Hello without quotes, so Python thinks it is a variable name',
            'The file is saved wrong',
            'You need to restart your computer'
          ],
          correctIndex: 1,
          explanation: 'NameError almost always means you used a name Python does not know about — usually because you forgot quotes around what should be text.'
        },
        reflection: 'Recap: most errors are one of five common mistakes. Read the last line of the error, find the line number, fix the specific issue, re-run.'
      },
      {
        id: 'l1-7', title: 'Level 1 Checkpoint',
        explanation: [
          'You have written real Python code, used print(), worked with strings, added comments, and learned to read errors. This checkpoint is a quick consolidation before moving on to variables.',
          'Why it matters: spaced reviews are how you retain skills. Re-running the basics here will save you confusion later when ideas stack on top of each other.',
          'Below: a small program that uses everything from this level. Read it, predict the output, then try the practice and quiz.'
        ],
        code: `# Putting Level 1 together
# A 4-line program with one comment, prints, and a number

# Greet the user, then show a tiny computation
print("Welcome to Python")
print("2 + 3 =", 2 + 3)
print("Done")

# Output:
# Welcome to Python
# 2 + 3 = 5
# Done`,
        codeCaption: 'Everything from Level 1 in 4 lines: comment, three prints, a string, a number, a math expression',
        stepByStep: [
          '1. Line 1 → comment, skipped',
          '2. Line 2 → comment, skipped',
          '3. Line 5 → print "Welcome to Python"',
          '4. Line 6 → compute 2 + 3 = 5, then print "2 + 3 = 5"',
          '5. Line 7 → print "Done"'
        ],
        mistake: {
          title: 'Skipping practice and moving on',
          description: 'Reading is not learning. Run the example, change a value, break it, fix it. That is what builds intuition.',
          bad: '# read code → keep scrolling',
          good: '# read code → type it → run it → tweak it → run again'
        },
        practice: {
          question: 'Predict the output:\n\nprint("a")\n# print("b")\nprint("c", 1 + 1)',
          hint: 'Comments are skipped. The comma adds a space.',
          answer: 'a\nc 2\n\nLine 2 is a comment so it is skipped. Line 3 prints "c" and the value of 1 + 1 separated by a space.'
        },
        challenge: {
          description: 'Mini practice: write a program that prints  Hi  on one line and  10 + 5 = 15  on the next, using a comma in the second print().',
          starter: '# two print() calls\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Hi\n10 + 5 = 15',
          solution: 'print("Hi")\nprint("10 + 5 =", 10 + 5)',
          hint: 'Use a string AND the math expression separated by a comma in the second print().'
        },
        quiz: {
          question: 'Which statement about Level 1 is TRUE?',
          options: [
            'print() can only print strings',
            'Comments start with // in Python',
            'Python reads code line by line and runs each line in order',
            'Capitalization of print does not matter'
          ],
          correctIndex: 2,
          explanation: 'Python is line-by-line and case-sensitive. Comments use #, not //, and print() handles strings, numbers, variables, and combinations.'
        },
        reflection: 'Recap of Level 1: code is precise text in a .py file, print() shows output, strings are text in matching quotes, # marks comments, code runs top to bottom, and most errors are one of five common mistakes. You are ready for Level 2: variables.'
      }
    ]
  },
  {
    id: 2, slug: 'variables', title: 'Variables and Data',
    subtitle: 'Store and work with information in your programs',
    color: '#3fb950',
    lessons: [
      {
        id: 'l2-0', title: 'What is a Variable?',
        explanation: [
          'A variable is a named container for a value. You give it a name on the left of an = sign and put a value on the right. From that line onward, the name refers to the value.',
          'Why it matters: variables are how programs remember things. Without them, every value would be a one-shot literal you could never reuse. With them, you can compute, label, and pass data around.',
          'A variable in Python does not have a fixed type — it just points at whatever value you assigned most recently. Reassigning the same name with a new value is normal and expected.'
        ],
        analogy: 'A variable is a labeled box. The label is the name (age), the box holds the value (25). You can open the box, change what is inside, and refer to it later by its label.'
      },
      {
        id: 'l2-1', title: 'Creating Variables',
        explanation: [
          'You create a variable by writing  name = value. Python sees the =, makes a new container called name, and stores the value inside it.',
          'Why it matters: this is the single most common line in any program. Almost everything else — math, conditions, loops — operates on variables you have created.',
          'There is no special keyword (no var, let, or const). Just pick a name, use =, and the variable exists from that line onward.'
        ],
        code: `# Create three variables
name = "Alice"
age = 25
is_student = True

# Use them anywhere below
print(name)         # Alice
print(age)          # 25
print(is_student)   # True`,
        codeCaption: 'Creation is just  name = value. No keywords needed.',
        stepByStep: [
          '1. Python reads the left side: a new name (or an existing one)',
          '2. Reads the = sign as "assign"',
          '3. Evaluates the value on the right',
          '4. Stores that value under the given name',
          '5. The name can now be used in any line below'
        ],
        mistake: {
          title: 'Putting the value on the wrong side',
          description: 'In Python the variable name goes on the LEFT of =, the value on the RIGHT. Reversing them is a SyntaxError.',
          bad: '25 = age           # SyntaxError',
          good: 'age = 25           # correct'
        },
        practice: {
          question: 'Predict the output:\n\ncolor = "blue"\nprint(color)',
          hint: 'Read the lines top to bottom.',
          answer: 'blue\n\nLine 1 stores "blue" in color. Line 2 prints whatever color points to.'
        },
        challenge: {
          description: 'Mini practice: create a variable city set to "Paris" and print it.',
          starter: '# create the variable, then print it\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Paris',
          solution: 'city = "Paris"\nprint(city)',
          hint: 'Two lines: an assignment, then a print of the variable.'
        },
        quiz: {
          question: 'Which line correctly creates a variable named score with value 10?',
          options: [
            '10 = score',
            'score == 10',
            'score = 10',
            'let score = 10'
          ],
          correctIndex: 2,
          explanation: 'Python uses  name = value. There is no let/var keyword, and == is for comparing, not assigning.'
        },
        reflection: 'Recap: name = value creates a variable. Python figures out the type. The variable exists from that line onward.'
      },
      {
        id: 'l2-2', title: 'Variable Names',
        explanation: [
          'Variable names follow a few small rules: start with a letter or underscore, then any mix of letters, digits, or underscores. No spaces. No leading digits. Case matters: age and Age are two different variables.',
          'Why it matters: clear names are documentation. user_score tells the next reader what the value means; x does not. The Python convention is snake_case — lowercase words separated by underscores.',
          'A handful of names (called keywords) are reserved by the language and cannot be used as variable names — for, if, while, class, return, etc.'
        ],
        code: `# Good names: descriptive, snake_case
user_age = 25
total_score = 100
is_logged_in = True

# Legal but unhelpful — what does x mean?
x = 25

# Illegal:
# 1name = "x"      # cannot start with a digit
# user-age = 25    # hyphens are subtraction, not part of names
# class = "math"   # class is a reserved keyword

# Case-sensitive — these are TWO variables
age = 25
Age = 30
print(age, Age)   # 25 30`,
        codeCaption: 'Names should be readable, lowercase, and follow snake_case',
        stepByStep: [
          '1. First character must be a letter or _',
          '2. Remaining characters can be letters, digits, or _',
          '3. No spaces, no hyphens, no special symbols',
          '4. Cannot match a Python keyword (for, if, class, return...)',
          '5. Convention: snake_case for normal variables'
        ],
        mistake: {
          title: 'Using single-letter names everywhere',
          description: 'x and y might be fine in tiny math expressions but are awful for real values like a person\'s age. Future you will hate past you.',
          bad: 'x = 25\ny = "Alice"\nz = True',
          good: 'age = 25\nname = "Alice"\nis_active = True'
        },
        practice: {
          question: 'Which of these names is INVALID?\n\na) user_age\nb) 2nd_place\nc) total_score\nd) _hidden',
          hint: 'Names cannot start with a digit.',
          answer: 'b) 2nd_place is invalid — it starts with a digit. The other three are fine.'
        },
        challenge: {
          description: 'Mini practice: rename these variables to good snake_case names and print one.',
          starter: '# rename x and Y to descriptive names, then print one\nx = 100\nY = "gold"\n',
          tests: [],
          runMode: 'output',
          expectedOutput: null,
          solution: 'score = 100\nmedal = "gold"\nprint(score)',
          hint: 'snake_case, lowercase, descriptive (e.g. score, medal).'
        },
        quiz: {
          question: 'Which of these is the BEST variable name for a user\'s email address?',
          options: [
            'e',
            'EmailAddress',
            'user_email',
            'class'
          ],
          correctIndex: 2,
          explanation: 'snake_case + descriptive = user_email. EmailAddress uses the wrong style; e is too short; class is a reserved keyword.'
        },
        reflection: 'Recap: names start with letter/underscore, no spaces, no keywords, case-sensitive, snake_case by convention. Clear names are free documentation.'
      },
      {
        id: 'l2-3', title: 'Reassigning Variables',
        explanation: [
          'Reassigning a variable means giving it a new value with another  name = value  line. Python overwrites whatever was there before.',
          'Why it matters: programs are about change over time. Counters, scores, totals, and current state all rely on overwriting old values.',
          'You can also reassign to a value computed from the old value — score = score + 10 reads "take the current score, add 10, store it back into score".'
        ],
        code: `# First assignment
score = 0
print(score)         # 0

# Reassign — old value is gone
score = 100
print(score)         # 100

# Update based on the old value
score = score + 50
print(score)         # 150

# Shorthand for the same thing
score += 25
print(score)         # 175

# A variable can switch types too — Python does not mind
data = 42
print(data)          # 42 (int)
data = "forty-two"
print(data)          # forty-two (str)`,
        codeCaption: 'Reassignment overwrites the old value. += is shorthand for "add and store".',
        stepByStep: [
          '1. Read the line  name = expression',
          '2. Evaluate the expression on the right (which may use the old value)',
          '3. Discard whatever name pointed to before',
          '4. Point name at the new value',
          '5. From the next line on, name has the new value'
        ],
        mistake: {
          title: 'Confusing = with ==',
          description: '= stores a value. == checks equality. Mixing them is a top-3 beginner bug.',
          bad: 'if age = 18:        # SyntaxError',
          good: 'age = 18            # assign\nif age == 18:       # compare'
        },
        practice: {
          question: 'Predict the output:\n\nx = 5\nx = x + 3\nx += 2\nprint(x)',
          hint: 'Update x step by step.',
          answer: '10\n\nStart 5 → x = 5+3 = 8 → x += 2 makes 10. Final value is 10.'
        },
        challenge: {
          description: 'Mini practice: start total at 0, add 10, then double it. Print the final value.',
          starter: 'total = 0\n# add 10\n# double it\nprint(total)\n',
          tests: [],
          runMode: 'output',
          expectedOutput: '20',
          solution: 'total = 0\ntotal += 10\ntotal = total * 2\nprint(total)',
          hint: 'Two reassignments before the print.'
        },
        quiz: {
          question: 'After  count = 5; count = count + 1  what is count?',
          options: ['5', '6', '15', 'undefined'],
          correctIndex: 1,
          explanation: 'count + 1 evaluates to 6 using the current value (5), and then 6 is stored back into count.'
        },
        reflection: 'Recap: reassignment overwrites. count = count + 1 and count += 1 are the same operation. Python does not care if the type changes.'
      },
      {
        id: 'l2-4', title: 'Strings',
        explanation: [
          'A string is text in matching quotes. You already used strings inside print(); now you will store them in variables and use them.',
          'Why it matters: most data a user sees or types — names, messages, paths, choices — is text. Strings are the most-used type in everyday Python.',
          'Useful operations: len(s) gives the number of characters, + joins two strings together (concatenation), and == compares them character by character.'
        ],
        code: `greeting = "Hello"
name = 'Alice'

# Length
print(len(greeting))         # 5
print(len(name))             # 5

# Concatenation with +
full = greeting + ", " + name
print(full)                  # Hello, Alice

# Comparison is case-sensitive
print("hi" == "Hi")          # False
print("hi" == "hi")          # True

# Quotes inside strings — use the other style or escape
quote = "She said \\"yes\\""
print(quote)                 # She said "yes"`,
        codeCaption: 'Strings: text in quotes, len() for size, + to join, == to compare',
        stepByStep: [
          '1. Wrap text in matching quotes to create a string literal',
          '2. Assign it to a variable to reuse',
          '3. len(s) returns how many characters s has',
          '4. s1 + s2 produces a new string by joining',
          '5. s1 == s2 returns True only if every character matches'
        ],
        mistake: {
          title: 'Joining a string and a number with +',
          description: 'You cannot use + between a string and a number. Convert the number with str() first, or use commas in print().',
          bad: 'print("Age: " + 25)             # TypeError',
          good: 'print("Age: " + str(25))        # convert first\nprint("Age:", 25)              # or use a comma'
        },
        practice: {
          question: 'Predict the output:\n\na = "py"\nb = "thon"\nprint(a + b, len(a + b))',
          hint: 'Join first, then count.',
          answer: 'python 6\n\n"py" + "thon" → "python", which has 6 characters.'
        },
        challenge: {
          description: 'Mini practice: combine first = "Ada" and last = "Lovelace" with a space between, store in full_name, and print it.',
          starter: 'first = "Ada"\nlast = "Lovelace"\n# build full_name and print\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Ada Lovelace',
          solution: 'first = "Ada"\nlast = "Lovelace"\nfull_name = first + " " + last\nprint(full_name)',
          hint: 'Concatenate three pieces: first + " " + last.'
        },
        quiz: {
          question: 'What is len("hello")?',
          options: ['4', '5', '6', 'It depends on the variable'],
          correctIndex: 1,
          explanation: 'len() counts characters: h, e, l, l, o → 5.'
        },
        reflection: 'Recap: strings live in matching quotes. Use len() for size, + to join, == to compare. Convert numbers to strings before joining with +.'
      },
      {
        id: 'l2-5', title: 'Integers',
        explanation: [
          'An integer (int) is a whole number — positive, negative, or zero. No decimal point. Examples: 5, -3, 0, 1000, 999999999.',
          'Why it matters: integers are how programs count, index, and measure discrete things — number of users, lives in a game, items in a list, days in a month.',
          'You can do all the usual math: + - * /, plus // (integer division — drops the decimal) and % (remainder). The result of / is always a float in Python 3.'
        ],
        code: `lives = 3
score = 1500
temperature = -10

# Standard math
print(10 + 3)        # 13
print(10 - 3)        # 7
print(10 * 3)        # 30

# Division: / is float, // drops the decimal
print(10 / 3)        # 3.3333333333333335   (float)
print(10 // 3)       # 3                    (int)
print(10 % 3)        # 1                    (remainder)
print(2 ** 8)        # 256                  (2 to the 8th)`,
        codeCaption: 'Integers are whole numbers. // is integer division, % is remainder, ** is power.',
        stepByStep: [
          '1. Write a whole number with no decimal point — that is an int',
          '2. + - * work as in normal math',
          '3. / always returns a float, even when the answer is whole',
          '4. // returns an int by chopping off the decimal',
          '5. % gives the remainder of the integer division'
        ],
        mistake: {
          title: 'Mixing up / and //',
          description: 'In Python 3, 10 / 2 is 5.0 (float), not 5. If you need an integer result, use // — but be aware it discards the fractional part.',
          bad: 'page = 10 / 2        # 5.0  — a float',
          good: 'page = 10 // 2       # 5    — an int'
        },
        practice: {
          question: 'Predict the output:\n\nprint(17 // 5)\nprint(17 % 5)',
          hint: '17 = 5 × 3 + 2.',
          answer: '3\n2\n\n17 // 5 is 3 (how many full 5s fit). 17 % 5 is 2 (what is left over).'
        },
        challenge: {
          description: 'Mini practice: store 100 and 7 in two variables and print quotient (//) and remainder (%).',
          starter: 'a = 100\nb = 7\n# print quotient and remainder on two lines\n',
          tests: [],
          runMode: 'output',
          expectedOutput: '14\n2',
          solution: 'a = 100\nb = 7\nprint(a // b)\nprint(a % b)',
          hint: 'Two prints, one with //, one with %.'
        },
        quiz: {
          question: 'What is the type of  10 / 2  in Python 3?',
          options: ['int', 'float', 'str', 'bool'],
          correctIndex: 1,
          explanation: '/ always returns a float in Python 3. To get an int, use // (which would give 5).'
        },
        reflection: 'Recap: integers are whole numbers. + - * work as expected, / is float, // is int division, % is remainder, ** is power.'
      },
      {
        id: 'l2-6', title: 'Floats',
        explanation: [
          'A float is a number with a decimal point: 3.14, -0.5, 2.0, 1e6 (which is 1,000,000.0). Use floats whenever a value can be fractional — money, measurements, ratios.',
          'Why it matters: real-world quantities almost always involve fractions. The moment you compute a percentage or an average, you usually have a float.',
          'A subtle gotcha: 0.1 + 0.2 in Python prints 0.30000000000000004. Floats are stored in binary and a few decimal numbers cannot be represented exactly. For money, prefer rounding or a dedicated decimal library.'
        ],
        code: `pi = 3.14159
price = 9.99
zero_point_zero = 0.0

# Basic math works with floats too
print(2.5 + 0.5)      # 3.0
print(7.5 / 2)        # 3.75

# Mixing int and float yields a float
print(3 + 0.5)        # 3.5

# The classic float surprise
print(0.1 + 0.2)      # 0.30000000000000004

# Round to fix display
print(round(0.1 + 0.2, 2))   # 0.3`,
        codeCaption: 'Floats handle fractions. Be aware they can have tiny precision quirks.',
        stepByStep: [
          '1. Any number with a decimal point is a float',
          '2. Mixing int and float in math gives a float result',
          '3. The arithmetic operators work the same as for ints',
          '4. round(value, n) rounds to n decimal places',
          '5. Tiny binary-precision errors are normal — round when displaying'
        ],
        mistake: {
          title: 'Comparing floats with ==',
          description: '0.1 + 0.2 == 0.3 is False because of float precision. Compare with a small tolerance instead, or use round().',
          bad: 'print(0.1 + 0.2 == 0.3)        # False',
          good: 'print(round(0.1 + 0.2, 2) == 0.3)   # True'
        },
        practice: {
          question: 'Predict the output:\n\nprint(2 + 0.5)\nprint(round(3.14159, 2))',
          hint: 'int + float → float. round(x, 2) keeps two decimals.',
          answer: '2.5\n3.14\n\nMixing 2 (int) with 0.5 (float) gives 2.5. round(3.14159, 2) gives 3.14.'
        },
        challenge: {
          description: 'Mini practice: compute the average of 4, 7, and 10. Print the result rounded to one decimal.',
          starter: '# average and round\n',
          tests: [],
          runMode: 'output',
          expectedOutput: '7.0',
          solution: 'avg = (4 + 7 + 10) / 3\nprint(round(avg, 1))',
          hint: 'Sum, divide, then round(value, 1).'
        },
        quiz: {
          question: 'What is the type of 3.0?',
          options: ['int', 'float', 'str', 'bool'],
          correctIndex: 1,
          explanation: 'Any number written with a decimal point is a float — even if its fractional part is zero.'
        },
        reflection: 'Recap: floats are decimals. Mixing int and float gives a float. Beware tiny precision errors; use round() when comparing or displaying.'
      },
      {
        id: 'l2-7', title: 'Booleans',
        explanation: [
          'A boolean (bool) has only two possible values: True and False. The capital T and F matter — true and false are not booleans in Python.',
          'Why it matters: every yes/no decision in your code is a boolean. if, while, and any condition ultimately reduces to True or False.',
          'Comparisons produce booleans automatically: 5 > 3 is True, 5 == 4 is False. You can also store booleans directly: is_logged_in = True.'
        ],
        code: `is_open = True
is_admin = False

print(is_open)        # True
print(is_admin)       # False

# Comparisons return booleans
print(5 > 3)          # True
print(5 > 10)         # False
print(5 == 5)         # True
print(5 != 5)         # False

# Combine with and / or / not
print(True and False)   # False
print(True or False)    # True
print(not True)         # False`,
        codeCaption: 'Booleans drive every decision: True or False, nothing else.',
        stepByStep: [
          '1. Bool literals are True and False (capitalised)',
          '2. Comparison operators (>, <, ==, !=, >=, <=) return booleans',
          '3. and is True only if both sides are True',
          '4. or is True if at least one side is True',
          '5. not flips True to False and vice versa'
        ],
        mistake: {
          title: 'Lowercase true/false',
          description: 'Python booleans must be capitalised. true is interpreted as a variable name, not a boolean — and Python crashes if no such variable exists.',
          bad: 'is_done = true        # NameError',
          good: 'is_done = True        # capital T'
        },
        practice: {
          question: 'Predict the output:\n\nprint(10 == 10)\nprint(10 > 20)\nprint(not False)',
          hint: 'Evaluate each comparison.',
          answer: 'True\nFalse\nTrue\n\n10 equals 10 → True. 10 is not greater than 20 → False. not False → True.'
        },
        challenge: {
          description: 'Mini practice: store age = 20, then print whether age is between 18 and 65 inclusive.',
          starter: 'age = 20\n# print True if 18 <= age <= 65 else False\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'True',
          solution: 'age = 20\nprint(18 <= age <= 65)',
          hint: 'Python supports chained comparisons: 18 <= age <= 65.'
        },
        quiz: {
          question: 'Which expression evaluates to False?',
          options: [
            '5 > 3',
            '5 == 5',
            '5 != 5',
            'not False'
          ],
          correctIndex: 2,
          explanation: '5 != 5 reads "5 is not equal to 5", which is False.'
        },
        reflection: 'Recap: booleans are True or False. Comparisons produce booleans. and/or/not combine them. Use them as the foundation of every decision.'
      },
      {
        id: 'l2-8', title: 'Using type()',
        explanation: [
          'type(value) is a built-in function that tells you what kind of data a value is. It returns the type — str, int, float, or bool for the basic types you have seen.',
          'Why it matters: most TypeError bugs come from a value being a different type than you expected. type() is the fastest way to check what Python actually thinks something is.',
          'You can also convert between types: int("42") makes the integer 42 from the string "42"; str(100) makes "100" from the int; float("3.14") makes 3.14 from the string.'
        ],
        code: `print(type("hello"))      # <class 'str'>
print(type(42))           # <class 'int'>
print(type(3.14))         # <class 'float'>
print(type(True))         # <class 'bool'>

# Convert between types
n = int("42")             # "42" -> 42
s = str(100)              # 100 -> "100"
f = float("3.14")         # "3.14" -> 3.14

print(type(n), type(s), type(f))
# <class 'int'> <class 'str'> <class 'float'>

# Common gotcha: numbers in quotes are strings
maybe_num = "5"
print(type(maybe_num))    # <class 'str'>
print(int(maybe_num) + 1) # 6  (now an int)`,
        codeCaption: 'type() reveals what something is. int(), str(), float() convert between types.',
        stepByStep: [
          '1. Pass any value to type() to see its type',
          '2. The result looks like  <class \'str\'>',
          '3. int(x) converts to integer (where possible)',
          '4. str(x) converts to string',
          '5. float(x) converts to float'
        ],
        mistake: {
          title: 'Forgetting input() returns a string',
          description: 'Even if the user types digits, input() gives you a string. You must convert before doing math.',
          bad: 'age = input("Age: ")\nprint(age + 1)        # TypeError',
          good: 'age = int(input("Age: "))\nprint(age + 1)        # works'
        },
        practice: {
          question: 'Predict the output:\n\nprint(type("5"))\nprint(type(5))\nprint(type(5.0))',
          hint: 'Quotes mean string. Decimal point means float.',
          answer: "<class 'str'>\n<class 'int'>\n<class 'float'>\n\nQuotes around 5 make it a string. 5 alone is an int. 5.0 has a decimal point so it is a float."
        },
        challenge: {
          description: 'Mini practice: a value comes in as the string "20". Convert it to an int, add 5, and print the result.',
          starter: 'value = "20"\n# convert and add\n',
          tests: [],
          runMode: 'output',
          expectedOutput: '25',
          solution: 'value = "20"\nprint(int(value) + 5)',
          hint: 'Wrap value with int(), then add 5.'
        },
        quiz: {
          question: 'What is type("3") in Python?',
          options: [
            "<class 'int'>",
            "<class 'float'>",
            "<class 'str'>",
            "<class 'bool'>"
          ],
          correctIndex: 2,
          explanation: 'The quotes make it a string, even though the character inside is a digit.'
        },
        reflection: 'Recap: type() checks. int(), str(), float() convert. Anything from input() starts as a string.'
      },
      {
        id: 'l2-9', title: 'Assigning Multiple Values',
        explanation: [
          'Python lets you assign several variables at once on a single line. This is called multiple (or tuple) assignment, and it is a clean shortcut.',
          'Why it matters: you will use it a lot for swapping, unpacking pairs, and grabbing two return values from a function. It is also more readable than three separate lines for related values.',
          'You can also assign the same value to several names at once: a = b = c = 0 sets all three to 0 in a single line.'
        ],
        code: `# Assign three names to three values in one line
x, y, z = 1, 2, 3
print(x, y, z)             # 1 2 3

# Same value to several names
a = b = c = 0
print(a, b, c)             # 0 0 0

# Classic Python swap — no temp variable needed
left, right = "L", "R"
left, right = right, left
print(left, right)         # R L

# Number of names must match the number of values
# x, y = 1, 2, 3           # ValueError: too many values to unpack`,
        codeCaption: 'Multiple assignment: many names, many values, one line — and a clean swap.',
        stepByStep: [
          '1. Comma-separated names on the left, comma-separated values on the right',
          '2. Python evaluates ALL the values first',
          '3. Then assigns them in order to the names',
          '4. Counts must match (3 names = 3 values)',
          '5. Same value to many names: chain with = ('  + 'a = b = c = 0)'
        ],
        mistake: {
          title: 'Mismatched count',
          description: 'If the number of names does not match the number of values, Python raises a ValueError. Both sides must line up.',
          bad: 'x, y = 1, 2, 3        # ValueError: too many values',
          good: 'x, y, z = 1, 2, 3     # counts match'
        },
        practice: {
          question: 'Predict the output:\n\na, b = 10, 20\na, b = b, a\nprint(a, b)',
          hint: 'The right side is evaluated first.',
          answer: '20 10\n\nThe right side captures the current (10, 20) as a pair, then unpacks it into (a, b) reversed — so a becomes 20 and b becomes 10.'
        },
        challenge: {
          description: 'Mini practice: in one line, assign first=1, second=2, third=3. Print them on one line separated by spaces.',
          starter: '# one assignment, one print\n',
          tests: [],
          runMode: 'output',
          expectedOutput: '1 2 3',
          solution: 'first, second, third = 1, 2, 3\nprint(first, second, third)',
          hint: 'Three names, three values, separated by commas.'
        },
        quiz: {
          question: 'What does  x, y = 5, 10  do?',
          options: [
            'Sets x to 10 and y to 5',
            'Sets both x and y to 5',
            'Sets x to 5 and y to 10',
            'Raises an error'
          ],
          correctIndex: 2,
          explanation: 'Multiple assignment pairs them in order: first name with first value, second with second.'
        },
        reflection: 'Recap: multiple assignment lets you set several variables in one line. Counts must match. Use it for swaps and clean unpacking.'
      },
      {
        id: 'l2-10', title: 'Outputting Variables',
        explanation: [
          'You already know print() — now you will use it with variables. The pattern is the same: pass the variable, optionally with text, and Python shows the current value.',
          'Why it matters: programs that only print fixed text are not very useful. Real programs build messages from variables — "Welcome, " + name, or "Score:", score.',
          'You have three main options: pass the variable directly, join with + for strings, or use an f-string (a string with f in front and {variable} placeholders) — the most readable option once you have it.'
        ],
        code: `name = "Alice"
score = 95

# Option A: pass values separated by commas (auto-spaced)
print("Hello,", name)              # Hello, Alice
print("Score:", score)             # Score: 95

# Option B: + concatenation (strings only — convert numbers!)
print("Hello, " + name)            # Hello, Alice
print("Score: " + str(score))      # Score: 95

# Option C: f-string (best for readability)
print(f"Hello, {name}")            # Hello, Alice
print(f"{name} scored {score}")    # Alice scored 95

# f-strings can include expressions
print(f"Next: {score + 1}")        # Next: 96`,
        codeCaption: 'Three ways to output variables — f-strings are the cleanest.',
        stepByStep: [
          '1. Comma form: print("label", variable) — Python auto-inserts a space',
          '2. + form: works only with strings; convert numbers via str()',
          '3. f-string form: prefix the string with f and put {variable} where you want the value',
          '4. f-strings can also evaluate small expressions inside braces',
          '5. f-strings are usually the most readable for mixed text + variables'
        ],
        mistake: {
          title: 'Forgetting the f on f-strings',
          description: 'Without the leading f, the braces are just text. The variable is not substituted.',
          bad: 'print("Hello, {name}")        # prints literally: Hello, {name}',
          good: 'print(f"Hello, {name}")       # prints: Hello, Alice'
        },
        practice: {
          question: 'Predict the output:\n\nname = "Sam"\nage = 30\nprint(f"{name} is {age}")',
          hint: 'f-strings substitute {variable} with its value.',
          answer: 'Sam is 30\n\nThe f-string fills in name and age, joined by the literal text " is ".'
        },
        challenge: {
          description: 'Mini practice: given title="Python" and year=1991, print  Python was created in 1991  using an f-string.',
          starter: 'title = "Python"\nyear = 1991\n# one print() with an f-string\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Python was created in 1991',
          solution: 'title = "Python"\nyear = 1991\nprint(f"{title} was created in {year}")',
          hint: 'Wrap the message with f"..." and put {title} and {year} in the right spots.'
        },
        quiz: {
          question: 'Which line correctly outputs  Hi Alice  given name = "Alice"?',
          options: [
            'print("Hi {name}")',
            'print(f"Hi {name}")',
            'print("Hi" + name)',
            'print(Hi, name)'
          ],
          correctIndex: 1,
          explanation: 'The f prefix is required for {name} to be substituted. Option C would print "HiAlice" with no space.'
        },
        reflection: 'Recap: print(var), print("text", var), print("text " + str(var)), or print(f"text {var}"). f-strings are the modern, readable choice.'
      },
      {
        id: 'l2-11', title: 'Variables Checkpoint',
        explanation: [
          'You can now create variables, name them well, reassign them, store strings/ints/floats/bools, check types, assign multiple values, and print them in several styles. This checkpoint is a quick consolidation before Level 3 (operations).',
          'Why it matters: variables are the foundation of every program. Solid intuition here makes everything that follows — conditions, loops, functions — much easier.',
          'Below: a small program that uses everything. Read it, predict the output, then try the practice and the quiz.'
        ],
        code: `# Putting Level 2 together
name = "Ada"
year_born = 1815
is_pioneer = True

print(type(name), type(year_born), type(is_pioneer))
# <class 'str'> <class 'int'> <class 'bool'>

age_at_death = 1852 - year_born          # int math
print(f"{name} lived {age_at_death} years")
# Ada lived 37 years

# Reassign and reprint
year_born = 1900
print(f"After update: {name}, {year_born}, pioneer? {is_pioneer}")
# After update: Ada, 1900, pioneer? True`,
        codeCaption: 'Everything from Level 2: assignment, types, math, reassignment, and f-strings',
        stepByStep: [
          '1. Three variables created: a string, an int, a bool',
          '2. type() shows each one\'s type',
          '3. age_at_death is computed from an int math expression',
          '4. f-string interpolates name and the computed age',
          '5. year_born is reassigned and the new value is shown'
        ],
        mistake: {
          title: 'Reading without running',
          description: 'Predict the output BEFORE you run the code, then run it and check. That gap between prediction and reality is where learning happens.',
          bad: '# scroll past the code',
          good: '# guess the output → run → compare → understand any difference'
        },
        practice: {
          question: 'Predict the output:\n\nx = 4\ny = 1.5\nprint(type(x + y), x + y)',
          hint: 'int + float gives a float.',
          answer: "<class 'float'> 5.5\n\nMixing int and float yields a float, so x + y is 5.5 of type float."
        },
        challenge: {
          description: 'Mini practice: build a one-line introduction. Given name="Lin" and city="Tokyo", print  Lin is from Tokyo  using an f-string.',
          starter: 'name = "Lin"\ncity = "Tokyo"\n# one print()\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Lin is from Tokyo',
          solution: 'name = "Lin"\ncity = "Tokyo"\nprint(f"{name} is from {city}")',
          hint: 'Use an f-string with two placeholders.'
        },
        quiz: {
          question: 'Which of these is TRUE about Python variables?',
          options: [
            'You must declare a type with int, str, etc.',
            'A variable name can start with a digit',
            'Reassigning is allowed and can change the type',
            '== is used to assign values'
          ],
          correctIndex: 2,
          explanation: 'Python is dynamically typed: a variable can be reassigned to a different type at any time. = is assign, == is compare.',
        },
        reflection: 'Recap of Level 2: variables hold values you can reuse and update. Names follow snake_case, values can be strings, ints, floats, or booleans, and you have several clean ways to output them. Onward to operations.'
      }
    ]
  },
  {
    id: 3, slug: 'operations', title: 'Basic Operations',
    subtitle: 'Do math, join text, and compare values',
    color: '#f0883e',
    lessons: [
      {
        id: 'l3-0', title: 'Math Operators',
        explanation: ['Python supports all the math you would expect: addition, subtraction, multiplication, and division. Plus a few extra ones that show up constantly in programming: // (integer division), % (remainder/modulo), and ** (exponent/power).', 'The modulo operator % is especially important for coding. It gives you the remainder of division. 10 % 3 = 1 because 10 = 3×3 + 1. You\'ll use this constantly to check if a number is even (num % 2 == 0) or to cycle through a range.', 'Python follows standard math order of operations (PEMDAS). Use parentheses to control the order when needed.'],
        code: `# Standard math
print(10 + 3)    # 13
print(10 - 3)    # 7
print(10 * 3)    # 30
print(10 / 3)    # 3.3333 (always float)

# Extra operators
print(10 // 3)   # 3   (integer division — chops decimal)
print(10 % 3)    # 1   (remainder)
print(2 ** 8)    # 256 (2 to the power of 8)

# Order of operations (PEMDAS)
print(2 + 3 * 4)    # 14 (multiply first)
print((2 + 3) * 4)  # 20 (parentheses first)

# Useful pattern: check if even
number = 42
print(number % 2 == 0)   # True — 42 is even`,
        codeCaption: 'Python math operators — % (modulo) is especially important',
        mistake: { title: 'Division always returns a float', description: 'In Python 3, / always returns a float, even for whole-number division. Use // if you need an integer result.', bad: 'x = 10 / 2\nprint(x)         # 5.0 (not 5!)\nprint(type(x))   # <class \'float\'>', good: 'x = 10 // 2\nprint(x)         # 5\nprint(type(x))   # <class \'int\'>' },
        practice: { question: 'What is 100 % 7?', hint: 'How many times does 7 fit into 100, and what\'s left over?', answer: '2\n\n7 × 14 = 98. 100 - 98 = 2. So 100 % 7 = 2.' }
      },
      {
        id: 'l3-1', title: 'String Operations and f-strings',
        explanation: ['You can join strings together with + (concatenation). But there\'s a much cleaner way: f-strings (formatted strings). An f-string starts with f before the opening quote, and you can embed variables directly inside {} curly braces.', 'f-strings are the modern Python way to combine text and variables. They\'re readable, concise, and handle type conversion automatically — no str() needed.', 'You can also repeat a string with *: "ha" * 3 gives "hahaha". And you can check if a string contains something with the in operator: "lo" in "hello" is True.'],
        code: `name = "Alice"
age = 25

# Old way (messy — requires str() conversion)
print("Hello, " + name + ". You are " + str(age) + ".")

# f-string (modern and clean)
print(f"Hello, {name}. You are {age}.")
# Output: Hello, Alice. You are 25.

# f-strings can do math inside {}
print(f"Next year you'll be {age + 1}.")

# String repetition
print("ha" * 3)        # hahaha
print("-" * 20)        # -------------------- (good for separators)

# Check if string contains something
print("lo" in "hello")    # True
print("xyz" in "hello")   # False`,
        codeCaption: 'f-strings are the cleanest way to combine variables and text',
        mistake: { title: 'Forgetting the f before the quote', description: 'Without the f, curly braces are printed literally — the variable is not substituted.', bad: 'name = "Alice"\nprint("Hello, {name}")   # Hello, {name} — no substitution!', good: 'name = "Alice"\nprint(f"Hello, {name}")  # Hello, Alice — correct' },
        practice: { question: 'Use an f-string to print: "My name is [your name] and I am [your age] years old."', hint: 'Remember the f before the quote, and use {} for variables.', answer: 'name = "Alice"\nage = 20\nprint(f"My name is {name} and I am {age} years old.")' }
      },
      {
        id: 'l3-2', title: 'Comparison Operators',
        explanation: ['Comparison operators compare two values and return True or False. These are the foundation of every decision your code makes.', 'The six comparison operators: == (equal to), != (not equal to), < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to). Remember: = assigns, == compares.', 'Comparisons work on numbers, strings, and booleans. String comparison is alphabetical: "apple" < "banana" is True because a comes before b.'],
        code: `# All comparison operators
print(5 == 5)    # True
print(5 != 3)    # True  (5 is not equal to 3)
print(5 < 10)    # True
print(5 > 10)    # False
print(5 <= 5)    # True  (5 is less than OR equal to 5)
print(5 >= 6)    # False

# Store comparison result in a variable
is_adult = age >= 18
print(is_adult)  # True or False depending on age

# String comparison (alphabetical)
print("apple" < "banana")   # True (a comes before b)
print("zebra" > "apple")    # True (z comes after a)
print("hello" == "hello")   # True
print("Hello" == "hello")   # False (case-sensitive!)`,
        codeCaption: 'Comparison operators always return True or False',
        mistake: { title: 'Using = instead of == in comparisons', description: 'This is the most common logic bug. = is assignment. == is comparison. Using = in an if statement causes a SyntaxError in Python.', bad: 'if score = 100:    # SyntaxError!', good: 'if score == 100:   # correct — checks if score equals 100' },
        practice: { question: 'What does this print?\n\nx = 15\nprint(x > 10)\nprint(x == 15)\nprint(x != 15)', hint: 'Evaluate each comparison separately.', answer: 'True\nTrue\nFalse\n\n15 > 10 is True. 15 == 15 is True. 15 != 15 is False (they ARE equal).' }
      },
      {
        id: 'l3-3', title: 'Logical Operators',
        explanation: ['Logical operators combine multiple comparisons. The three logical operators are: and (both must be True), or (at least one must be True), not (flips True to False and vice versa).', 'Think of them in English: "If it is raining AND I have an umbrella, I\'m fine." "If it is weekend OR it is a holiday, I can sleep in." "If NOT raining, go for a walk."', 'These are used constantly in if statements to check multiple conditions at once. Mastering them is essential for writing real programs.'],
        code: `# and — both conditions must be True
age = 20
has_id = True
print(age >= 18 and has_id)   # True (both true)
print(age >= 18 and not has_id)  # False (second is false)

# or — at least one condition must be True
is_weekend = False
is_holiday = True
print(is_weekend or is_holiday)  # True (second is true)
print(is_weekend or False)       # False (both false)

# not — flips the boolean
print(not True)    # False
print(not False)   # True

is_raining = True
print(not is_raining)   # False`,
        codeCaption: 'and, or, not combine conditions — essential for if statements',
        mistake: { title: 'Writing conditions without repeating the variable', description: 'Each side of "and"/"or" must be a complete comparison. Shortcuts like "x == 1 or 2" don\'t work in Python.', bad: 'if x == 1 or 2:     # always True! "2" alone is truthy', good: 'if x == 1 or x == 2:  # correct — both sides are comparisons' },
        practice: { question: 'What prints?\n\nx = 7\nprint(x > 5 and x < 10)\nprint(x < 0 or x > 5)', hint: 'Evaluate each comparison, then apply and/or.', answer: 'True\nTrue\n\n(7>5 is True AND 7<10 is True) → True\n(7<0 is False OR 7>5 is True) → True' }
      }
    ]
  },
  {
    id: 4, slug: 'input-output', title: 'Input and Output',
    subtitle: 'Make programs that talk to the user',
    color: '#d29922',
    lessons: [
      {
        id: 'l4-0', title: 'The input() Function',
        explanation: ['input() pauses your program and waits for the user to type something and press Enter. Whatever the user types is returned as a string and you can store it in a variable.', 'You can put a message inside input() to tell the user what to type: name = input("Enter your name: "). The message is called a "prompt" — it shows up before the user types.', 'Important: input() always returns a string, no matter what the user types. If they type 42, you get the string "42", not the number 42. You must convert it if you want to do math.'],
        code: `# Basic input
name = input("What is your name? ")
print(f"Hello, {name}!")

# Input always returns a string
user_input = input("Type anything: ")
print(type(user_input))    # always <class 'str'>

# Getting a number from the user (must convert!)
age_str = input("How old are you? ")
age = int(age_str)          # convert string to int
print(f"In 10 years you'll be {age + 10}.")

# Shorter version (convert inline)
score = int(input("Enter your score: "))`,
        codeCaption: 'input() always returns a string — convert it if you need a number',
        mistake: { title: 'Doing math with input without converting', description: 'input() always returns a string. "5" + "3" = "53" (string joining), not 8. Always convert with int() or float() before doing math.', bad: 'x = input("Number: ")  # "5"\nprint(x + 3)            # TypeError!', good: 'x = int(input("Number: "))  # 5 (integer)\nprint(x + 3)                 # 8' },
        practice: { question: 'Write code that asks the user for their name and prints "Nice to meet you, [name]!"', hint: 'Use input() to get the name, then print() with an f-string.', answer: 'name = input("What is your name? ")\nprint(f"Nice to meet you, {name}!")' }
      },
      {
        id: 'l4-1', title: 'Converting Input',
        explanation: ['Since input() always returns a string, you need to convert it when you expect a number. int() converts to integer. float() converts to decimal. str() converts anything to string.', 'The conversion must match what the user types. If they type "hello" and you run int("hello"), you get a ValueError. In real programs, you handle this with error checking (covered later). For now, assume users type the right thing.', 'You can also convert between number types: int(3.9) gives 3 (chops the decimal — does not round). float(5) gives 5.0.'],
        code: `# Convert string to integer
age = int(input("Enter age: "))       # "25" → 25
print(f"Age doubled: {age * 2}")

# Convert string to float
price = float(input("Enter price: ")) # "9.99" → 9.99
print(f"With tax: {price * 1.1}")

# str() — number to string
score = 100
message = "Your score: " + str(score)
print(message)

# int() on a float truncates (does not round)
print(int(3.9))    # 3  (not 4!)
print(int(-3.9))   # -3 (not -4!)

# Inline conversion (common pattern)
num1 = int(input("First number: "))
num2 = int(input("Second number: "))
print(f"Sum: {num1 + num2}")`,
        codeCaption: 'Convert input immediately: int(input(...)) is the standard pattern',
        mistake: { title: 'int() on a float string crashes', description: 'int("3.14") throws a ValueError. If users might enter decimals, use float() first, then int() if needed.', bad: 'x = int("3.14")   # ValueError: invalid literal for int()', good: 'x = float("3.14")  # 3.14  (works)\nx = int(float("3.14"))  # 3 (truncated)' },
        practice: { question: 'What does this print if the user types "8"?\n\nn = int(input("Number: "))\nprint(n * n)', hint: 'Convert to int, then square it.', answer: '64\n\nint("8") = 8. 8 * 8 = 64.' }
      },
      {
        id: 'l4-2', title: 'Simple Calculator',
        explanation: ['Let\'s put variables, input, conversion, and f-strings together to build something real: a simple calculator that asks for two numbers and shows their sum, difference, product, and quotient.', 'This is a milestone — your first program that combines multiple concepts. Notice how the pieces fit together: input → convert → compute → display.', 'After building this, you have enough Python knowledge to build many small useful programs. Functions, lists, and conditions come next — and they make your programs much more powerful.'],
        code: `# Simple Calculator — putting it all together

print("=== Simple Calculator ===")

# Get input and convert to float (handles decimals)
a = float(input("Enter first number: "))
b = float(input("Enter second number: "))

# Calculate all four operations
print(f"\\n{a} + {b} = {a + b}")
print(f"{a} - {b} = {a - b}")
print(f"{a} * {b} = {a * b}")

# Handle division by zero
if b != 0:
    print(f"{a} / {b} = {a / b:.2f}")   # .2f = 2 decimal places
else:
    print("Cannot divide by zero!")`,
        codeCaption: 'Your first real program — input, conversion, math, and output together',
        mistake: { title: 'Dividing by zero', description: 'If b is 0 and you do a / b, Python crashes with ZeroDivisionError. Always check before dividing.', bad: 'result = a / b  # crashes if b is 0', good: 'if b != 0:\n    result = a / b\nelse:\n    print("Cannot divide by zero")' },
        practice: { question: 'Extend the calculator to also print the remainder (a % b).', hint: 'Add a new print line using the % operator.', answer: 'print(f"{a} % {b} = {a % b}")\n\nNote: also check b != 0 before modulo, same as division.' }
      }
    ]
  },
  {
    id: 5, slug: 'conditions', title: 'Conditions',
    subtitle: 'Make decisions in your code with if, elif, and else',
    color: '#f85149',
    lessons: [
      {
        id: 'l5-0', title: 'if Statements',
        explanation: ['An if statement runs code only when a condition is True. If the condition is False, the block is skipped entirely. This is how programs make decisions.', 'The syntax: if condition: then an indented block of code. The colon at the end of if is required. The indented block is called the "body" — it runs when the condition is True.', 'The condition is any expression that results in True or False — which includes all the comparisons you learned (>, <, ==, etc.) and logical operators (and, or, not).'],
        code: `age = 20

# Basic if statement
if age >= 18:
    print("You are an adult.")
    print("You can vote.")

# The code after the if block always runs
print("Program continues here.")

# Multiple conditions
score = 85
if score >= 90:
    print("A grade")
if score >= 80:
    print("B grade or higher")  # this also prints!
if score >= 70:
    print("C grade or higher")  # this too!`,
        codeCaption: 'The if block runs when the condition is True — otherwise it is skipped',
        mistake: { title: 'Forgetting the colon after if', description: 'The colon : at the end of if condition: is required. Forgetting it causes a SyntaxError.', bad: 'if age >= 18    # SyntaxError: expected \':\'', good: 'if age >= 18:   # correct' },
        practice: { question: 'Write an if statement: if a number called n is greater than 0, print "Positive".', hint: 'if condition: then indented print().', answer: 'n = 5\nif n > 0:\n    print("Positive")' }
      },
      {
        id: 'l5-1', title: 'else and elif',
        explanation: ['else runs when the if condition is False. It\'s the "otherwise" block. Only one of if or else will ever run — never both.', 'elif (short for "else if") lets you check multiple conditions in sequence. Python checks each one from top to bottom and runs the first one that is True. Once one runs, the rest are skipped.', 'The structure is: if → elif → elif → else. You can have as many elif blocks as you want. The else at the end is optional — it\'s a "catch all" that runs when nothing else matched.'],
        code: `score = 75

# if / elif / else
if score >= 90:
    print("A")
elif score >= 80:
    print("B")
elif score >= 70:
    print("C")      # ← this one runs (75 >= 70)
elif score >= 60:
    print("D")
else:
    print("F")      # only runs if ALL conditions above are False

# Simple if / else
temperature = 15
if temperature > 20:
    print("Wear a t-shirt")
else:
    print("Bring a jacket")    # runs (15 is not > 20)`,
        codeCaption: 'Only the first matching condition runs — the rest are skipped',
        mistake: { title: 'Using multiple ifs instead of elif', description: 'Multiple if statements each check independently. elif stops checking after the first match. For grades, multiple ifs would print multiple results.', bad: 'if score >= 90: print("A")\nif score >= 80: print("B")  # also runs for score=95!', good: 'if score >= 90: print("A")\nelif score >= 80: print("B")  # skipped if score >= 90' },
        practice: { question: 'What prints for n = 5?\n\nif n > 10:\n    print("big")\nelif n > 3:\n    print("medium")\nelse:\n    print("small")', hint: 'Check each condition in order.', answer: 'medium\n\n5 > 10 is False (skip). 5 > 3 is True (run this). Print "medium" and stop.' }
      },
      {
        id: 'l5-2', title: 'Indentation Rules',
        explanation: ['Indentation is how Python knows which lines belong to an if/else/loop/function. Unlike most languages that use curly braces, Python uses whitespace. This is one of Python\'s most distinctive features.', 'Each "level" of code must be indented consistently. Use 4 spaces (the standard) or 1 tab — but never mix them in the same file. When you go back to the outer level, you un-indent.', 'Indentation errors are very common for beginners. Python will tell you exactly where the problem is with an IndentationError. Fix: be consistent with 4 spaces per level.'],
        code: `# Each level indented 4 spaces
age = 20
has_id = True

if age >= 18:              # level 0 (no indent)
    print("Adult")         # level 1 (4 spaces)
    if has_id:             # level 1
        print("Has ID")    # level 2 (8 spaces)
        print("Can enter") # level 2
    print("Done checking") # level 1
print("Outside the if")    # level 0 — always runs

# This is WRONG — mixed indentation
# if True:
#     print("hello")   # 4 spaces
#   print("world")     # 2 spaces — IndentationError!`,
        codeCaption: 'Use exactly 4 spaces per indentation level — be consistent',
        mistake: { title: 'Inconsistent indentation', description: 'Mixing 2 spaces, 4 spaces, and tabs in the same file causes IndentationError. Pick 4 spaces and stick with it throughout your file.', bad: 'if True:\n    print("hello")  # 4 spaces\n  print("world")    # 2 spaces — IndentationError!', good: 'if True:\n    print("hello")  # 4 spaces\n    print("world")  # 4 spaces — consistent' },
        practice: { question: 'Fix the indentation error:\n\nif 5 > 3:\nprint("five is bigger")', hint: 'The print line must be indented inside the if block.', answer: 'if 5 > 3:\n    print("five is bigger")\n\nThe print line needs 4 spaces of indentation.' }
      },
      {
        id: 'l5-3', title: 'Nested Conditions',
        explanation: ['You can put if statements inside other if statements. This is called "nesting". It lets you check conditions that only make sense after a previous condition is True.', 'Each nested level adds 4 more spaces of indentation. You can nest as many levels as you want, but more than 2-3 levels deep usually means you should refactor your code.', 'Nested conditions are sometimes necessary but can also be replaced with and/or in the outer condition. When possible, combining with and is cleaner.'],
        code: `# Nested if (checking inside another if)
age = 20
has_ticket = True
is_vip = False

if age >= 18:
    print("Age check passed")
    if has_ticket:
        print("Ticket check passed")
        if is_vip:
            print("Welcome to VIP area")
        else:
            print("Welcome to general admission")
    else:
        print("No ticket — cannot enter")
else:
    print("Under 18 — cannot enter")

# Same logic with 'and' (cleaner when possible)
if age >= 18 and has_ticket:
    print("Can enter")`,
        codeCaption: 'Nested conditions — each level adds 4 more spaces',
        mistake: { title: 'Over-nesting — too many levels', description: 'Deeply nested code is hard to read and debug. Try to flatten it with and/or when possible.', bad: 'if a:\n    if b:\n        if c:\n            print("all true")  # 3 levels deep', good: 'if a and b and c:\n    print("all true")  # cleaner — same result' },
        practice: { question: 'Write nested conditions: if age >= 16, check if they have a license. If yes, print "Can drive". If no, print "Need a license".', hint: 'Outer if for age, inner if for license.', answer: 'if age >= 16:\n    if has_license:\n        print("Can drive")\n    else:\n        print("Need a license")\nelse:\n    print("Too young to drive")' }
      }
    ]
  },
  {
    id: 6, slug: 'loops', title: 'Loops',
    subtitle: 'Repeat code automatically instead of writing it out',
    color: '#79c0ff',
    lessons: [
      {
        id: 'l6-0', title: 'while Loops',
        explanation: ['A while loop repeats a block of code as long as a condition is True. It checks the condition before each repetition. When the condition becomes False, the loop stops.', 'while loops are used when you don\'t know in advance how many times to repeat — for example, "keep asking until the user enters a valid number."', 'Warning: if the condition never becomes False, you have an infinite loop. Your program will run forever. Always make sure something inside the loop eventually makes the condition False.'],
        code: `# Count from 1 to 5
count = 1
while count <= 5:
    print(count)
    count += 1        # count = count + 1 (moves toward stopping)
print("Done!")

# Output: 1 2 3 4 5 Done!

# Ask until valid input
answer = ""
while answer != "yes" and answer != "no":
    answer = input("Yes or no? ")
print(f"You chose: {answer}")

# DANGEROUS — infinite loop (never do this!)
# while True:
#     print("forever")  # never stops — Ctrl+C to break`,
        codeCaption: 'while loops repeat until the condition becomes False',
        mistake: { title: 'Forgetting to update the loop variable', description: 'If nothing inside the loop changes the condition, it runs forever. Always make sure the condition will eventually be False.', bad: 'count = 1\nwhile count <= 5:\n    print(count)\n    # forgot count += 1 — infinite loop!', good: 'count = 1\nwhile count <= 5:\n    print(count)\n    count += 1   # moves toward stopping' },
        practice: { question: 'Write a while loop that prints all even numbers from 2 to 10.', hint: 'Start at 2, print, then add 2 each time.', answer: 'n = 2\nwhile n <= 10:\n    print(n)\n    n += 2\n\nOutput: 2 4 6 8 10' }
      },
      {
        id: 'l6-1', title: 'for Loops',
        explanation: ['A for loop iterates over a sequence — a list of items — and runs the body once for each item. It is the most common type of loop in Python, especially for LeetCode.', 'You can loop over a list: for item in my_list. You can loop over a string: for char in "hello". You can loop over a range of numbers: for i in range(5).', 'The variable after for (like item or i) takes on each value in the sequence, one at a time. You can name it anything — but use meaningful names like num, char, name.'],
        code: `# Loop over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
# apple, banana, cherry

# Loop over a string
for char in "hello":
    print(char)
# h, e, l, l, o

# Loop over a range
for i in range(5):
    print(i)
# 0, 1, 2, 3, 4

# Loop with enumerate (index AND value)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")
# 0: apple, 1: banana, 2: cherry`,
        codeCaption: 'for loops iterate over any sequence — list, string, or range',
        mistake: { title: 'Modifying a list while looping over it', description: 'Changing a list while you\'re iterating over it causes unpredictable behavior. Loop over a copy, or collect changes and apply after.', bad: 'nums = [1, 2, 3, 4]\nfor n in nums:\n    nums.remove(n)   # skips elements!', good: 'nums = [1, 2, 3, 4]\nfor n in nums[:]:  # loop over a copy\n    nums.remove(n)' },
        practice: { question: 'What does this print?\n\nfor i in range(1, 6):\n    print(i * 2)', hint: 'range(1, 6) gives 1, 2, 3, 4, 5.', answer: '2\n4\n6\n8\n10\n\nFor each i from 1 to 5, prints i * 2.' }
      },
      {
        id: 'l6-2', title: 'range()',
        explanation: ['range() generates a sequence of numbers for you to loop over. range(5) gives 0, 1, 2, 3, 4 (5 numbers, starting from 0). range(1, 6) gives 1, 2, 3, 4, 5 (from 1 up to but not including 6).', 'The full form is range(start, stop, step). range(0, 10, 2) gives 0, 2, 4, 6, 8 — every other number. range(10, 0, -1) counts down: 10, 9, 8, ..., 1.', 'The stop value is never included. This trips up beginners: range(1, 5) gives 1, 2, 3, 4 — not 5. Think of it as "up to, but not including stop".'],
        code: `# range(stop) — 0 to stop-1
for i in range(5):
    print(i)    # 0 1 2 3 4

# range(start, stop) — start to stop-1
for i in range(1, 6):
    print(i)    # 1 2 3 4 5

# range(start, stop, step) — with step size
for i in range(0, 11, 2):
    print(i)    # 0 2 4 6 8 10

# Counting down
for i in range(5, 0, -1):
    print(i)    # 5 4 3 2 1

# Get the length of a list and loop by index
nums = [10, 20, 30]
for i in range(len(nums)):
    print(f"Index {i}: {nums[i]}")`,
        codeCaption: 'range(start, stop, step) — stop is never included',
        mistake: { title: 'Stop value is exclusive', description: 'range(1, 5) gives 1, 2, 3, 4 — it stops BEFORE 5. If you want to include 5, use range(1, 6).', bad: 'for i in range(1, 5):\n    print(i)  # 1 2 3 4 — missing 5!', good: 'for i in range(1, 6):\n    print(i)  # 1 2 3 4 5 — includes 5' },
        practice: { question: 'Write a loop using range() that prints the sum of numbers 1 through 10.', hint: 'Add each number to a total variable.', answer: 'total = 0\nfor i in range(1, 11):\n    total += i\nprint(total)  # 55' }
      },
      {
        id: 'l6-3', title: 'break and continue',
        explanation: ['break immediately exits a loop. continue skips the rest of the current iteration and jumps to the next one.', 'break is useful when you\'ve found what you were looking for and don\'t need to keep searching. continue is useful when you want to skip certain items (like skipping negative numbers).', 'These are especially important for LeetCode — many problems involve looping until you find something, then breaking out. Understanding break and continue makes you a much more effective programmer.'],
        code: `# break — stop the loop early
for i in range(10):
    if i == 5:
        break           # exit loop when i reaches 5
    print(i)
# Output: 0 1 2 3 4

# continue — skip this iteration
for i in range(10):
    if i % 2 == 0:
        continue        # skip even numbers
    print(i)
# Output: 1 3 5 7 9

# Common pattern: search for a value
nums = [3, 7, 1, 9, 4]
target = 9
found = False
for n in nums:
    if n == target:
        found = True
        break           # no need to keep searching
print(f"Found: {found}")`,
        codeCaption: 'break exits the loop, continue skips to the next iteration',
        mistake: { title: 'Using break in nested loops only exits the inner loop', description: 'break only exits the innermost loop it is in. To break out of multiple nested loops, you need a flag variable or other technique.', bad: '# break only exits inner loop:\nfor i in range(3):\n    for j in range(3):\n        break  # only breaks inner loop', good: '# Use a flag to break outer loop:\nfound = False\nfor i in range(3):\n    for j in range(3):\n        if condition:\n            found = True\n            break\n    if found:\n        break' },
        practice: { question: 'What does this print?\n\nfor i in range(6):\n    if i == 3:\n        continue\n    print(i)', hint: 'continue skips one iteration — the loop keeps going.', answer: '0\n1\n2\n4\n5\n\n3 is skipped (continue), but 4 and 5 still print. break would have stopped entirely.' }
      },
      {
        id: 'l6-4', title: 'Simple Loop Problems',
        explanation: ['Now let\'s practice loops by solving small problems. These patterns — counting, summing, finding max/min — come up constantly in LeetCode. Getting comfortable with them now will pay off enormously.', 'The key skill: translating a problem description into a loop. "Find the largest number" → loop through all numbers, track the largest you\'ve seen so far. "Count how many are even" → loop, check each, increment a counter.', 'Every LeetCode problem that involves a list is essentially a loop problem. The rest is just figuring out what to do inside the loop.'],
        code: `numbers = [3, 7, 2, 9, 1, 5, 8, 4, 6]

# 1. Find the maximum
max_val = numbers[0]
for n in numbers:
    if n > max_val:
        max_val = n
print(f"Max: {max_val}")     # 9

# 2. Sum all numbers
total = 0
for n in numbers:
    total += n
print(f"Sum: {total}")       # 45

# 3. Count how many are > 5
count = 0
for n in numbers:
    if n > 5:
        count += 1
print(f"Count > 5: {count}") # 4

# 4. Collect even numbers into a new list
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)
print(f"Evens: {evens}")     # [2, 8, 4, 6]`,
        codeCaption: 'These four patterns — max, sum, count, collect — appear in most LeetCode problems',
        mistake: { title: 'Starting max/min with 0', description: 'If all numbers are negative, starting max_val = 0 gives a wrong answer. Start with the first element, or use float("-inf").', bad: 'max_val = 0\n# wrong if all numbers are negative!', good: 'max_val = numbers[0]\n# or: max_val = float("-inf")\n# handles any set of numbers' },
        practice: { question: 'Write a loop that finds the minimum value in: nums = [5, 3, 8, 1, 9, 2]', hint: 'Same as max, but track the smallest instead.', answer: 'nums = [5, 3, 8, 1, 9, 2]\nmin_val = nums[0]\nfor n in nums:\n    if n < min_val:\n        min_val = n\nprint(min_val)  # 1' }
      }
    ]
  },
  {
    id: 7, slug: 'functions', title: 'Functions',
    subtitle: 'Write reusable blocks of code',
    color: '#3fb950',
    lessons: [
      {
        id: 'l7-0', title: 'What is a Function?',
        explanation: ['A function is a named, reusable block of code. You define it once and can call it as many times as you want. Functions let you avoid repeating yourself — a fundamental principle in programming called DRY: Don\'t Repeat Yourself.', 'You\'ve been using built-in functions already: print(), len(), int(), input(). These are functions someone else wrote and Python provides for free. Now you\'ll write your own.', 'The syntax: def function_name(): then an indented block. The def keyword means "define". The function runs only when you call it by name — just defining it does nothing.'],
        code: `# Define a function
def greet():
    print("Hello!")
    print("Welcome to Python.")

# Nothing happens yet — just defined

# Call the function
greet()             # Hello! Welcome to Python.
greet()             # Hello! Welcome to Python. (again)

# Function with a calculation
def show_square(n):
    result = n * n
    print(f"{n} squared is {result}")

show_square(5)      # 5 squared is 25
show_square(10)     # 10 squared is 100`,
        codeCaption: 'Define a function with def, then call it by name',
        mistake: { title: 'Defining but forgetting to call', description: 'Writing def greet(): ... does nothing until you actually call greet(). Beginners sometimes write the function but forget to call it.', bad: 'def greet():\n    print("Hello")\n# nothing happens — function defined but never called!', good: 'def greet():\n    print("Hello")\ngreet()   # call it — now it runs' },
        practice: { question: 'Define a function called say_hello that prints "Hello, World!", then call it twice.', hint: 'def say_hello(): then print(), then call it.', answer: 'def say_hello():\n    print("Hello, World!")\n\nsay_hello()\nsay_hello()' }
      },
      {
        id: 'l7-1', title: 'Parameters and Arguments',
        explanation: ['Parameters are variables listed in the function definition — they are placeholders. Arguments are the actual values you pass when calling the function. The argument fills in the parameter.', 'Parameters let functions work with different data each time. A greet function with a name parameter can greet any name instead of always printing the same thing.', 'You can have multiple parameters, separated by commas. Each argument corresponds to a parameter in order.'],
        code: `# One parameter
def greet(name):
    print(f"Hello, {name}!")

greet("Alice")     # Hello, Alice!
greet("Bob")       # Hello, Bob!

# Two parameters
def add(a, b):
    print(f"{a} + {b} = {a + b}")

add(3, 5)          # 3 + 5 = 8
add(10, 20)        # 10 + 20 = 30

# Default parameter (used if argument not given)
def greet_with_default(name, greeting="Hello"):
    print(f"{greeting}, {name}!")

greet_with_default("Alice")            # Hello, Alice!
greet_with_default("Bob", "Hi")        # Hi, Bob!`,
        codeCaption: 'Parameters are placeholders; arguments are the actual values passed in',
        mistake: { title: 'Wrong number of arguments', description: 'If a function has 2 parameters and you call it with 1 or 3 arguments, Python throws a TypeError. The count must match (unless defaults are used).', bad: 'def add(a, b):\n    print(a + b)\n\nadd(5)       # TypeError: missing 1 argument\nadd(1, 2, 3) # TypeError: too many arguments', good: 'add(5, 3)    # correct — 2 arguments for 2 parameters' },
        practice: { question: 'Write a function multiply(a, b) that prints the product of a and b. Call it with 4 and 7.', hint: 'def multiply(a, b): then print(a * b), then call it.', answer: 'def multiply(a, b):\n    print(a * b)\n\nmultiply(4, 7)   # 28' }
      },
      {
        id: 'l7-2', title: 'Return Values',
        explanation: ['Functions can return a value using the return keyword. The return value is what the function call "becomes" — you can store it in a variable, use it in math, or pass it to print().', 'The difference: a function that only prints shows output but gives you nothing to use. A function that returns a value gives you something you can work with throughout your program.', 'When Python hits return, the function stops immediately. Any code after return in that function is not executed. You can have multiple return statements for different conditions.'],
        code: `# Function that returns a value
def square(n):
    return n * n

result = square(5)      # result = 25
print(result)           # 25
print(square(10))       # 100 (pass return value directly to print)
print(square(3) + 1)    # 10 (use in math)

# Multiple return statements
def classify(n):
    if n > 0:
        return "positive"
    elif n < 0:
        return "negative"
    else:
        return "zero"       # one of these always runs

print(classify(5))    # positive
print(classify(-3))   # negative
print(classify(0))    # zero`,
        codeCaption: 'return sends a value back to whoever called the function',
        mistake: { title: 'Printing instead of returning', description: 'A function that only prints cannot be used in larger expressions. A function that returns can. LeetCode solutions always return — they never print.', bad: 'def square(n):\n    print(n * n)   # shows output but returns None\n\nx = square(5)   # x is None, not 25!', good: 'def square(n):\n    return n * n   # gives back the value\n\nx = square(5)   # x is 25' },
        practice: { question: 'Write a function called is_even(n) that returns True if n is even, False if not.', hint: 'Use n % 2 == 0.', answer: 'def is_even(n):\n    return n % 2 == 0\n\nprint(is_even(4))   # True\nprint(is_even(7))   # False' }
      },
      {
        id: 'l7-3', title: 'Functions and LeetCode',
        explanation: ['Every single LeetCode problem is a function. You are given a function signature (def two_sum(nums, target):) and your job is to fill in the body so it returns the correct answer.', 'This is why understanding return is so important — not print, return. LeetCode tests your function by passing inputs and checking the return value. If you print instead of return, the test fails.', 'The skills you have now — variables, conditions, loops, functions — are enough to solve many Easy LeetCode problems. Lists and dictionaries (next two levels) will unlock the rest.'],
        code: `# A LeetCode problem gives you a function signature like this:
def two_sum(nums, target):
    # You fill in the body
    pass    # "pass" means "empty for now"

# Your job: write logic and return the answer
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return [i, j]   # return, not print!

# LeetCode tests it like this:
result = two_sum([2, 7, 11, 15], 9)
print(result)   # [0, 1]

# You don't write the test — LeetCode does.
# You only write the function body.`,
        codeCaption: 'Every LeetCode problem is a function that takes input and returns output',
        mistake: { title: 'Using print instead of return in LeetCode', description: 'LeetCode checks your function\'s return value. If you print instead of return, it gets None back and all tests fail.', bad: 'def two_sum(nums, target):\n    # ...\n    print([i, j])   # wrong — LeetCode checks return value', good: 'def two_sum(nums, target):\n    # ...\n    return [i, j]   # correct' },
        practice: { question: 'Write a function called max_of_two(a, b) that returns the larger of two numbers (without using Python\'s built-in max()).', hint: 'Use an if/else with return in each branch.', answer: 'def max_of_two(a, b):\n    if a >= b:\n        return a\n    else:\n        return b\n\nprint(max_of_two(5, 9))   # 9' }
      }
    ]
  },
  {
    id: 8, slug: 'lists', title: 'Lists',
    subtitle: 'Store and work with collections of data',
    color: '#58a6ff',
    lessons: [
      {
        id: 'l8-0', title: 'What is a List?',
        explanation: ['A list is an ordered collection of items stored in a single variable. Instead of creating separate variables for each item (num1, num2, num3...), you keep everything in one list: [num1, num2, num3].', 'Lists can hold any type of data — numbers, strings, booleans, even other lists. They maintain their order, and you can change them (add, remove, modify items). In Python, lists use square brackets [].', 'Lists are the most important data structure in Python for LeetCode. Almost every problem involves an array (which is a list in Python).'],
        code: `# Create a list
numbers = [3, 1, 4, 1, 5, 9, 2, 6]
names = ["Alice", "Bob", "Charlie"]
mixed = [1, "hello", True, 3.14]

# Length
print(len(numbers))    # 8

# Check if item is in list
print(5 in numbers)    # True
print(7 in numbers)    # False

# Empty list (useful as starting point)
result = []

# List of numbers 0-9
from_range = list(range(10))
print(from_range)  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`,
        codeCaption: 'Lists store ordered collections — the most used data structure in LeetCode',
        mistake: { title: 'Confusing list with its length', description: 'A common error is printing the whole list when you want its length, or vice versa.', bad: 'nums = [1, 2, 3]\nprint(nums)      # [1, 2, 3] — the whole list\nprint(len)       # <built-in function len> — wrong!', good: 'print(nums)        # [1, 2, 3]\nprint(len(nums))   # 3 — the count of items' },
        practice: { question: 'Create a list called scores with values [88, 95, 70, 82, 91]. Print the list and its length.', hint: 'Use len() for the length.', answer: 'scores = [88, 95, 70, 82, 91]\nprint(scores)\nprint(len(scores))  # 5' }
      },
      {
        id: 'l8-1', title: 'Indexing and Slicing',
        explanation: ['Each item in a list has a position called an "index". Indexes start at 0, not 1. The first item is index 0, the second is index 1, and so on. The last item is at index len(list) - 1.', 'Python also supports negative indexing: -1 is the last item, -2 is the second-to-last, etc. This is very convenient and used constantly.', 'Slicing lets you grab a portion of a list: list[start:end]. The start is included, the end is excluded. list[1:4] gives items at indexes 1, 2, and 3 (not 4).'],
        code: `nums = [10, 20, 30, 40, 50]
#        0    1    2    3    4   (positive indexes)
#       -5   -4   -3   -2   -1  (negative indexes)

# Indexing
print(nums[0])     # 10 (first)
print(nums[2])     # 30
print(nums[-1])    # 50 (last)
print(nums[-2])    # 40

# Slicing [start:end]  (end not included)
print(nums[1:4])   # [20, 30, 40]
print(nums[:3])    # [10, 20, 30] (from start)
print(nums[2:])    # [30, 40, 50] (to end)
print(nums[:])     # [10, 20, 30, 40, 50] (full copy)

# Modify by index
nums[0] = 99
print(nums)        # [99, 20, 30, 40, 50]`,
        codeCaption: 'Indexes start at 0. -1 is the last item. Slicing grabs a portion.',
        mistake: { title: 'IndexError — accessing out-of-range index', description: 'If a list has 5 items (indexes 0-4), accessing index 5 crashes. Always check len() or use -1 for the last item.', bad: 'nums = [1, 2, 3]\nprint(nums[3])   # IndexError: list index out of range', good: 'nums = [1, 2, 3]\nprint(nums[2])   # 3 (last item at index 2)\nprint(nums[-1])  # 3 (same, using negative index)' },
        practice: { question: 'For nums = [5, 10, 15, 20, 25], what is nums[1:4]? What is nums[-1]?', hint: 'Slice from index 1 to 3. -1 is always the last item.', answer: 'nums[1:4] = [10, 15, 20] (indexes 1, 2, 3)\nnums[-1] = 25 (last item)' }
      },
      {
        id: 'l8-2', title: 'Modifying Lists',
        explanation: ['Lists are mutable — you can change them after creation. The most common operations: append() adds one item to the end, pop() removes and returns the last item, insert() adds at a specific position, and remove() removes a specific value.', 'You can also use del to delete by index, sort() to sort in place, and reverse() to reverse in place. The sorted() function returns a new sorted list without modifying the original.', 'These operations come up constantly in LeetCode — you\'ll build up result lists with append() and clean up with pop() in stack-based problems.'],
        code: `nums = [3, 1, 4, 1, 5]

# Add to end
nums.append(9)
print(nums)        # [3, 1, 4, 1, 5, 9]

# Remove last item (returns it)
last = nums.pop()
print(last)        # 9
print(nums)        # [3, 1, 4, 1, 5]

# Insert at position
nums.insert(0, 100)    # insert 100 at index 0
print(nums)            # [100, 3, 1, 4, 1, 5]

# Sort (modifies in place)
nums.sort()
print(nums)            # [1, 1, 3, 4, 5, 100]

# sorted() — returns new list, doesn't modify original
original = [5, 2, 8, 1]
new_list = sorted(original)
print(original)   # [5, 2, 8, 1] — unchanged
print(new_list)   # [1, 2, 5, 8]`,
        codeCaption: 'Lists are mutable — append, pop, insert, sort, and more',
        mistake: { title: 'sort() vs sorted()', description: 'list.sort() modifies the list and returns None. sorted(list) returns a new sorted list. Assigning the result of .sort() gives you None!', bad: 'nums = [3, 1, 2]\nnums = nums.sort()  # nums is now None!', good: 'nums = [3, 1, 2]\nnums.sort()         # modifies in place, returns None\n# or:\nnew = sorted(nums)  # returns new sorted list' },
        practice: { question: 'Start with nums = []. Append 5, 3, 8, 1 one at a time. Then sort and print.', hint: 'Four append() calls, then .sort(), then print().', answer: 'nums = []\nnums.append(5)\nnums.append(3)\nnums.append(8)\nnums.append(1)\nnums.sort()\nprint(nums)  # [1, 3, 5, 8]' }
      },
      {
        id: 'l8-3', title: 'Looping Through Lists',
        explanation: ['Looping through lists is one of the most fundamental operations in all of programming. A for loop makes this clean and simple.', 'There are three common patterns: loop over values (for item in list), loop over indexes (for i in range(len(list))), and loop over both at once (for i, item in enumerate(list)).', 'Use the value loop when you only need the items. Use the index loop when you need to know the position. Use enumerate() when you need both. All three appear constantly in LeetCode.'],
        code: `fruits = ["apple", "banana", "cherry", "date"]

# Pattern 1: loop over values
for fruit in fruits:
    print(fruit)

# Pattern 2: loop over indexes
for i in range(len(fruits)):
    print(f"{i}: {fruits[i]}")

# Pattern 3: enumerate (index AND value)
for i, fruit in enumerate(fruits):
    print(f"{i}: {fruit}")

# Common: build a new list from a loop
nums = [1, 2, 3, 4, 5]
doubled = []
for n in nums:
    doubled.append(n * 2)
print(doubled)    # [2, 4, 6, 8, 10]

# Sum with a loop
total = 0
for n in nums:
    total += n
print(total)      # 15`,
        codeCaption: 'Three loop patterns: for item, for index, for i, item with enumerate()',
        mistake: { title: 'Using range(len(list)) when you only need values', description: 'If you don\'t need the index, "for item in list" is cleaner than "for i in range(len(list))". Only use the index form when you actually need i.', bad: 'for i in range(len(fruits)):\n    print(fruits[i])   # works but verbose', good: 'for fruit in fruits:\n    print(fruit)       # cleaner when index not needed' },
        practice: { question: 'Loop through nums = [3, 7, 2, 8, 1] and print only values greater than 4.', hint: 'Loop with for n in nums, then if n > 4: print(n).', answer: 'nums = [3, 7, 2, 8, 1]\nfor n in nums:\n    if n > 4:\n        print(n)\n# 7, 8' }
      },
      {
        id: 'l8-4', title: 'Basic List Problems',
        explanation: ['Let\'s put lists together with loops and conditions to solve real problems. These patterns are the foundation of LeetCode Easy problems.', 'The key insight: most problems are just "loop over a list and do something". The hard part is figuring out what to do. With practice, patterns become recognizable.', 'After this lesson, you will have all the tools needed to understand and attempt the first LeetCode problems in the Practice section. Lists + loops + conditions = most Easy LeetCode solutions.'],
        code: `nums = [4, 2, 7, 1, 9, 3, 6, 8, 5]

# 1. Find max and min
max_val = nums[0]
min_val = nums[0]
for n in nums:
    if n > max_val: max_val = n
    if n < min_val: min_val = n
print(f"Max: {max_val}, Min: {min_val}")   # Max: 9, Min: 1

# 2. Reverse a list (two pointers — LeetCode pattern!)
def reverse(arr):
    left, right = 0, len(arr) - 1
    while left < right:
        arr[left], arr[right] = arr[right], arr[left]
        left += 1
        right -= 1

sample = [1, 2, 3, 4, 5]
reverse(sample)
print(sample)   # [5, 4, 3, 2, 1]

# 3. Check if list contains duplicates
def has_duplicate(arr):
    seen = []
    for n in arr:
        if n in seen:
            return True
        seen.append(n)
    return False

print(has_duplicate([1, 2, 3, 1]))  # True
print(has_duplicate([1, 2, 3, 4]))  # False`,
        codeCaption: 'These patterns — find max/min, reverse, check duplicates — appear in LeetCode',
        mistake: { title: 'Using "in" on a list is slow (O(n))', description: 'Checking "if x in my_list" works but is slow for large lists — it checks every element. For LeetCode, use a set or dictionary instead (covered next level).', bad: 'seen = []\nif n in seen:  # O(n) — slow for large lists', good: 'seen = set()\nif n in seen:  # O(1) — instant lookup' },
        practice: { question: 'Write a function that returns the second largest number in a list.', hint: 'Sort the list, then return the item at index -2.', answer: 'def second_largest(nums):\n    nums = sorted(set(nums))  # sort unique values\n    return nums[-2]\n\nprint(second_largest([3, 1, 4, 1, 5, 9, 2]))  # 5' }
      }
    ]
  },
  {
    id: 9, slug: 'dicts-sets', title: 'Dictionaries and Sets',
    subtitle: 'The two data structures that unlock most LeetCode problems',
    color: '#f0883e',
    lessons: [
      {
        id: 'l9-0', title: 'Dictionaries',
        explanation: ['A dictionary stores key-value pairs. Think of a real dictionary: word → definition. In Python: any key → any value. You look up a value instantly by its key — no looping needed.', 'Create a dict with curly braces: {key: value}. Access a value with dict[key]. Add or update with dict[key] = value. Check if a key exists with key in dict. Remove with del dict[key].', 'The most important feature: lookup is O(1) — instant, regardless of how many items are stored. This is why dictionaries are crucial for LeetCode: they replace slow O(n) list searches with instant O(1) lookups.'],
        code: `# Create a dictionary
ages = {"Alice": 25, "Bob": 30, "Charlie": 22}

# Access a value
print(ages["Alice"])       # 25

# Safe access (no crash if key missing)
print(ages.get("Dave"))        # None
print(ages.get("Dave", 0))     # 0 (default)

# Add or update
ages["Dave"] = 28
ages["Alice"] = 26             # update existing

# Check if key exists
if "Bob" in ages:
    print("Bob is in the dict")

# Loop through a dictionary
for name, age in ages.items():
    print(f"{name} is {age}")

# Count frequencies — most common LeetCode pattern
word = "mississippi"
count = {}
for char in word:
    count[char] = count.get(char, 0) + 1
print(count)  # {'m': 1, 'i': 4, 's': 4, 'p': 2}`,
        codeCaption: 'Dictionaries give O(1) key lookups — the foundation of many LeetCode solutions',
        mistake: { title: 'KeyError when accessing a missing key', description: 'dict[key] crashes if key doesn\'t exist. Use dict.get(key) or check "key in dict" first.', bad: 'ages = {"Alice": 25}\nprint(ages["Bob"])     # KeyError!', good: 'print(ages.get("Bob"))          # None (safe)\nprint(ages.get("Bob", 0))      # 0 (with default)\nif "Bob" in ages: print(ages["Bob"])' },
        practice: { question: 'Count how many times each number appears in: nums = [1, 2, 1, 3, 2, 1]', hint: 'Use count = {} and the .get(key, 0) + 1 pattern.', answer: 'nums = [1, 2, 1, 3, 2, 1]\ncount = {}\nfor n in nums:\n    count[n] = count.get(n, 0) + 1\nprint(count)  # {1: 3, 2: 2, 3: 1}' }
      },
      {
        id: 'l9-1', title: 'Sets',
        explanation: ['A set stores unique values only. If you add a duplicate, nothing happens — the set doesn\'t change. Sets are unordered (no indexes) and support O(1) membership checking.', 'Create a set with curly braces (no colons): {1, 2, 3}. Add with add(). Check membership with in. The main power: checking "is this value in the set?" is instant, always.', 'Sets are perfect for: detecting duplicates, tracking visited items in a search, and removing duplicates from a list. If you only need to know "have I seen this before?", use a set.'],
        code: `# Create a set
fruits = {"apple", "banana", "cherry"}

# Add element
fruits.add("date")

# Duplicates are ignored
fruits.add("apple")    # no change
print(fruits)          # {'apple', 'banana', 'cherry', 'date'}

# Check membership — O(1)
print("apple" in fruits)    # True
print("grape" in fruits)    # False

# Remove duplicate from a list
nums = [1, 2, 2, 3, 3, 3, 4]
unique = list(set(nums))
print(unique)     # [1, 2, 3, 4] (order may vary)

# Detect duplicates
def has_duplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False`,
        codeCaption: 'Sets only store unique values and support O(1) membership checks',
        mistake: { title: 'Sets are unordered — no indexing', description: 'Sets have no indexes. You cannot do my_set[0]. If you need order, use a list. Sets are only for membership checks and uniqueness.', bad: 'my_set = {1, 2, 3}\nprint(my_set[0])    # TypeError: set is not subscriptable', good: 'my_set = {1, 2, 3}\nprint(1 in my_set)  # True (membership check — correct use)' },
        practice: { question: 'Use a set to find how many unique characters are in the string "programming".', hint: 'Convert the string to a set, then use len().', answer: 'chars = set("programming")\nprint(len(chars))  # 8\n# unique chars: p, r, o, g, a, m, i, n' }
      },
      {
        id: 'l9-2', title: 'When to Use Each',
        explanation: ['Choosing between list, dict, and set is one of the most important skills in programming. The right choice makes code simpler and faster. The wrong choice makes it slow and complex.', 'Use a list when: order matters, you need indexes, you need to store duplicates, or you\'re building up results. Use a dict when: you need to map one thing to another, count frequencies, or look up values by key. Use a set when: you only care if something exists (membership), or you want unique values.', 'For LeetCode: if a problem involves counting (characters, numbers, occurrences) → dict. If it involves "have I seen this before?" → set. If it involves ordered positions → list.'],
        code: `# When to use LIST: ordered, positional, duplicates OK
scores = [88, 92, 95, 88]   # order matters, duplicates fine

# When to use SET: uniqueness, fast membership check
visited = set()
if node not in visited:
    visited.add(node)

# When to use DICT: key-value mapping, counting
# Count occurrences
count = {}
for item in items:
    count[item] = count.get(item, 0) + 1

# Map one value to another
phone_book = {"Alice": "555-1234", "Bob": "555-5678"}

# Decision tree:
# Need order/positions? → list
# Need to map key to value? → dict
# Just need to know if something exists? → set`,
        codeCaption: 'List = ordered. Dict = key→value mapping. Set = unique membership.',
        mistake: { title: 'Using a list when a set/dict would be faster', description: 'Checking "if x in my_list" is O(n) — it scans every element. Checking "if x in my_set" is O(1). For large data, this difference is enormous.', bad: 'seen_list = []\nfor n in nums:\n    if n in seen_list:  # O(n) — slow!', good: 'seen_set = set()\nfor n in nums:\n    if n in seen_set:   # O(1) — instant!' },
        practice: { question: 'What data structure would you use to count how many times each word appears in a sentence?', hint: 'You\'re mapping word → count.', answer: 'A dictionary. Each unique word is a key, and the count is the value.\n\nwords = sentence.split()\ncount = {}\nfor word in words:\n    count[word] = count.get(word, 0) + 1' }
      },
      {
        id: 'l9-3', title: 'How They Solve LeetCode Problems',
        explanation: ['Dictionaries and sets are the backbone of most Easy and Medium LeetCode problems. The key insight: these data structures trade memory for speed. By storing information in them, you avoid slow repeated scanning.', 'The most common pattern: "two-pass with a dict" (first pass builds the dict, second pass queries it) and "single-pass set" (build and query simultaneously in one loop).', 'After this lesson, you have everything needed to attempt Two Sum, Contains Duplicate, Valid Anagram, and many more. The next level will walk you through how to actually approach these problems.'],
        code: `# Pattern 1: Single-pass set — "have I seen this?"
def contains_duplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:    # already saw it → duplicate!
            return True
        seen.add(n)
    return False

# Pattern 2: Dict for counting — "how many times?"
def is_anagram(s, t):
    count = {}
    for c in s: count[c] = count.get(c, 0) + 1
    for c in t:
        if c not in count or count[c] == 0:
            return False
        count[c] -= 1
    return True

# Pattern 3: Dict for "seen + its index"
def two_sum(nums, target):
    seen = {}   # {value: index}
    for i, n in enumerate(nums):
        complement = target - n
        if complement in seen:
            return [seen[complement], i]
        seen[n] = i`,
        codeCaption: 'These three dict/set patterns solve most Easy LeetCode problems',
        mistake: { title: 'Building the full dict before querying (when not needed)', description: 'In Two Sum, you can check AND store in the same loop. You don\'t need a first pass to build the dict and a second pass to query it.', bad: '# Two pass — works but unnecessary\nfor n in nums: seen[n] = ...\nfor i, n in enumerate(nums):\n    if target - n in seen: ...', good: '# Single pass — build and query simultaneously\nfor i, n in enumerate(nums):\n    if target - n in seen: return result\n    seen[n] = i' },
        practice: { question: 'Using a set, write a function that checks if a list of numbers has any duplicates. Return True if yes, False if no.', hint: 'Pattern 1 from this lesson.', answer: 'def has_duplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False' }
      }
    ]
  },
  {
    id: 10, slug: 'leetcode-prep', title: 'Beginner LeetCode Prep',
    subtitle: 'How to actually approach and solve coding problems',
    color: '#d29922',
    lessons: [
      {
        id: 'l10-0', title: 'How to Read a Problem',
        explanation: ['Reading a LeetCode problem carefully is half the work. Beginners rush into coding. Experienced programmers spend 30-50% of their time just understanding the problem.', 'Read the problem statement, then look at the examples — often they explain the problem better than the description. Check the constraints (how large can the input be?). Constraints tell you what time complexity you need.', 'The function signature tells you: what inputs you receive (names and types) and what to return. Never ignore this — every LeetCode solution must match the given signature exactly.'],
        code: `# Example: reading the Two Sum problem

# Problem: Given nums and target, return indices of
# two numbers that add up to target.

# Function signature (given to you):
# def two_sum(self, nums: List[int], target: int) -> List[int]:

# Step 1: What is the INPUT?
# - nums: a list of integers  e.g. [2, 7, 11, 15]
# - target: an integer        e.g. 9

# Step 2: What is the OUTPUT?
# - A list of two indexes     e.g. [0, 1]
# (because nums[0] + nums[1] = 2 + 7 = 9)

# Step 3: What are the constraints?
# - Exactly one solution exists
# - Cannot use the same element twice

# Step 4: Verify with examples:
# nums=[2,7,11,15], target=9 → [0,1] ✓
# nums=[3,2,4],     target=6 → [1,2] ✓`,
        codeCaption: 'Spend time understanding the problem before writing any code',
        mistake: { title: 'Jumping straight to coding', description: 'Writing code before fully understanding the problem leads to wasted time. Spend 5-10 minutes just reading and understanding before touching the keyboard.', bad: '# Read first line → immediately start coding\n# Result: solve the wrong problem', good: '# 1. Read entire problem\n# 2. Read all examples\n# 3. Ask: what is input? what is output?\n# 4. Then start coding' },
        practice: { question: 'For "Contains Duplicate": given an integer array, return true if any value appears at least twice. What is the input? What is the output?', hint: 'Read carefully — input is what you receive, output is what you return.', answer: 'Input: a list of integers (e.g. [1, 2, 3, 1])\nOutput: a boolean — True if any number appears more than once, False if all are unique' }
      },
      {
        id: 'l10-1', title: 'Think Step by Step',
        explanation: ['Before writing Python, solve the problem in plain English. Describe, step by step, what you would do if you had to solve it by hand with a pencil and paper.', 'This is called "algorithmic thinking" and it\'s the core skill for coding interviews. The code comes second — the thinking comes first. If you can explain the steps clearly in English, converting to code is straightforward.', 'A good technique: pick one of the examples and trace through it manually. Write down every step. Then generalize those steps into something a computer can follow.'],
        code: `# Example: Two Sum — think before coding

# Manual trace with nums = [2, 7, 11, 15], target = 9

# Step 1: I need to find TWO numbers that add to 9
# Step 2: For each number, I need to know "what number
#         would I need to complete the pair?"
#         For 2: I need 9 - 2 = 7. Is 7 in the list? YES!
#         The pair is (2, 7) at indexes (0, 1).

# Step 3: How to do this efficiently?
#         Option A: Check every pair (slow, O(n²))
#         Option B: For each number, check if complement
#                   is in a dictionary (fast, O(n))

# Step 4: Write the algorithm:
# - Create empty dictionary
# - For each number with its index:
#   - Check if (target - number) is in dictionary
#   - If yes: return [dict[complement], current index]
#   - If no: add {number: index} to dictionary`,
        codeCaption: 'Think first in English, then translate to code',
        mistake: { title: 'Starting with the most complex solution', description: 'Always start with the simplest solution that works, even if it\'s slow. A brute-force O(n²) solution that works is better than a broken O(n) solution. Then optimize.', bad: '# Immediately try to write optimal O(n) solution\n# → get confused → give up', good: '# Step 1: Write brute force (nested loops) — O(n²)\n# Step 2: Verify it works\n# Step 3: Optimize to O(n) with dict\n# Step 4: Verify again' },
        practice: { question: 'In plain English, how would you find a duplicate in [1, 2, 3, 1, 5]? Write out each step without any code.', hint: 'Think about what you would do if you had to check this list by hand.', answer: 'Keep a list of numbers I\'ve already seen.\nFor each number:\n  If I\'ve seen it before → it\'s a duplicate, stop.\n  Otherwise → add it to my "seen" list.\nIf I reach the end without finding one → no duplicates.' }
      },
      {
        id: 'l10-2', title: 'Write Pseudocode',
        explanation: ['Pseudocode is code-like steps written in plain English — halfway between your thinking and actual Python. It lets you structure the logic without worrying about Python syntax.', 'Good pseudocode uses indentation like Python and has action words (create, loop, check, return) but uses English descriptions instead of exact syntax. Once pseudocode is clear, translating to Python is fast.', 'Professional engineers write pseudocode for complex problems. In interviews, writing pseudocode first shows your thought process and lets you get feedback before committing to a full implementation.'],
        code: `# Two Sum — pseudocode then Python

# --- PSEUDOCODE ---
# function two_sum(nums, target):
#   create empty dictionary called "seen"
#   for each number (with its index) in nums:
#     calculate complement = target - number
#     if complement is in seen:
#       return [index of complement, current index]
#     add {number: current index} to seen

# --- PYTHON TRANSLATION ---
def two_sum(nums, target):
    seen = {}                        # empty dictionary
    for i, num in enumerate(nums):   # each number with index
        complement = target - num    # what we need
        if complement in seen:       # found the pair!
            return [seen[complement], i]
        seen[num] = i               # store for later`,
        codeCaption: 'Pseudocode bridges your thinking and actual Python syntax',
        mistake: { title: 'Skipping pseudocode and getting lost in syntax', description: 'Beginners often get stuck trying to remember Python syntax while also figuring out the algorithm. Separate these: figure out the algorithm in pseudocode first, then translate.', bad: '# Trying to write Python while figuring out algorithm\n# → forget syntax → lose track of logic → get frustrated', good: '# First: write pseudocode (logic only)\n# Then: translate to Python (syntax only)\n# Two separate problems, much easier' },
        practice: { question: 'Write pseudocode for Contains Duplicate: check if any number in a list appears more than once.', hint: 'You need to "remember" numbers you\'ve seen before.', answer: 'function contains_duplicate(nums):\n  create empty set called "seen"\n  for each number in nums:\n    if number is already in seen:\n      return True\n    add number to seen\n  return False' }
      },
      {
        id: 'l10-3', title: 'Test with Examples',
        explanation: ['After writing your solution, trace through the given examples manually — line by line — to verify it works before submitting. This catches most bugs before they become wasted submissions.', 'For each example, write down the value of every variable after each step. This "mental execution" is called "tracing" and is a core skill. It\'s also what happens when you use a debugger.', 'Test at least two cases: a normal case and an edge case. Edge cases are unusual inputs: empty list, list with one element, all duplicates, all the same number, negatives. These are where solutions often break.'],
        code: `# Trace through two_sum([2, 7, 11, 15], target=9)

# seen = {}

# i=0, num=2
#   complement = 9 - 2 = 7
#   7 in seen? NO ({} is empty)
#   seen = {2: 0}

# i=1, num=7
#   complement = 9 - 7 = 2
#   2 in seen? YES! seen[2] = 0
#   return [0, 1] ✓

# Test edge cases:
# two_sum([3, 3], target=6) → [0, 1] ✓ (same number twice)
# two_sum([1, 2], target=9) → None? Should return [-1,-1]?
# (Check problem: "exactly one solution always exists" → ok)

# Always ask: what if the list is empty?
# What if there are negative numbers?
# What if target is 0?`,
        codeCaption: 'Trace through examples manually — find bugs before submitting',
        mistake: { title: 'Only testing the easy example', description: 'Problems always have multiple test cases, including edge cases. Testing only the first example and submitting leads to wrong answers. Always test at least 3 cases.', bad: '# Test only example 1, submit immediately\n# → wrong answer on edge cases', good: '# Test example 1 (normal case)\n# Test example 2 (another normal case)\n# Test edge case (empty, single, all same, negatives)' },
        practice: { question: 'Trace through contains_duplicate([1, 2, 3, 1]) step by step. Write the state of your "seen" set after each iteration.', hint: 'Start with seen = set(), then process each number.', answer: 'seen = {}\nn=1: 1 not in seen → seen = {1}\nn=2: 2 not in seen → seen = {1, 2}\nn=3: 3 not in seen → seen = {1, 2, 3}\nn=1: 1 IS in seen → return True ✓' }
      },
      {
        id: 'l10-4', title: 'Your First LeetCode Problems',
        explanation: ['You are ready. You know variables, strings, numbers, booleans, conditions, loops, functions, lists, dictionaries, and sets. That is enough to solve real LeetCode problems.', 'The Practice Problems section has 5 beginner problems with starter code, hints, and step-by-step solutions. Attempt them in this order: Contains Duplicate first (simplest), then Reverse String, Valid Anagram, Two Sum, Best Time to Buy and Sell Stock.', 'The approach for every problem: (1) read carefully, (2) think in English, (3) write pseudocode, (4) translate to Python, (5) trace through examples, (6) submit. You won\'t get it right every time — that\'s normal. The learning is in the struggle.'],
        code: `# You now know everything needed for these problems:

# Contains Duplicate — uses: set, for loop
# def contains_duplicate(nums):
#     seen = set()
#     for n in nums:
#         if n in seen: return True
#         seen.add(n)
#     return False

# Reverse String — uses: list, two pointers
# def reverse_string(s):
#     left, right = 0, len(s) - 1
#     while left < right:
#         s[left], s[right] = s[right], s[left]
#         left += 1; right -= 1

# Two Sum — uses: dict, for loop, enumerate
# def two_sum(nums, target):
#     seen = {}
#     for i, n in enumerate(nums):
#         if target - n in seen: return [seen[target-n], i]
#         seen[n] = i

# Head to "Practice Problems" in the sidebar to try them!`,
        codeCaption: 'You have the tools. Go to Practice Problems and start solving.',
        mistake: { title: 'Waiting until you feel "ready"', description: 'You will never feel 100% ready. The only way to get better at solving problems is to attempt problems — struggle, get stuck, look at hints, understand the solution, and try again.', bad: '# "I\'ll try LeetCode when I know more Python"\n# → never try\n# → never improve', good: '# Attempt the problem now, even if you get stuck\n# Look at Hint 1, try again\n# Look at Hint 2, try again\n# Read the solution, understand it fully\n# Try again from scratch next day' },
        practice: { question: 'Go to Practice Problems in the sidebar and attempt Contains Duplicate. Come back here after you\'ve tried it (with or without hints).', hint: 'Use a set. Loop through the numbers. Check if you\'ve seen each one before.', answer: 'def contains_duplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False\n\n# If you got this: excellent! You solved a real LeetCode problem.\n# If you needed hints: that is completely normal. Keep going.' }
      }
    ]
  },
  {
    id: 11, slug: 'problem-solving', title: 'Problem-Solving Basics',
    subtitle: 'How to actually approach a problem, not just memorize syntax',
    color: '#79c0ff',
    lessons: [
      {
        id: 'l11-0', title: 'How to Read a Problem Carefully',
        explanation: [
          'Beginners read a problem once and start coding. Strong programmers read it three times before touching the keyboard. Why? Because most "I can\'t solve it" moments are actually "I didn\'t fully understand it" moments.',
          'A LeetCode problem has 4 parts: (1) the description, (2) the function signature, (3) examples, and (4) constraints. Each tells you something different. Skip any of them and you\'ll waste time.',
          'The goal of reading is not to memorize the problem. The goal is to be able to explain it to a friend in plain English without looking at it.'
        ],
        analogy: 'Think of it like reading a recipe. If you skim and see "chicken, oven, 400°F", you might miss "marinate overnight first". You\'d ruin dinner. Code is the same: skip a constraint, ruin your solution.',
        code: '# Reading "Two Sum" carefully\n\n# DESCRIPTION:\n# Given a list of numbers and a target, return INDICES of two\n# numbers that add up to target.\n#   Key word: INDICES (positions), not the numbers themselves\n\n# SIGNATURE:\n# def two_sum(nums, target):\n#   nums = a list of integers\n#   target = a single integer\n#   returns: a list of TWO indices\n\n# EXAMPLES:\n# nums=[2,7,11,15], target=9 → [0,1]\n#   Why? nums[0]=2, nums[1]=7, 2+7=9 ✓\n\n# CONSTRAINTS:\n# - Exactly one valid answer exists\n# - You cannot use the same element twice',
        codeCaption: 'Break the problem into 4 parts. Don\'t code until all 4 are crystal clear.',
        stepByStep: [
          '1. Read the description — what is being asked in plain English?',
          '2. Look at the function signature — what types are inputs/outputs?',
          '3. Trace through each example by hand — confirm you understand',
          '4. Check constraints — how big is the input? Are there edge cases?',
          '5. Restate the problem in your own words before coding'
        ],
        mistake: {
          title: 'Coding from the first sentence',
          description: 'Many beginners read "Given an array of numbers..." and immediately start typing. Then they realize they misunderstood and have to throw the code away.',
          bad: '# Read first line → start coding → realize halfway through\n# you\'re solving the wrong problem',
          good: '# Read description → read examples → restate aloud →\n# write 2-3 lines of approach in comments → THEN code'
        },
        quiz: {
          question: 'You see a problem that says "return the indices". The example shows nums=[5,3,7], target=10 returning [0,2]. What does the function need to return?',
          options: [
            'The numbers that add up to the target (5 and 7)',
            'The positions of those numbers in the list (0 and 2)',
            'The sum of the two numbers (10)',
            'A True or False whether a pair exists'
          ],
          correctIndex: 1,
          explanation: '"Indices" means positions, not values. nums[0]=5 and nums[2]=7. The example confirms this — [0,2] are positions, not numbers.'
        },
        challenge: {
          description: 'Write a function understand_problem(text) that returns True if the text contains the word "indices" (case-insensitive). This simulates "scanning a problem for important keywords".',
          starter: 'def understand_problem(text):\n    # return True if "indices" appears (case insensitive)\n    pass',
          tests: [
            { call: 'understand_problem("Return the indices of two numbers")', expected: true },
            { call: 'understand_problem("RETURN THE INDICES")', expected: true },
            { call: 'understand_problem("Return the values")', expected: false },
            { call: 'understand_problem("")', expected: false }
          ],
          solution: 'def understand_problem(text):\n    return "indices" in text.lower()',
          hint: 'Use .lower() on the text first, then use the "in" operator.'
        },
        practice: {
          question: 'Read this problem out loud: "Given a list of integers, return the largest one. If the list is empty, return None." Now restate it in your own words.',
          hint: 'What is the input? What is the output? What is the edge case?',
          answer: 'Input: a list of integers (could be empty). Output: the largest integer in the list, or None if the list has no items. Edge case: empty list returns None instead of crashing.'
        },
        reflection: 'Can you describe in your own words why reading a problem 3 times before coding actually saves time, even though it feels slower at first?'
      },
      {
        id: 'l11-1', title: 'Plan Before You Code',
        explanation: [
          'Once you understand the problem, the next step is NOT to write code. It is to write the plan in plain English. This is called "pseudocode" — code-like steps in human language.',
          'Pseudocode lets you focus on the logic without worrying about Python syntax. You decide WHAT the steps are, then translate them into actual Python.',
          'A good plan is concrete enough that translating it to code is mostly mechanical. If you\'re still inventing the algorithm while typing Python, you\'re doing two hard things at once.'
        ],
        analogy: 'Like building IKEA furniture. The instructions show every step in pictures BEFORE you touch a single screw. Pseudocode is your instructions — you wouldn\'t skip them and start drilling.',
        code: '# PLANNING two_sum BEFORE writing Python\n\n# Plain English plan:\n#   1. I\'ll go through each number in the list\n#   2. For each number, I\'ll calculate what I need (target - num)\n#   3. I\'ll keep a record of numbers I\'ve already seen\n#   4. If the number I need is in my record, I found the pair!\n#   5. Otherwise, add the current number to my record\n\n# Pseudocode (more code-like):\n#   create empty dict called seen\n#   loop through nums with index i and value num:\n#       complement = target - num\n#       if complement in seen:\n#           return [seen[complement], i]\n#       seen[num] = i\n\n# Now translating to Python is straightforward:\ndef two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i',
        codeCaption: 'Plain English → Pseudocode → Python. Three small jumps instead of one giant leap.',
        stepByStep: [
          '1. Restate the problem in 1 sentence',
          '2. Write 3-5 plain English steps for solving it',
          '3. Convert those steps to pseudocode (loops, conditions, variables)',
          '4. Translate pseudocode to actual Python',
          '5. Test against the given examples'
        ],
        mistake: {
          title: 'Skipping the plan because "I know what to do"',
          description: 'You THINK you know what to do, but in your head it\'s a fuzzy idea. Writing the plan forces you to make it concrete — and that\'s where you discover gaps in your thinking.',
          bad: '# "I\'ll just figure it out as I code" — you start, get stuck,\n# delete code, restart, get stuck again, give up',
          good: '# Spend 5 minutes writing 5 lines of pseudocode.\n# Save 30 minutes of confused coding.'
        },
        quiz: {
          question: 'Why is pseudocode useful BEFORE writing real Python?',
          options: [
            'It is required by Python and the code won\'t run otherwise',
            'It separates "what to do" (logic) from "how to write it" (syntax)',
            'It runs faster than Python code',
            'It tells the computer what type each variable should be'
          ],
          correctIndex: 1,
          explanation: 'Pseudocode lets you focus only on the logic. Once the logic is clear, translating to Python is the easier half.'
        },
        challenge: {
          description: 'Write the function double_each(nums) that returns a new list where every number is doubled. Plan it first in your head: (1) make empty list, (2) loop through nums, (3) append num*2 to the new list, (4) return it.',
          starter: 'def double_each(nums):\n    # plan: create result list, loop, append doubled value\n    pass',
          tests: [
            { call: 'double_each([1, 2, 3])', expected: [2, 4, 6] },
            { call: 'double_each([])', expected: [] },
            { call: 'double_each([5])', expected: [10] },
            { call: 'double_each([-1, 0, 1])', expected: [-2, 0, 2] }
          ],
          solution: 'def double_each(nums):\n    result = []\n    for n in nums:\n        result.append(n * 2)\n    return result',
          hint: 'result = []  →  for n in nums:  →  result.append(n*2)  →  return result'
        },
        practice: {
          question: 'Write pseudocode (no Python yet!) for: "given a list, return the count of even numbers".',
          hint: 'Counter starts at 0. Loop through. If even, increment.',
          answer: 'create count = 0\nloop through each n in nums:\n    if n % 2 == 0:\n        count = count + 1\nreturn count'
        },
        reflection: 'Have you ever started coding and gotten stuck halfway through because you didn\'t fully know what to do? How would planning first have helped?'
      },
      {
        id: 'l11-2', title: 'Test with Examples',
        explanation: [
          'After you write code, you must test it. Not just "look at it and assume it works". Actually run it on the given examples and on edge cases you make up yourself.',
          'The examples in the problem are the BARE MINIMUM. They test happy paths. Real bugs hide in edge cases: empty input, single element, duplicates, negatives, very large/small values, all the same value.',
          'Mental tracing — walking through code line by line on paper — is one of the most underrated skills. Do it before submitting. You\'ll catch silly mistakes.'
        ],
        analogy: 'Like proofreading an essay. You don\'t just write it and submit. You read it back, looking for typos and weird sentences. Tracing code is proofreading.',
        code: '# Tracing two_sum([2, 7, 11, 15], target=9) by hand:\n\n# seen = {}\n\n# i=0, num=2:\n#   complement = 9 - 2 = 7\n#   7 in seen? NO ({} is empty)\n#   seen = {2: 0}\n\n# i=1, num=7:\n#   complement = 9 - 7 = 2\n#   2 in seen? YES! seen[2] = 0\n#   return [0, 1] ✓\n\n# Edge cases to test yourself:\n#   two_sum([3, 3], 6)        → [0, 1]  (same number twice)\n#   two_sum([1, -1], 0)       → [0, 1]  (negatives)\n#   two_sum([5, 75, 25], 100) → [1, 2]',
        codeCaption: 'Trace one line at a time. Track what each variable holds at each step.',
        stepByStep: [
          '1. Run the code on the given example and check the result',
          '2. Trace through it on paper — write down each variable\'s value',
          '3. Try edge cases: empty input, single item, duplicates, negatives',
          '4. If your trace differs from the actual result, find where they diverge',
          '5. The first divergence is your bug'
        ],
        mistake: {
          title: 'Submitting after only testing the first example',
          description: 'Easy problems often have 2-3 visible examples but 30+ hidden test cases. The first example is just to help you understand. The hidden tests catch bugs in edge cases.',
          bad: '# Test example 1 → it works → submit\n# → "Wrong Answer" on test 17, an empty list',
          good: '# Test all visible examples, plus:\n# - empty input\n# - single element\n# - all same values\n# - very large/small values\n# - negatives'
        },
        quiz: {
          question: 'Your function passes the given example but fails on hidden tests. What is most likely the cause?',
          options: [
            'Python is broken',
            'Your code is too fast and the tests time out',
            'You have a bug in an edge case the example didn\'t cover',
            'The problem is unsolvable'
          ],
          correctIndex: 2,
          explanation: 'The first example tests the happy path. Hidden tests probe edge cases. Empty inputs, duplicates, and boundary values are the usual culprits.'
        },
        challenge: {
          description: 'Write safe_divide(a, b) that returns a/b, but returns None if b is 0 (instead of crashing). Test it mentally first!',
          starter: 'def safe_divide(a, b):\n    # check for b == 0 first\n    pass',
          tests: [
            { call: 'safe_divide(10, 2)', expected: 5 },
            { call: 'safe_divide(10, 0)', expected: null },
            { call: 'safe_divide(0, 5)', expected: 0 },
            { call: 'safe_divide(-6, 3)', expected: -2 }
          ],
          solution: 'def safe_divide(a, b):\n    if b == 0:\n        return None\n    return a / b',
          hint: 'if b is 0, return None. Otherwise return a / b.'
        },
        practice: {
          question: 'Trace through this code and predict the output BEFORE running it:\n\nx = 5\nfor i in range(3):\n    x = x + i\nprint(x)',
          hint: 'i goes through 0, 1, 2. Add each to x.',
          answer: '8\n\nStart: x=5. i=0: x=5+0=5. i=1: x=5+1=6. i=2: x=6+2=8. Print 8.'
        },
        reflection: 'When was the last time a bug surprised you? In hindsight, what test case would have caught it earlier?'
      },
      {
        id: 'l11-3', title: 'Debug Like a Detective',
        explanation: [
          'Bugs aren\'t mysterious — they\'re evidence of a logic mismatch between what you THINK your code does and what it ACTUALLY does. Debugging is finding where those two diverge.',
          'The fastest debugging tool you have is print(). Drop print() statements at key spots to see what your variables actually hold at each step. This is called "print debugging" and even senior engineers use it constantly.',
          'When you see an error, READ THE MESSAGE. Python errors tell you (1) the type of error, (2) the line number, and (3) often what specifically went wrong. The answer is usually right there.'
        ],
        analogy: 'A detective doesn\'t guess who the killer is. They follow the clues. Print statements are your clues — they show you what actually happened, not what you hoped happened.',
        code: '# Bug: this should sum positive numbers but returns 0\ndef sum_positives_buggy(nums):\n    total = 0\n    for n in nums:\n        if n > 0:\n            total = 0     # BUG: should be total += n\n    return total\n\n# Debug with print():\ndef sum_positives_debug(nums):\n    total = 0\n    for n in nums:\n        print(f"Looking at {n}, total is {total}")\n        if n > 0:\n            total = 0\n            print(f"  After update, total is {total}")  # !! always 0\n    return total\n\n# Now you can SEE the bug:\n# total resets to 0 instead of adding n.\n# Fix: change "total = 0" to "total += n"',
        codeCaption: 'print() reveals what your variables actually hold at each step.',
        stepByStep: [
          '1. Read the error message carefully (last line is the actual error)',
          '2. Note the line number — that\'s where Python noticed the problem',
          '3. Add print() statements before/after the suspicious area',
          '4. Run again and compare what variables actually hold to what you expected',
          '5. The first divergence is the bug — fix it'
        ],
        mistake: {
          title: 'Changing code randomly hoping it fixes itself',
          description: 'Beginners often "shotgun debug" — randomly tweak code without understanding why it\'s broken. This makes things worse. Find the bug first, THEN fix it.',
          bad: '# Try removing a line → still broken → add a +1 → still broken\n# → swap two lines → still broken → give up',
          good: '# Add print() to see actual values\n# Compare to expected values\n# Find the line where they diverge\n# Fix THAT specific line'
        },
        quiz: {
          question: 'Your function returns the wrong answer. What is the FIRST thing you should do?',
          options: [
            'Rewrite the function from scratch',
            'Add print() statements to see what the variables actually contain',
            'Try random changes until something works',
            'Ask someone else to fix it'
          ],
          correctIndex: 1,
          explanation: 'print() shows what your code actually does. Without that information, every "fix" is just guessing.'
        },
        challenge: {
          description: 'Fix the bug in this function. It should return the count of items in nums that equal target. (Test it mentally first!)',
          starter: 'def count_target(nums, target):\n    count = 0\n    for n in nums:\n        if n == target:\n            count = 1     # ← bug here\n    return count',
          tests: [
            { call: 'count_target([1, 2, 1, 3, 1], 1)', expected: 3 },
            { call: 'count_target([5, 5, 5], 5)', expected: 3 },
            { call: 'count_target([1, 2, 3], 4)', expected: 0 },
            { call: 'count_target([], 1)', expected: 0 }
          ],
          solution: 'def count_target(nums, target):\n    count = 0\n    for n in nums:\n        if n == target:\n            count += 1\n    return count',
          hint: 'count = 1 sets count to 1 every time. You want to ADD 1 each time. Use count += 1.'
        },
        practice: {
          question: 'You see this error: "TypeError: can only concatenate str (not int) to str" on line 5. What does it mean?',
          hint: 'Python is complaining about mixing strings and integers.',
          answer: 'You tried to add (or join with +) a string and an integer. For example: "Age: " + 25. The fix is to convert the integer to a string: "Age: " + str(25), or use an f-string: f"Age: {25}".'
        },
        reflection: 'Describe a recent bug you fixed. How did you find it? What would help you find similar bugs faster next time?'
      },
      {
        id: 'l11-4', title: 'When You\'re Stuck',
        explanation: [
          'Getting stuck is not a sign you\'re bad at coding. It\'s a sign you\'re actually programming. Every developer — beginner or 20-year veteran — gets stuck. The difference is what they do next.',
          'When stuck, the worst move is to keep staring at the same code for an hour. Better moves: simplify the problem, walk away briefly, talk through the problem out loud, or look at a hint.',
          'Hints are not cheating. Looking at a hint, understanding why it works, then trying again from scratch builds real skill. Avoiding hints out of pride wastes time and teaches you nothing.'
        ],
        analogy: 'Like getting lost while driving. You don\'t keep driving in circles for 2 hours — you check the map. Hints and Google are your map. Use them.',
        code: '# WHEN STUCK, TRY THIS LADDER:\n\n# Step 1: Simplify the problem\n#   What if the input had only 1 element? Could you solve it then?\n#   Solve the simple case first, then expand.\n\n# Step 2: Trace through an example by hand\n#   Don\'t try to invent an algorithm — manually solve\n#   ONE example with paper and pencil. Then ask:\n#   what steps did MY BRAIN follow? Convert those steps to code.\n\n# Step 3: Talk through it out loud\n#   Saying it out loud forces clarity.\n#   This is called "rubber duck debugging".\n\n# Step 4: Take a break\n#   5-10 minute walk. Solutions appear when you stop pushing.\n\n# Step 5: Look at hint 1 (just the first hint)\n#   Read it, close it, try again.\n\n# Step 6: Read the solution, understand it deeply,\n#   close it, write it from scratch yourself.',
        codeCaption: 'A ladder to climb when stuck. Don\'t skip steps. Don\'t feel guilty using hints.',
        stepByStep: [
          '1. Simplify: solve a tiny version of the problem first',
          '2. Trace by hand on paper — what steps does YOUR BRAIN take?',
          '3. Explain the problem out loud (to a person, pet, or rubber duck)',
          '4. Take a 5–10 minute break; come back fresh',
          '5. Look at hint 1 only; close it; try again',
          '6. As a last resort: read the solution → close it → rewrite from scratch'
        ],
        mistake: {
          title: 'Refusing to look at hints',
          description: 'Many beginners think looking at a hint = failure. It\'s the opposite. The skill is in UNDERSTANDING the hint and being able to redo it from scratch — not in suffering alone for 3 hours.',
          bad: '# 3 hours stuck on one problem\n# → frustrated → quit programming for the night\n# → don\'t come back for a week',
          good: '# 30 minutes stuck → look at hint 1\n# → understand it → try again → solve it\n# → move on to next problem with confidence'
        },
        quiz: {
          question: 'You\'ve been stuck on a problem for 45 minutes. What is the BEST next move?',
          options: [
            'Keep staring at the code — quitters look at hints',
            'Delete everything and start over from scratch',
            'Take a short break, then look at one hint and try again',
            'Move to a much harder problem to challenge yourself'
          ],
          correctIndex: 2,
          explanation: 'A break clears your head. A small hint unblocks you without giving away the answer. You learn far more by getting unstuck and finishing than by suffering forever.'
        },
        challenge: {
          description: 'Quick warmup: write a function called greet(name) that returns the string "Hello, NAME!" (replacing NAME with the input). Use this to confirm your testing works.',
          starter: 'def greet(name):\n    pass',
          tests: [
            { call: 'greet("Alice")', expected: 'Hello, Alice!' },
            { call: 'greet("Bob")', expected: 'Hello, Bob!' },
            { call: 'greet("")', expected: 'Hello, !' }
          ],
          solution: 'def greet(name):\n    return f"Hello, {name}!"',
          hint: 'Use an f-string: return f"Hello, {name}!"'
        },
        practice: {
          question: 'Think of a coding problem you struggled with recently (any kind). Which step on the ladder would have unblocked you fastest?',
          hint: 'Was it understanding? An algorithm? A bug? A syntax issue?',
          answer: 'Different problems need different steps. Logic confusion → trace by hand. Stuck on algorithm → simplify or look at hint. Bug you can\'t find → print debugging or take a break. Knowing which to use comes with practice.'
        },
        reflection: 'How do you feel about looking at hints? Do you see them as failure or as a learning tool? What would change if you treated hints like a teacher\'s help?'
      }
    ]
  },
  {
    id: 12, slug: 'leetcode-patterns', title: 'Beginner LeetCode Patterns',
    subtitle: 'The 5 patterns that solve most Easy problems',
    color: '#f0883e',
    lessons: [
      {
        id: 'l12-0', title: 'Pattern 1: Hash Map',
        explanation: [
          'A hash map (Python dict) gives you O(1) lookups — meaning checking "is this in the dict?" is instant, no matter how many items it holds.',
          'This is huge because the alternative is searching through a list, which is O(n) — slow for big inputs. Hash maps turn many "naive O(n²)" problems into fast O(n) solutions.',
          'The pattern: as you iterate through data, store useful information (counts, indices, seen values) in a dict. Later in the same loop, query the dict to make decisions.'
        ],
        analogy: 'Like a phone book. To find Bob\'s number in a list of 10,000 names, you\'d scan through each one — slow. A phone book is sorted/indexed, so you flip directly to "Bob" — fast. Hash maps are even faster: instant lookup.',
        code: '# Hash Map Pattern: store as you go, query instantly\n\ndef two_sum(nums, target):\n    seen = {}                          # value → index\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:         # O(1) lookup!\n            return [seen[complement], i]\n        seen[num] = i                  # remember for later\n\n# Why this beats nested loops:\n#   Nested loops: O(n²) — 10,000 items = 100 million checks\n#   Hash map:     O(n)  — 10,000 items =      10,000 checks\n# That\'s a 10,000x speedup!',
        codeCaption: 'Build the dict and query it in the same single pass — O(n) total.',
        stepByStep: [
          '1. Create an empty dict (often called "seen" or "counts")',
          '2. Loop through the input',
          '3. For each item, ask: "what do I need to find a match?" (e.g. complement)',
          '4. Check if that thing is already in the dict — if yes, return result',
          '5. Otherwise, add the current item to the dict and continue'
        ],
        mistake: {
          title: 'Using a list instead of a dict for lookups',
          description: '"if x in my_list" looks the same as "if x in my_dict", but the list version is O(n) (scans every item). For large inputs, that\'s the difference between 1 second and 1 hour.',
          bad: 'seen = []          # list — slow lookup\nfor n in nums:\n    if x in seen:  # O(n) per check, O(n²) total',
          good: 'seen = set()       # set — fast lookup\nfor n in nums:\n    if x in seen:  # O(1) per check, O(n) total'
        },
        quiz: {
          question: 'Why is "x in dict" faster than "x in list"?',
          options: [
            'Dictionaries are written in C and lists are written in Python',
            'Dicts use hashing for O(1) lookup; lists scan every element for O(n) lookup',
            'Lists are slower because they\'re ordered',
            'They are actually the same speed'
          ],
          correctIndex: 1,
          explanation: 'Dicts (and sets) use hash tables under the hood, giving instant lookup. Lists must check each element one by one.'
        },
        challenge: {
          description: 'Write count_words(words) that returns a dict mapping each word to how many times it appears.',
          starter: 'def count_words(words):\n    counts = {}\n    # use counts.get(w, 0) + 1 pattern\n    return counts',
          tests: [
            { call: 'count_words(["a", "b", "a", "c", "b", "a"])', expected: { a: 3, b: 2, c: 1 } },
            { call: 'count_words([])', expected: {} },
            { call: 'count_words(["x"])', expected: { x: 1 } }
          ],
          solution: 'def count_words(words):\n    counts = {}\n    for w in words:\n        counts[w] = counts.get(w, 0) + 1\n    return counts',
          hint: 'For each word w: counts[w] = counts.get(w, 0) + 1'
        },
        practice: {
          question: 'When should you reach for a hash map?',
          hint: 'Think: "is this thing already there?" or "how many times does X appear?"',
          answer: 'Use a hash map when you need: (1) fast lookups ("have I seen this?"), (2) counting frequencies, or (3) mapping one thing to another (like value→index).'
        },
        reflection: 'In your own words, why does using a dict turn an O(n²) problem into O(n)?'
      },
      {
        id: 'l12-1', title: 'Pattern 2: Two Pointers',
        explanation: [
          'Two pointers is a technique where you have two indexes moving through a list — usually one from the left and one from the right, moving toward each other. It\'s perfect for problems involving pairs or in-place modifications.',
          'It works on sorted arrays or when you need to compare/swap from both ends. Examples: reversing a string, checking palindromes, finding pairs that sum to a target in a sorted array.',
          'The win: instead of checking every pair (O(n²)), you sweep through with two pointers in a single pass — O(n).'
        ],
        analogy: 'Like two people walking toward each other on a long bridge to find the middle. Each takes one step at a time. They meet in O(n/2) ≈ O(n) steps, not O(n²) steps.',
        code: '# Two Pointers Pattern\n\n# Example 1: Reverse a string in-place\ndef reverse_string(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        s[left], s[right] = s[right], s[left]\n        left += 1\n        right -= 1\n\n# Example 2: Check palindrome\ndef is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True',
        codeCaption: 'Two pointers move toward each other — O(n) sweep instead of O(n²) nested loops.',
        stepByStep: [
          '1. Set left = 0 and right = len(arr) - 1',
          '2. Loop while left < right',
          '3. Inside the loop, look at arr[left] and arr[right]',
          '4. Take action (swap, compare, etc.)',
          '5. Move pointers: left += 1, right -= 1'
        ],
        mistake: {
          title: 'Using "while left <= right" by accident',
          description: 'For pair problems, you usually want left < right (strict). Using <= will compare/swap the same element with itself in the middle.',
          bad: 'while left <= right:   # processes middle element twice',
          good: 'while left < right:    # stops just before they meet'
        },
        quiz: {
          question: 'What does this loop do? "left=0, right=len(s)-1; while left<right: s[left],s[right]=s[right],s[left]; left+=1; right-=1"',
          options: [
            'Sorts the list',
            'Reverses the list in place',
            'Removes duplicates',
            'Doubles every element'
          ],
          correctIndex: 1,
          explanation: 'It swaps the first and last, then second and second-to-last, etc. — classic in-place reversal.'
        },
        challenge: {
          description: 'Write reverse_words(words) — a function that reverses a list of words IN PLACE using two pointers (don\'t use words[::-1] or words.reverse()).',
          starter: 'def reverse_words(words):\n    left, right = 0, len(words) - 1\n    # swap from both ends, move toward middle\n    return words',
          tests: [
            { call: 'reverse_words(["a", "b", "c"])', expected: ['c', 'b', 'a'] },
            { call: 'reverse_words(["one", "two"])', expected: ['two', 'one'] },
            { call: 'reverse_words([])', expected: [] },
            { call: 'reverse_words(["solo"])', expected: ['solo'] }
          ],
          solution: 'def reverse_words(words):\n    left, right = 0, len(words) - 1\n    while left < right:\n        words[left], words[right] = words[right], words[left]\n        left += 1\n        right -= 1\n    return words',
          hint: 'while left < right: swap words[left] with words[right], then move both pointers inward.'
        },
        practice: {
          question: 'For nums = [1, 2, 3, 4, 5, 6], if I do two-pointer pairs, which pairs do I compare?',
          hint: 'Start: left=0, right=5. Then left=1, right=4. Then left=2, right=3.',
          answer: '(1, 6), then (2, 5), then (3, 4). After that, left=3 and right=2, so left < right is false — loop ends.'
        },
        reflection: 'What kinds of problems would NOT work with two pointers?'
      },
      {
        id: 'l12-2', title: 'Pattern 3: Sliding Window',
        explanation: [
          'Sliding window is for problems involving a contiguous range of elements (a "window") that grows, shrinks, or slides across the array. It avoids redundantly recomputing things.',
          'Common uses: finding the maximum sum of k consecutive numbers, the longest substring without duplicates, or — like Best Time to Buy and Sell Stock — tracking the best deal so far.',
          'Instead of computing fresh for every position (O(n×k)), you maintain a running value as the window slides — O(n) total.'
        ],
        analogy: 'Like watching a parade through a window. Instead of running outside to look at every float, you stand at one window and the floats slide by. You only update what\'s in view.',
        code: '# Sliding Window Pattern\n\n# Best Time to Buy and Sell Stock — the classic\ndef max_profit(prices):\n    min_price = float(\'inf\')   # cheapest day so far\n    max_profit = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price                  # new low — better to buy here\n        elif price - min_price > max_profit:\n            max_profit = price - min_price     # better profit\n    return max_profit\n\n# Why this beats brute force:\n# Brute force: try every (buy, sell) pair → O(n²)\n# Sliding:     one pass, track running min → O(n)',
        codeCaption: 'Track the running min/max in a single pass — O(n) instead of O(n²).',
        stepByStep: [
          '1. Identify the "running" value you need (running min, max, sum, count)',
          '2. Initialize it appropriately (often float("inf") or 0)',
          '3. Loop once through the data',
          '4. Update the running value as you scan',
          '5. Optionally track the best result seen so far'
        ],
        mistake: {
          title: 'Initializing min with 0 (wrong!)',
          description: 'If all numbers are negative, starting min_val = 0 gives a wrong answer because no real number is < 0 in your data. Use float("inf") or the first element.',
          bad: 'min_val = 0\n# all numbers are negative — never updates!',
          good: 'min_val = float("inf")\n# any real number is smaller — first iteration updates it'
        },
        quiz: {
          question: 'Why is min_price initialized to float("inf") in the stock problem?',
          options: [
            'It looks fancy',
            'So that the FIRST price is always smaller, immediately becoming the new min',
            'Python requires it for any min tracker',
            'It prevents division by zero'
          ],
          correctIndex: 1,
          explanation: 'Any real number is less than infinity, so the first price always becomes the new min on iteration 1. This handles all-negative or all-positive inputs equally.'
        },
        challenge: {
          description: 'Write max_in_list(nums) that returns the largest number in a list using a single pass and a running max tracker. (Don\'t use Python\'s built-in max().)',
          starter: 'def max_in_list(nums):\n    largest = float("-inf")\n    # update largest as you scan\n    return largest',
          tests: [
            { call: 'max_in_list([3, 1, 4, 1, 5, 9, 2])', expected: 9 },
            { call: 'max_in_list([-5, -1, -10])', expected: -1 },
            { call: 'max_in_list([7])', expected: 7 },
            { call: 'max_in_list([0, 0, 0])', expected: 0 }
          ],
          solution: 'def max_in_list(nums):\n    largest = float("-inf")\n    for n in nums:\n        if n > largest:\n            largest = n\n    return largest',
          hint: 'For each n in nums: if n > largest, update largest = n.'
        },
        practice: {
          question: 'Trace through max_profit([7, 1, 5, 3, 6, 4]) step by step — what are min_price and max_profit after each iteration?',
          hint: 'Start: min_price=inf, max_profit=0. Process each price one at a time.',
          answer: '7: min=7, profit=0\n1: min=1, profit=0\n5: min=1, profit=4\n3: min=1, profit=4\n6: min=1, profit=5\n4: min=1, profit=5\nReturn 5.'
        },
        reflection: 'Why is "single-pass with a running tracker" almost always faster than "compare every possible pair"?'
      },
      {
        id: 'l12-3', title: 'Pattern 4: Frequency Counting',
        explanation: [
          'Frequency counting means counting how many times each item appears. It\'s a special case of the hash map pattern, used so often it deserves its own lesson.',
          'Use it for: anagram problems (do two strings have the same characters?), checking if one string can be made from another, finding the most/least common element.',
          'The Python pattern: dict[item] = dict.get(item, 0) + 1. Or use collections.Counter for built-in support.'
        ],
        analogy: 'Like tallying votes in an election. You don\'t check every person individually — you just keep a running count for each candidate.',
        code: '# Frequency Counting Pattern\n\n# Example: Valid Anagram\ndef is_anagram(s, t):\n    if len(s) != len(t):\n        return False\n\n    count = {}\n    for char in s:\n        count[char] = count.get(char, 0) + 1\n\n    for char in t:\n        if char not in count or count[char] == 0:\n            return False\n        count[char] -= 1\n\n    return True\n\n# Even simpler with Counter:\nfrom collections import Counter\ndef is_anagram_v2(s, t):\n    return Counter(s) == Counter(t)',
        codeCaption: 'Build a count dict in one pass, then verify with another. Or use Counter() for one-liners.',
        stepByStep: [
          '1. Initialize an empty dict for counts',
          '2. Loop through items, incrementing count for each',
          '3. Use count.get(item, 0) + 1 to handle items not yet in the dict',
          '4. Optionally compare two count dicts, or look for items with specific counts'
        ],
        mistake: {
          title: 'Using count[item] += 1 when item not in dict',
          description: 'count[item] += 1 crashes if item isn\'t a key yet. Always use .get() with a default, or check "if item in count" first.',
          bad: 'count = {}\nfor c in s:\n    count[c] += 1   # KeyError on first occurrence!',
          good: 'count = {}\nfor c in s:\n    count[c] = count.get(c, 0) + 1   # safe'
        },
        quiz: {
          question: 'Which one-liner correctly counts characters in string s?',
          options: [
            'count = {c: count[c]+1 for c in s}',
            'count = Counter(s)',
            'count = s.count()',
            'count = dict.fromkeys(s, 1)'
          ],
          correctIndex: 1,
          explanation: 'Counter from collections counts frequencies in one call. Option 1 has a name conflict; Option 3 needs a target arg; Option 4 sets every key to 1, not the count.'
        },
        challenge: {
          description: 'Write most_common(s) that returns the character that appears most often in string s. (If there\'s a tie, any of them is fine.)',
          starter: 'def most_common(s):\n    # build counts, find max\n    pass',
          tests: [
            { call: 'most_common("aabbbcc")', expected: 'b' },
            { call: 'most_common("xxx")', expected: 'x' },
            { call: 'most_common("a")', expected: 'a' }
          ],
          solution: 'def most_common(s):\n    counts = {}\n    for c in s:\n        counts[c] = counts.get(c, 0) + 1\n    best_char = ""\n    best_count = 0\n    for c, n in counts.items():\n        if n > best_count:\n            best_char = c\n            best_count = n\n    return best_char',
          hint: 'First build the counts dict. Then loop through it to find the key with the highest value.'
        },
        practice: {
          question: 'Are "listen" and "silent" anagrams?',
          hint: 'Do they have the same letters with the same counts?',
          answer: 'Yes! Both contain: l, i, s, t, e, n — each exactly once. So Counter("listen") == Counter("silent").'
        },
        reflection: 'How is frequency counting different from just using a set?'
      },
      {
        id: 'l12-4', title: 'Pattern 5: Set for Uniqueness',
        explanation: [
          'A set is the simplest data structure when you only care about whether an item exists — not how many times, not in what order. Just "have I seen this before?"',
          'Sets give O(1) membership checks (like dicts) but don\'t store values — only keys. Use them for: detecting duplicates, tracking visited items in a graph, removing duplicates from a list.',
          'When you find yourself writing "if item not in some_list" in a loop — switch to a set. You just turned an O(n²) algorithm into O(n).'
        ],
        analogy: 'Like a bouncer\'s list of banned customers. The bouncer doesn\'t care WHEN you were banned or HOW MANY TIMES — only "are you on the list?". A set is that list.',
        code: '# Set Pattern\n\n# Example: Contains Duplicate\ndef contains_duplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:        # O(1) check\n            return True\n        seen.add(n)          # O(1) add\n    return False\n\n# Pythonic one-liner:\ndef contains_duplicate_v2(nums):\n    return len(nums) != len(set(nums))\n\n# Why? Converting to set removes duplicates.\n# If lengths differ, there were duplicates.',
        codeCaption: 'Sets answer "have I seen this?" instantly. Single pass O(n) duplicate detection.',
        stepByStep: [
          '1. Create an empty set (seen = set())',
          '2. Loop through items',
          '3. For each item, check if it\'s already in seen',
          '4. If yes — found a duplicate, take action',
          '5. If no — add it to seen and continue'
        ],
        mistake: {
          title: 'Using a list when a set would do',
          description: 'A list with "if x not in my_list" works but is O(n) per check. For 10,000 items, that\'s 100 million operations vs 10,000 with a set. Same code shape, 10,000x speedup.',
          bad: 'seen = []\nfor n in nums:\n    if n in seen:    # O(n) — slow!\n        ...',
          good: 'seen = set()\nfor n in nums:\n    if n in seen:    # O(1) — fast!\n        ...'
        },
        quiz: {
          question: 'Which is the cleanest way to check if a list has duplicates?',
          options: [
            'Sort the list and compare adjacent elements',
            'Use nested loops to compare all pairs',
            'len(nums) != len(set(nums))',
            'Iterate twice and count'
          ],
          correctIndex: 2,
          explanation: 'Converting to set removes duplicates. If the set is shorter than the original list, duplicates existed. Concise and O(n).'
        },
        challenge: {
          description: 'Write find_unique(nums) that returns a list of items that appear EXACTLY ONCE in nums, in their original order.',
          starter: 'def find_unique(nums):\n    # use a count dict or two passes\n    pass',
          tests: [
            { call: 'find_unique([1, 2, 2, 3, 3, 4])', expected: [1, 4] },
            { call: 'find_unique([1, 1, 1])', expected: [] },
            { call: 'find_unique([1, 2, 3])', expected: [1, 2, 3] },
            { call: 'find_unique([])', expected: [] }
          ],
          solution: 'def find_unique(nums):\n    counts = {}\n    for n in nums:\n        counts[n] = counts.get(n, 0) + 1\n    return [n for n in nums if counts[n] == 1]',
          hint: 'First count how many times each appears. Then return the ones with count == 1, preserving order.'
        },
        practice: {
          question: 'When would you prefer a dict over a set?',
          hint: 'Sets just store items. Dicts store key-VALUE pairs.',
          answer: 'Use a dict when you need to associate VALUES with the items (like counts, indices, or any extra info). Use a set when you only need to know if something exists.'
        },
        reflection: 'You\'ve now learned 5 patterns. Which one do you think you\'ll reach for most often?'
      }
    ]
  }
];
