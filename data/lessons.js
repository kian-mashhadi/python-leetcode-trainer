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
        id: 'l1-0', title: 'Hello, World!',
        explanation: ['The tradition of writing "Hello, World!" as your first program has existed since the 1970s. It confirms everything is working: Python is installed, your file is saved, and you can run code.', 'It is one line of Python. That\'s it. The fact that it takes one line in Python (vs 8 lines in Java) shows you why Python is great for beginners.', 'Every programmer — from total beginner to senior engineer — has written this exact program. Welcome to the club.'],
        analogy: 'Like saying "1, 2, 3, testing" into a microphone before a speech. You\'re not really making a speech yet — you\'re confirming the equipment works. Hello World confirms your coding setup works.',
        code: `print("Hello, World!")

# That's it. Run this and you'll see:
# Hello, World!

# You can print anything:
print("Hello, Python!")
print("I am learning to code.")
print("This is exciting!")`,
        codeCaption: 'Your first Python program',
        stepByStep: [
          '1. Python sees the word "print" — it knows this is the print function',
          '2. Python sees the parentheses — it knows you\'re calling the function',
          '3. Inside the parentheses: "Hello, World!" wrapped in quotes — a string',
          '4. Python sends that string to the screen',
          '5. Done — moves to the next line'
        ],
        mistake: { title: 'Capitalizing Print', description: 'Python is case-sensitive. "print" must be lowercase. "Print" is not the same as "print".', bad: 'Print("Hello")   # NameError: name \'Print\' is not defined', good: 'print("Hello")   # correct — all lowercase' },
        quiz: {
          question: 'What does the print() function do?',
          options: [
            'Sends the code to a printer to be printed on paper',
            'Saves the text to a file',
            'Displays the value inside the parentheses on the screen',
            'Asks the user to type something'
          ],
          correctIndex: 2,
          explanation: 'Despite the name, print() does NOT use a physical printer. It just shows whatever is inside the parentheses on the screen (the terminal/console).'
        },
        challenge: {
          description: 'Use print() three times to display three lines: "Hello", "I am learning Python", and "Goodbye!"',
          starter: '# Write 3 print() statements\n',
          tests: [],
          runMode: 'output',
          expectedOutput: 'Hello\nI am learning Python\nGoodbye!',
          solution: 'print("Hello")\nprint("I am learning Python")\nprint("Goodbye!")',
          hint: 'Each print() statement makes a new line. So three print() calls = three lines.'
        },
        practice: { question: 'Write a print() statement that outputs your name.', hint: 'Put your name in quotes inside print().', answer: 'print("Your Name Here")\n\nThe quotes are required — they tell Python this is text, not a variable.' },
        reflection: 'Why do you think every programmer\'s first program is "Hello, World!" instead of something more useful?'
      },
      {
        id: 'l1-1', title: 'The print() Function',
        explanation: ['print() is Python\'s way of showing output on the screen. Whatever you put inside the parentheses gets displayed. It is the most-used function in Python, especially when learning.', 'You can print text (wrap in quotes), numbers (no quotes needed), and variables. You can also print multiple things at once by separating them with commas — Python adds a space between them automatically.', 'print() always adds a new line after the output. So two print() calls always appear on two separate lines.'],
        code: `# Print text (string — needs quotes)
print("Hello")

# Print a number (no quotes needed)
print(42)
print(3.14)

# Print multiple things with a comma
print("My age is", 25)      # My age is 25

# Print a variable
name = "Alice"
print(name)                  # Alice
print("Hello,", name)        # Hello, Alice

# Print nothing (empty line)
print()`,
        codeCaption: 'print() can display text, numbers, variables, and combinations',
        mistake: { title: 'Forgetting quotes around text', description: 'Text must be in quotes. Without quotes, Python thinks it\'s a variable name and crashes if that variable doesn\'t exist.', bad: 'print(Hello)   # NameError: name \'Hello\' is not defined', good: 'print("Hello") # correct — quotes make it text' },
        practice: { question: 'What does this print?\n\nprint("The answer is", 6 + 6)', hint: 'Python evaluates 6 + 6 first.', answer: 'The answer is 12\n\nPython computes 6 + 6 = 12, then print() displays them with a space: "The answer is 12"' }
      },
      {
        id: 'l1-2', title: 'Comments',
        explanation: ['A comment is a note in your code that Python completely ignores. You write # and everything after it on that line is skipped. Comments are for humans, not computers.', 'Comments have two uses: explaining what your code does (so you remember later), and temporarily disabling a line of code without deleting it. Both are extremely common in real-world code.', 'Good programmers write comments for the "why", not the "what". The code itself shows what happens — comments explain why you made that choice.'],
        code: `# This is a comment — Python skips it entirely

print("Hello")  # this part runs, this comment is ignored

# You can "comment out" code to disable it temporarily:
# print("This line is disabled")
print("This line runs normally")

# Comments explaining WHY (good practice):
# Using a set here for O(1) lookup instead of O(n) with a list
seen = set()`,
        codeCaption: 'Use # to write comments Python will ignore',
        mistake: { title: 'Accidentally commenting out code', description: 'If you put # before print("Hello"), nothing prints. Beginners sometimes do this by accident when fixing code.', bad: '# print("Hello")  ← this is now a comment — nothing prints!', good: 'print("Hello")    # ← remove the # to make it run again' },
        practice: { question: 'What is the output?\n\n# print("Line 1")\nprint("Line 2")\n# print("Line 3")', hint: 'Lines starting with # are skipped.', answer: 'Line 2\n\nLines 1 and 3 are commented out (skipped). Only "Line 2" actually runs.' }
      },
      {
        id: 'l1-3', title: 'Running Your Code',
        explanation: ['To run Python code, you need either a local Python installation or an online editor. For absolute beginners, an online editor is easiest — no installation needed.', 'The best free online options: replit.com (create an account, make a Python project), python.org/shell (instant, no account), or programiz.com/python-programming/online-compiler. Just paste your code and click Run.', 'If you have Python installed locally, save your file as something.py, open a terminal, navigate to the file\'s folder, and run: python3 hello.py'],
        code: `# Option 1: Online editor (easiest for beginners)
# Go to replit.com, create a Python project, type your code, click Run

# Option 2: Local Python
# 1. Save this as: hello.py
# 2. Open terminal
# 3. Run: python3 hello.py

# Your first real program to run:
print("Python is running!")
print("I wrote this code.")
print("It actually works!")`,
        codeCaption: 'Use an online editor to run Python without any installation',
        mistake: { title: 'Saving as .txt instead of .py', description: 'If you save your file as hello.txt, Python won\'t recognize it as a Python file. Always use .py as the file extension.', bad: '# hello.txt  ← Python won\'t run this', good: '# hello.py   ← Python recognizes this as Python code' },
        practice: { question: 'Open a Python editor (online or local) and run print("I wrote my first program!"). What do you see?', hint: 'Just type that one line and click Run.', answer: 'You should see:\nI wrote my first program!\n\nIf you see this, Python is working correctly.' }
      },
      {
        id: 'l1-4', title: 'Common Beginner Mistakes',
        explanation: ['Every beginner makes the same mistakes. Knowing them in advance saves you hours of frustration. Most Python errors beginners encounter come from just a few patterns.', 'The most common: (1) misspelling print, (2) forgetting quotes around text, (3) forgetting closing parenthesis, (4) mixing up single and double quotes incorrectly, (5) wrong indentation.', 'When you get an error, read it carefully. Python tells you the line number and type of error. Fix that specific thing, run again. Programming is a cycle of write → run → fix → repeat.'],
        code: `# Mistake 1: Misspelling print
# Print("Hi")    → NameError
# primt("Hi")    → NameError

# Mistake 2: Missing quotes
# print(Hello)   → NameError: name 'Hello' is not defined

# Mistake 3: Missing closing parenthesis
# print("Hello"  → SyntaxError: '(' was never closed

# Mistake 4: Mismatched quotes
# print("Hello') → SyntaxError

# All correct:
print("Hello")
print('Hello')   # single quotes also work
print("It's fine to have ' inside double quotes")`,
        codeCaption: 'The five most common beginner syntax mistakes',
        mistake: { title: 'Giving up after the first error', description: 'An error does not mean you failed. It means Python found something to fix. Read the message, fix the specific issue, and run again.', bad: '# See error → close editor → give up\n# This is how people stop learning', good: '# See error → read the message → find the line → fix it → run again\n# This is how everyone learns to code' },
        practice: { question: 'Find and fix all 3 bugs:\n\nPrint("hello")\nprint(world)\nprint("bye"', hint: 'Check capitalization, quotes, and parentheses.', answer: 'print("hello")   # Print → print (lowercase)\nprint("world")   # world → "world" (needs quotes)\nprint("bye")     # missing closing parenthesis' }
      }
    ]
  },
  {
    id: 2, slug: 'variables', title: 'Variables and Data',
    subtitle: 'Store and work with information in your programs',
    color: '#3fb950',
    lessons: [
      {
        id: 'l2-0', title: 'What are Variables?',
        explanation: ['A variable is a named container for storing data. You pick a name, use the = sign, and put the value on the right. From that point on, you can use the name anywhere in your code to access that value.', 'Variable names can be anything (letters, numbers, underscores) as long as they start with a letter and have no spaces. Use descriptive names: user_age is better than x. Python convention uses_underscores_between_words.', 'The = sign in Python does not mean "equals". It means "store this value in this container". To check if two things are equal, you use == (double equals).'],
        code: `# Creating variables
name = "Alice"
age = 25
is_student = True

# Using variables
print(name)          # Alice
print(age)           # 25
print(is_student)    # True

# Variables can be updated
age = 26             # overwrite the old value
print(age)           # 26

# Use descriptive names
user_score = 100     # good
x = 100              # bad — what does x mean?`,
        codeCaption: 'Variables store data that you can reuse anywhere in your program',
        mistake: { title: 'Using = instead of == for comparison', description: '= stores a value. == checks if two values are equal. Mixing these up is one of the most common bugs.', bad: 'if age = 18:   # SyntaxError! = is assignment, not comparison', good: 'if age == 18:  # correct — == checks equality' },
        practice: { question: 'Create a variable called city that stores "New York", then print it.', hint: 'Variable = value, then print(variable).', answer: 'city = "New York"\nprint(city)\n\nOutput: New York' }
      },
      {
        id: 'l2-1', title: 'Strings',
        explanation: ['A string is text — any sequence of characters wrapped in quotes. You can use single quotes or double quotes; they work the same. Strings can contain letters, numbers, spaces, symbols, anything.', 'Strings have a length (number of characters). You can get the length with len(). You can also join strings together with + (called concatenation), though we will cover better ways to do this later.', 'One useful trick: if your text contains a single quote, use double quotes to wrap it (and vice versa). Or use a backslash to "escape" the quote.'],
        code: `# Both quote styles work
greeting = "Hello, World!"
name = 'Alice'

# String length
print(len(greeting))    # 13
print(len(name))        # 5

# Join strings with +
full = "Hello, " + name
print(full)             # Hello, Alice

# Strings with quotes inside
sentence = "It's a great day"    # single quote inside double
sentence2 = 'He said "hello"'    # double quote inside single

# Strings are case-sensitive
print("hello" == "Hello")   # False — different cases`,
        codeCaption: 'Strings are text wrapped in single or double quotes',
        mistake: { title: 'Joining string and number with +', description: 'You cannot add a string and a number with +. Python doesn\'t know if you want math or text joining. You must convert first.', bad: 'print("Age: " + 25)     # TypeError', good: 'print("Age: " + str(25)) # correct: convert 25 to string\nprint("Age:", 25)        # or use comma — easier!' },
        practice: { question: 'What is the output?\n\nword = "Python"\nprint(len(word))\nprint(word + "!")', hint: 'len() counts characters. + joins strings.', answer: '6\nPython!\n\n"Python" has 6 characters. "Python" + "!" joins to "Python!".' }
      },
      {
        id: 'l2-2', title: 'Numbers',
        explanation: ['Python has two main number types: int (integers — whole numbers like 5, -3, 100) and float (decimal numbers like 3.14, -0.5, 2.0). You don\'t need to declare which type — Python figures it out automatically.', 'Basic math works exactly as expected: +, -, *, /. Division always returns a float (10 / 2 gives 2.0, not 2). Use // for integer division (10 // 3 gives 3) and % for remainder (10 % 3 gives 1).', 'Numbers do not need quotes. If you put a number in quotes ("42"), it becomes a string, not a number, and you can\'t do math with it.'],
        code: `# Integer (int)
score = 100
lives = 3
temperature = -5

# Float (decimal)
pi = 3.14159
price = 9.99

# Math operations
print(10 + 3)    # 13  (addition)
print(10 - 3)    # 7   (subtraction)
print(10 * 3)    # 30  (multiplication)
print(10 / 3)    # 3.3333... (always float)
print(10 // 3)   # 3   (integer division — drops decimal)
print(10 % 3)    # 1   (remainder: 10 = 3×3 + 1)
print(2 ** 10)   # 1024 (power: 2 to the 10th)`,
        codeCaption: 'Python handles integers and floats automatically',
        mistake: { title: 'Numbers in quotes are not numbers', description: '"42" is a string, not a number. You cannot do math with it.', bad: 'x = "5"\ny = "3"\nprint(x + y)    # "53" — string joining, not addition!', good: 'x = 5\ny = 3\nprint(x + y)    # 8 — actual addition' },
        practice: { question: 'What is the output?\n\nprint(17 % 5)\nprint(17 // 5)', hint: '% gives the remainder. // drops the decimal.', answer: '2\n3\n\n17 = 5×3 + 2, so 17 % 5 = 2 (remainder) and 17 // 5 = 3 (how many times 5 fits).' }
      },
      {
        id: 'l2-3', title: 'Booleans',
        explanation: ['A boolean is either True or False — that\'s it, just two values. The capital letters matter: True and False, not true or false.', 'Booleans are the result of comparisons. Is 5 > 3? Yes → True. Is 5 > 10? No → False. Every if statement and while loop ultimately works with booleans.', 'You can also store booleans directly in variables: is_logged_in = True, has_password = False. This makes your code very readable.'],
        code: `# Boolean values
is_raining = True
is_sunny = False

print(is_raining)   # True
print(is_sunny)     # False

# Comparisons produce booleans
print(5 > 3)        # True
print(5 > 10)       # False
print(5 == 5)       # True  (== checks equality)
print(5 != 3)       # True  (not equal)
print(10 >= 10)     # True  (greater than or equal)

# type() shows what kind of data something is
print(type(True))   # <class 'bool'>
print(type(5))      # <class 'int'>
print(type("hi"))   # <class 'str'>`,
        codeCaption: 'Booleans are True or False — the foundation of all decisions in code',
        mistake: { title: 'Lowercase true/false', description: 'Python\'s booleans MUST be capitalized: True and False. lowercase true and false are not booleans — Python treats them as variable names.', bad: 'is_valid = true    # NameError: name \'true\' is not defined', good: 'is_valid = True    # correct — capital T' },
        practice: { question: 'What is the output?\n\nprint(10 == 10)\nprint(10 == 11)\nprint(type(True))', hint: '== checks if values are equal.', answer: 'True\nFalse\n<class \'bool\'>\n\n10 equals 10 (True), 10 does not equal 11 (False), True is of type bool.' }
      },
      {
        id: 'l2-4', title: 'The type() Function',
        explanation: ['type() is a built-in Python function that tells you what kind of data a value is. It returns the "type" — str for strings, int for integers, float for decimals, bool for booleans.', 'This is incredibly useful for debugging. When you get a TypeError, you can use type() to check what Python thinks something is. Often you find that a number is actually stored as a string, or vice versa.', 'You can also convert between types: int("42") converts the string "42" to the number 42. str(100) converts the number 100 to the string "100". float("3.14") converts to a decimal.'],
        code: `# Check the type of any value
print(type("hello"))      # <class 'str'>
print(type(42))           # <class 'int'>
print(type(3.14))         # <class 'float'>
print(type(True))         # <class 'bool'>

# Convert between types
age_string = "25"
age_number = int(age_string)    # "25" → 25
print(age_number + 1)           # 26 (math works now)

number = 100
text = str(number)              # 100 → "100"
print("Score: " + text)         # "Score: 100"

# Check before converting
user_input = "42"
print(type(user_input))         # <class 'str'>
print(type(int(user_input)))    # <class 'int'>`,
        codeCaption: 'type() tells you what kind of data you have — essential for debugging',
        mistake: { title: 'Forgetting that input() always returns a string', description: 'When you get user input with input(), it is always a string — even if they type a number. You must convert it.', bad: 'age = input("Age: ")  # "25" — a string!\nage + 1               # TypeError!', good: 'age = int(input("Age: "))  # convert to int immediately\nage + 1                    # 26 — works!' },
        practice: { question: 'What does int("7") + int("3") equal?', hint: 'Convert both strings to integers first.', answer: '10\n\nint("7") converts "7" to 7, int("3") converts "3" to 3, and 7 + 3 = 10.' }
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
