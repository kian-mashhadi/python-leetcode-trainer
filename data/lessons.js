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
      },
      {
        id: 'l2-12', title: 'Data Types Review: What is a Data Type?',
        explanation: [
          'A data type is the kind of value something is. The text "hello" is a different kind of thing than the number 7, and Python treats them differently.',
          'Why it matters: most beginner errors come from mixing types — adding a number to text, or trying to do math on something that is actually text. Knowing the type tells you what operations are allowed.',
          'Recap: Python has a few core types you will use every day — str (text), int (whole numbers), float (decimals), bool (True/False), and None (nothing).'
        ],
        analogy: 'Data types are like categories at a grocery store. You can mix apples with apples (numbers with numbers), but you cannot literally add a banana to a loaf of bread — it does not mean anything.',
        code: `# Each value below is a different data type
print("hello")    # str  — text
print(7)          # int  — whole number
print(3.14)       # float — decimal
print(True)       # bool — True or False
print(None)       # None — nothing / empty`,
        codeCaption: 'Five core Python types you will see constantly',
        stepByStep: [
          '1. "hello" is wrapped in quotes → str (text)',
          '2. 7 has no decimal point and no quotes → int',
          '3. 3.14 has a decimal point → float',
          '4. True is a special word (capital T) → bool',
          '5. None is the empty value → NoneType'
        ],
        mistake: { title: 'Treating numbers and text the same', description: 'The number 7 and the text "7" look alike but behave differently. 7 + 1 is 8, but "7" + 1 crashes.', bad: 'print("7" + 1)   # TypeError', good: 'print(int("7") + 1)   # 8' },
        practice: { question: 'Predict: which line crashes?\n\nprint(2 + 3)\nprint("a" + "b")\nprint("a" + 3)', hint: 'Mixing str and int with + does not work.', answer: 'The third line crashes with TypeError. The first prints 5, the second prints "ab".' }
      },
      {
        id: 'l2-13', title: 'Data Types Review: None',
        explanation: [
          'None is a special value that means "nothing" or "no value yet". It is its own type — NoneType — and you will see it often as the result of functions that do not return anything.',
          'Why it matters: when a function quietly returns None, beginners are confused why their variable does not behave like a number. Knowing None exists helps you read errors.',
          'Recap: None means empty. It is not zero, not "", not False — it is its own thing.'
        ],
        code: `result = None
print(result)              # None
print(type(result))        # <class 'NoneType'>

# print() itself returns None
x = print("hi")            # prints "hi"
print(x)                   # None  — print() gave nothing back

# Check for None with "is"
if result is None:
    print("no value yet")`,
        codeCaption: 'None is the "nothing" value — print() returns it, many functions do too',
        mistake: { title: 'Using == None instead of is None', description: 'Python style prefers "is None" for checking None. Both work, but "is None" is the conventional way.', bad: 'if x == None:    # works but not preferred', good: 'if x is None:    # preferred Python style' },
        practice: { question: 'What does this print?\n\nx = print("hi")\nprint(x)', hint: 'What does print() give back?', answer: 'hi\nNone\n\nprint() shows "hi" then returns None, which is stored in x.' }
      },
      {
        id: 'l2-14', title: 'Data Types Review: Why Data Types Matter',
        explanation: [
          'Every operation in Python depends on the type of the values involved. + means "add" for numbers and "join" for strings. Comparing 5 to "5" gives False. Indexing only works on strings and lists, not numbers.',
          'Why it matters: most "weird" Python behavior is just type behavior. Once you read the types in a line, the output becomes predictable.',
          'Recap: always ask, "what type is this?" before predicting what a line will do.'
        ],
        analogy: 'A type is like a passport. The same word "+" gets you different treatment depending on the passport of the values around it.',
        code: `# + behaves differently per type
print(2 + 3)         # 5      (int + int  → addition)
print("2" + "3")     # "23"   (str + str  → concatenation)

# == cares about type
print(5 == "5")      # False  (int vs str)
print(5 == 5.0)      # True   (int and float compare numerically)

# len() works on strings, not ints
print(len("hello"))  # 5
# print(len(5))      # TypeError`,
        codeCaption: 'The same operator does very different things depending on type',
        mistake: { title: 'Ignoring the type when reading code', description: 'If you skim past the type, you cannot predict what + or == will do. Slow down and label each value.', bad: 'print("3" + 4)   # crash — did not notice "3" is a string', good: 'print(int("3") + 4)   # 7 — converted first' },
        practice: { question: 'Predict each line:\n\nprint(1 + 1)\nprint("1" + "1")\nprint(1 == "1")', hint: 'Label the types first.', answer: '2\n11\nFalse\n\nint+int=2, str+str="11", int==str is always False.' }
      },
      {
        id: 'l2-15', title: 'Data Types Review: Common Type Mistakes',
        explanation: [
          'There are a handful of type mistakes that beginners make over and over. Recognizing them on sight is one of the biggest skill jumps in your first weeks of Python.',
          'Why it matters: knowing the shape of these errors means you can fix them in seconds instead of staring at the screen.',
          'Recap: when in doubt, print the value and its type() — the truth always shows up there.'
        ],
        code: `# Mistake 1: forgetting input() returns a string
age = input("age? ")
# print(age + 1)        # TypeError
print(int(age) + 1)     # fix: convert

# Mistake 2: joining text and number with +
score = 100
# print("score: " + score)        # TypeError
print("score: " + str(score))     # fix: convert to str
print(f"score: {score}")          # cleaner — f-string

# Mistake 3: lowercase true/false
# done = true            # NameError
done = True              # correct — capital T

# Mistake 4: thinking 5 and "5" are the same
print(5 == "5")          # False`,
        codeCaption: 'The four type mistakes you will make most often as a beginner',
        mistake: { title: 'Guessing instead of checking', description: 'When a type error appears, do not guess. Print type(x) for each variable involved — the answer is right there.', bad: '# stare at code, guess randomly', good: 'print(type(x), type(y))   # see the types, fix accordingly' },
        practice: { question: 'Which two lines crash?\n\na = "5" + 5\nb = "5" + "5"\nc = 5 + 5\nd = True + 1', hint: 'Mixing str with int crashes; True acts like 1.', answer: 'Only line a crashes. b → "55", c → 10, d → 2 (True counts as 1).' }
      },
      {
        id: 'l2-16', title: 'Data Types Checkpoint',
        explanation: [
          'Quick review before moving on. You should now be able to look at any value and name its type, and predict what + and == will do.',
          'Why it matters: every later chapter — input, conversion, comparisons, conditions — builds directly on these five types.',
          'Recap: str, int, float, bool, None. Five types, one tool to check them: type().'
        ],
        code: `# Name the type of each value
print(type("Python"))   # <class 'str'>
print(type(42))         # <class 'int'>
print(type(3.0))        # <class 'float'>
print(type(False))      # <class 'bool'>
print(type(None))       # <class 'NoneType'>`,
        codeCaption: 'type() is the universal type-checking tool',
        mistake: { title: 'Skipping checkpoints', description: 'Checkpoint lessons feel optional but they cement the basics. Skipping them means later chapters feel harder than they should.', bad: '# scroll past, move on', good: '# answer the quiz, run the code, then continue' },
        practice: { question: 'What type is each?\n\n"42"\n42\n42.0\nTrue\nNone', hint: 'Look at quotes, decimals, capital letters.', answer: 'str, int, float, bool, NoneType.' },
        quiz: {
          question: 'Which line is FALSE?',
          options: [
            'type(7) is int',
            'type("7") is str',
            'type(7.0) is float',
            'type(True) is str'
          ],
          correctIndex: 3,
          explanation: 'True is a bool, not a str. The other three are correct.'
        }
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
      },
      {
        id: 'l3-4', title: 'Math: What is an Operator?',
        explanation: [
          'An operator is a small symbol that does a job on one or two values. + adds, - subtracts, * multiplies. The values on each side are called operands.',
          'Why it matters: every math, comparison, and logic action in Python is just an operator with operands. Naming the parts makes the rest of this chapter easy.',
          'Recap: operator = the symbol. Operands = the values it works on.'
        ],
        analogy: 'An operator is like a verb in a tiny sentence: "5 + 3" reads as "five PLUS three". The numbers are the nouns, the + is the verb.',
        code: `# operator: +     operands: 2 and 3
print(2 + 3)      # 5

# operator: *     operands: 4 and 5
print(4 * 5)      # 20

# operator can also work on text
print("hi" + "!") # hi!`,
        codeCaption: 'Two values + one operator = a tiny expression',
        mistake: { title: 'Confusing operator with operand', description: 'The symbol is the operator; the values are the operands. Saying "the operator is 5" mixes them up.', bad: '# "the operator here is 5"  — wrong', good: '# "the operator is +, the operands are 5 and 3"' },
        practice: { question: 'In 10 * 2, what is the operator and what are the operands?', hint: 'Symbol vs values.', answer: 'Operator: *. Operands: 10 and 2.' }
      },
      {
        id: 'l3-5', title: 'Math: Addition (+)',
        explanation: [
          'The + operator adds two numbers together. On strings it joins them. We focus here on numbers.',
          'Why it matters: addition shows up everywhere — totals, counters, scores, distances.',
          'Recap: + on numbers gives a number; + on strings glues text together.'
        ],
        code: `print(2 + 3)        # 5
print(10 + 7)       # 17
print(1.5 + 2.5)    # 4.0   (float result)
print(-5 + 5)       # 0

# Adding a variable
score = 100
print(score + 50)   # 150`,
        codeCaption: 'Plain + with numbers — the result type matches the inputs',
        mistake: { title: 'Adding text and numbers with +', description: '"5" is text, 5 is a number. Mixing them with + crashes. Convert first.', bad: 'print("5" + 3)   # TypeError', good: 'print(int("5") + 3)   # 8' },
        practice: { question: 'What is 12 + 8 + 5?', hint: 'Left to right.', answer: '25.' }
      },
      {
        id: 'l3-6', title: 'Math: Subtraction (-)',
        explanation: [
          'The - operator subtracts the right value from the left. It also makes numbers negative when written in front: -5.',
          'Why it matters: differences, countdowns, balances — anything that decreases uses subtraction.',
          'Recap: a - b means "a minus b". Order matters.'
        ],
        code: `print(10 - 3)      # 7
print(3 - 10)      # -7    (order matters)
print(5 - 5)       # 0
print(2.5 - 1.0)   # 1.5

balance = 100
balance = balance - 20
print(balance)     # 80`,
        codeCaption: 'Subtraction respects order: a - b is not the same as b - a',
        mistake: { title: 'Forgetting order matters', description: 'Unlike addition, swapping the sides of - changes the sign of the answer.', bad: '# expect 7 from "3 - 10"', good: '# 3 - 10 = -7, not 7' },
        practice: { question: 'Predict: print(20 - 7 - 3)', hint: 'Left to right.', answer: '10. (20 - 7 = 13, then 13 - 3 = 10.)' }
      },
      {
        id: 'l3-7', title: 'Math: Multiplication (*)',
        explanation: [
          'The * operator multiplies two numbers. On strings it repeats the text: "ab" * 3 → "ababab".',
          'Why it matters: scaling, area, totals, and many algorithms use multiplication.',
          'Recap: number * number is product; string * int is repetition.'
        ],
        code: `print(4 * 5)        # 20
print(7 * 0)        # 0
print(2.0 * 3)      # 6.0   (any float makes result float)
print(-2 * 3)       # -6

# String repetition
print("ha" * 3)     # hahaha
print("-" * 10)     # ----------`,
        codeCaption: 'Multiplication on numbers; repetition on strings',
        mistake: { title: 'Multiplying two strings', description: 'You cannot multiply "a" by "b" — Python only allows string * integer.', bad: 'print("a" * "b")   # TypeError', good: 'print("a" * 3)      # aaa' },
        practice: { question: 'What does "ok" * 4 print?', hint: 'Repeat the text.', answer: 'okokokok.' }
      },
      {
        id: 'l3-8', title: 'Math: Division (/)',
        explanation: [
          'The / operator divides the left value by the right. In Python 3, / ALWAYS returns a float, even when the answer is a whole number.',
          'Why it matters: rates, averages, fractions, and many formulas use division. Knowing it always returns a float saves confusion.',
          'Recap: / → float. Always.'
        ],
        code: `print(10 / 2)     # 5.0   (float, not 5)
print(9 / 4)      # 2.25
print(7 / 7)      # 1.0
print(0 / 5)      # 0.0

# Divide by zero is an error
# print(5 / 0)   # ZeroDivisionError`,
        codeCaption: '/ always gives a float, even 10 / 2 = 5.0',
        mistake: { title: 'Expecting an int from /', description: 'Beginners expect 10 / 2 to be the integer 5. It is 5.0. Use // if you want a whole number.', bad: 'x = 10 / 2\n# expecting int, getting float', good: 'x = 10 // 2   # 5 (int)' },
        practice: { question: 'What is the type of 8 / 4?', hint: 'Run type() on it.', answer: 'float (the value is 2.0).' }
      },
      {
        id: 'l3-9', title: 'Math: Floor Division (//)',
        explanation: [
          'The // operator divides and throws away the decimal part. 7 // 2 is 3, not 3.5. This is called floor division.',
          'Why it matters: when you only care about how many whole groups fit (pages, rows, full hours), // is the right tool.',
          'Recap: // chops off the decimal toward negative infinity.'
        ],
        code: `print(7 // 2)      # 3
print(8 // 2)      # 4
print(9 // 4)      # 2
print(-7 // 2)     # -4   (rounds DOWN, not toward zero)
print(7.0 // 2)    # 3.0  (still float if any operand is float)`,
        codeCaption: '// gives the whole-number part; on floats it returns a float',
        mistake: { title: 'Thinking // rounds toward zero', description: '// rounds DOWN. For negative numbers that is away from zero: -7 // 2 = -4, not -3.', bad: '# expecting -7 // 2 == -3', good: '# -7 // 2 == -4   (floor, not truncate)' },
        practice: { question: 'Predict: 23 // 5', hint: 'How many whole 5s fit in 23?', answer: '4. (4 fives = 20, with 3 left over.)' }
      },
      {
        id: 'l3-10', title: 'Math: Modulo (%)',
        explanation: [
          'The % operator gives the remainder of division. 10 % 3 is 1 because 3 fits into 10 three times with 1 left over.',
          'Why it matters: modulo is the standard trick for "is this even?", "every Nth item", and wrapping around (e.g. clock arithmetic).',
          'Recap: a % b = what is left after b divides into a as many times as it can.'
        ],
        code: `print(10 % 3)     # 1
print(10 % 2)     # 0   (even)
print(11 % 2)     # 1   (odd)
print(20 % 5)     # 0
print(7 % 10)     # 7   (7 is less than 10)

# The classic even-check
n = 8
print(n % 2 == 0)   # True → n is even`,
        codeCaption: '% is the remainder — and the go-to tool for even/odd checks',
        mistake: { title: 'Confusing % with /', description: '/ gives the quotient (how many). % gives the remainder (what is left).', bad: 'print(10 / 3)   # 3.333 (quotient)\n# but you wanted remainder', good: 'print(10 % 3)   # 1 (remainder)' },
        practice: { question: 'Is 15 % 4 odd or even?', hint: 'Compute it first.', answer: '15 % 4 = 3, which is odd.' }
      },
      {
        id: 'l3-11', title: 'Math: Exponents (**)',
        explanation: [
          'The ** operator raises a number to a power. 2 ** 3 is 2 × 2 × 2 = 8.',
          'Why it matters: squares, cubes, areas, growth — anything that multiplies a number by itself uses **.',
          'Recap: a ** b means "a to the power of b".'
        ],
        code: `print(2 ** 3)     # 8
print(5 ** 2)     # 25   (5 squared)
print(10 ** 0)    # 1    (anything ** 0 is 1)
print(2 ** 10)    # 1024
print(9 ** 0.5)   # 3.0  (square root)`,
        codeCaption: 'Powers of numbers with ** — including fractional powers like 0.5 for square roots',
        mistake: { title: 'Using ^ for exponents', description: 'In math class ^ means power. In Python ^ is a different operator (bitwise XOR). Always use **.', bad: 'print(2 ^ 3)    # 1 — NOT 8', good: 'print(2 ** 3)   # 8' },
        practice: { question: 'What is 3 ** 4?', hint: '3 × 3 × 3 × 3.', answer: '81.' }
      },
      {
        id: 'l3-12', title: 'Math: Order of Operations (PEMDAS)',
        explanation: [
          'Python follows the same order of operations you learned in math: parentheses first, then exponents, then multiplication and division, then addition and subtraction.',
          'Why it matters: 2 + 3 * 4 is 14, not 20. If you want 20 you must write (2 + 3) * 4. Misreading order causes silent bugs.',
          'Recap: parentheses always win. When unsure, add them.'
        ],
        code: `print(2 + 3 * 4)       # 14   (3*4 first, then +2)
print((2 + 3) * 4)     # 20   (parens first)
print(10 - 2 - 3)      # 5    (left to right)
print(2 ** 3 ** 2)     # 512  (** is right-to-left: 3**2=9, 2**9)
print((2 ** 3) ** 2)   # 64`,
        codeCaption: 'When in doubt, use parentheses — they always make order explicit',
        mistake: { title: 'Trusting your eyes over the rules', description: 'Code reads left to right but math does not always work that way. Always check whether * or / is hiding inside an expression.', bad: '# read "2 + 3 * 4" left to right → 20 (wrong)', good: '# multiply first → 12, then add 2 → 14' },
        practice: { question: 'Predict: 6 + 4 / 2', hint: '/ before +.', answer: '8.0. (4/2 = 2.0, then 6 + 2.0 = 8.0.)' }
      },
      {
        id: 'l3-13', title: 'Math: Math with Variables',
        explanation: [
          'You do not need raw numbers — variables work anywhere a number would. Python looks up the value, then runs the operation.',
          'Why it matters: real programs almost never hard-code numbers. They store values in variables and combine them.',
          'Recap: variable name → value lookup → math runs as normal.'
        ],
        code: `a = 10
b = 3

print(a + b)     # 13
print(a - b)     # 7
print(a * b)     # 30
print(a / b)     # 3.333...
print(a % b)     # 1

# Store the result
total = a + b
print(total)     # 13`,
        codeCaption: 'Variables hold the values; math operates on the looked-up numbers',
        mistake: { title: 'Using a variable before assigning it', description: 'If a variable has not been given a value, math on it crashes with NameError.', bad: 'print(a + 1)   # NameError if a was never set', good: 'a = 5\nprint(a + 1)   # 6' },
        practice: { question: 'Given x = 4 and y = 5, what is x * y + 1?', hint: 'Multiply first.', answer: '21. (4*5 = 20, +1 = 21.)' }
      },
      {
        id: 'l3-14', title: 'Math: Assignment Operators (+= -= *= /=)',
        explanation: [
          'x += 1 is a shortcut for x = x + 1. The same shortcut exists for -, *, /, //, %, and **.',
          'Why it matters: counters, totals, and running balances are everywhere. The shortcut is shorter and clearer.',
          'Recap: op= means "do the op with the right side and store the result back".'
        ],
        code: `score = 0
score += 10       # score = score + 10 → 10
score += 5        # 15
score -= 3        # 12
score *= 2        # 24
score //= 2       # 12   (integer divide and store)
print(score)      # 12

# Works on strings too
greeting = "hi"
greeting += "!"
print(greeting)   # hi!`,
        codeCaption: '+= and friends are the standard way to update a running value',
        mistake: { title: 'Writing =+ instead of +=', description: '"x =+ 1" parses as "x = +1" (assigns positive 1, wiping the old value). Always write +=.', bad: 'x = 5\nx =+ 1\nprint(x)   # 1 — original value lost', good: 'x = 5\nx += 1\nprint(x)   # 6' },
        practice: { question: 'After: n = 3; n *= 4; n -= 2 — what is n?', hint: 'Apply each step.', answer: '10. (3*4 = 12, 12 - 2 = 10.)' }
      },
      {
        id: 'l3-15', title: 'Math: String Addition vs Number Addition',
        explanation: [
          '+ does two completely different jobs. With numbers it ADDS. With strings it JOINS. Mixing the two crashes.',
          'Why it matters: this is the single most common beginner error. Reading the type of each operand prevents it.',
          'Recap: "2" + "3" = "23". 2 + 3 = 5. "2" + 3 → TypeError.'
        ],
        code: `# Number addition
print(2 + 3)         # 5

# String concatenation (joining)
print("2" + "3")     # "23"
print("Hello, " + "world")   # Hello, world

# Mixing them crashes
# print("Age: " + 25)        # TypeError

# Fix: convert one side
print("Age: " + str(25))     # Age: 25
print(f"Age: {25}")          # Age: 25  (cleaner)`,
        codeCaption: '+ adds numbers and joins strings — never crosses the line',
        mistake: { title: 'Trusting that + "just figures it out"', description: 'Python will not silently convert types. You must convert with str() or use an f-string.', bad: 'print("Total: " + 10)   # TypeError', good: 'print(f"Total: {10}")   # Total: 10' },
        practice: { question: 'Predict each line:\n\nprint(1 + 2)\nprint("1" + "2")', hint: 'Numbers vs text.', answer: '3 (numbers add) and 12 (strings join into "12").' }
      },
      {
        id: 'l3-16', title: 'Math Checkpoint',
        explanation: [
          'You now know all the math operators Python ships with: + - * / // % **, plus assignment operators and PEMDAS.',
          'Why it matters: every later chapter relies on these. Counters, conditions, loops, and LeetCode problems all reduce to small math expressions.',
          'Recap: when reading any math line — types first, parentheses second, then evaluate.'
        ],
        code: `# Quick sweep of everything in this section
print(2 + 3)           # 5
print(10 - 4)          # 6
print(3 * 5)           # 15
print(10 / 4)          # 2.5
print(10 // 4)         # 2
print(10 % 4)          # 2
print(2 ** 5)          # 32
print((1 + 2) * 3)     # 9

n = 10
n += 5
n //= 3
print(n)               # 5`,
        codeCaption: 'A whirlwind tour of every operator in this section',
        mistake: { title: 'Skipping practice', description: 'You learn math by doing it, not reading it. Predict, run, compare.', bad: '# read past', good: '# cover the output, predict, then check' },
        practice: { question: 'What does this print?\n\nx = 7\nx += 3\nx %= 4\nprint(x)', hint: '7+3=10, then 10 % 4.', answer: '2.' },
        quiz: {
          question: 'Which result is correct?',
          options: [
            '10 / 3 evaluates to 3',
            '10 // 3 evaluates to 3.33',
            '10 % 3 evaluates to 1',
            '2 ** 3 evaluates to 6'
          ],
          correctIndex: 2,
          explanation: '10 % 3 is 1 (remainder). / gives 3.333…, // gives 3, ** gives 8.'
        }
      },
      {
        id: 'l3-17', title: 'Comparison: What is Comparison?',
        explanation: [
          'A comparison asks a yes/no question about two values: is A equal to B? Is A bigger? Smaller? The answer is always True or False.',
          'Why it matters: every decision in code is a comparison. if statements, while loops, and almost every LeetCode problem hinge on them.',
          'Recap: comparisons turn two values into one boolean.'
        ],
        analogy: 'A comparison is a tiny referee. Show it two values, and it raises a True flag or a False flag — never anything else.',
        code: `print(5 == 5)     # True
print(5 == 6)     # False
print(7 > 3)      # True
print(2 < 1)      # False`,
        codeCaption: 'Every comparison answers a yes/no question',
        mistake: { title: 'Expecting a comparison to return a number', description: 'A comparison is not a calculation. It is a question. The only answers are True and False.', bad: 'x = 5 > 3\n# expecting x to be 2', good: 'x = 5 > 3\n# x is True' },
        practice: { question: 'Predict: print(10 > 100)', hint: 'Is 10 greater than 100?', answer: 'False.' }
      },
      {
        id: 'l3-18', title: 'Comparison: = vs ==',
        explanation: [
          '= assigns: it stores a value in a variable. == compares: it asks "are these equal?" and gives True or False.',
          'Why it matters: confusing them is the #1 beginner mistake in if statements. The two symbols look almost the same but mean opposite things.',
          'Recap: one = stores. Two == ask.'
        ],
        code: `# Assignment
x = 5
print(x)         # 5

# Comparison
print(x == 5)    # True
print(x == 6)    # False

# Using = inside an if is a SyntaxError
# if x = 5:        # SyntaxError
# if x == 5:       # correct`,
        codeCaption: 'One symbol stores, two symbols ask',
        mistake: { title: 'Writing = inside an if', description: 'Python catches this with a SyntaxError. Some languages do not — and the bug becomes silent.', bad: 'if score = 100:    # SyntaxError', good: 'if score == 100:   # correct' },
        practice: { question: 'Which line stores a value, and which asks a question?\n\na = 7\nprint(a == 7)', hint: 'Count the equals signs.', answer: 'a = 7 stores; a == 7 asks (and is True here).' }
      },
      {
        id: 'l3-19', title: 'Comparison: == and !=',
        explanation: [
          '== checks equality: True if the two values are the same, False otherwise. != checks INequality: True if they are different.',
          'Why it matters: most "is this the case?" questions use == or !=.',
          'Recap: == means equal, != means not equal.'
        ],
        code: `print(5 == 5)         # True
print(5 == 6)         # False
print("hi" == "hi")   # True
print("Hi" == "hi")   # False  (case-sensitive)

print(5 != 6)         # True
print(5 != 5)         # False`,
        codeCaption: '== for equal, != for not equal',
        mistake: { title: 'Forgetting strings are case-sensitive', description: '"YES" == "yes" is False. If you need to ignore case, convert both with .lower() first.', bad: 'print("YES" == "yes")          # False', good: 'print("YES".lower() == "yes")  # True' },
        practice: { question: 'Predict: print("cat" != "dog")', hint: 'They are different.', answer: 'True.' }
      },
      {
        id: 'l3-20', title: 'Comparison: > and <',
        explanation: [
          '> means "greater than". < means "less than". Both return True or False.',
          'Why it matters: thresholds, sorting, filters — all need >/<.',
          'Recap: the pointy end of < and > points to the smaller side.'
        ],
        code: `print(7 > 3)      # True
print(3 > 7)      # False
print(5 > 5)      # False (strictly greater — not equal)
print(3 < 7)      # True
print(7 < 3)      # False`,
        codeCaption: '> and < are strict — equal values give False',
        mistake: { title: 'Reading > as "greater than or equal"', description: 'a > b is False when a equals b. Use >= if you want to include equal.', bad: 'print(5 > 5)    # False — surprising if you forgot "strict"', good: 'print(5 >= 5)   # True' },
        practice: { question: 'Predict each:\n\nprint(8 > 8)\nprint(8 < 9)', hint: 'Strictly greater / less.', answer: 'False (not strictly greater) and True.' }
      },
      {
        id: 'l3-21', title: 'Comparison: >= and <=',
        explanation: [
          '>= means "greater than OR equal to". <= means "less than OR equal to". Both include the equal case.',
          'Why it matters: "is the user at least 18?" → age >= 18 is the correct form, not age > 18.',
          'Recap: add = to include the boundary.'
        ],
        code: `print(5 >= 5)    # True
print(5 >= 6)    # False
print(5 <= 5)    # True
print(5 <= 4)    # False

age = 18
print(age >= 18)   # True — adult check`,
        codeCaption: '>= and <= include the boundary value',
        mistake: { title: 'Writing => or =< instead of >= or <=', description: 'Python only accepts >= and <= (the = comes second). => is a SyntaxError.', bad: 'if age => 18:    # SyntaxError', good: 'if age >= 18:    # correct' },
        practice: { question: 'Which are True?\n\n5 >= 5\n5 <= 4\n0 <= 0', hint: 'Check each.', answer: 'First (True), second (False), third (True).' }
      },
      {
        id: 'l3-22', title: 'Comparison: Comparing Numbers',
        explanation: [
          'Numbers compare in the obvious way: by their values. int and float compare together fine — 5 == 5.0 is True.',
          'Why it matters: most comparisons in real code are numeric — counts, scores, ages, prices.',
          'Recap: numbers compare numerically. Type does not block int/float comparison.'
        ],
        code: `print(10 > 3)         # True
print(2.5 < 3)        # True
print(5 == 5.0)       # True  (int and float compare by value)
print(-1 < 0)         # True
print(100 >= 99.9)    # True`,
        codeCaption: 'int vs float comparisons just work — they compare by numeric value',
        mistake: { title: 'Comparing a number string to a number', description: '"5" is a string, not a number. "5" == 5 is False.', bad: 'print("5" == 5)   # False', good: 'print(int("5") == 5)   # True' },
        practice: { question: 'Predict: print(7.0 == 7)', hint: 'Same numeric value.', answer: 'True.' }
      },
      {
        id: 'l3-23', title: 'Comparison: Comparing Strings',
        explanation: [
          'Strings compare alphabetically, character by character. "apple" < "banana" is True because "a" comes before "b". Comparison is case-sensitive: capital letters come before lowercase.',
          'Why it matters: sorting names, validating passwords, filtering text — all rely on string comparison.',
          'Recap: strings compare like a dictionary — letter by letter, capitals first.'
        ],
        code: `print("apple" < "banana")  # True
print("cat" == "cat")      # True
print("Cat" == "cat")      # False  (case-sensitive)
print("Z" < "a")           # True   (capitals come BEFORE lowercase)
print("abc" < "abd")       # True   (third letter decides)`,
        codeCaption: 'String comparison is alphabetical and case-sensitive',
        mistake: { title: 'Assuming "10" > "9"', description: 'As strings, "10" < "9" because "1" comes before "9" in the character table. Compare as numbers for numeric order.', bad: 'print("10" > "9")        # False (string compare!)', good: 'print(int("10") > int("9"))   # True' },
        practice: { question: 'Predict: print("dog" < "doll")', hint: 'Compare letter by letter.', answer: 'False. "dog" vs "doll": d=d, o=o, then "g" vs "l" — g comes BEFORE l, so "dog" < "doll" is True... wait let me reconsider. g (103) < l (108) so "dog" < "doll" is True.' }
      },
      {
        id: 'l3-24', title: 'Comparison: Comparing Variables',
        explanation: [
          'You can compare variables just like raw values. Python looks up each value, then asks the question.',
          'Why it matters: real code rarely compares hard-coded numbers. It compares values stored in variables.',
          'Recap: comparison sees through the variable to its current value.'
        ],
        code: `a = 7
b = 10

print(a < b)        # True
print(a == b)       # False
print(a + 3 == b)   # True   (compute first, then compare)

name = "Lin"
print(name == "Lin")    # True`,
        codeCaption: 'Variables resolve to their values, then comparison runs',
        mistake: { title: 'Comparing before assigning', description: 'If a variable has not been defined yet, the comparison crashes with NameError.', bad: 'print(score > 50)   # NameError if score not set', good: 'score = 80\nprint(score > 50)   # True' },
        practice: { question: 'Given a = 5, b = 5, what is a == b?', hint: 'Look up both values.', answer: 'True.' }
      },
      {
        id: 'l3-25', title: 'Comparison: They Return True or False',
        explanation: [
          'Every comparison returns a boolean — True or False. You can store it in a variable, print it, or use it in an if.',
          'Why it matters: this is how decisions in code are made. The comparison produces a boolean; the if reads the boolean.',
          'Recap: comparison → boolean. That is the bridge between data and decisions.'
        ],
        code: `is_adult = age >= 18
print(is_adult)         # True or False

is_match = ("hi" == "hi")
print(is_match)         # True

# Print the comparison directly
print(10 > 3)           # True`,
        codeCaption: 'Store the boolean result in a variable for clarity',
        mistake: { title: 'Comparing inside an if without realizing it returns a bool', description: 'if age >= 18: works because the comparison returns True or False, and if reads booleans.', bad: '# write if without understanding what it reads', good: '# remember: if reads a True/False produced by a comparison' },
        practice: { question: 'What type is the value of (3 > 1)?', hint: 'Comparison result.', answer: 'bool (the value is True).' }
      },
      {
        id: 'l3-26', title: 'Comparison Checkpoint',
        explanation: [
          'You can now ask Python any yes/no question about two values: equal, not equal, greater, less, and the with-equal variants.',
          'Why it matters: every condition in every if statement is one of these comparisons (or several joined with and/or/not).',
          'Recap: == != > < >= <=. Six operators. All return True or False.'
        ],
        code: `# Sweep of all six
print(5 == 5)     # True
print(5 != 6)     # True
print(7 > 3)      # True
print(3 < 7)      # True
print(5 >= 5)     # True
print(5 <= 6)     # True`,
        codeCaption: 'All six comparison operators in one place',
        mistake: { title: 'Forgetting case sensitivity', description: '"Hi" == "hi" is False. Always remember strings care about capitalization.', bad: 'print("Yes" == "yes")   # False', good: 'print("Yes".lower() == "yes")   # True' },
        practice: { question: 'Predict each:\n\nprint(10 == 10.0)\nprint("a" < "b")\nprint(5 != 5)', hint: 'Numeric, alphabetical, equality.', answer: 'True, True, False.' },
        quiz: {
          question: 'Which line is a SyntaxError?',
          options: [
            'if x == 5:',
            'if x = 5:',
            'if x >= 5:',
            'if x != 5:'
          ],
          correctIndex: 1,
          explanation: '= is assignment and cannot be used in an if condition. == is the comparison.'
        }
      },
      {
        id: 'l3-27', title: 'Boolean: What is a Boolean?',
        explanation: [
          'A boolean is the simplest data type: it can only be True or False. That is it. Two possible values, nothing else.',
          'Why it matters: every decision your code makes ends up as a boolean — yes/no, on/off, allowed/blocked.',
          'Recap: bool = True or False.'
        ],
        analogy: 'A boolean is a light switch with exactly two positions: on (True) or off (False). No dimmer.',
        code: `print(True)
print(False)
print(type(True))     # <class 'bool'>

is_open = True
is_locked = False
print(is_open)        # True`,
        codeCaption: 'Two values, one tiny type',
        mistake: { title: 'Using lowercase true/false', description: 'Python is case-sensitive. true is not a value; True is. Same for False.', bad: 'done = true    # NameError', good: 'done = True    # correct' },
        practice: { question: 'What are the only two values a bool can have?', hint: 'Capital letters.', answer: 'True and False.' }
      },
      {
        id: 'l3-28', title: 'Boolean: True and False',
        explanation: [
          'True and False are special built-in values. They are spelled with a capital first letter. You can store them in variables, print them, and combine them with logical operators.',
          'Why it matters: knowing exactly what counts as True vs False keeps your conditions honest.',
          'Recap: True and False are not strings. They are their own type.'
        ],
        code: `a = True
b = False

print(a)            # True
print(b)            # False
print(type(a))      # <class 'bool'>

# Not strings!
print("True" == True)    # False — string is not bool`,
        codeCaption: 'True and False are values of type bool — not text',
        mistake: { title: 'Quoting True or False', description: '"True" is a string, not a boolean. They look similar but behave very differently.', bad: 'done = "True"\nif done == True:\n    print("done")   # this never runs', good: 'done = True\nif done == True:\n    print("done")   # runs' },
        practice: { question: 'Predict: print(True == "True")', hint: 'bool vs str.', answer: 'False.' }
      },
      {
        id: 'l3-29', title: 'Boolean: How Comparisons Create Booleans',
        explanation: [
          'Every comparison produces a boolean. That is how data becomes a decision.',
          'Why it matters: when you write if age >= 18, Python first computes age >= 18 (a True or False), then the if reads the boolean.',
          'Recap: comparison runs, produces True/False, then anything else reads it.'
        ],
        code: `age = 20
is_adult = age >= 18
print(is_adult)          # True
print(type(is_adult))    # <class 'bool'>

# You can use the comparison directly in if
if age >= 18:
    print("adult")`,
        codeCaption: 'Comparison → boolean → decision',
        mistake: { title: 'Treating the comparison as the action', description: 'A comparison is just a question. To DO something with the answer you still need an if (or store it in a variable).', bad: 'age >= 18\n# nothing happened — answer was thrown away', good: 'if age >= 18:\n    print("adult")' },
        practice: { question: 'What is the type of the value returned by (5 < 10)?', hint: 'Comparison result.', answer: 'bool (the value is True).' }
      },
      {
        id: 'l3-30', title: 'Boolean: and',
        explanation: [
          '"and" combines two booleans into one. The result is True only if BOTH sides are True. Otherwise False.',
          'Why it matters: most real conditions involve more than one rule — "user is logged in AND has permission", "age >= 18 AND has ID".',
          'Recap: and = both must be True.'
        ],
        code: `print(True and True)     # True
print(True and False)    # False
print(False and True)    # False
print(False and False)   # False

age = 20
has_id = True
print(age >= 18 and has_id)    # True`,
        codeCaption: 'and is strict — one False breaks the chain',
        mistake: { title: 'Using & instead of and', description: '& is a different operator (bitwise). For boolean logic, use the word "and".', bad: 'if a & b:        # works on bools but wrong style and surprises with numbers', good: 'if a and b:      # correct' },
        practice: { question: 'Predict: print(5 > 1 and 5 < 10)', hint: 'Evaluate each side.', answer: 'True (both sides are True).' }
      },
      {
        id: 'l3-31', title: 'Boolean: or',
        explanation: [
          '"or" combines two booleans. The result is True if AT LEAST ONE side is True. Only False if both are False.',
          'Why it matters: "is it the weekend OR a holiday?" — either is enough.',
          'Recap: or = at least one True.'
        ],
        code: `print(True or True)      # True
print(True or False)     # True
print(False or True)     # True
print(False or False)    # False

is_weekend = False
is_holiday = True
print(is_weekend or is_holiday)   # True`,
        codeCaption: 'or is generous — one True is enough',
        mistake: { title: 'Reading "or" as exclusive', description: 'In Python, or is inclusive: True or True is True, not False. English sometimes means exclusive ("soup or salad") but Python never does.', bad: '# expect "True or True" to be False', good: '# True or True is True' },
        practice: { question: 'Predict: print(False or False or True)', hint: 'Any True wins.', answer: 'True.' }
      },
      {
        id: 'l3-32', title: 'Boolean: not',
        explanation: [
          '"not" flips a boolean. not True is False. not False is True. It takes one value, not two.',
          'Why it matters: sometimes the cleanest way to express a rule is by negating another rule.',
          'Recap: not = the opposite.'
        ],
        code: `print(not True)      # False
print(not False)     # True

is_raining = True
print(not is_raining)    # False

# Often paired with a comparison
age = 15
print(not age >= 18)     # True — not an adult`,
        codeCaption: 'not is the unary flip — one value in, the opposite out',
        mistake: { title: 'Reading "not x == 5" as "x is not 5"', description: 'It does mean that — but it is clearer to write x != 5. "not" before a comparison can be hard to read.', bad: 'if not score == 100:    # works but awkward', good: 'if score != 100:        # clearer' },
        practice: { question: 'Predict: print(not (5 > 10))', hint: '5 > 10 is False, then not.', answer: 'True.' }
      },
      {
        id: 'l3-33', title: 'Boolean: Combining Multiple Conditions',
        explanation: [
          'You can chain and/or/not as long as you want. Use parentheses to make the grouping clear — Python evaluates not first, then and, then or, but readers should not have to remember that.',
          'Why it matters: real conditions can get long. Writing them clearly keeps bugs out.',
          'Recap: parentheses are free. Use them.'
        ],
        code: `age = 20
has_id = True
is_member = False

# Without parens
print(age >= 18 and has_id or is_member)
# With parens — clearer
print((age >= 18 and has_id) or is_member)

# Three-way check
score = 75
print(score >= 0 and score <= 100)   # True — score is in range`,
        codeCaption: 'Parentheses turn long conditions from puzzles into sentences',
        mistake: { title: 'Forgetting not binds tighter than and/or', description: 'not x and y is (not x) and y, not not (x and y). When in doubt, use parens.', bad: 'if not a and b:       # not a, then AND b', good: 'if not (a and b):     # NOT the whole thing' },
        practice: { question: 'For x = 7, predict:\n\nprint(x > 0 and x < 10)', hint: 'Both must be True.', answer: 'True.' }
      },
      {
        id: 'l3-34', title: 'Boolean: Common Logic Mistakes',
        explanation: [
          'A few logic patterns trip up almost everyone. Knowing them by name lets you catch them in your own code.',
          'Why it matters: silent logic bugs are the hardest kind. They never crash — they just produce the wrong answer.',
          'Recap: each side of and/or must be a complete comparison.'
        ],
        code: `x = 5

# Mistake 1: shortcut that does not work
# if x == 1 or 2:   # ALWAYS True (because 2 is truthy)
# Correct:
print(x == 1 or x == 2)   # False

# Mistake 2: using = instead of ==
# if x = 5:    # SyntaxError
print(x == 5)             # True

# Mistake 3: forgetting case
print("YES" == "yes")     # False
print("YES".lower() == "yes")   # True`,
        codeCaption: 'The handful of logic mistakes you will see in your own code',
        mistake: { title: '"x == 1 or 2" is always True', description: 'Python evaluates 2 as truthy, so the whole or is True. Repeat the variable on each side: x == 1 or x == 2.', bad: 'if x == 1 or 2:     # always True', good: 'if x == 1 or x == 2:   # correct' },
        practice: { question: 'Fix: if name == "Lin" or "Sam": print("hi")', hint: 'Repeat name on both sides.', answer: 'if name == "Lin" or name == "Sam": print("hi")' }
      },
      {
        id: 'l3-35', title: 'Boolean / Logic Checkpoint',
        explanation: [
          'You can now build any logical condition: True/False values, comparisons that produce them, and and/or/not to combine them.',
          'Why it matters: every if, while, and filter in Python is one of these expressions.',
          'Recap: comparisons make booleans; and/or/not combine booleans; if/while read booleans.'
        ],
        code: `age = 25
has_id = True

is_adult = age >= 18
can_enter = is_adult and has_id

print(is_adult)     # True
print(can_enter)    # True
print(not can_enter)  # False`,
        codeCaption: 'Booleans, comparisons, and logical operators working together',
        mistake: { title: 'Mixing up and/or', description: 'and is stricter (both), or is looser (either). Read the English sentence first to pick the right one.', bad: '# "must be 18 OR have ID"  → wrote "and"', good: '# match the English: "or" → or, "and" → and' },
        practice: { question: 'Predict:\n\nx = 5\nprint(x > 0 and x < 10)\nprint(x < 0 or x > 3)', hint: 'Evaluate each comparison.', answer: 'True and True.' },
        quiz: {
          question: 'Which expression is True when x = 7?',
          options: [
            'x < 0 and x > 10',
            'x > 0 or x > 100',
            'not (x == 7)',
            'x == "7"'
          ],
          correctIndex: 1,
          explanation: 'x > 0 is True, so the whole "or" is True. The others are False (or compare against a string).'
        }
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
      },
      {
        id: 'l4-3', title: 'Type Conversion: What is Type Conversion?',
        explanation: [
          'Type conversion (also called casting) means turning a value of one type into another type. "42" → 42 turns text into a number. 3 → "3" turns a number into text.',
          'Why it matters: input() always gives you text, and + only works on matching types. You will be converting almost every time you take input.',
          'Recap: conversion is a deliberate choice — Python does not do it automatically.'
        ],
        analogy: 'Conversion is like exchanging currency. The value is the same, but the form changes so it can be used in a different place.',
        code: `# str → int
n = int("42")
print(n, type(n))     # 42 <class 'int'>

# int → str
s = str(42)
print(s, type(s))     # 42 <class 'str'>

# str → float
f = float("3.14")
print(f, type(f))     # 3.14 <class 'float'>`,
        codeCaption: 'Three core conversions you will use constantly',
        mistake: { title: 'Forgetting that conversion does not change the original', description: 'int("42") returns a NEW int. The original string is unchanged. You must store the result.', bad: 'x = "42"\nint(x)\nprint(x)   # still "42" — int() result was thrown away', good: 'x = "42"\nx = int(x)\nprint(x)   # 42 (int)' },
        practice: { question: 'What does int("7") + 1 produce?', hint: 'Convert first, then add.', answer: '8 (an int).' }
      },
      {
        id: 'l4-4', title: 'Type Conversion: str()',
        explanation: [
          'str(value) converts any value into its text form. str(42) becomes "42". str(True) becomes "True".',
          'Why it matters: when joining text and numbers with +, you need a str. f-strings do it for you, but str() is the explicit tool.',
          'Recap: str() turns anything into text.'
        ],
        code: `print(str(42))        # "42"
print(str(3.14))      # "3.14"
print(str(True))      # "True"
print(str(None))      # "None"

age = 25
print("Age: " + str(age))   # Age: 25`,
        codeCaption: 'str() lets you glue a number into text with +',
        mistake: { title: 'Skipping str() with +', description: 'Without str() (or an f-string), "Age: " + 25 crashes.', bad: 'print("Age: " + 25)         # TypeError', good: 'print("Age: " + str(25))    # Age: 25' },
        practice: { question: 'Predict: print(type(str(100)))', hint: 'Convert then type.', answer: "<class 'str'>." }
      },
      {
        id: 'l4-5', title: 'Type Conversion: int()',
        explanation: [
          'int(value) turns a value into a whole number. int("42") gives 42. int(3.9) gives 3 (it CHOPS, it does not round).',
          'Why it matters: int(input(...)) is the standard pattern for asking the user for a number.',
          'Recap: int() truncates floats and rejects non-numeric strings.'
        ],
        code: `print(int("42"))     # 42
print(int(3.9))      # 3   (truncates, does not round)
print(int(-3.9))     # -3
print(int(True))     # 1
print(int(False))    # 0

# int() on a non-numeric string crashes
# print(int("hello"))    # ValueError`,
        codeCaption: 'int() truncates and only accepts numeric strings',
        mistake: { title: 'Assuming int() rounds', description: 'int(3.9) is 3, not 4. Use round() if you want rounding.', bad: 'print(int(3.9))      # 3', good: 'print(round(3.9))    # 4' },
        practice: { question: 'Predict: print(int(7.7))', hint: 'Truncate.', answer: '7.' }
      },
      {
        id: 'l4-6', title: 'Type Conversion: float()',
        explanation: [
          'float(value) turns a value into a decimal number. float("3.14") → 3.14. float(5) → 5.0.',
          'Why it matters: when the user might enter a decimal, use float() instead of int().',
          'Recap: float() accepts both decimal and whole-number strings.'
        ],
        code: `print(float("3.14"))    # 3.14
print(float("42"))      # 42.0   (still a float)
print(float(5))         # 5.0
print(float(True))      # 1.0

# float() on a non-numeric string crashes
# print(float("hello"))   # ValueError`,
        codeCaption: 'float() handles both "3.14" and "42" — int() would reject "3.14"',
        mistake: { title: 'Using int() when input might have a decimal', description: 'int("3.14") crashes. If decimals are possible, use float().', bad: 'price = int(input("Price: "))   # crashes on "9.99"', good: 'price = float(input("Price: "))  # 9.99 works' },
        practice: { question: 'Predict: print(float("2"))', hint: 'Convert.', answer: '2.0.' }
      },
      {
        id: 'l4-7', title: 'Type Conversion: bool()',
        explanation: [
          'bool(value) turns a value into True or False. Most values are True. Only a few "empty" values are False: 0, 0.0, "", None, and empty containers.',
          'Why it matters: knowing what counts as False lets you write cleaner if statements.',
          'Recap: empty/zero → False. Everything else → True.'
        ],
        code: `print(bool(0))        # False
print(bool(1))        # True
print(bool(-5))       # True   (any non-zero number)
print(bool(""))       # False  (empty string)
print(bool("hi"))     # True
print(bool(None))     # False
print(bool([]))       # False  (empty list)`,
        codeCaption: 'Only "empty" or zero values are False',
        mistake: { title: 'Assuming bool("False") is False', description: 'bool("False") is True because the string is not empty. Only empty strings are falsy.', bad: 'print(bool("False"))   # True!', good: 'print("False" == "True")   # compare strings if that is what you mean' },
        practice: { question: 'Predict each:\n\nprint(bool(0))\nprint(bool("0"))', hint: 'Number zero vs the string "0".', answer: 'False (zero is falsy) and True (non-empty string).' }
      },
      {
        id: 'l4-8', title: 'Type Conversion: int("42") vs int("3.14")',
        explanation: [
          'int() accepts strings that look like whole numbers. It does NOT accept strings that contain a decimal point.',
          'Why it matters: this is the single most common ValueError beginners hit. Knowing the rule prevents it.',
          'Recap: int("42") works. int("3.14") crashes. Use float() first if needed.'
        ],
        code: `print(int("42"))         # 42 — fine
# print(int("3.14"))      # ValueError!

# Workaround: float() first, then int() if you must
print(int(float("3.14")))   # 3

# int() also strips a sign and whitespace
print(int("  -7 "))         # -7`,
        codeCaption: 'int() refuses decimal strings — float() handles them',
        mistake: { title: 'int() on a decimal string', description: 'int("3.14") crashes. Decide: do you want truncation? int(float("3.14")). Do you want to keep the decimal? float("3.14").', bad: 'x = int("3.14")    # ValueError', good: 'x = float("3.14")   # 3.14\nx = int(float("3.14"))   # 3' },
        practice: { question: 'Which crashes: int("12") or int("12.0")?', hint: 'Decimal point inside a string.', answer: 'int("12.0") crashes. int("12") gives 12.' }
      },
      {
        id: 'l4-9', title: 'Type Conversion: ValueError',
        explanation: [
          'A ValueError happens when a function gets the right TYPE but a value that does not make sense. int("hello") is a ValueError because "hello" is a string but not a number-shaped one.',
          'Why it matters: you will see this often with user input. Reading the error name tells you what went wrong.',
          'Recap: ValueError = right type, wrong value. TypeError = wrong type entirely.'
        ],
        code: `# These crash with ValueError
# int("hello")        → ValueError
# int("3.14")         → ValueError
# float("abc")        → ValueError

# These work
print(int("42"))      # 42
print(float("3.14"))  # 3.14

# To handle gracefully (later: try/except)
# For now: trust the user types a number`,
        codeCaption: 'ValueError = the function got the right type but a junk value',
        mistake: { title: 'Confusing ValueError with TypeError', description: 'TypeError = wrong KIND of thing. ValueError = right kind, bad content. int(None) is a TypeError; int("abc") is a ValueError.', bad: '# "they are the same"', good: '# read the error name carefully — they point to different fixes' },
        practice: { question: 'Which error: int("3.14") or int(None)?', hint: 'Type vs value.', answer: 'int("3.14") → ValueError. int(None) → TypeError.' }
      },
      {
        id: 'l4-10', title: 'Type Conversion: Why Conversion Matters',
        explanation: [
          'Conversion is the bridge between input and math. Without it, every user-entered number is text and cannot be added, compared numerically, or used in formulas.',
          'Why it matters: nearly every beginner program needs at least one int() or float() to work correctly.',
          'Recap: input → convert → compute → display. That is the shape of most beginner programs.'
        ],
        code: `# Without conversion
x = input("Number: ")      # "5"
# print(x + 3)             # TypeError

# With conversion
x = int(input("Number: "))   # 5
print(x + 3)                 # 8

# Display result back as text (f-string does conversion automatically)
print(f"Result is {x + 3}")`,
        codeCaption: 'Input → convert → compute. Skip the convert and the math breaks.',
        mistake: { title: 'Hoping Python will guess', description: 'Python will not guess that "5" should be a number. You always have to say so.', bad: 'x = input("n: ")\nprint(x + 1)   # TypeError', good: 'x = int(input("n: "))\nprint(x + 1)   # ok' },
        practice: { question: 'Fix this: age = input("age: "); print(age + 1)', hint: 'Convert.', answer: 'age = int(input("age: ")); print(age + 1)' }
      },
      {
        id: 'l4-11', title: 'Type Conversion Checkpoint',
        explanation: [
          'You can now move freely between str, int, float, and bool. You know which conversions can crash and why.',
          'Why it matters: the rest of beginner Python (input, comparisons, conditions, loops) leans on this constantly.',
          'Recap: str() / int() / float() / bool() — four tools. Two errors to watch for: ValueError and TypeError.'
        ],
        code: `# Sweep
print(str(42))             # "42"
print(int("42"))           # 42
print(float("3.14"))       # 3.14
print(bool(0))             # False
print(int(float("3.14")))  # 3`,
        codeCaption: 'A quick tour of the four conversion functions',
        mistake: { title: 'Skipping checkpoints', description: 'Conversion is a small topic but it is load-bearing for everything that follows.', bad: '# scroll past', good: '# do the quiz, predict, then continue' },
        practice: { question: 'Predict each:\n\nprint(int("10"))\nprint(int("10.0"))\nprint(float("10"))', hint: 'Decimal string is special.', answer: '10 (int), ValueError, 10.0.' },
        quiz: {
          question: 'Which line crashes?',
          options: [
            'int("42")',
            'float("3.14")',
            'int("3.14")',
            'str(3.14)'
          ],
          correctIndex: 2,
          explanation: 'int() refuses strings with decimal points — that is a ValueError. The others all work.'
        }
      },
      {
        id: 'l4-12', title: 'Input: What input() Does',
        explanation: [
          'input() pauses your program, waits for the user to type something and press Enter, then gives that text back to you as a string.',
          'Why it matters: input() is how your programs become interactive — instead of guessing values, they ask.',
          'Recap: input() = pause, read a line, return text.'
        ],
        code: `name = input("Your name: ")
print("Hello,", name)

# input() with no prompt (less friendly)
x = input()
print("You typed:", x)`,
        codeCaption: 'input() always pauses and always returns text',
        mistake: { title: 'Forgetting the prompt', description: 'Without a prompt, the user has no idea what to type. Always include a clear question inside the parentheses.', bad: 'x = input()              # blank prompt — confusing', good: 'x = input("Your age: ")  # clear' },
        practice: { question: 'What does input() return — a number or text?', hint: 'Recap.', answer: 'Always text (str), no matter what the user types.' }
      },
      {
        id: 'l4-13', title: 'Input: input() Always Returns a String',
        explanation: [
          'No matter what the user types — 42, 3.14, hello — input() gives you a string. Type 42 and you get the text "42", not the number.',
          'Why it matters: this single rule causes more beginner errors than any other. If you forget it, every math operation on input crashes.',
          'Recap: input() → always str. Convert if you need a number.'
        ],
        code: `x = input("Type a number: ")
print(x)           # whatever they typed
print(type(x))     # always <class 'str'>

# To do math, convert
n = int(x)
print(n + 1)`,
        codeCaption: 'input() returns text — confirm with type()',
        mistake: { title: 'Treating input as a number', description: 'input() never returns a number. Even "42" is the string "42", which cannot be added to 1.', bad: 'x = input("n: ")\nprint(x + 1)   # TypeError', good: 'x = int(input("n: "))\nprint(x + 1)' },
        practice: { question: 'If the user types 7, what does type(input(...)) return?', hint: 'Always the same.', answer: "<class 'str'>." }
      },
      {
        id: 'l4-14', title: 'Input: Storing input() in a Variable',
        explanation: [
          'Whatever input() returns must be stored in a variable, or you cannot use it. The pattern is name = input("prompt").',
          'Why it matters: a value that is not stored is gone the moment the next line runs.',
          'Recap: always store the result of input().'
        ],
        code: `# Bad — value is thrown away
input("Type something: ")

# Good — value is captured
answer = input("Type something: ")
print("You said:", answer)`,
        codeCaption: 'Capture the value or it is lost',
        mistake: { title: 'Calling input() without storing the result', description: 'The user types something, the program ignores it. Always assign to a variable.', bad: 'input("name: ")\nprint(name)   # NameError', good: 'name = input("name: ")\nprint(name)' },
        practice: { question: 'Write code that asks for a city and stores it in a variable called city.', hint: 'name = input(...).', answer: 'city = input("Your city: ")' }
      },
      {
        id: 'l4-15', title: 'Input: Combining input() with int()',
        explanation: [
          'The standard pattern for asking the user for a whole number is: n = int(input("prompt: ")). The input runs first, then int() converts the result.',
          'Why it matters: any time you want a counter, age, score, or quantity from the user, this is the line.',
          'Recap: int(input(...)) — one line, two functions, one whole number.'
        ],
        code: `age = int(input("Your age: "))
print(f"Next year you'll be {age + 1}.")

# Two numbers
a = int(input("First: "))
b = int(input("Second: "))
print(f"Sum: {a + b}")`,
        codeCaption: 'int(input(...)) is the standard pattern for numeric input',
        mistake: { title: 'Putting int() in the wrong place', description: 'int() must wrap input(), not the variable name. int(name) would try to convert the prompt itself if you put it wrong.', bad: 'int(input("age: "))\nprint(age + 1)   # NameError — never stored', good: 'age = int(input("age: "))\nprint(age + 1)' },
        practice: { question: 'Write a line that asks for a score and stores it as an int.', hint: 'Wrap input with int.', answer: 'score = int(input("Score: "))' }
      },
      {
        id: 'l4-16', title: 'Input: Combining input() with float()',
        explanation: [
          'When the user might type a decimal (price, height, weight), use float(input(...)) instead of int(input(...)).',
          'Why it matters: int("9.99") crashes. float("9.99") works.',
          'Recap: float for decimals, int for whole numbers.'
        ],
        code: `price = float(input("Price: "))
print(f"With tax: {price * 1.1:.2f}")

height = float(input("Height in meters: "))
print(f"Half height: {height / 2}")`,
        codeCaption: 'float(input(...)) for any value that might have a decimal',
        mistake: { title: 'Using int() for money', description: 'Prices have decimals. int("9.99") crashes. Always use float() for money or measurements.', bad: 'price = int(input("Price: "))   # crashes on "9.99"', good: 'price = float(input("Price: "))' },
        practice: { question: 'Ask for a temperature and store it as a float.', hint: 'float(input(...)).', answer: 'temp = float(input("Temperature: "))' }
      },
      {
        id: 'l4-17', title: 'Input: Tiny Calculator Drill',
        explanation: [
          'Time to put it together: ask for two numbers and show their sum. This is the shortest "real" program in Python.',
          'Why it matters: this small loop of input → convert → compute → print is the skeleton of dozens of beginner exercises and many later projects.',
          'Recap: four lines. Four jobs. One useful program.'
        ],
        code: `a = float(input("First number: "))
b = float(input("Second number: "))
total = a + b
print(f"Sum: {total}")`,
        codeCaption: 'Four lines: ask, ask, compute, show',
        stepByStep: [
          '1. Ask for the first number, convert to float, store in a',
          '2. Ask for the second number, convert to float, store in b',
          '3. Add them, store the result in total',
          '4. Print the result with an f-string'
        ],
        mistake: { title: 'Skipping the conversion', description: 'Without float(), a + b is "5" + "3" which becomes "53" instead of 8.', bad: 'a = input("First: ")\nb = input("Second: ")\nprint(a + b)   # "53"', good: 'a = float(input(...))\nb = float(input(...))\nprint(a + b)   # 8.0' },
        practice: { question: 'Extend it: also print the product (a * b).', hint: 'Add a print line.', answer: 'print(f"Product: {a * b}")' }
      },
      {
        id: 'l4-18', title: 'Input: Common Input Mistakes',
        explanation: [
          'A short list of mistakes that show up over and over with input(). Memorizing this list saves a lot of debugging.',
          'Why it matters: the same three mistakes account for the majority of input-related bugs you will write.',
          'Recap: store the result, convert if you want a number, use float() for decimals.'
        ],
        code: `# 1. Not storing the result
# input("name? ")
# print(name)            # NameError

# 2. Doing math without converting
# x = input("n? ")
# print(x + 1)           # TypeError

# 3. Using int() on a decimal string
# price = int(input(...))   # crashes on "9.99"

# Correct
name = input("name? ")
print(name)

x = int(input("n? "))
print(x + 1)

price = float(input("price? "))
print(price + 1)`,
        codeCaption: 'The three input mistakes that account for most beginner bugs',
        mistake: { title: 'Repeating the same input bug', description: 'Once you have hit "input is a string" twice, write the conversion immediately every time.', bad: '# debug the same TypeError again and again', good: '# always type int( or float( BEFORE input(' },
        practice: { question: 'Spot the bug: n = input("n? "); print(n * 2)\nIf the user types 4, what prints?', hint: 'String * int.', answer: '"44" — the string "4" is repeated twice. To get 8, convert: int(n) * 2.' }
      },
      {
        id: 'l4-19', title: 'Input / Output Checkpoint',
        explanation: [
          'You can now ask the user for any kind of value, convert it to the right type, and use it in math or text.',
          'Why it matters: every interactive program you write — calculators, quizzes, mini-games — uses this exact pattern.',
          'Recap: input() returns text. Convert with int() or float(). Then compute. Then print.'
        ],
        code: `name = input("Your name: ")
age = int(input("Your age: "))
height = float(input("Your height (m): "))

print(f"Hi {name}.")
print(f"Next year you'll be {age + 1}.")
print(f"Half your height is {height / 2:.2f} m.")`,
        codeCaption: 'A small interactive program using everything from this chapter',
        mistake: { title: 'Forgetting that input always returns a string', description: 'If only one rule sticks, let it be this one.', bad: 'age = input("age: ")\nprint(age + 1)', good: 'age = int(input("age: "))\nprint(age + 1)' },
        practice: { question: 'Write a 2-line program that asks for a number and prints its square.', hint: 'int(input(...)) ** 2.', answer: 'n = int(input("n: "))\nprint(n ** 2)' },
        quiz: {
          question: 'What is the type of the value returned by input()?',
          options: [
            'int',
            'float',
            'str',
            'It depends on what the user types'
          ],
          correctIndex: 2,
          explanation: 'input() ALWAYS returns a str, no matter what the user types. Convert it if you want a number.'
        }
      },
      {
        id: 'l4-20', title: 'Boss Fight: Next Year Calculator',
        explanation: ['Final challenge for this level. Combine string input, int conversion, math, and return into one tiny function.', 'In a real interactive program you would read this from input(). Here we pass the string directly so the tests are repeatable.'],
        code: `# Pseudocode:
# 1. Take a digit STRING like "25"
# 2. Convert it to an int
# 3. Add 1 to get next year's age
# 4. Return the int result`,
        codeCaption: 'Strings in, ints out — the classic input pattern',
        challenge: {
          description: 'Write next_age(age_text) that takes a digit string like "25" and returns the integer for next year\'s age (26). The input is always a valid digit string.',
          starter: 'def next_age(age_text):\n    # convert age_text to int, then add 1\n    pass',
          tests: [
            { call: 'next_age("25")', expected: 26 },
            { call: 'next_age("0")', expected: 1 },
            { call: 'next_age("99")', expected: 100 },
            { call: 'next_age("1")', expected: 2 }
          ],
          hint: 'return int(age_text) + 1. Remember: the input is a string, you must convert before doing math.',
          solution: 'def next_age(age_text):\n    return int(age_text) + 1'
        }
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
      },
      {
        id: 'l5-4', title: 'Predict the Output: if / elif / else',
        explanation: ['Trace the code below in your head before clicking Reveal. Read each condition top to bottom and find the FIRST one that is True.', 'This is the same skill you will use in every LeetCode problem: simulating code on paper.'],
        code: `x = 12
if x > 20:
    print("A")
elif x > 10:
    print("B")
elif x > 5:
    print("C")
else:
    print("D")`,
        codeCaption: 'Only the first True branch runs — the rest are skipped',
        practice: { question: 'What does the code above print? Decide before revealing.', hint: 'x > 20 is False; x > 10 is True (12 > 10). The first True wins.', answer: 'B\n\nx > 20 is False (skip). x > 10 is True — print "B" and stop. The remaining branches are skipped entirely.' }
      },
      {
        id: 'l5-5', title: 'Fix the Bug: Wrong Operator',
        explanation: ['The code below was supposed to check if age is at least 18, but the operator is wrong. Find the bug before revealing the fix.'],
        mistake: { title: 'Confusing = with ==', description: '= assigns a value to a variable. == compares two values. Inside an if condition you want a comparison (==, >, <, >=, <=) — never a plain =.', bad: 'age = 20\nif age = 18:\n    print("adult")\n# SyntaxError: cannot assign in condition', good: 'age = 20\nif age >= 18:\n    print("adult")\n# correct: comparison, not assignment' },
        practice: { question: 'Why does the broken version crash? Try to answer before revealing.', hint: 'Look closely at the operator inside the if.', answer: '= is assignment, not comparison. Python expects a True/False expression after if. Use ==, >=, <=, > or < depending on what you want to check.' }
      },
      {
        id: 'l5-6', title: 'Tiny Drill: Even or Odd',
        explanation: ['Small coding task. Write a function that decides whether a number is even or odd. Run the tests to confirm.'],
        challenge: {
          description: 'Write even_or_odd(n) — return the string "even" if n is divisible by 2, otherwise return the string "odd".',
          starter: 'def even_or_odd(n):\n    # your code here\n    pass',
          tests: [
            { call: 'even_or_odd(4)', expected: 'even' },
            { call: 'even_or_odd(7)', expected: 'odd' },
            { call: 'even_or_odd(0)', expected: 'even' },
            { call: 'even_or_odd(-3)', expected: 'odd' }
          ],
          hint: 'Use n % 2 — if it equals 0 the number is even. Otherwise it is odd.',
          solution: 'def even_or_odd(n):\n    if n % 2 == 0:\n        return "even"\n    else:\n        return "odd"'
        }
      },
      {
        id: 'l5-7', title: 'Check Understanding: Conditions',
        explanation: ['Short conceptual question. Wrong answers will give you a hint instead of revealing the right one — re-read the question and try again.'],
        quiz: {
          question: 'In an if / elif / elif / else chain, how many of the blocks run when SEVERAL conditions are True?',
          options: [
            'All of them, top to bottom',
            'Only the first True one — then the chain stops',
            'Only the else block',
            'None — you must use multiple separate ifs'
          ],
          correctIndex: 1,
          explanation: 'Python checks each condition top to bottom. The FIRST True branch runs, and every other branch in the chain is skipped — even if it would also be True.'
        }
      },
      {
        id: 'l5-8', title: 'Boss Fight: Grade Checker',
        explanation: ['Final challenge for this level. Combine if / elif / else and comparisons into a grade-checker function.', 'This is a classic beginner exercise. You should be able to do it without help — but a hint and solution are there if you need them.'],
        code: `# Cutoffs:
#   90+   -> "A"
#   80-89 -> "B"
#   70-79 -> "C"
#   60-69 -> "D"
#   <60   -> "F"`,
        codeCaption: 'Standard letter-grade cutoffs',
        challenge: {
          description: 'Write grade(score) that returns "A", "B", "C", "D", or "F" using the cutoffs in the code example above.',
          starter: 'def grade(score):\n    # your code here\n    pass',
          tests: [
            { call: 'grade(95)', expected: 'A' },
            { call: 'grade(85)', expected: 'B' },
            { call: 'grade(72)', expected: 'C' },
            { call: 'grade(60)', expected: 'D' },
            { call: 'grade(40)', expected: 'F' },
            { call: 'grade(100)', expected: 'A' },
            { call: 'grade(59)', expected: 'F' }
          ],
          hint: 'Start with the highest cutoff: if score >= 90 return "A". Then elif >= 80, elif >= 70, elif >= 60, else "F".',
          solution: 'def grade(score):\n    if score >= 90:\n        return "A"\n    elif score >= 80:\n        return "B"\n    elif score >= 70:\n        return "C"\n    elif score >= 60:\n        return "D"\n    else:\n        return "F"'
        }
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
      },
      {
        id: 'l6-5', title: 'Predict the Output: Summing in a Loop',
        explanation: ['Trace this loop one iteration at a time. Write the value of total after each step before clicking Reveal.', 'Loop tracing is the single most useful debugging skill in your toolbox — slow down and do it on paper.'],
        code: `total = 0
for i in range(4):
    total += i
print(total)`,
        codeCaption: 'range(4) gives 0, 1, 2, 3',
        practice: { question: 'What does the code above print?', hint: 'After each iteration, what is total? Start at 0.', answer: '6\n\ni = 0 → total = 0 + 0 = 0. i = 1 → total = 0 + 1 = 1. i = 2 → total = 1 + 2 = 3. i = 3 → total = 3 + 3 = 6. Then prints 6.' }
      },
      {
        id: 'l6-6', title: 'Fix the Bug: Infinite Loop',
        explanation: ['The code below was supposed to print 1 through 5, but it runs forever. Find the bug before revealing the fix.'],
        mistake: { title: 'Forgetting to update the loop variable', description: 'Inside a while loop, you MUST do something that eventually makes the condition False. If the condition never changes, the loop runs forever.', bad: 'i = 1\nwhile i <= 5:\n    print(i)\n# never stops — i is always 1', good: 'i = 1\nwhile i <= 5:\n    print(i)\n    i += 1   # eventually makes i <= 5 False' },
        practice: { question: 'Why does the broken loop run forever?', hint: 'What is changing inside the loop body?', answer: 'Nothing inside the loop changes i, so i <= 5 stays True forever. Adding i += 1 inside the loop makes the condition eventually become False so the loop ends.' }
      },
      {
        id: 'l6-7', title: 'Tiny Drill: Sum 1 to N',
        explanation: ['Classic loop pattern: add every integer from 1 to n. Pyodide will run your code against several test cases.'],
        challenge: {
          description: 'Write sum_to(n) that returns 1 + 2 + 3 + ... + n. Assume n >= 1.',
          starter: 'def sum_to(n):\n    # your code here\n    pass',
          tests: [
            { call: 'sum_to(1)', expected: 1 },
            { call: 'sum_to(3)', expected: 6 },
            { call: 'sum_to(5)', expected: 15 },
            { call: 'sum_to(10)', expected: 55 }
          ],
          hint: 'Start total = 0. Loop i over range(1, n + 1) and do total += i. Remember: range stop is exclusive.',
          solution: 'def sum_to(n):\n    total = 0\n    for i in range(1, n + 1):\n        total += i\n    return total'
        }
      },
      {
        id: 'l6-8', title: 'Check Understanding: range()',
        explanation: ['Short check on how range() actually works. Wrong answers will not reveal the correct one — re-read the question and try again.'],
        quiz: {
          question: 'How many times does the body of `for i in range(1, 5):` run?',
          options: [
            '5 — i goes from 0 to 4',
            '4 — i goes from 1 to 4 (stop is exclusive)',
            '5 — i goes from 1 to 5 inclusive',
            'It does not run because 1 < 5'
          ],
          correctIndex: 1,
          explanation: 'range(start, stop) includes start but EXCLUDES stop. So range(1, 5) gives 1, 2, 3, 4 — four values, so the body runs 4 times.'
        }
      },
      {
        id: 'l6-9', title: 'Boss Fight: Count Evens',
        explanation: ['Combine loops + conditions + counting. Given a list of integers, return how many are even.', 'This is the same shape as dozens of beginner LeetCode problems — the difference is what you decide to count.'],
        challenge: {
          description: 'Write count_evens(nums) that returns how many numbers in the list nums are even. An empty list should return 0.',
          starter: 'def count_evens(nums):\n    # your code here\n    pass',
          tests: [
            { call: 'count_evens([1, 2, 3, 4, 5, 6])', expected: 3 },
            { call: 'count_evens([1, 3, 5])', expected: 0 },
            { call: 'count_evens([])', expected: 0 },
            { call: 'count_evens([0, 2, 4, 6])', expected: 4 },
            { call: 'count_evens([-2, -1, 0, 1])', expected: 2 }
          ],
          hint: 'Start a counter at 0. Loop n through nums. If n % 2 == 0, add 1 to the counter. Return the counter.',
          solution: 'def count_evens(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count += 1\n    return count'
        }
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
      },
      {
        id: 'l7-4', title: 'Predict the Output: Functions',
        explanation: ['Trace the function calls below. What does each call return, and what does Python print?'],
        code: `def mystery(a, b):
    if a > b:
        return a
    return b

print(mystery(3, 8))
print(mystery(10, 4))`,
        codeCaption: 'Two return paths — whichever is hit first wins',
        practice: { question: 'What does the code above print?', hint: 'mystery returns whichever of a and b is larger.', answer: '8\n10\n\nmystery(3, 8): 3 > 8 is False, so return b → 8. mystery(10, 4): 10 > 4 is True, so return a → 10.' }
      },
      {
        id: 'l7-5', title: 'Fix the Bug: print vs return',
        explanation: ['The function below was supposed to return a squared number, but using it in math crashes with TypeError.'],
        mistake: { title: 'Printing instead of returning', description: 'print() displays output but the function still returns None (the default). To send the value back to the caller, use return.', bad: 'def square(n):\n    print(n * n)\n\nx = square(5) + 1\n# TypeError: NoneType + int', good: 'def square(n):\n    return n * n\n\nx = square(5) + 1\n# x = 26' },
        practice: { question: 'Why does x = square(5) + 1 crash in the broken version?', hint: 'What does the function actually give back?', answer: 'square() prints but never returns, so the function returns None. None + 1 is a TypeError. Replace print with return to give the value back to the caller.' }
      },
      {
        id: 'l7-6', title: 'Tiny Drill: Greet Function',
        explanation: ['Define a small function that takes a name and returns a greeting string.'],
        challenge: {
          description: 'Write greet(name) that returns "Hello, " followed by name and then "!". For example, greet("Alice") returns "Hello, Alice!".',
          starter: 'def greet(name):\n    # your code here\n    pass',
          tests: [
            { call: 'greet("Alice")', expected: 'Hello, Alice!' },
            { call: 'greet("Bob")', expected: 'Hello, Bob!' },
            { call: 'greet("")', expected: 'Hello, !' }
          ],
          hint: 'Use return with an f-string: return f"Hello, {name}!". Make sure to return — do not print.',
          solution: 'def greet(name):\n    return f"Hello, {name}!"'
        }
      },
      {
        id: 'l7-7', title: 'Check Understanding: Return Values',
        explanation: ['One short conceptual question. Wrong answers will not reveal the right one — re-read and retry.'],
        quiz: {
          question: 'What does a Python function return if you NEVER write a return statement?',
          options: [
            'The last value printed inside it',
            'Nothing — calling it crashes',
            'None',
            '0'
          ],
          correctIndex: 2,
          explanation: 'Every Python function returns None by default if no return statement is written. LeetCode tests fail silently when this happens because they check the return value.'
        }
      },
      {
        id: 'l7-8', title: 'Boss Fight: Leap Year',
        explanation: ['Combine everything: parameters, return, comparisons, and logical operators. Decide whether a given year is a leap year.', 'This is a real classic — small but combines several beginner skills at once.'],
        code: `# A year is a leap year if:
#   - it is divisible by 4 AND NOT divisible by 100, OR
#   - it is divisible by 400`,
        codeCaption: 'The Gregorian leap-year rule',
        challenge: {
          description: 'Write is_leap(year) that returns True if year is a leap year, False otherwise. Use the rule shown in the code example above.',
          starter: 'def is_leap(year):\n    # your code here\n    pass',
          tests: [
            { call: 'is_leap(2024)', expected: true },
            { call: 'is_leap(2023)', expected: false },
            { call: 'is_leap(2000)', expected: true },
            { call: 'is_leap(1900)', expected: false },
            { call: 'is_leap(2100)', expected: false },
            { call: 'is_leap(2400)', expected: true }
          ],
          hint: 'Return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0).',
          solution: 'def is_leap(year):\n    return (year % 4 == 0 and year % 100 != 0) or (year % 400 == 0)'
        }
      }
    ]
  },
  {
    id: 13, slug: 'pre-lab-checkpoint', title: 'Before Practice Lab',
    subtitle: 'Prove every beginner skill before bigger problems',
    color: '#f0883e',
    badgeLabel: 'Check',
    lessons: [
      {
        id: 'l13-0', title: 'Checkpoint 1: Print and Variables',
        explanation: ['Quick skill check. Can you store values in variables and return a formatted string? This confirms the most basic skill before moving on.', 'If this drill is hard, go back to Level 2 (Variables) and re-run those lessons before continuing.'],
        challenge: {
          description: 'Write make_label(name, age) that returns a string in the EXACT format: "name=Alice age=25" — using whatever name and age the caller passes in.',
          starter: 'def make_label(name, age):\n    # your code here\n    pass',
          tests: [
            { call: 'make_label("Alice", 25)', expected: 'name=Alice age=25' },
            { call: 'make_label("Bob", 7)', expected: 'name=Bob age=7' },
            { call: 'make_label("", 0)', expected: 'name= age=0' }
          ],
          hint: 'Use an f-string: return f"name={name} age={age}".',
          solution: 'def make_label(name, age):\n    return f"name={name} age={age}"'
        }
      },
      {
        id: 'l13-1', title: 'Checkpoint 2: Data Types',
        explanation: ['Quick type quiz. If you cannot recognize types fluently, the rest of the course will keep tripping you up.'],
        quiz: {
          question: 'What is the type of the value 3.0 in Python?',
          options: ['int', 'float', 'str', 'bool'],
          correctIndex: 1,
          explanation: 'Any number written with a decimal point is a float — even if the decimal is .0. Compare with 3 (int) and "3.0" (str).'
        }
      },
      {
        id: 'l13-2', title: 'Checkpoint 3: Math',
        explanation: ['Arithmetic plus integer division. The // operator divides and throws away the remainder.'],
        challenge: {
          description: 'Write averages(a, b) that returns the integer average of a and b using floor division (//). For example, averages(3, 6) returns 4 because (3 + 6) // 2 = 4.',
          starter: 'def averages(a, b):\n    # your code here\n    pass',
          tests: [
            { call: 'averages(3, 6)', expected: 4 },
            { call: 'averages(10, 20)', expected: 15 },
            { call: 'averages(7, 7)', expected: 7 },
            { call: 'averages(1, 2)', expected: 1 }
          ],
          hint: 'return (a + b) // 2',
          solution: 'def averages(a, b):\n    return (a + b) // 2'
        }
      },
      {
        id: 'l13-3', title: 'Checkpoint 4: Type Conversion',
        explanation: ['Strings and numbers behave differently. Make sure you can move between them with int() and friends.'],
        challenge: {
          description: 'Write to_int_doubled(text) that takes a digit string like "7", converts it to an int, doubles it, and returns the int result.',
          starter: 'def to_int_doubled(text):\n    # your code here\n    pass',
          tests: [
            { call: 'to_int_doubled("7")', expected: 14 },
            { call: 'to_int_doubled("0")', expected: 0 },
            { call: 'to_int_doubled("100")', expected: 200 }
          ],
          hint: 'return int(text) * 2',
          solution: 'def to_int_doubled(text):\n    return int(text) * 2'
        }
      },
      {
        id: 'l13-4', title: 'Checkpoint 5: Compare and Decide',
        explanation: ['Comparisons plus if / else: the brain of nearly every problem you will solve.'],
        challenge: {
          description: 'Write status(score) that returns "pass" if score is at least 60, and "fail" otherwise.',
          starter: 'def status(score):\n    # your code here\n    pass',
          tests: [
            { call: 'status(75)', expected: 'pass' },
            { call: 'status(60)', expected: 'pass' },
            { call: 'status(59)', expected: 'fail' },
            { call: 'status(0)', expected: 'fail' }
          ],
          hint: 'if score >= 60: return "pass" else: return "fail".',
          solution: 'def status(score):\n    if score >= 60:\n        return "pass"\n    else:\n        return "fail"'
        }
      },
      {
        id: 'l13-5', title: 'Checkpoint 6: Final Readiness',
        explanation: ['Final boss for the beginner phase: loops + conditions + functions together. Pass this and you are genuinely ready for the Practice Lab.', 'If you struggle here, do not push forward — go back and replay Levels 5, 6, and 7 first.'],
        challenge: {
          description: 'Write sum_evens(nums) that returns the sum of every even number in the list nums. An empty list should return 0.',
          starter: 'def sum_evens(nums):\n    # your code here\n    pass',
          tests: [
            { call: 'sum_evens([1, 2, 3, 4, 5])', expected: 6 },
            { call: 'sum_evens([])', expected: 0 },
            { call: 'sum_evens([1, 3, 5])', expected: 0 },
            { call: 'sum_evens([2, 4, 6, 8])', expected: 20 }
          ],
          hint: 'total = 0. Loop n through nums. If n % 2 == 0, total += n. Return total.',
          solution: 'def sum_evens(nums):\n    total = 0\n    for n in nums:\n        if n % 2 == 0:\n            total += n\n    return total'
        },
        quiz: {
          question: 'You passed every checkpoint. What is the single most important habit to bring into the Practice Lab?',
          options: [
            'Read the problem carefully and return the EXACT expected value — print is for debugging only',
            'Solve everything in one line of code',
            'Use print() instead of return — the grader reads stdout',
            'Copy the hint verbatim and submit it as the answer'
          ],
          correctIndex: 0,
          explanation: 'Lab problems test your function\'s return value, not what you print. Read carefully, decide what to return, then code. print() is fine while developing, but the final answer must come from return.'
        }
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
    id: 14, slug: 'dsa-foundations', title: 'DSA Foundations',
    subtitle: 'Gently learn the building blocks behind every LeetCode problem',
    color: '#a371f7',
    badgeLabel: 'DSA Foundations',
    lessons: [
      {
        id: 'l14-0', title: 'What is DSA?',
        explanation: [
          'DSA stands for Data Structures and Algorithms. A data structure is just a way to organize information so a computer can use it. An algorithm is just a set of steps that solves a problem.',
          'Why it matters: every LeetCode problem is really asking "pick the right container for your data, then pick the right steps to work with it." That is it. No magic.',
          'Simple analogy: a backpack vs a filing cabinet are both data structures — they store stuff differently. Packing your bag for school is an algorithm — a small set of repeatable steps.',
          'For now, do not worry about hard problems. Your only job in this section is to get comfortable with the building blocks: lists, strings, dictionaries, sets, stacks, and queues.'
        ],
        code: `# A tiny taste of DSA:
# Data structure: a list (holds many numbers)
nums = [3, 7, 1, 9, 4]

# Algorithm: go through the list and find the biggest
biggest = nums[0]
for n in nums:
    if n > biggest:
        biggest = n

print(biggest)   # 9`,
        codeCaption: 'A list (data structure) plus a few steps (algorithm) is already real DSA.',
        mistake: {
          title: 'Thinking DSA is only for advanced people',
          description: 'DSA sounds scary but the beginner version is just: lists, dicts, sets, loops, and ifs. You already know most of the pieces.',
          bad: '# "I need to learn DSA later, it is too advanced"',
          good: '# "DSA is just organized data + organized steps. I already use both."'
        },
        practice: {
          question: 'In your own words: what is a data structure and what is an algorithm? Give one real-life example of each.',
          hint: 'Think containers (backpack, fridge, shelf) and step-by-step routines (recipe, morning routine).',
          answer: 'A data structure is a way to organize data. Example: a contact list on your phone.\nAn algorithm is a series of steps to do something. Example: a recipe for pancakes.'
        },
        quiz: {
          question: 'Which best describes DSA at the beginner level?',
          options: [
            'A secret math language only senior engineers understand',
            'Picking the right container for your data and the right steps to use it',
            'Memorizing every LeetCode problem',
            'A specific Python library you import'
          ],
          correctIndex: 1,
          explanation: 'DSA is just: choose how to store the data, then choose the steps to work with it. Lists, dicts, sets, and loops are already DSA tools.'
        },
        reflection: 'Recap: DSA = data structures (how data is stored) + algorithms (steps to use that data). You will spend the next lessons getting fluent with the most useful beginner ones.'
      },
      {
        id: 'l14-1', title: 'What is Big O?',
        explanation: [
          'Big O is just a way to describe how slow a piece of code gets as the input grows. It is not exact timing — it is the SHAPE of the growth.',
          'Why it matters: in interviews and on LeetCode, "does it work?" is only half the question. "Is it fast enough?" is the other half. Big O is the vocabulary for that second half.',
          'Simple analogy: imagine looking for a friend in a room. Glancing at a name tag on your own shirt is instant — that is O(1). Walking past every person once to find them is O(n). Comparing every pair of people to each other is O(n²).',
          'Time complexity = how long the code takes. Space complexity = how much extra memory it uses. For now, focus on time.',
          'You do not need to be precise yet. If you can spot "one loop" vs "a loop inside a loop", you already understand 80% of beginner Big O.'
        ],
        code: `# O(1) — constant time, does NOT depend on n
nums = [10, 20, 30, 40, 50]
print(nums[0])           # one step, always

# O(n) — grows with the size of the input
for n in nums:
    print(n)             # n steps total

# O(n^2) — a loop INSIDE a loop
for a in nums:
    for b in nums:
        print(a, b)      # n * n steps total`,
        codeCaption: 'O(1) = one step. O(n) = one loop. O(n²) = nested loop. That is the beginner cheat sheet.',
        stepByStep: [
          '1. Look at the code. Is there a loop?',
          '2. No loop → probably O(1).',
          '3. One loop over the input → O(n).',
          '4. A loop INSIDE another loop over the same input → O(n²).',
          '5. Ignore tiny details (constants, +1s). Big O cares about the shape, not the number.'
        ],
        mistake: {
          title: 'Counting lines instead of loops',
          description: 'Big O is not about how many lines of code you wrote. It is about how the work grows when the input grows. 100 lines with no loop is still O(1).',
          bad: '# "This is 12 lines, so it is O(12)"  — not how Big O works',
          good: '# "There is one loop over nums, so this is O(n)."'
        },
        practice: {
          question: 'Predict the output AND the Big O:\n\nnums = [1, 2, 3]\nfor x in nums:\n    for y in nums:\n        print(x, y)',
          hint: 'Two loops, each over nums of length 3. That is 3 * 3 prints.',
          answer: 'Output: 9 lines (1 1, 1 2, 1 3, 2 1, ... 3 3).\nBig O: O(n²) because of the loop inside a loop.'
        },
        quiz: {
          question: 'You write a function that loops through a list once and prints each item. What is its time complexity?',
          options: ['O(1)', 'O(n)', 'O(n²)', 'O(n³)'],
          correctIndex: 1,
          explanation: 'One pass over the list = O(n). Work grows in a straight line with the input size.'
        },
        reflection: 'Recap: O(1) = instant, O(n) = one loop, O(n²) = nested loops. You do not need precision yet — just notice the shape of the loops.'
      },
      {
        id: 'l14-2', title: 'Lists / Arrays Review',
        explanation: [
          'A list (in many other languages called an "array") is an ordered collection of values. Each value has a position called an index, starting at 0.',
          'Why it matters: lists are everywhere in LeetCode. "Given an array of numbers..." is how at least half of Easy problems start.',
          'Simple analogy: a list is like a row of lockers numbered starting from 0. To get inside locker 3, you ask for nums[3].',
          'Key beginner skills: index a value, update a value, append a new value, get the length, loop through every value, and check if something is inside.',
          'Common beginner mistake: forgetting indexes start at 0. The first element is nums[0], not nums[1].'
        ],
        code: `nums = [10, 20, 30, 40]

# Index (read)
print(nums[0])          # 10 — first element
print(nums[-1])         # 40 — last element using negative index

# Update
nums[1] = 99
print(nums)             # [10, 99, 30, 40]

# Append
nums.append(50)
print(nums)             # [10, 99, 30, 40, 50]

# Length
print(len(nums))        # 5

# Loop
for n in nums:
    print(n)

# Membership
print(30 in nums)       # True
print(7  in nums)       # False`,
        codeCaption: 'The 6 list moves you will use constantly: index, update, append, len, loop, in.',
        stepByStep: [
          '1. nums = [10, 20, 30, 40] — a list of 4 numbers at indexes 0, 1, 2, 3.',
          '2. nums[0] reads the first item.',
          '3. nums[1] = 99 overwrites the second item.',
          '4. nums.append(50) adds 50 to the end.',
          '5. len(nums) counts how many items are inside.',
          '6. "for n in nums" walks through every item, one at a time.'
        ],
        mistake: {
          title: 'Indexing past the end of the list',
          description: 'If your list has 4 items, the highest valid index is 3. nums[4] crashes with IndexError.',
          bad: 'nums = [10, 20, 30, 40]\nprint(nums[4])    # IndexError',
          good: 'nums = [10, 20, 30, 40]\nprint(nums[-1])   # 40 — safe way to get the last item'
        },
        practice: {
          question: 'Predict the output:\n\nnums = [5, 10, 15]\nnums.append(20)\nprint(nums[0], nums[-1], len(nums))',
          hint: 'append adds to the END. -1 is the last index.',
          answer: '5 20 4\n\nnums[0] is 5, nums[-1] is the newly appended 20, and len is 4 after the append.'
        },
        challenge: {
          description: 'DSA drill: write largest(nums) that returns the largest number in the list. Assume nums has at least one number.',
          starter: 'def largest(nums):\n    # your code here\n    pass',
          tests: [
            { call: 'largest([3, 7, 1, 9, 4])', expected: 9 },
            { call: 'largest([-5, -2, -10])',  expected: -2 },
            { call: 'largest([42])',           expected: 42 }
          ],
          hint: 'Start with biggest = nums[0]. Loop through nums. If n > biggest, update biggest. Return biggest.',
          solution: 'def largest(nums):\n    biggest = nums[0]\n    for n in nums:\n        if n > biggest:\n            biggest = n\n    return biggest'
        },
        quiz: {
          question: 'Given nums = [4, 8, 15, 16, 23, 42], which expression correctly gets the LAST element?',
          options: ['nums[6]', 'nums[len(nums)]', 'nums[-1]', 'nums.last()'],
          correctIndex: 2,
          explanation: 'Indexes start at 0, so the last index is len(nums) - 1, or simply -1. nums[6] and nums[len(nums)] crash. nums.last() does not exist in Python.'
        },
        reflection: 'Recap: lists are indexed from 0, support len/append/in, and you can loop them with "for x in nums". Most LeetCode warmups live here.'
      },
      {
        id: 'l14-3', title: 'Strings as Sequences',
        explanation: [
          'A string is a sequence of characters. The big idea: a string behaves a LOT like a list of one-letter pieces.',
          'You can index it, get its length, loop through it, slice it, and check if a character is inside — exactly like a list.',
          'Why it matters: many beginner LeetCode problems are about strings (reverse a word, count vowels, check duplicates). The same list skills apply.',
          'Simple analogy: the word "cat" is like a list ["c", "a", "t"]. Position 0 is "c", position 1 is "a", position 2 is "t".',
          'Important rule: strings are IMMUTABLE. You cannot change a character in place. word[0] = "b" will crash. If you need to change something, build a new string instead.'
        ],
        code: `word = "python"

# Index
print(word[0])      # 'p'
print(word[-1])     # 'n'

# Length
print(len(word))    # 6

# Loop
for ch in word:
    print(ch)

# Slice (start:stop, stop is NOT included)
print(word[0:3])    # 'pyt'
print(word[3:])     # 'hon'
print(word[::-1])   # 'nohtyp' — reversed

# Membership
print("y" in word)  # True
print("z" in word)  # False`,
        codeCaption: 'Strings act like read-only lists of characters: indexing, len, looping, slicing, in.',
        stepByStep: [
          '1. word = "python" stores 6 characters in order.',
          '2. word[0] reads the first character.',
          '3. word[0:3] takes characters at indexes 0, 1, 2 (the 3 is excluded).',
          '4. word[::-1] is a Pythonic trick to reverse a string.',
          '5. "for ch in word" walks one character at a time.'
        ],
        mistake: {
          title: 'Trying to change a character with index assignment',
          description: 'Strings cannot be modified in place. Build a new string instead.',
          bad: 'word = "cat"\nword[0] = "b"   # TypeError: \'str\' object does not support item assignment',
          good: 'word = "cat"\nword = "b" + word[1:]   # "bat"'
        },
        practice: {
          question: 'Predict the output:\n\nword = "hello"\nprint(word[1], word[-1], len(word), word[1:4])',
          hint: 'Indexes start at 0. -1 is the last. Slicing stops BEFORE the second number.',
          answer: 'e o 5 ell\n\nword[1] is "e", word[-1] is "o", len is 5, word[1:4] is "ell" (indexes 1, 2, 3).'
        },
        challenge: {
          description: 'DSA drill: write contains_letter(word, letter) that returns True if letter appears anywhere in word, otherwise False. Both inputs are lowercase strings.',
          starter: 'def contains_letter(word, letter):\n    # your code here\n    pass',
          tests: [
            { call: 'contains_letter("python", "y")', expected: true },
            { call: 'contains_letter("python", "z")', expected: false },
            { call: 'contains_letter("", "a")',       expected: false }
          ],
          hint: 'You can use "letter in word" directly, or loop char by char.',
          solution: 'def contains_letter(word, letter):\n    return letter in word'
        },
        quiz: {
          question: 'Why does this code crash?\n\nword = "hi"\nword[0] = "H"',
          options: [
            'Indexes do not exist for strings',
            'Strings are immutable — you cannot change a character in place',
            '"H" is uppercase',
            'You must use word.set(0, "H") instead'
          ],
          correctIndex: 1,
          explanation: 'Strings cannot be edited in place in Python. To change a character, build a new string with slicing or concatenation.'
        },
        reflection: 'Recap: a string is basically a read-only list of characters. Index, len, loop, slice, and "in" all work. Just remember: immutable.'
      },
      {
        id: 'l14-4', title: 'Dictionaries / Hash Maps Review',
        explanation: [
          'A dictionary (called a "hash map" in other languages) stores key → value pairs. You look up a value by its key, instantly.',
          'Why it matters: dictionaries are the single most important data structure for beginner LeetCode. Two Sum, character counting, "have I seen X?" — all dictionaries.',
          'Simple analogy: a real-world dictionary maps a word → its definition. A Python dictionary maps any key → any value.',
          'Key beginner skills: create, read with dict[key], read safely with dict.get(key), add/update with dict[key] = value, check existence with "key in dict", and count with the .get(key, 0) + 1 trick.',
          'Lookup is O(1) — instant — no matter how many keys are inside. That is the magic.'
        ],
        code: `ages = {"Alice": 25, "Bob": 30}

# Read
print(ages["Alice"])         # 25

# Safe read (no crash)
print(ages.get("Carol"))     # None
print(ages.get("Carol", 0))  # 0 (default)

# Add / update
ages["Carol"] = 28           # add
ages["Alice"] = 26           # update

# Check
print("Bob" in ages)         # True

# Count with a dict — THE pattern to remember
word = "banana"
count = {}
for ch in word:
    count[ch] = count.get(ch, 0) + 1
print(count)   # {'b': 1, 'a': 3, 'n': 2}`,
        codeCaption: 'The .get(key, 0) + 1 pattern is the heart of beginner counting problems.',
        stepByStep: [
          '1. {} creates an empty dictionary.',
          '2. ages["Alice"] = 25 stores a key→value pair.',
          '3. ages["Alice"] reads the value back.',
          '4. ages.get("Carol", 0) gives 0 instead of crashing on missing keys.',
          '5. In the loop, count[ch] = count.get(ch, 0) + 1 increases the running tally for each character.'
        ],
        mistake: {
          title: 'Crashing on a missing key with dict[key]',
          description: 'dict[key] raises KeyError if the key does not exist. Use dict.get(key) or "key in dict" first.',
          bad: 'ages = {"Alice": 25}\nprint(ages["Bob"])    # KeyError',
          good: 'print(ages.get("Bob"))      # None\nprint(ages.get("Bob", 0))   # 0'
        },
        practice: {
          question: 'Predict the output:\n\nd = {}\nfor x in [1, 2, 1, 1, 2]:\n    d[x] = d.get(x, 0) + 1\nprint(d)',
          hint: 'Count how many times each number appears.',
          answer: '{1: 3, 2: 2}\n\n1 appears three times, 2 appears twice.'
        },
        challenge: {
          description: 'DSA drill: write word_count(words) where words is a list of strings. Return a dictionary mapping each word to the number of times it appears.',
          starter: 'def word_count(words):\n    # your code here\n    pass',
          tests: [
            { call: 'word_count(["a", "b", "a"])',        expected: { a: 2, b: 1 } },
            { call: 'word_count([])',                     expected: {} },
            { call: 'word_count(["hi", "hi", "hi"])',    expected: { hi: 3 } }
          ],
          hint: 'count = {}. Loop w in words. count[w] = count.get(w, 0) + 1. Return count.',
          solution: 'def word_count(words):\n    count = {}\n    for w in words:\n        count[w] = count.get(w, 0) + 1\n    return count'
        },
        quiz: {
          question: 'Which line safely adds 1 to the count for key c in a dict, even when c is not in the dict yet?',
          options: [
            'count[c] = count[c] + 1',
            'count[c] += 1',
            'count[c] = count.get(c, 0) + 1',
            'count.add(c, 1)'
          ],
          correctIndex: 2,
          explanation: 'count.get(c, 0) returns 0 when c is missing, so the + 1 starts the count cleanly. The first two crash with KeyError, and count.add() does not exist.'
        },
        reflection: 'Recap: dicts map keys to values with O(1) lookup. The .get(key, 0) + 1 pattern solves a huge chunk of beginner LeetCode counting problems.'
      },
      {
        id: 'l14-5', title: 'Sets Review',
        explanation: [
          'A set is a collection of UNIQUE values. Adding a duplicate does nothing. Order is not guaranteed.',
          'Why it matters: sets are perfect for two things — "have I seen this before?" and "give me only the unique items." Both come up constantly in beginner LeetCode.',
          'Simple analogy: a set is like a bag of unique stickers. If you already have a Pikachu sticker and someone hands you another Pikachu, the bag does not change.',
          'Key beginner skills: create, add, remove/discard, check membership with "in", and turn a list into a set to find uniques.',
          'Membership check (x in my_set) is O(1) — just like dictionary lookup. That is the superpower.'
        ],
        code: `# Create a set
seen = set()
seen.add(1)
seen.add(2)
seen.add(1)              # duplicate — ignored
print(seen)              # {1, 2}

# Membership — O(1)
print(2 in seen)         # True
print(9 in seen)         # False

# Remove (discard does NOT crash if missing)
seen.discard(2)
seen.discard(99)         # safe — no error

# Unique values from a list
nums = [1, 2, 2, 3, 3, 3]
print(set(nums))         # {1, 2, 3}

# Classic pattern: detect duplicates
def has_duplicate(nums):
    seen = set()
    for n in nums:
        if n in seen:
            return True
        seen.add(n)
    return False`,
        codeCaption: 'Sets = uniqueness + instant membership. The classic loop pattern solves Contains Duplicate.',
        stepByStep: [
          '1. set() creates an empty set.',
          '2. seen.add(x) puts x in the set (duplicates do nothing).',
          '3. "x in seen" is the O(1) membership check.',
          '4. set(my_list) turns a list into a set — duplicates disappear.',
          '5. In has_duplicate, we add each number after checking; if we see it twice, we return True.'
        ],
        mistake: {
          title: 'Trying to index into a set',
          description: 'Sets have no order, so no indexes. my_set[0] crashes. If you need order, use a list.',
          bad: 's = {1, 2, 3}\nprint(s[0])    # TypeError',
          good: 's = {1, 2, 3}\nprint(1 in s)  # True — the correct use of a set'
        },
        practice: {
          question: 'Predict the output:\n\ns = set()\nfor x in [1, 2, 2, 3]:\n    s.add(x)\nprint(len(s))',
          hint: 'Duplicates are ignored. How many unique numbers are in [1, 2, 2, 3]?',
          answer: '3\n\nThe set ends up as {1, 2, 3}, so len is 3.'
        },
        challenge: {
          description: 'DSA drill: write has_duplicate(nums) that returns True if any number appears more than once in nums, else False.',
          starter: 'def has_duplicate(nums):\n    # your code here\n    pass',
          tests: [
            { call: 'has_duplicate([1, 2, 3, 1])',    expected: true },
            { call: 'has_duplicate([1, 2, 3, 4])',    expected: false },
            { call: 'has_duplicate([])',              expected: false }
          ],
          hint: 'seen = set(). Loop n in nums. If n in seen, return True. Otherwise seen.add(n). At the end, return False.',
          solution: 'def has_duplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False'
        },
        quiz: {
          question: 'Which problem is the BEST fit for a set?',
          options: [
            'Storing scores in the order they were earned',
            'Mapping student names to their grades',
            'Tracking which words you have already seen in a sentence',
            'Sorting numbers from smallest to largest'
          ],
          correctIndex: 2,
          explanation: 'Sets shine when you only need "have I seen this before?" with no order and no duplicates. The other tasks need a list, a dict, or sorting.'
        },
        reflection: 'Recap: sets store unique values and check membership in O(1). The "seen" pattern is your new best friend.'
      },
      {
        id: 'l14-6', title: 'Stacks',
        explanation: [
          'A stack is a structure where the LAST thing you put in is the FIRST thing you take out. Computer scientists call this LIFO (Last In, First Out).',
          'Why it matters: stacks show up in beginner LeetCode for things like "valid parentheses" and reversing things. The Python list already works as a stack — no special import.',
          'Simple analogy: a stack of plates. You add a new plate on top, and you grab from the top. You do not pull a plate out from the bottom.',
          'In Python, use stack.append(x) to push, and stack.pop() to pop the top item. That is it.',
          'Do not worry about hard parentheses problems yet. Just get comfortable with push and pop.'
        ],
        code: `stack = []

# Push (add to the top)
stack.append("A")
stack.append("B")
stack.append("C")
print(stack)        # ['A', 'B', 'C']

# Peek at the top
print(stack[-1])    # 'C'

# Pop (remove from the top)
top = stack.pop()
print(top)          # 'C'
print(stack)        # ['A', 'B']

# Use a stack to reverse a list
def reverse_list(items):
    stack = []
    for x in items:
        stack.append(x)
    result = []
    while stack:
        result.append(stack.pop())
    return result

print(reverse_list([1, 2, 3]))   # [3, 2, 1]`,
        codeCaption: 'A Python list IS a stack: append to push, pop to pop. LIFO order.',
        stepByStep: [
          '1. stack = [] starts empty.',
          '2. append("A") pushes "A" on top → ["A"].',
          '3. append("B") → ["A", "B"]. append("C") → ["A", "B", "C"].',
          '4. stack[-1] peeks at the top without removing.',
          '5. stack.pop() removes and returns the last item.',
          '6. To reverse a list with a stack: push everything in, then pop everything out.'
        ],
        mistake: {
          title: 'Calling pop(0) when you wanted pop()',
          description: 'pop() removes the LAST item (top of stack). pop(0) removes the FIRST item — that turns it into a queue, and it is slow on a list.',
          bad: 'stack.pop(0)   # not a stack anymore, also O(n)',
          good: 'stack.pop()    # correct: removes the top, O(1)'
        },
        practice: {
          question: 'Predict the output:\n\ns = []\ns.append(1)\ns.append(2)\ns.append(3)\nprint(s.pop(), s.pop())',
          hint: 'pop() always takes the LAST item.',
          answer: '3 2\n\nPushes are 1, 2, 3. The two pops take 3 first, then 2.'
        },
        challenge: {
          description: 'DSA drill: write reverse_with_stack(items) that returns a NEW list with the items in reverse order, using a stack (push then pop).',
          starter: 'def reverse_with_stack(items):\n    # your code here\n    pass',
          tests: [
            { call: 'reverse_with_stack([1, 2, 3])', expected: [3, 2, 1] },
            { call: 'reverse_with_stack(["a","b"])',  expected: ["b", "a"] },
            { call: 'reverse_with_stack([])',         expected: [] }
          ],
          hint: 'Build stack = []. For x in items, stack.append(x). Then while stack: result.append(stack.pop()). Return result.',
          solution: 'def reverse_with_stack(items):\n    stack = []\n    for x in items:\n        stack.append(x)\n    result = []\n    while stack:\n        result.append(stack.pop())\n    return result'
        },
        quiz: {
          question: 'A stack is LIFO. If you push A, B, C in that order and then pop once, what do you get?',
          options: ['A', 'B', 'C', 'Nothing — the stack is empty'],
          correctIndex: 2,
          explanation: 'Last In, First Out. C went in last, so C comes out first.'
        },
        reflection: 'Recap: a stack is LIFO. In Python, a list with append() and pop() IS a stack. Push, peek with [-1], pop.'
      },
      {
        id: 'l14-7', title: 'Queues',
        explanation: [
          'A queue is the opposite shape of a stack: the FIRST thing you put in is the FIRST thing you take out. This is FIFO (First In, First Out).',
          'Why it matters: queues are the natural way to handle "process things in the order they arrived." They appear in beginner BFS-style thinking and in many real-world problems.',
          'Simple analogy: a line at the coffee shop. The first person in line gets served first.',
          'In Python, you CAN use a list, but list.pop(0) is slow. The cleaner tool is collections.deque — it supports fast adds and removes from either end.',
          'Beginner skills: append() to add to the back, popleft() to remove from the front. That is the FIFO pair.'
        ],
        code: `from collections import deque

queue = deque()

# Enqueue (add to the back)
queue.append("Alice")
queue.append("Bob")
queue.append("Carol")
print(queue)            # deque(['Alice', 'Bob', 'Carol'])

# Peek at the front
print(queue[0])         # 'Alice'

# Dequeue (remove from the front) — FIFO
first = queue.popleft()
print(first)            # 'Alice'
print(queue)            # deque(['Bob', 'Carol'])

# Simulate a coffee shop line
line = deque(["Alice", "Bob", "Carol"])
while line:
    person = line.popleft()
    print(person, "is being served")`,
        codeCaption: 'deque + append + popleft = a proper FIFO queue with fast O(1) operations.',
        stepByStep: [
          '1. from collections import deque — Python\'s fast double-ended queue.',
          '2. deque() creates an empty queue.',
          '3. append(x) adds x to the BACK.',
          '4. popleft() removes from the FRONT and returns it.',
          '5. The loop serves people in arrival order, like a real line.'
        ],
        mistake: {
          title: 'Using list.pop(0) for a queue',
          description: 'list.pop(0) works but is O(n) because Python shifts every other element down. For queues, use deque.popleft() — O(1).',
          bad: 'queue = ["a", "b", "c"]\nqueue.pop(0)   # works but slow on big inputs',
          good: 'from collections import deque\nqueue = deque(["a", "b", "c"])\nqueue.popleft()   # fast — O(1)'
        },
        practice: {
          question: 'Predict the output:\n\nfrom collections import deque\nq = deque()\nq.append("A")\nq.append("B")\nq.append("C")\nprint(q.popleft(), q.popleft())',
          hint: 'FIFO — the FIRST one in comes out first.',
          answer: 'A B\n\nA was added first, so it leaves first. Then B leaves next.'
        },
        challenge: {
          description: 'DSA drill: write serve_line(people) that takes a list of names and returns a list of strings like "Alice served", in the order they would be served by a FIFO queue. Use collections.deque.',
          starter: 'from collections import deque\n\ndef serve_line(people):\n    # your code here\n    pass',
          tests: [
            { call: 'serve_line(["Alice", "Bob"])', expected: ["Alice served", "Bob served"] },
            { call: 'serve_line([])',               expected: [] },
            { call: 'serve_line(["Solo"])',          expected: ["Solo served"] }
          ],
          hint: 'q = deque(people). While q: pop the front and append f"{name} served" to a result list.',
          solution: 'from collections import deque\n\ndef serve_line(people):\n    q = deque(people)\n    result = []\n    while q:\n        name = q.popleft()\n        result.append(f"{name} served")\n    return result'
        },
        quiz: {
          question: 'A queue is FIFO. You add A, B, C in that order to a deque and then popleft() twice. What do you get?',
          options: ['C then B', 'B then A', 'A then B', 'A then C'],
          correctIndex: 2,
          explanation: 'First In, First Out. A went in first so it comes out first, then B.'
        },
        reflection: 'Recap: queues are FIFO. Use collections.deque with append() and popleft() for O(1) adds and removes. That is the beginner toolkit for queues.'
      },
      {
        id: 'l14-8', title: 'DSA Foundations Checkpoint',
        explanation: [
          'Quick recap of everything in this module: DSA = data + steps. Big O = the shape of how slow code gets. Lists/strings/dicts/sets are your everyday containers. Stacks (LIFO) and queues (FIFO) are two important add-ons.',
          'Why this matters: every beginner LeetCode pattern you will meet next reuses these exact tools. The names will get fancier ("hash map", "monotonic stack"), but underneath they are still the same simple ideas.',
          'Below is a final mini challenge that mixes a list, a dict, and a loop — the three pieces you will lean on the most.'
        ],
        code: `# A tiny mixed example: count word frequency
words = ["apple", "banana", "apple", "cherry", "banana", "apple"]

count = {}
for w in words:
    count[w] = count.get(w, 0) + 1

print(count)   # {'apple': 3, 'banana': 2, 'cherry': 1}`,
        codeCaption: 'List of words + dict for counting + a single loop. That is 80% of beginner LeetCode in one snippet.',
        mistake: {
          title: 'Rushing into LeetCode without these basics',
          description: 'If lists, dicts, and sets do not feel fluent yet, replay this module. Five minutes of review now saves hours of confusion later.',
          bad: '# "I half understand dicts — I will figure it out on Two Sum"',
          good: '# "I will run a few drills first so dicts feel automatic."'
        },
        challenge: {
          description: 'DSA roundup: write top_word(words) that returns the word that appears the most times in the list words. If the list is empty, return None. If multiple words tie, return any of the tied ones.',
          starter: 'def top_word(words):\n    # your code here\n    pass',
          tests: [
            { call: 'top_word(["a", "b", "a"])',                    expected: 'a' },
            { call: 'top_word(["x", "x", "y", "y", "y"])',         expected: 'y' },
            { call: 'top_word([])',                                 expected: null }
          ],
          hint: 'Build a count dict like in the example. Then loop through count.items() and keep track of the key with the largest value. Return None when empty.',
          solution: 'def top_word(words):\n    if not words:\n        return None\n    count = {}\n    for w in words:\n        count[w] = count.get(w, 0) + 1\n    best = None\n    best_n = -1\n    for w, n in count.items():\n        if n > best_n:\n            best = w\n            best_n = n\n    return best'
        },
        quiz: {
          question: 'You see a problem: "given a list of numbers, return True if any number appears twice." What is the cleanest beginner approach?',
          options: [
            'Use a nested loop and compare every pair — O(n²)',
            'Sort the list and check neighbors — O(n log n)',
            'Use a set and the "seen" pattern — O(n)',
            'Convert to a string and use slicing'
          ],
          correctIndex: 2,
          explanation: 'The "seen" set pattern is O(n) and easy to write. Nested loops work but are slow; sorting works but is overkill for the beginner version.'
        },
        reflection: 'Recap of the whole module: DSA building blocks are lists, strings, dicts, sets, stacks, and queues. Big O is just the shape of the growth. You are now ready to step into Beginner LeetCode Prep with the right foundation.'
      }
    ]
  },
  {
    id: 11, slug: 'problem-solving', title: 'Problem-Solving Basics',
    subtitle: 'How to actually approach a problem, not just memorize syntax',
    color: '#79c0ff',
    lessons: [
      {
        id: 'l11-5', title: 'What Problem Solving Really Means',
        explanation: [
          'Problem solving is not magic and it is not memorization. It is a repeatable loop: understand the problem, plan an approach, write a first version, then verify it works. Every strong programmer runs some version of this loop — even when it does not look like it from the outside.',
          'Why it matters: when you skip steps, you spend ten minutes coding and an hour debugging. When you follow the steps, you spend twenty minutes thinking and ten minutes coding. The total time is shorter, and you understand what you wrote.',
          'This module walks through the loop one step at a time so you can run it on any new problem — not just the ones we cover here.'
        ],
        analogy: 'Like a doctor diagnosing a patient. They do not guess the illness from across the room. They ask questions, gather symptoms, rule things out, and only then prescribe. Code is the same: diagnose the problem before treating it.',
        code: '# The full problem-solving loop\n#\n# 1. Read the problem carefully\n# 2. Identify the INPUT (what you are given)\n# 3. Identify the OUTPUT (what you must return)\n# 4. Restate the problem in your own words\n# 5. Make small examples by hand\n# 6. Think about edge cases\n# 7. Write pseudocode\n# 8. Code a brute force solution first\n# 9. Dry run it line by line\n# 10. Improve if needed and test again',
        codeCaption: 'You will practice each of these steps in the lessons that follow.',
        stepByStep: [
          '1. Slow down — understanding is the slowest but most important step',
          '2. Write things down — your working memory is small, paper is patient',
          '3. Trust the process even when the answer is not yet visible',
          '4. Verify with examples before declaring victory',
          '5. Treat every problem as practice for the process, not only for the answer'
        ],
        mistake: {
          title: 'Thinking great coders just "see" the answer',
          description: 'It looks like that from the outside, but they are running the same steps you are about to learn — just faster, because they have done it thousands of times.',
          bad: '# "I will never be as fast as them" -> give up -> never improve',
          good: '# "They follow a process. I can follow it too." -> practice -> get faster'
        },
        quiz: {
          question: 'Which best describes problem solving in programming?',
          options: [
            'A magical insight you either have or do not have',
            'Memorizing every algorithm in advance',
            'A repeatable set of steps you can run on any problem',
            'Trying random code until a test passes'
          ],
          correctIndex: 2,
          explanation: 'Problem solving is a learnable, repeatable process. Speed comes with practice, not talent.'
        },
        practice: {
          question: 'Predict the output:\n\nx = max(0, 5 - 8)\nprint(x)',
          hint: 'max(0, negative_number) returns 0.',
          answer: '0\n\n5 - 8 is -3, and max(0, -3) is 0. A common pattern for clamping values.'
        },
        reflection: 'Recap: problem solving is a process — read, identify input/output, restate, examples, edge cases, pseudocode, brute force, dry run, improve, test. The rest of this module walks through each step.'
      },
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
        id: 'l11-6', title: 'Identify the Input',
        explanation: [
          'The first concrete step after reading is naming the input. Ask: what data am I given, what type is it, and how big can it be? Until you can answer those questions, you cannot pick the right approach.',
          'Why it matters: the input shape determines what tools you reach for. A list of numbers suggests loops, sums, two pointers. A string suggests indexing and joins. A dictionary suggests lookups.',
          'Writing the input down on paper (or in a comment) makes it real. Most "I am stuck" moments at this stage come from a fuzzy idea of what the function actually receives.'
        ],
        analogy: 'Like a chef checking ingredients before cooking. You cannot plan the recipe if you do not know whether you have eggs, flour, or just leftovers. The input is your ingredients.',
        code: '# Problem: "Given a list of integers and a target, return indices..."\n#\n# What is the INPUT?\n#   nums: list[int]   - a list of whole numbers\n#   target: int       - a single whole number\n#\n# Concrete example:\n#   nums = [2, 7, 11, 15]\n#   target = 9\n#\n# Size hint (from constraints):\n#   2 <= len(nums) <= 10_000\n# This tells you O(n^2) might be too slow at the upper end.',
        codeCaption: 'Name every input, its type, and a concrete example value.',
        stepByStep: [
          '1. List each parameter the function receives',
          '2. Write its type next to it (int, str, list, dict, ...)',
          '3. Write one concrete example value for each input',
          '4. Note the size limits from the constraints, if given',
          '5. Decide whether the input can be empty or None'
        ],
        mistake: {
          title: 'Assuming the input is "obvious"',
          description: 'When the input feels obvious, beginners skip writing it down. Then halfway through coding they confuse a list with a string, or forget that nums could be empty.',
          bad: '# Just start coding. Discover the input is a list of strings, not ints, after 20 lines.',
          good: '# nums: list[int], target: int\n# Now every line of code can trust those types.'
        },
        quiz: {
          question: 'A problem says: "Given a sentence as a string, return the number of words." What is the input?',
          options: [
            'A list of words',
            'A single string containing one or more words',
            'A dictionary of words to counts',
            'An integer count'
          ],
          correctIndex: 1,
          explanation: 'The input is one string. The output (the count) is an integer — different thing entirely.'
        },
        practice: {
          question: 'Predict the output:\n\nnums = [2, 7, 11, 15]\nprint(type(nums).__name__, len(nums))',
          hint: 'type(x).__name__ gives the type name. len() gives the size.',
          answer: 'list 4\n\nThis is exactly the kind of quick check you should make at the start of a problem: "yes, it is a list of length 4."'
        },
        reflection: 'Recap: name the inputs, their types, an example value, and the size limits. Writing this in a comment at the top of your solution makes the rest of the work easier.'
      },
      {
        id: 'l11-7', title: 'Identify the Output',
        explanation: [
          'After the input, name the output. What must the function return, and what type and shape should it be? A surprising number of wrong answers come from returning the right value in the wrong shape — a number instead of a list, or [1,2] instead of [2,1].',
          'Why it matters: the output is the contract. The grader does not care how clever your code is. It cares whether your return value exactly matches the expected output.',
          'When examples are given, read the OUTPUT side of each example carefully. The output type is usually the same across all examples — that pattern is your contract.'
        ],
        analogy: 'Like a restaurant order. If the customer asked for soup in a bowl, handing them soup in a mug is wrong even if the soup is great. Output shape matters.',
        code: '# Problem: "Return the indices of the two numbers..."\n#\n# What is the OUTPUT?\n#   A list of two integers  -> list[int] of length 2\n#\n# Concrete example:\n#   nums=[2,7,11,15], target=9  ->  [0, 1]\n#\n# Watch out:\n#   Returning (0, 1) (a tuple) might fail\n#   Returning [1, 0] (wrong order) might fail\n#   Returning 9 (the sum) is the wrong thing entirely',
        codeCaption: 'The output type AND shape are part of the contract.',
        stepByStep: [
          '1. Read the "return" sentence of the problem carefully',
          '2. Look at every example output, not just the first',
          '3. Write the output type next to "OUTPUT:"',
          '4. Note whether order matters (list vs. set behavior)',
          '5. Note what to return for the "no answer" case (None? -1? [])'
        ],
        mistake: {
          title: 'Returning a value instead of a list (or vice versa)',
          description: 'A common bug: the problem wants a list with one element but you return the element itself. Tests fail with a confusing message.',
          bad: 'return 7        # when the contract is a list',
          good: 'return [7]      # matches the expected shape'
        },
        quiz: {
          question: 'A problem says "return True if any number appears twice." What is the output type?',
          options: [
            'A list of duplicates',
            'A boolean (True or False)',
            'An integer (count of duplicates)',
            'A dictionary mapping number to count'
          ],
          correctIndex: 1,
          explanation: 'The word "True" in the prompt is your clue. The function returns a boolean, not a count or a list.'
        },
        practice: {
          question: 'Predict the output:\n\ndef f(x):\n    return [x]\n\nprint(f(7) == 7)',
          hint: 'f(7) returns [7], a list. Compare it with 7, an integer.',
          answer: 'False\n\n[7] != 7. This is why output shape matters — the values look similar, but the types are different.'
        },
        reflection: 'Recap: write the output type and shape down before coding. Most output bugs are not subtle — they are mismatches between what you returned and what the grader expects.'
      },
      {
        id: 'l11-8', title: 'Restate the Problem in Your Own Words',
        explanation: [
          'Take the problem statement and rewrite it in one or two sentences in your own voice. If you cannot do this without looking at the original, you have not yet understood it.',
          'Why it matters: textbooks and LeetCode use formal language. Your restatement strips out the noise and forces you to commit to a meaning. If your restatement is wrong, you find out now (cheap) instead of after coding (expensive).',
          'Bonus: when you ask for help, your restatement is what you send to the other person. Clear restatements get clear answers.'
        ],
        analogy: 'Like translating a foreign-language sentence and then explaining it back in your own words. If you can only repeat the original sentence, you do not really understand it yet.',
        code: '# Original (Two Sum, paraphrased):\n# "Given an array of integers nums and an integer target,\n#  return indices of the two numbers such that they add\n#  up to target. You may assume that each input has exactly\n#  one solution, and you may not use the same element twice."\n#\n# My restatement:\n# "Find the two positions in the list whose numbers add to target,\n#  and return those positions. There is exactly one such pair,\n#  and the two positions must be different."',
        codeCaption: 'Plain English, one sentence if possible. Keep the meaning, drop the formality.',
        stepByStep: [
          '1. Read the original once for general meaning',
          '2. Close the problem and write one sentence from memory',
          '3. Reopen the problem and check your sentence for missing pieces',
          '4. Add anything you missed and rewrite',
          '5. If you still need 5 sentences, the problem might have multiple parts'
        ],
        mistake: {
          title: 'Restating the problem by copy-pasting the original',
          description: 'Rephrasing without truly translating it gives you the illusion of understanding. The test is whether you can say it without looking.',
          bad: '# Just copy the problem statement into a comment',
          good: '# Close the tab. Write one sentence. Then reopen and check.'
        },
        quiz: {
          question: 'You restate "Return the longest substring without repeating characters" as "Find a substring with no repeats and return it." What is missing?',
          options: [
            'Nothing — your version is fine',
            'The word "longest" — your version does not say which substring to return',
            'The fact that the input is a string',
            'The expected return type'
          ],
          correctIndex: 1,
          explanation: '"Longest" changes the answer. Dropping a single word like that is the most common restatement mistake.'
        },
        practice: {
          question: 'Restate this in one sentence in your own words: "Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order."',
          hint: 'Two facts: input is sorted; output is the sorted squares.',
          answer: 'Example answer: "Take a sorted list of numbers, square each one, and return the squares in sorted order." Your wording can differ — but it must include sorted input AND sorted output.'
        },
        reflection: 'Recap: if you cannot say the problem in your own words without looking, you have not understood it. Restating is a cheap test that catches expensive misunderstandings.'
      },
      {
        id: 'l11-9', title: 'Make Simple Examples',
        explanation: [
          'Before you write code, make tiny examples by hand. Pick the smallest input you can — one or two elements — and solve it yourself with pencil and paper.',
          'Why it matters: solving a small example yourself reveals the algorithm. Your brain already knows how to do it for small inputs. Your job is to notice WHAT STEPS your brain took and copy them into code.',
          'The trap of "big examples first" is that they overwhelm your working memory. With a tiny example you can hold every variable in your head at once.'
        ],
        analogy: 'Like learning a dance by walking through it slowly to a count of 4 before doing it at full speed with music. Small examples are the slow walkthrough.',
        code: '# Problem: return the sum of a list of numbers (without sum()).\n#\n# Smallest example I can make:\n#   nums = []           -> 0\n#   nums = [5]          -> 5\n#   nums = [2, 3]       -> 5\n#   nums = [2, 3, 4]    -> 9\n#\n# What my brain did for [2, 3, 4]:\n#   start with total = 0\n#   add 2 -> total = 2\n#   add 3 -> total = 5\n#   add 4 -> total = 9\n#\n# That mental procedure becomes the loop.',
        codeCaption: 'Solve a tiny example by hand, then notice the steps you used.',
        stepByStep: [
          '1. Pick the smallest meaningful input (often size 0, 1, 2)',
          '2. Solve it by hand, narrating each move',
          '3. Write down each step you actually took',
          '4. Look for a pattern that repeats — that is your loop',
          '5. Try one more slightly bigger example to confirm the pattern'
        ],
        mistake: {
          title: 'Starting with a giant example',
          description: 'Tracing [42, 17, 8, 99, 13, 27] by hand is exhausting and you will lose track. The size of the example does not prove anything — the pattern does.',
          bad: '# Try to trace nums = [42, 17, 8, 99, 13, 27] in your head',
          good: '# Trace nums = [2, 3, 4] on paper. The pattern is identical.'
        },
        quiz: {
          question: 'What is the best size for a worked-by-hand example when you start a problem?',
          options: [
            'The biggest example given in the problem',
            'The smallest non-trivial example you can make',
            'A randomly generated 100-element input',
            'It does not matter as long as it is in the problem'
          ],
          correctIndex: 1,
          explanation: 'Small examples reveal the pattern without overwhelming your working memory. Big examples are for the test phase later.'
        },
        practice: {
          question: 'Predict the output:\n\ntotal = 0\nfor n in [2, 3, 4]:\n    total += n\nprint(total)',
          hint: 'Walk through it one step at a time, just like in the lesson code.',
          answer: '9\n\ntotal goes 0 -> 2 -> 5 -> 9. This is the exact pattern your hand-trace just produced.'
        },
        reflection: 'Recap: solve a tiny example yourself, narrate the steps you used, and copy those steps into code. Your brain already knows the algorithm — small examples surface it.'
      },
      {
        id: 'l11-10', title: 'Find Edge Cases',
        explanation: [
          'Edge cases are inputs at the boundaries of what the problem allows: empty input, a single element, all the same value, negatives, zero, max size. Strong solutions handle them. Weak solutions crash on them.',
          'Why it matters: graders intentionally include edge-case tests. Real users also hit edge cases all the time. A function that works on the happy path but crashes on an empty list is not done.',
          'Listing edge cases is a short, separate step. Spending 60 seconds on it usually saves 10 minutes of debugging later.'
        ],
        analogy: 'Like checking a chair before you sit on it. You do not just trust that all four legs are screwed in — you give it a wiggle. Edge cases are how you wiggle your code.',
        code: '# Problem: find the maximum value in a list.\n#\n# Edge cases to consider:\n#   1. Empty list:        []          -> what should this return?\n#   2. One element:       [42]        -> 42\n#   3. All equal:         [7, 7, 7]   -> 7\n#   4. Negative numbers:  [-5, -2]    -> -2 (not 0!)\n#   5. Mix of pos/neg:    [-3, 0, 5]  -> 5\n#   6. Very large input:  range(10**6) -> tests speed\n#\n# Notice how (1) and (4) trip up most naive solutions.',
        codeCaption: 'Write the list before coding. Each edge case is a future test you will not have to invent later.',
        stepByStep: [
          '1. Empty input — what should happen?',
          '2. Single element — does your loop still work?',
          '3. Duplicates — does each one get counted correctly?',
          '4. Negatives and zero — do you assume positive numbers anywhere?',
          '5. Maximum size — will your approach be fast enough?'
        ],
        mistake: {
          title: 'Initializing max with 0 instead of the first element',
          description: 'A classic edge-case bug. If all numbers are negative, max stays 0 and the wrong answer is returned. The fix is to start max from nums[0] (and handle empty input separately).',
          bad: 'max_val = 0\nfor n in nums:\n    if n > max_val:\n        max_val = n\n# Wrong on [-5, -2, -10]: returns 0 instead of -2',
          good: 'if not nums:\n    return None\nmax_val = nums[0]\nfor n in nums[1:]:\n    if n > max_val:\n        max_val = n'
        },
        quiz: {
          question: 'Which of these is NOT a typical edge case you should check?',
          options: [
            'Empty input',
            'Input with one element',
            'Input where every element is identical',
            'The exact example given in the problem'
          ],
          correctIndex: 3,
          explanation: 'The given example is already a test case the problem provides. Edge cases are the boundary inputs the example does not cover.'
        },
        practice: {
          question: 'Predict the output:\n\nnums = []\nprint(sum(nums))',
          hint: 'sum of an empty list — does it crash or return a number?',
          answer: '0\n\nPython sum() returns 0 for an empty iterable. Many beginner-written sum functions crash here — that is the edge case the test was built for.'
        },
        reflection: 'Recap: edge cases live at the boundaries — empty, one, many, all-same, negative, zero, huge. Listing them before coding turns surprises into expected outcomes.'
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
        id: 'l11-11', title: 'Brute Force First',
        explanation: [
          'After pseudocode, write the most obvious solution that works — even if it is slow. This is called the "brute force" solution. Its only job is to be correct.',
          'Why it matters: a correct slow answer is worth far more than a fast wrong answer. Brute force also gives you a reference: once you optimize, you can compare results against the brute-force output to make sure you did not introduce a bug.',
          'Many beginners skip this step trying to look clever. They end up with a half-broken "fast" solution and no way to tell whether the bug is in the algorithm or the optimization.'
        ],
        analogy: 'Like writing a rough draft of an essay. You do not start with the polished final version. You write something readable first, then revise.',
        code: '# Two Sum — brute force first\n#\n# Check every pair (i, j) with i < j.\n# Slow (O(n^2)) but obviously correct.\n\ndef two_sum_brute(nums, target):\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return [i, j]\n    return []\n\n# Test it:\nprint(two_sum_brute([2, 7, 11, 15], 9))   # -> [0, 1]\n# Now I have a reference answer.\n# If my faster version disagrees, I know IT is wrong.',
        codeCaption: 'A correct slow solution is the foundation for a correct fast solution.',
        stepByStep: [
          '1. Ask: what is the most obvious way to solve this, even if slow?',
          '2. Write it. Do not optimize yet',
          '3. Run it on a couple of examples — confirm it is correct',
          '4. Note the time complexity (often O(n^2) or O(n^3) at this stage)',
          '5. THEN decide whether you need a faster version'
        ],
        mistake: {
          title: 'Trying to write the optimal solution on the first try',
          description: 'Going straight for O(n) often leaves you with bugs in both the algorithm AND the data structures. Two unknowns are harder than one. Solve correctness first, performance second.',
          bad: '# Start with a hash-map two-pointer thing\n# get confused -> bugs everywhere -> give up',
          good: '# Nested loop. Confirm correct on examples.\n# THEN replace inner loop with a dict lookup.'
        },
        quiz: {
          question: 'You have written a correct O(n^2) solution. The constraints say n <= 10,000. What should you do?',
          options: [
            'Always optimize regardless — never submit slow code',
            'Estimate whether O(n^2) is fast enough; if yes, submit it',
            'Delete it and start over with a hash map',
            'Ask the interviewer to lower the constraints'
          ],
          correctIndex: 1,
          explanation: 'O(n^2) at n = 10,000 is 100 million operations — borderline. Often acceptable. Estimate first, optimize only if needed.'
        },
        challenge: {
          description: 'Write a brute-force has_pair_sum(nums, target) that returns True if any two different positions in nums add to target, else False.',
          starter: 'def has_pair_sum(nums, target):\n    # nested loop, return as soon as you find a match\n    pass',
          tests: [
            { call: 'has_pair_sum([2, 7, 11, 15], 9)', expected: true },
            { call: 'has_pair_sum([1, 2, 3], 7)', expected: false },
            { call: 'has_pair_sum([3, 3], 6)', expected: true },
            { call: 'has_pair_sum([], 0)', expected: false }
          ],
          solution: 'def has_pair_sum(nums, target):\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                return True\n    return False',
          hint: 'Outer loop i over indices. Inner loop j from i+1. If nums[i] + nums[j] == target, return True.'
        },
        practice: {
          question: 'Predict the output:\n\nnums = [1, 2, 3]\ncount = 0\nfor i in range(len(nums)):\n    for j in range(i + 1, len(nums)):\n        count += 1\nprint(count)',
          hint: 'How many ordered pairs (i, j) with i < j are there for 3 items?',
          answer: '3\n\nThe pairs are (0,1), (0,2), (1,2). That is the shape of every brute-force pair check.'
        },
        reflection: 'Recap: write the obvious slow solution first. Verify it is correct. Then decide if you need to optimize. Correctness is the foundation; speed is the polish.'
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
        id: 'l11-12', title: 'Improve the Solution',
        explanation: [
          'Once your code is correct, look for ways to make it cleaner or faster — but only after it works. The two main moves: (1) replace repeated work with stored values, and (2) replace slow lookups with fast ones.',
          'Why it matters: most "fast" algorithms come from one realization — you were doing the same work twice, or you were searching when you could have looked up. Optimization is rarely about clever tricks. It is usually about noticing waste.',
          'Always rerun your tests after each change. It is easy to break correctness while chasing speed.'
        ],
        analogy: 'Like noticing you keep walking to the fridge for one ingredient at a time. The fix is not to walk faster — it is to bring out all the ingredients at once. Optimization is reorganizing, not sprinting.',
        code: '# Sum-of-pairs — improving step by step\n#\n# SLOW: nested loop (O(n^2))\ndef pairs_brute(nums, target):\n    seen = []\n    for i in range(len(nums)):\n        for j in range(i + 1, len(nums)):\n            if nums[i] + nums[j] == target:\n                seen.append((i, j))\n    return seen\n\n# Observation: for each num, the question\n# "is target - num somewhere earlier?" is a LOOKUP.\n# Lists are slow to search; dicts/sets are O(1).\n\n# FASTER: single pass with a set (O(n))\ndef pairs_fast(nums, target):\n    out = []\n    seen_index = {}\n    for i, num in enumerate(nums):\n        comp = target - num\n        if comp in seen_index:\n            out.append((seen_index[comp], i))\n        seen_index[num] = i\n    return out',
        codeCaption: 'Same answer, less wasted work. That is what "improve" means.',
        stepByStep: [
          '1. Look at the slow part — what is being repeated?',
          '2. Can you replace a search (list "in") with a lookup (dict/set "in")?',
          '3. Can you store a result you keep recalculating?',
          '4. Apply ONE change at a time',
          '5. Rerun your tests after each change to confirm correctness'
        ],
        mistake: {
          title: 'Optimizing before the code is correct',
          description: 'Speeding up broken code does not help. Worse, when something fails, you cannot tell whether the bug is in the original logic or in the optimization.',
          bad: '# Code is buggy on edge cases\n# but I rewrite it with fancy tricks anyway',
          good: '# Get all tests green. THEN rewrite the slow part.\n# If a test goes red, you know your last change caused it.'
        },
        quiz: {
          question: 'You have nested loops searching a list. What is usually the first improvement to try?',
          options: [
            'Rewrite the whole solution in a different language',
            'Replace the inner search with a dict or set lookup',
            'Use a recursive helper function',
            'Run the function multiple times and average the result'
          ],
          correctIndex: 1,
          explanation: 'Dict/set lookups are O(1). Replacing "is x in this list?" with "is x in this set?" is the most common O(n^2) -> O(n) move.'
        },
        practice: {
          question: 'Predict the output:\n\nnums = [1, 2, 3, 4]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total, len(nums))',
          hint: 'Single pass. No nested loop. This is already optimal for a sum.',
          answer: '10 4\n\nNot every problem needs optimizing — sometimes the brute force IS already optimal. Improving means knowing when to stop.'
        },
        reflection: 'Recap: improve only after correct. Replace repeated work with stored values; replace searches with lookups. Apply one change at a time and rerun the tests.'
      },
      {
        id: 'l11-13', title: 'Big O in Context',
        explanation: [
          'Big O is a quick way to estimate how the time your code takes grows with the input size n. You do not need to memorize a table — you need three intuitions: O(1), O(n), and O(n^2).',
          'O(1) means constant — looking up a key in a dict, or accessing list[5]. Size of input does not change the cost.',
          'O(n) means one pass over the input — a single for-loop touching each element once. Doubles the input, doubles the time.',
          'O(n^2) means a loop inside a loop — touching every pair. Doubles the input, FOUR times the time. This is the level where things start to feel slow at n > 10,000.'
        ],
        analogy: 'Like cleaning a house. O(1) is grabbing one item from the shelf. O(n) is walking through every room once. O(n^2) is comparing every room to every other room — and gets painful fast as the house grows.',
        code: '# O(1) — constant time\nx = nums[0]\ny = d["key"]\nz = seen.add(value)\n\n# O(n) — one pass\ntotal = 0\nfor num in nums:        # touches each item once\n    total += num\n\n# O(n^2) — nested pass\nfor i in range(len(nums)):\n    for j in range(len(nums)):\n        do_something(nums[i], nums[j])\n\n# Rough budget on a modern machine:\n#   O(n)   at n = 10**7  -> fine\n#   O(n^2) at n = 10**4  -> borderline\n#   O(n^2) at n = 10**5  -> too slow',
        codeCaption: 'Three shapes cover almost every beginner problem.',
        stepByStep: [
          '1. Count the loops in your code',
          '2. No loops over the input -> O(1)',
          '3. One loop over the input -> O(n)',
          '4. A loop inside a loop -> O(n^2)',
          '5. Compare your complexity against the input size in the constraints'
        ],
        mistake: {
          title: 'Memorizing Big O without using it to pick an approach',
          description: 'Knowing "O(n^2) is worse than O(n)" is useless if you do not check the input size. Big O is a TOOL for choosing — not a fact to recite.',
          bad: '# Recite "O(n) is better" -> still write nested loops anyway',
          good: '# Constraints say n up to 10^5\n# My nested loop is 10^10 -> too slow\n# I need O(n log n) or O(n) here'
        },
        quiz: {
          question: 'The constraints say n can be up to 1,000,000. Which complexity is likely safe?',
          options: [
            'O(n^3)',
            'O(n^2)',
            'O(n) or O(n log n)',
            'O(2^n)'
          ],
          correctIndex: 2,
          explanation: 'At n = 10^6, anything worse than O(n log n) is usually too slow. O(n) is comfortable; O(n log n) is fine.'
        },
        practice: {
          question: 'Predict the time complexity in Big O:\n\nfor i in range(len(nums)):\n    for j in range(len(nums)):\n        if nums[i] == nums[j] and i != j:\n            return True\nreturn False',
          hint: 'Loop inside a loop, each over n elements.',
          answer: 'O(n^2)\n\nA hash-set version would be O(n). This is the kind of comparison that drives the "improve" step from the previous lesson.'
        },
        reflection: 'Recap: O(1), O(n), O(n^2) cover most beginner cases. Count loops, compare to the input size, and let that decide whether you need to optimize.'
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
      },
      {
        id: 'l11-14', title: 'Problem-Solving Checkpoint',
        explanation: [
          'Time to put it all together. You now have a full process: read carefully, identify input and output, restate, make examples, find edge cases, write pseudocode, code a brute force, dry run, debug, improve, and check Big O in context.',
          'Why it matters: the goal of this module is not to memorize trivia. It is to make this loop feel automatic. Once it is automatic, every new problem becomes "run the loop on this one" instead of "what do I do?".',
          'Use this lesson as your self-check before moving on to Beginner LeetCode Prep and the patterns module.'
        ],
        analogy: 'Like a pilot running through the pre-flight checklist. Same items every flight, in the same order. Not because the pilot is forgetful — because the checklist catches problems before they become disasters.',
        code: '# Your problem-solving checklist (commit to memory)\n#\n# [ ] 1. Read the problem 2-3 times\n# [ ] 2. Identify the INPUT (type, shape, size)\n# [ ] 3. Identify the OUTPUT (type, shape)\n# [ ] 4. Restate the problem in your own words\n# [ ] 5. Solve a tiny example by hand\n# [ ] 6. List edge cases you must handle\n# [ ] 7. Write pseudocode\n# [ ] 8. Code a brute force solution\n# [ ] 9. Dry run it on examples and edge cases\n# [ ] 10. Improve if Big O is too slow for the constraints\n# [ ] 11. Test again',
        codeCaption: 'Run the checklist on every problem until it becomes invisible.',
        stepByStep: [
          '1. Start every problem by writing INPUT, OUTPUT, RESTATEMENT at the top',
          '2. Write 1 small example and 2 edge cases before coding',
          '3. Pseudocode in plain English, then translate',
          '4. Brute force first, optimize second',
          '5. Always rerun tests after a change'
        ],
        mistake: {
          title: 'Skipping the checklist once you "feel ready"',
          description: 'The checklist feels slow when problems are easy. That is when the habit forms. By the time problems are hard, the checklist runs in your head in seconds.',
          bad: '# "This one is easy, I will skip the steps"\n# get tripped up by an edge case -> 20 minutes lost',
          good: '# Run the checklist even on easy problems\n# Build the muscle now, lean on it later'
        },
        quiz: {
          question: 'In the problem-solving loop, which step always comes BEFORE writing brute-force code?',
          options: [
            'Optimizing for Big O',
            'Identifying the input and output, then writing pseudocode',
            'Reading the official solution',
            'Submitting your first attempt'
          ],
          correctIndex: 1,
          explanation: 'Brute force only makes sense once you know what you are computing — and pseudocode is what bridges understanding and code.'
        },
        challenge: {
          description: 'Apply the loop to a small problem. Write count_evens(nums) that returns how many even numbers are in nums. Handle the empty-list edge case.',
          starter: 'def count_evens(nums):\n    # INPUT: list[int] (may be empty)\n    # OUTPUT: int (count of even numbers)\n    pass',
          tests: [
            { call: 'count_evens([1, 2, 3, 4, 5, 6])', expected: 3 },
            { call: 'count_evens([])', expected: 0 },
            { call: 'count_evens([1, 3, 5])', expected: 0 },
            { call: 'count_evens([-2, -1, 0, 1, 2])', expected: 3 }
          ],
          solution: 'def count_evens(nums):\n    count = 0\n    for n in nums:\n        if n % 2 == 0:\n            count += 1\n    return count',
          hint: 'Counter starts at 0. For each n in nums, if n % 2 == 0 then count += 1. Return count.'
        },
        practice: {
          question: 'Predict the output:\n\nnums = [-2, -1, 0, 1, 2]\nevens = [n for n in nums if n % 2 == 0]\nprint(evens, len(evens))',
          hint: 'Even numbers include 0 and negatives like -2.',
          answer: '[-2, 0, 2] 3\n\nDo not forget 0 and negative evens — both are real edge cases people miss.'
        },
        reflection: 'Recap: you now have a complete problem-solving process. The rest of the journey is practice. Each problem you solve makes the loop faster and more automatic.'
      },
    ]
  },
  {
    id: 10, slug: 'leetcode-prep', title: 'Beginner LeetCode Prep',
    subtitle: 'How to actually approach and solve coding problems',
    color: '#d29922',
    lessons: [
      {
        id: 'l10-5', title: 'What is LeetCode?',
        explanation: [
          'LeetCode is a website full of small, self-contained coding puzzles. Each puzzle gives you a function to fill in, and a hidden set of tests checks whether your function returns the right answer. It is the most popular place to practice for coding interviews.',
          'Why it matters: companies use these exact puzzles in interviews. Practicing them builds the one skill interviews test — turning a written problem into working code under a little pressure.',
          'You do not install anything. You pick a problem, read it, write Python in the box, and press Run. LeetCode tells you which tests passed and which failed.'
        ],
        analogy: 'LeetCode is like a gym with hundreds of machines. Each problem is one machine that trains a specific muscle. You do not need every machine on day one — you start with the light ones and build up.',
        code: '# A LeetCode problem always gives you a function to complete.\n# You write the inside. LeetCode runs hidden tests.\n\nclass Solution:\n    def add(self, a, b):\n        return a + b\n\n# LeetCode secretly runs things like:\n#   Solution().add(2, 3)  -> expects 5\n#   Solution().add(-1, 1) -> expects 0\n# If your function returns the right value, the test passes.',
        codeCaption: 'You fill in the function. Hidden tests check your return value.',
        stepByStep: [
          '1. Pick a problem (start with ones marked Easy)',
          '2. Read the description, examples, and constraints',
          '3. Write your code inside the given function',
          '4. Press Run to test, then Submit when it passes',
          '5. Read other people\'s solutions to learn new ideas'
        ],
        mistake: {
          title: 'Starting with Hard problems',
          description: 'Beginners often jump to famous Hard problems and feel crushed. Easy problems exist for a reason — they build the habits you need before harder ones make sense.',
          bad: '# Day 1: attempt a Hard dynamic programming problem -> give up',
          good: '# Day 1: solve 2-3 Easy problems -> build confidence -> level up'
        },
        quiz: {
          question: 'What does LeetCode actually check when you submit a solution?',
          options: [
            'Whether your code looks neat',
            'Whether your function returns the correct value for hidden tests',
            'How many comments you wrote',
            'Whether you used the fastest possible algorithm'
          ],
          correctIndex: 1,
          explanation: 'LeetCode runs your function against hidden test inputs and compares what you RETURN to the expected answer.'
        },
        practice: {
          question: 'In your own words, what is the difference between LeetCode and just writing a normal Python script?',
          hint: 'Think about who provides the function and who checks the answer.',
          answer: 'In a normal script you decide everything and print results yourself. On LeetCode, the function is given to you, you fill in the body, and hidden tests check the value you return — you usually do not print anything.'
        },
        reflection: 'Recap: LeetCode is a library of small puzzles where you complete a given function and hidden tests check your return value. Start Easy and build up.'
      },
      {
        id: 'l10-6', title: 'How LeetCode Problems Are Structured',
        explanation: [
          'Every LeetCode problem has the same four parts: a title and description, one or more examples, a list of constraints, and a starter function (the signature). Once you know the parts, every new problem feels familiar.',
          'Why it matters: when a problem looks scary, naming its parts calms it down. You are never facing a wall of text — you are facing four predictable sections.',
          'The description tells the goal. The examples show it concretely. The constraints set the limits. The signature tells you exactly what to write.'
        ],
        analogy: 'Like a nutrition label. Every food package has the same sections — calories, ingredients, serving size. Once you know where to look, you read any label in seconds. LeetCode problems are the same.',
        code: '# The four parts of every problem:\n\n# 1) DESCRIPTION\n#    "Given a list of numbers, return the largest."\n\n# 2) EXAMPLE(S)\n#    Input:  nums = [3, 7, 2]\n#    Output: 7\n\n# 3) CONSTRAINTS\n#    1 <= len(nums) <= 1000\n#    -1000 <= nums[i] <= 1000\n\n# 4) SIGNATURE (you fill the body)\n#    def largest(nums):\n#        pass',
        codeCaption: 'Description, examples, constraints, signature — every problem, every time.',
        stepByStep: [
          '1. Read the description to learn the goal',
          '2. Read the examples to see the goal in action',
          '3. Read the constraints to learn the limits',
          '4. Read the signature to see exactly what to write',
          '5. Only then start coding'
        ],
        mistake: {
          title: 'Reading only the description',
          description: 'Beginners read the first paragraph and skip the examples and constraints. Those two sections often contain the real key to the problem.',
          bad: '# Read description -> start coding -> miss a constraint -> wrong answer',
          good: '# Read all four parts -> understand fully -> then code'
        },
        quiz: {
          question: 'Which four parts appear in almost every LeetCode problem?',
          options: [
            'Description, examples, constraints, function signature',
            'Title, author, difficulty, comments',
            'Input, loop, print, return',
            'Variables, functions, classes, modules'
          ],
          correctIndex: 0,
          explanation: 'Every problem has a description, examples, constraints, and a starter function (signature).'
        },
        practice: {
          question: 'Mini problem: "Given a string s, return its length. Example: s = cat -> 3. Constraint: 0 <= len(s) <= 100. def str_len(s):". Name each of the four parts.',
          hint: 'Match each piece of text to one of the four standard parts.',
          answer: 'Description: "return its length". Example: s = cat -> 3. Constraint: 0 <= len(s) <= 100. Signature: def str_len(s).'
        },
        reflection: 'Recap: every problem = description + examples + constraints + signature. Find all four before coding.'
      },
      {
        id: 'l10-7', title: 'Understanding the Problem Statement',
        explanation: [
          'The problem statement is the sentence or two that tells you what to build. The trick is to find the verbs and nouns: what action is asked for, and on what data?',
          'Why it matters: most wrong answers come from solving a slightly different problem than the one asked. One missed word — "even", "unique", "sorted" — changes everything.',
          'A good habit: underline the key words and restate the whole thing in your own words. If you cannot restate it, you do not understand it yet.'
        ],
        analogy: 'Like reading a text from a friend: "grab milk, the cheap one, not the big jug." Miss one detail and you bring home the wrong thing. Problem statements hide details the same way.',
        code: '# Statement: "Return the sum of all EVEN numbers in the list."\n\n# Key words underlined in your head:\n#   sum   -> add them up\n#   even  -> only the even ones (n % 2 == 0)\n#   list  -> input is a list of numbers\n\nnums = [1, 2, 3, 4]\n# even numbers: 2 and 4\n# answer: 2 + 4 = 6',
        codeCaption: 'Find the key words. One missed word changes the whole answer.',
        stepByStep: [
          '1. Read the statement slowly, once',
          '2. Underline the action word (sum, count, find, return...)',
          '3. Underline the qualifier words (even, unique, first, largest...)',
          '4. Restate it in your own words',
          '5. Check your restatement against the examples'
        ],
        mistake: {
          title: 'Skimming and missing a qualifier',
          description: 'Words like "even", "unique", "non-empty", or "in order" are easy to skim past, but they completely change what your code must do.',
          bad: '# Statement says "even numbers" -> you sum ALL numbers -> wrong',
          good: '# Statement says "even numbers" -> you filter with n % 2 == 0 -> right'
        },
        quiz: {
          question: 'A statement says: "Return the FIRST number that appears more than once." Which word is most important to not miss?',
          options: [
            'Return',
            'number',
            'FIRST',
            'appears'
          ],
          correctIndex: 2,
          explanation: 'FIRST means order matters — you must return the earliest repeat, not just any repeat. Missing it gives wrong answers.'
        },
        practice: {
          question: 'Restate this in your own words: "Given a list, return True if it is sorted in increasing order, otherwise False."',
          hint: 'What is the input? What decides True vs False?',
          answer: 'Input: a list of numbers. Output: True if every number is bigger than (or equal to) the one before it, all the way through; otherwise False.'
        },
        reflection: 'Recap: the statement hides the whole task in a few key words. Underline the action and qualifiers, then restate it.'
      },
      {
        id: 'l10-8', title: 'Understanding Examples',
        explanation: [
          'Examples are sample inputs paired with their correct outputs. They are the clearest part of any problem — when the description is confusing, the examples often make it obvious.',
          'Why it matters: examples remove ambiguity. They show edge details the words leave out, like what to return for ties or empty inputs.',
          'Always trace at least one example by hand before coding. If you cannot get the example output by hand, you are not ready to code it.'
        ],
        analogy: 'Like assembling furniture. The written steps confuse everyone, but the little picture next to each step shows exactly what it should look like. Examples are those pictures.',
        code: '# Problem: "Return the number of vowels in a string."\n\n# Example 1: Input: "cat"   Output: 1   (just the a)\n# Example 2: Input: "apple" Output: 2   (a and e)\n# Example 3: Input: ""      Output: 0   (empty string)\n\n# Trace example 2 by hand:\n#   a -> vowel (count 1)\n#   p -> no\n#   p -> no\n#   l -> no\n#   e -> vowel (count 2)\n# matches expected output 2 -> understanding confirmed',
        codeCaption: 'Trace one example by hand before writing any code.',
        stepByStep: [
          '1. Read each example as input -> output',
          '2. Pick one and compute the output yourself, by hand',
          '3. Confirm your hand answer matches the given output',
          '4. Notice any tricky example (empty, ties, negatives)',
          '5. Use the examples later to test your code'
        ],
        mistake: {
          title: 'Ignoring examples and trusting the description alone',
          description: 'The description can be vague. Examples are exact. Skipping them means guessing at details the examples would have told you.',
          bad: '# Read description, skip examples, guess the edge behavior -> wrong',
          good: '# Trace examples by hand -> learn the exact expected behavior'
        },
        quiz: {
          question: 'Why are examples often more useful than the description?',
          options: [
            'They are shorter to read',
            'They show the exact expected output for a concrete input, removing ambiguity',
            'They contain the full solution code',
            'They are graded separately'
          ],
          correctIndex: 1,
          explanation: 'Examples pin down exactly what output is expected for a given input, which clears up anything the words left vague.'
        },
        practice: {
          question: 'Predict the output by hand:\n\ndef count_a(s):\n    total = 0\n    for ch in s:\n        if ch == "a":\n            total += 1\n    return total\n\nprint(count_a("banana"))',
          hint: 'Count how many times the letter a appears in "banana".',
          answer: '3\n\n"banana" has a at positions 1, 3, and 5, so the function returns 3.'
        },
        reflection: 'Recap: examples are concrete input/output pairs. Trace one by hand to confirm you understand before coding.'
      },
      {
        id: 'l10-9', title: 'Understanding Input and Output',
        explanation: [
          'Input is what the function receives (its parameters). Output is what the function gives back (its return value). Every problem is really just: turn THIS input into THAT output.',
          'Why it matters: if you cannot clearly name the input and the output, you cannot solve the problem. Half of being stuck is fuzzy thinking about these two things.',
          'Write them down explicitly: input is a list of ints; output is a single int. That one sentence shapes your whole solution.'
        ],
        analogy: 'A function is a vending machine. Input = the money and the button you press. Output = the snack that drops down. The machine only job is turning one into the other.',
        code: '# def double_all(nums):\n#     ...\n\n# INPUT:  nums, a list of integers   e.g. [1, 2, 3]\n# OUTPUT: a new list with each value doubled  e.g. [2, 4, 6]\n\ndef double_all(nums):\n    result = []\n    for n in nums:\n        result.append(n * 2)\n    return result          # the OUTPUT\n\n# double_all([1, 2, 3]) -> [2, 4, 6]',
        codeCaption: 'Name the input and the output in one sentence before solving.',
        stepByStep: [
          '1. Find the parameters — that is your input',
          '2. Note the type of each input (int, str, list...)',
          '3. Read what must be returned — that is your output',
          '4. Note the output type',
          '5. Write: "turn <input> into <output>" in one sentence'
        ],
        mistake: {
          title: 'Confusing input with output',
          description: 'Beginners sometimes build the wrong thing — returning the input shape when a different shape was asked for (a count instead of a list, or vice versa).',
          bad: '# Asked for a COUNT (int) but you return the LIST of items -> wrong',
          good: '# Asked for a count -> return len(result) -> right shape'
        },
        quiz: {
          question: 'For def first_word(sentence): which is the input and which is the likely output?',
          options: [
            'Input: a number; Output: a list',
            'Input: a string (sentence); Output: a string (the first word)',
            'Input: a list; Output: a boolean',
            'There is no input'
          ],
          correctIndex: 1,
          explanation: 'The parameter sentence is the input (a string). The name first_word suggests it returns the first word — a string.'
        },
        practice: {
          question: 'For def is_even(n): name the input, its type, the output, and its type.',
          hint: 'One parameter in, one True/False out.',
          answer: 'Input: n, an integer. Output: a boolean (True if n is even, False if odd).'
        },
        reflection: 'Recap: input = what comes in (parameters), output = what goes back (return value). Name both before coding.'
      },
      {
        id: 'l10-10', title: 'Understanding Function Signatures',
        explanation: [
          'The function signature is the first line: def name(params):. It is a contract. It tells you the function name you must use, the inputs you will receive, and (often via type hints) what to return.',
          'Why it matters: LeetCode calls your function by that exact name with those exact inputs. If you rename it or change the parameters, the hidden tests cannot call your code at all.',
          'Type hints like nums: List[int] -> int are clues, not decoration. They tell you the input is a list of ints and the output is a single int.'
        ],
        analogy: 'A signature is like a mailing address on an envelope. The post office (LeetCode) delivers to that exact address. Change it and your mail (the test inputs) never arrives.',
        code: '# Signature with type hints:\n# def two_sum(self, nums: List[int], target: int) -> List[int]:\n\n# Reading it:\n#   name:    two_sum\n#   input 1: nums   -> a list of ints\n#   input 2: target -> a single int\n#   output:  -> List[int]  (a list of ints)\n\n# Keep the name and parameters EXACTLY as given.',
        codeCaption: 'The signature is a contract: same name, same inputs, expected output type.',
        stepByStep: [
          '1. Read the function name — use it exactly',
          '2. List each parameter and its type hint',
          '3. Read the return type hint after the ->',
          '4. Do not rename or reorder parameters',
          '5. Make your return match the return type'
        ],
        mistake: {
          title: 'Renaming the function or changing parameters',
          description: 'If the signature is def two_sum(nums, target) and you write def solve(arr), the tests call two_sum, which no longer exists — every test errors.',
          bad: '# given: def two_sum(nums, target)\n# you wrote: def solve(arr, t)  -> tests cannot find two_sum',
          good: '# keep: def two_sum(nums, target)  -> tests run correctly'
        },
        quiz: {
          question: 'Given def merge(a: List[int], b: List[int]) -> List[int], what is the OUTPUT type?',
          options: [
            'An integer',
            'Two lists',
            'A list of integers',
            'A boolean'
          ],
          correctIndex: 2,
          explanation: 'The part after -> is the return type: List[int], a list of integers.'
        },
        challenge: {
          description: 'Practice reading a signature. Write identify_output(signature) that returns the substring after the arrow (the return type). Example: "def f(x) -> int" gives "int".',
          starter: 'def identify_output(signature):\n    # return whatever comes after the "-> "\n    pass',
          tests: [
            { call: 'identify_output("def f(x) -> int")', expected: 'int' },
            { call: 'identify_output("def g(a, b) -> List[int]")', expected: 'List[int]' },
            { call: 'identify_output("def h(s) -> bool")', expected: 'bool' }
          ],
          solution: 'def identify_output(signature):\n    return signature.split("-> ")[1]',
          hint: 'Use .split("-> ") and take the part at index 1.'
        },
        practice: {
          question: 'For def count_words(text: str) -> int, name the input (and type) and the output (and type).',
          hint: 'One string in, one number out.',
          answer: 'Input: text, a string. Output: an integer (the number of words). The -> int tells you the return type.'
        },
        reflection: 'Recap: the signature is a contract — keep the name and parameters exactly, and return the type it promises.'
      },
      {
        id: 'l10-11', title: 'What "return" Means on LeetCode',
        explanation: [
          'return hands a value back to whoever called the function. On LeetCode, the caller is the hidden test, and it compares your returned value to the expected answer. No return means your function gives back None — and None almost never matches.',
          'Why it matters: this is the single most common beginner mistake on LeetCode. The logic is right, the value is computed, but it is never returned — so every test fails.',
          'A function stops the moment it hits return. Anything after that line in the same path does not run.'
        ],
        analogy: 'return is like handing in your exam paper. You can solve every question perfectly, but if you never hand the paper to the teacher, you score zero. The teacher only grades what is handed in.',
        code: '# WRONG: computes the answer but never returns it\ndef add(a, b):\n    total = a + b      # computed...\n    # ...but never returned -> function gives back None\n\n# RIGHT: hands the value back\ndef add(a, b):\n    total = a + b\n    return total       # the test receives this\n\n# add(2, 3) -> 5   (only works with return)',
        codeCaption: 'No return means the function gives back None — and tests fail.',
        stepByStep: [
          '1. Compute your answer in a variable',
          '2. Make sure a return statement hands that value back',
          '3. Check the returned value matches the required output type',
          '4. Remember: code after return (same path) does not run',
          '5. Every code path that should answer must return something'
        ],
        mistake: {
          title: 'Forgetting to return (printing instead)',
          description: 'The function computes the right value but never returns it, so the test sees None. This is the number one reason correct-looking code fails on LeetCode.',
          bad: 'def square(n):\n    print(n * n)   # shows it, but returns None',
          good: 'def square(n):\n    return n * n   # hands the value back'
        },
        quiz: {
          question: 'A function computes the right answer but has no return statement. What does it give back to the test?',
          options: [
            'The last computed value automatically',
            '0',
            'None',
            'An error'
          ],
          correctIndex: 2,
          explanation: 'Without a return, a Python function returns None by default — which will not match the expected answer.'
        },
        challenge: {
          description: 'Fix the missing return. Write triple(n) that RETURNS n times 3 (do not print).',
          starter: 'def triple(n):\n    # return n times 3\n    pass',
          tests: [
            { call: 'triple(2)', expected: 6 },
            { call: 'triple(0)', expected: 0 },
            { call: 'triple(-4)', expected: -12 }
          ],
          solution: 'def triple(n):\n    return n * 3',
          hint: 'Use the return keyword followed by n * 3.'
        },
        practice: {
          question: 'Predict the output:\n\ndef f(x):\n    return x + 1\n    print("done")\n\nprint(f(5))',
          hint: 'What happens to any line after return?',
          answer: '6\n\nf(5) returns 6. The print("done") line never runs because return exits the function immediately.'
        },
        reflection: 'Recap: return hands your value to the test. No return = None = failed tests. Always return your answer.'
      },
      {
        id: 'l10-12', title: 'Why print() Is Usually Not the Answer',
        explanation: [
          'print() shows text on the screen for a human to read. return gives a value back to the program. The hidden tests read your return value — they do not read the screen. So printing the answer does not pass the tests.',
          'Why it matters: beginners coming from Hello World tutorials reach for print() out of habit. On LeetCode that habit silently fails every test, even when the printed number is correct.',
          'print() is still useful — for debugging, to peek at values while you work. Just remember the final answer must be returned, not printed.'
        ],
        analogy: 'print() is reading the answer out loud in class. return is writing it on the answer sheet. The grader only marks the answer sheet — saying it out loud earns nothing.',
        code: '# Prints the answer (test sees None -> FAILS)\ndef best(nums):\n    print(max(nums))\n\n# Returns the answer (test sees the value -> PASSES)\ndef best(nums):\n    return max(nums)\n\n# print is fine for debugging WHILE you work:\ndef best(nums):\n    print("checking:", nums)   # debug peek\n    return max(nums)           # real answer',
        codeCaption: 'Tests read your return value, not the screen. Return the answer.',
        stepByStep: [
          '1. Use return for the final answer the tests check',
          '2. Use print only to debug values while developing',
          '3. Before submitting, confirm the answer is returned',
          '4. Remove or ignore debug prints — they do not affect tests',
          '5. If tests fail with None, look for a print where a return belongs'
        ],
        mistake: {
          title: 'Printing the answer instead of returning it',
          description: 'The printed value looks correct in the console, so it feels solved — but the test compares the RETURN value, which is None.',
          bad: 'def add(a, b):\n    print(a + b)    # looks right on screen, test sees None',
          good: 'def add(a, b):\n    return a + b    # test receives the value'
        },
        quiz: {
          question: 'Your function prints the correct number but every test still fails. Why?',
          options: [
            'The number is actually wrong',
            'Tests check the returned value, not what is printed',
            'print() is banned on LeetCode',
            'You need more comments'
          ],
          correctIndex: 1,
          explanation: 'Hidden tests compare your RETURN value. Printing shows text to a human but returns None to the test.'
        },
        challenge: {
          description: 'Convert a printing solution into a returning one. Write sum_list(nums) that RETURNS the sum of the list (do not print).',
          starter: 'def sum_list(nums):\n    total = 0\n    for n in nums:\n        total += n\n    # currently nothing is returned -- fix it\n    pass',
          tests: [
            { call: 'sum_list([1, 2, 3])', expected: 6 },
            { call: 'sum_list([])', expected: 0 },
            { call: 'sum_list([10, -4])', expected: 6 }
          ],
          solution: 'def sum_list(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total',
          hint: 'After the loop, return total instead of printing it.'
        },
        practice: {
          question: 'Rewrite this so the test can read the answer:\n\ndef area(w, h):\n    print(w * h)',
          hint: 'Swap print for return.',
          answer: 'def area(w, h):\n    return w * h\n\nNow the function hands w * h back to the caller instead of only displaying it.'
        },
        reflection: 'Recap: print talks to humans, return talks to the tests. Final answers must be returned. Use print only to debug.'
      },
      {
        id: 'l10-13', title: 'Understanding Constraints',
        explanation: [
          'Constraints are the limits on the input: how big the list can be, how large the numbers go, whether values can be negative or empty. They appear as lines like 1 <= len(nums) <= 10000.',
          'Why it matters: constraints quietly tell you two things — which edge cases to handle (can the list be empty?) and roughly how fast your solution must be (a huge input means a slow nested loop may time out).',
          'You do not need deep math here. As a beginner, read constraints to spot edge cases and to know the input is not infinite.'
        ],
        analogy: 'Constraints are like the weight limit and size rules on a carry-on bag. They tell you what you must plan for — a tiny bag and a huge bag need different packing.',
        code: '# Typical constraints block:\n#   1 <= len(nums) <= 10000      # list has 1 to 10000 items\n#   -1000 <= nums[i] <= 1000     # values can be negative!\n\n# What this tells you:\n#   - The list is never empty (min length 1)\n#   - Negatives are possible -> do not assume positive\n#   - Up to 10000 items -> a simple loop is fine,\n#     but a loop inside a loop could get slow',
        codeCaption: 'Constraints reveal edge cases and how fast your code must be.',
        stepByStep: [
          '1. Read the size limits (how long can the input be?)',
          '2. Read the value limits (negatives? zero? very large?)',
          '3. Ask: can the input be empty? (check the minimum)',
          '4. Note edge cases the limits imply',
          '5. If the size is huge, prefer a single loop over nested loops'
        ],
        mistake: {
          title: 'Assuming inputs are small and friendly',
          description: 'Beginners assume lists are short and numbers are positive. Constraints often say otherwise — empty lists, negatives, or very large sizes that break naive code.',
          bad: '# Assume nums is non-empty -> max(nums) crashes on []',
          good: '# Constraint allows empty -> handle [] first, then max(nums)'
        },
        quiz: {
          question: 'A constraint says 0 <= len(nums) <= 100000. What two things does it tell you?',
          options: [
            'The list is always exactly 100000 items',
            'The list can be empty, and it can be very large (so avoid slow nested loops)',
            'The numbers are always positive',
            'Nothing useful'
          ],
          correctIndex: 1,
          explanation: 'The minimum 0 means the list can be empty (an edge case), and the large maximum warns that slow O(n^2) approaches may be too slow.'
        },
        practice: {
          question: 'Constraints say: 1 <= len(s) <= 50 and s contains only lowercase letters. List one edge case you should test and one thing you do NOT need to worry about.',
          hint: 'Look at the minimum length and the only-lowercase rule.',
          answer: 'Test edge case: a single-character string (length 1), since that is the minimum. You do NOT need to worry about uppercase letters, digits, or an empty string (length is at least 1).'
        },
        reflection: 'Recap: constraints reveal edge cases (empty? negatives?) and rough speed needs (how big can the input get?). Read them every time.'
      },
      {
        id: 'l10-14', title: 'Writing Brute Force First',
        explanation: [
          'A brute force solution is the most direct, obvious approach — even if it is slow. Try every pair, check every item, do the simple thing. It is the first honest solution.',
          'Why it matters: a working slow solution beats a broken clever one. Brute force gets you a correct baseline you understand, and it often reveals the pattern that leads to a faster version.',
          'Optimize later, and only if needed. Many Easy problems pass with brute force alone. Solve first, speed up second.'
        ],
        analogy: 'Looking for your keys by checking every room one by one is brute force. It is not elegant, but it finds the keys. Later you might remember "I always drop them by the door" — that is the optimization.',
        code: '# Problem: does the list contain the number target?\n\n# BRUTE FORCE: check every item, one by one\ndef contains(nums, target):\n    for n in nums:\n        if n == target:\n            return True\n    return False\n\n# contains([4, 8, 2], 8) -> True\n# Simple, correct, easy to trust. Optimize only if needed.',
        codeCaption: 'The simplest correct solution first. Speed up only if you must.',
        stepByStep: [
          '1. Ask: what is the most obvious way to get the answer?',
          '2. Write that, even if it uses nested loops or extra steps',
          '3. Test it on the examples until it is correct',
          '4. Only then ask whether it is fast enough (check constraints)',
          '5. Optimize if needed — otherwise you are done'
        ],
        mistake: {
          title: 'Chasing the clever solution first',
          description: 'Beginners try to write the optimal solution immediately, get tangled, and finish nothing. A correct slow answer is worth far more than an unfinished fast one.',
          bad: '# Spend an hour on an O(n) trick -> never get it working -> 0 solved',
          good: '# Write brute force in 5 min -> it works -> optimize if there is time'
        },
        quiz: {
          question: 'Why write a brute force solution first?',
          options: [
            'It is always the fastest',
            'It gives a correct, understandable baseline and often reveals the pattern',
            'Interviewers only accept brute force',
            'It uses the least code every time'
          ],
          correctIndex: 1,
          explanation: 'Brute force gets you something correct you understand. You can optimize from there — and sometimes it is already fast enough.'
        },
        challenge: {
          description: 'Write the brute force solution for: does nums contain target? Return True if it appears, else False. Use a simple loop.',
          starter: 'def contains(nums, target):\n    # check each number; return True if you find target\n    pass',
          tests: [
            { call: 'contains([1, 2, 3], 2)', expected: true },
            { call: 'contains([1, 2, 3], 9)', expected: false },
            { call: 'contains([], 1)', expected: false },
            { call: 'contains([5], 5)', expected: true }
          ],
          solution: 'def contains(nums, target):\n    for n in nums:\n        if n == target:\n            return True\n    return False',
          hint: 'Loop through nums; if an item equals target, return True. After the loop, return False.'
        },
        practice: {
          question: 'Describe (no code) a brute force way to find the largest number in a list.',
          hint: 'How would you do it by hand, checking one at a time?',
          answer: 'Start by assuming the first number is the largest. Walk through the rest one by one; whenever you see a bigger number, remember it as the new largest. After checking all, the remembered value is the answer.'
        },
        reflection: 'Recap: brute force is the simplest correct solution. Get it working first, then optimize only if the constraints demand it.'
      },
      {
        id: 'l10-15', title: 'Testing Edge Cases',
        explanation: [
          'An edge case is an unusual input that sits at the boundary: an empty list, a single item, all-equal values, negatives, zero, or the largest allowed size. Normal inputs pass easily; edge cases are where solutions break.',
          'Why it matters: the hidden tests are full of edge cases. Code that handles [2, 7, 11] but crashes on [] will fail submission even though it seemed to work.',
          'Before submitting, run your solution through a few edge cases in your head or in code. Fixing them now is faster than a failed submission.'
        ],
        analogy: 'Edge cases are like crash-testing a car. It is easy to drive fine on a sunny road. The real test is the pothole, the sudden stop, the empty fuel tank — the boundaries.',
        code: '# Function: average of a list\ndef average(nums):\n    return sum(nums) / len(nums)\n\n# Normal case: average([2, 4]) -> 3.0  (fine)\n# EDGE CASE:   average([])    -> crash! divide by zero\n\n# Fixed to handle the edge case:\ndef average(nums):\n    if len(nums) == 0:\n        return 0\n    return sum(nums) / len(nums)',
        codeCaption: 'Empty, single, all-equal, negatives, zero — test the boundaries.',
        stepByStep: [
          '1. List the boundaries: empty? one item? all same? negatives? zero?',
          '2. Run your function on each by hand or in code',
          '3. Watch for crashes (like dividing by zero) and wrong answers',
          '4. Add small checks to handle the broken cases',
          '5. Re-run all cases before submitting'
        ],
        mistake: {
          title: 'Testing only the happy path',
          description: 'A happy path is a normal, well-behaved input. Passing it feels like success, but hidden tests include empty and boundary inputs that the happy path never reveals.',
          bad: '# Works on [1,2,3] -> submit -> crashes on [] -> wrong answer',
          good: '# Works on [1,2,3], [], [5], [-1,-2] -> then submit'
        },
        quiz: {
          question: 'Which of these is an edge case for a function that takes a list of numbers?',
          options: [
            'A list with three normal numbers',
            'An empty list',
            'A list you used in the example',
            'A list with exactly the average values'
          ],
          correctIndex: 1,
          explanation: 'An empty list is a boundary input — many solutions crash or misbehave on it, so it is a classic edge case.'
        },
        challenge: {
          description: 'Make a function safe on its edge case. Write first_or_default(nums) that returns the first element, or returns 0 if the list is empty.',
          starter: 'def first_or_default(nums):\n    # return the first element, or 0 if the list is empty\n    pass',
          tests: [
            { call: 'first_or_default([3, 5, 7])', expected: 3 },
            { call: 'first_or_default([])', expected: 0 },
            { call: 'first_or_default([9])', expected: 9 }
          ],
          solution: 'def first_or_default(nums):\n    if len(nums) == 0:\n        return 0\n    return nums[0]',
          hint: 'Check len(nums) == 0 first and return 0; otherwise return nums[0].'
        },
        practice: {
          question: 'Test this on 3 inputs including one edge case, and predict each result:\n\ndef count(nums):\n    return len(nums)\n\nTry: [1,2,3], [], [9]',
          hint: 'len of each list.',
          answer: 'count([1,2,3]) -> 3; count([]) -> 0 (the empty edge case); count([9]) -> 1. The empty list is the edge case and correctly gives 0.'
        },
        reflection: 'Recap: edge cases are boundary inputs (empty, single, all-equal, negatives, zero). Test them before submitting — that is where code breaks.'
      },
      {
        id: 'l10-16', title: 'Debugging Wrong Answers',
        explanation: [
          'A Wrong Answer means your code ran but returned something different from the expected output. The fix is not to guess randomly — it is to find the exact input where your output differs, then trace why.',
          'Why it matters: random changes (maybe flip this sign?) waste time and often break working parts. Systematic debugging finds the real cause fast.',
          'The core tools: read the failing test, print your intermediate values, and trace the bad input by hand. The bug is always in the gap between what you expected and what actually happened.'
        ],
        analogy: 'Debugging is detective work, not guessing. A detective does not arrest random people — they follow the evidence to the one input that breaks, then ask why.',
        code: '# Buggy: returns the count, but off by one\ndef count_positives(nums):\n    count = 0\n    for n in nums:\n        if n >= 0:        # bug: includes 0 as positive\n            count += 1\n    return count\n\n# Failing test: count_positives([0, 1, -2]) expected 1, got 2\n# Add a print to see what happens:\n#   n=0 -> counted (wrong!)\n# Fix: use n > 0 instead of n >= 0',
        codeCaption: 'Find the failing input, print intermediate values, trace the cause.',
        stepByStep: [
          '1. Read the failing test: note the input, expected, and your output',
          '2. Run that exact input yourself',
          '3. Add prints to see intermediate values',
          '4. Find the first step where reality differs from your expectation',
          '5. Fix that one cause, then re-run all tests'
        ],
        mistake: {
          title: 'Changing code randomly hoping it works',
          description: 'Guessing edits without understanding the cause usually breaks something that was fine and rarely fixes the real bug.',
          bad: '# "Maybe change > to >=? Maybe +1 here?" -> random flailing',
          good: '# Trace the failing input -> find the exact wrong step -> fix it'
        },
        quiz: {
          question: 'What is the best first step when you get a Wrong Answer?',
          options: [
            'Rewrite the whole solution from scratch',
            'Find the specific input that fails and trace why your output differs',
            'Change random operators until it passes',
            'Add more comments'
          ],
          correctIndex: 1,
          explanation: 'Identify the failing input and trace it. Understanding where your output diverges points straight to the bug.'
        },
        challenge: {
          description: 'Fix the bug. count_positives(nums) should count numbers strictly greater than 0 (0 is NOT positive). The starter has the classic off-by-one bug.',
          starter: 'def count_positives(nums):\n    count = 0\n    for n in nums:\n        if n >= 0:   # bug is on this line\n            count += 1\n    return count',
          tests: [
            { call: 'count_positives([0, 1, -2])', expected: 1 },
            { call: 'count_positives([3, 4, 5])', expected: 3 },
            { call: 'count_positives([0, 0, 0])', expected: 0 },
            { call: 'count_positives([])', expected: 0 }
          ],
          solution: 'def count_positives(nums):\n    count = 0\n    for n in nums:\n        if n > 0:\n            count += 1\n    return count',
          hint: '0 is not positive. Change >= to >.'
        },
        practice: {
          question: 'Your function returns 5 but the test expected 6 for input [1,2,3]. What is your very first debugging step?',
          hint: 'Do not change code yet.',
          answer: 'Run [1,2,3] through your code by hand (or with prints) and watch each step. Find where your running value stops matching what it should be — that pinpoints the bug before you change anything.'
        },
        reflection: 'Recap: a Wrong Answer is a clue, not a dead end. Find the failing input, trace it, fix the one real cause.'
      },
      {
        id: 'l10-17', title: 'Reading Time and Space Complexity',
        explanation: [
          'Time complexity describes how the number of steps grows as the input grows. Space complexity describes how much extra memory you use. We write them with Big-O, like O(n) or O(n^2).',
          'Why it matters: as a beginner you do not need to optimize everything, but you should recognize when a solution will be too slow for a large input — that is what causes Time Limit Exceeded.',
          'Two rules of thumb: one loop over n items is O(n); a loop inside a loop is O(n^2). O(n) is fast; O(n^2) gets slow quickly as n grows.'
        ],
        analogy: 'O(n) is reading every page of a book once. O(n^2) is re-reading the whole book once for every page — fine for a pamphlet, impossible for an encyclopedia.',
        code: '# O(n): one pass over the list\ndef has_zero(nums):\n    for n in nums:        # n steps\n        if n == 0:\n            return True\n    return False\n\n# O(n^2): a loop inside a loop\ndef any_pair_sums_zero(nums):\n    for a in nums:            # n times...\n        for b in nums:        # ...n times each = n*n steps\n            if a + b == 0:\n                return True\n    return False',
        codeCaption: 'One loop = O(n). A loop inside a loop = O(n^2).',
        stepByStep: [
          '1. Count the loops over the input',
          '2. One loop over n items -> about n steps -> O(n)',
          '3. A loop nested inside another -> about n*n -> O(n^2)',
          '4. Extra lists/dicts you create -> that is space complexity',
          '5. Check constraints: huge n + O(n^2) may be too slow'
        ],
        mistake: {
          title: 'Optimizing before it is needed',
          description: 'Beginners obsess over Big-O on tiny inputs where it does not matter. First make it correct; worry about complexity only when constraints say the input is large.',
          bad: '# Agonize over O(n) vs O(n^2) for a list of 5 items -> wasted effort',
          good: '# Get it correct first; check Big-O only when n can be large'
        },
        quiz: {
          question: 'A function has a for-loop with another for-loop inside it, both over the same list of n items. What is its time complexity?',
          options: [
            'O(1)',
            'O(n)',
            'O(n^2)',
            'O(n + n)'
          ],
          correctIndex: 2,
          explanation: 'A loop inside a loop runs about n times n = n^2 steps, which is O(n^2).'
        },
        practice: {
          question: 'Is this O(n) or O(n^2)?\n\ndef total(nums):\n    s = 0\n    for n in nums:\n        s += n\n    return s',
          hint: 'Count how many loops run over the list.',
          answer: 'O(n). There is a single loop that runs once per item, so the number of steps grows in direct proportion to the list length.'
        },
        reflection: 'Recap: time complexity = how steps grow with input. One loop is O(n), nested loops are O(n^2). Worry about it mainly when the input can be large.'
      },
      {
        id: 'l10-18', title: 'When to Look for a Pattern',
        explanation: [
          'Patterns (like hash maps or two pointers) are reusable techniques that solve whole families of problems. But they come AFTER you understand the problem and have a brute force solution — not before.',
          'Why it matters: reaching for a pattern too early means applying a tool you do not understand to a problem you have not grasped. That is how beginners get stuck and copy solutions without learning.',
          'The signal to look for a pattern: you have a correct brute force solution, but the constraints say it is too slow. Now you ask, is there a smarter, known approach? The next module teaches the beginner patterns.'
        ],
        analogy: 'You learn to do arithmetic by hand before using a calculator. Patterns are calculators — powerful, but only useful once you understand the problem they speed up.',
        code: '# The right order:\n# 1. Understand the problem (input, output, examples)\n# 2. Write brute force -> get it correct\n# 3. Check constraints -> is brute force fast enough?\n#      YES -> you are done\n#      NO  -> NOW look for a pattern\n\n# Example signal:\n#   Brute force is O(n^2) with nested loops,\n#   but n can be 100000 -> too slow\n#   -> reach for a pattern (e.g. a hash map for O(n))',
        codeCaption: 'Understand, then brute force, then reach for a pattern if needed.',
        stepByStep: [
          '1. Make sure you understand the problem fully',
          '2. Write a correct brute force solution',
          '3. Check the constraints for speed needs',
          '4. If brute force is fast enough, stop — no pattern needed',
          '5. If it is too slow, look for a known pattern that fits'
        ],
        mistake: {
          title: 'Reaching for a pattern before understanding the problem',
          description: 'Jumping to this must be a two-pointer problem before grasping the task leads to forcing the wrong tool and getting confused.',
          bad: '# See an array -> immediately try two pointers -> does not fit -> stuck',
          good: '# Understand -> brute force -> too slow? -> THEN pick a fitting pattern'
        },
        quiz: {
          question: 'When is the right time to reach for a known pattern?',
          options: [
            'Immediately, before reading the problem',
            'After you understand the problem and have a correct brute force that is too slow',
            'Only on Hard problems',
            'Never — always use brute force'
          ],
          correctIndex: 1,
          explanation: 'Patterns come after understanding and a correct (but too slow) brute force. They are an optimization step, not a starting point.'
        },
        practice: {
          question: 'You wrote a correct brute force solution and it passes all tests within the time limit. Should you rewrite it using a fancy pattern?',
          hint: 'What problem would the pattern be solving?',
          answer: 'No. If it is correct and fast enough for the constraints, you are done. A pattern is only worth adding when brute force is too slow — otherwise it just adds complexity and risk.'
        },
        reflection: 'Recap: understand first, brute force second, pattern only if too slow. The next module covers the beginner patterns — you are ready for them now.'
      },
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
      },
      {
        id: 'l10-19', title: 'Beginner LeetCode Prep Checkpoint',
        explanation: [
          'This checkpoint pulls together everything in this module: what LeetCode is, how problems are structured, the difference between input and output, what return means, why print is not the answer, constraints, brute force, testing, debugging, complexity, and when to look for a pattern.',
          'Why it matters: if these ideas are solid, real LeetCode problems stop feeling random. You will know exactly what each part of a problem is asking and how to approach it.',
          'Take the quiz and the practice task. If anything feels shaky, revisit that lesson before moving on to the patterns module.'
        ],
        analogy: 'This is the pre-flight checklist before takeoff. Pilots run it every time — not because they forgot how to fly, but because checking the basics prevents the big mistakes.',
        code: '# The full beginner approach, start to finish:\n# 1. Read all four parts (description, examples, constraints, signature)\n# 2. Name the input and the output\n# 3. Keep the function signature exactly\n# 4. Write brute force first -> RETURN the answer (do not print)\n# 5. Test normal cases AND edge cases\n# 6. Debug any wrong answers by tracing the failing input\n# 7. Check complexity; reach for a pattern only if too slow',
        codeCaption: 'The whole beginner workflow on one card. Run it on every problem.',
        stepByStep: [
          '1. Recall the four parts of a problem',
          '2. Recall: return gives the value to the tests, print does not',
          '3. Recall: brute force first, optimize only if needed',
          '4. Recall: test edge cases before submitting',
          '5. Recall: patterns come last, after understanding'
        ],
        mistake: {
          title: 'Rushing past the checkpoint',
          description: 'Checkpoints feel optional, but skipping them lets small misunderstandings hide until the patterns module makes them painful.',
          bad: '# Skip the checkpoint -> shaky basics -> struggle later',
          good: '# Answer the quiz and task -> confirm the basics -> move on confident'
        },
        quiz: {
          question: 'Your LeetCode function computes the right number but every test fails. What is the most likely cause?',
          options: [
            'You used the wrong programming language',
            'You printed the answer instead of returning it',
            'Your variable names are too short',
            'You added too many comments'
          ],
          correctIndex: 1,
          explanation: 'Tests read the RETURN value. Printing the answer leaves the return as None, so every test fails — the most common beginner bug.'
        },
        challenge: {
          description: 'Put it all together. Write has_duplicate(nums) that RETURNS True if any number appears more than once, else False. Handle the empty list. (Brute force is fine.)',
          starter: 'def has_duplicate(nums):\n    # return True if any value appears more than once, else False\n    pass',
          tests: [
            { call: 'has_duplicate([1, 2, 3, 1])', expected: true },
            { call: 'has_duplicate([1, 2, 3])', expected: false },
            { call: 'has_duplicate([])', expected: false },
            { call: 'has_duplicate([7, 7])', expected: true }
          ],
          solution: 'def has_duplicate(nums):\n    seen = []\n    for n in nums:\n        if n in seen:\n            return True\n        seen.append(n)\n    return False',
          hint: 'Keep a list of seen numbers. If you see one again, return True. After the loop, return False.'
        },
        practice: {
          question: 'Without looking back, list the beginner workflow for solving a LeetCode problem from start to finish.',
          hint: 'Start at reading the four parts; end at patterns.',
          answer: 'Read all four parts; name input and output; keep the signature; write brute force and RETURN (not print); test normal and edge cases; debug wrong answers by tracing the failing input; check complexity and reach for a pattern only if too slow.'
        },
        reflection: 'Recap: you now know how LeetCode problems work end to end. If the quiz and challenge felt comfortable, you are ready for the Beginner LeetCode Patterns module.'
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
