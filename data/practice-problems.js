// Practice problems for the in-browser Python lab.
// Each problem has starter code, test cases, and a solution.
// Tests are evaluated by running user code in Pyodide and comparing
// the result of calling the named function with each test input.

module.exports = [
  {
    id: 'pp-1', title: 'Print Your Name',
    concept: 'print() and strings', difficulty: 'Beginner',
    instructions: 'Use print() to display your name on the screen.\n\nThis problem has no test cases — just run your code and check the output.',
    starter: '# Use print() to show your name\nprint("Your name here")',
    example: 'Output: Alice',
    hint1: 'The print() function shows whatever is inside the parentheses on the screen.',
    hint2: 'Wrap your name in quotes ("...") because it is text, not a variable.',
    solution: 'print("Alice")',
    explanation: 'print() takes a value and shows it on the screen. Strings (text) need quotes around them.',
    tests: [],
    runMode: 'output',
    expectedOutput: null
  },
  {
    id: 'pp-2', title: 'Store Your Age in a Variable',
    concept: 'Variables and integers', difficulty: 'Beginner',
    instructions: 'Create a variable called "age" and store your age in it (use any number).\nThen print the variable.',
    starter: '# Create a variable called age\n# Then print it\n',
    example: 'Output: 25',
    hint1: 'Use the = sign to store a value: age = 25',
    hint2: 'Then print the variable WITHOUT quotes: print(age)',
    solution: 'age = 25\nprint(age)',
    explanation: 'A variable holds a value you can reuse. age = 25 stores the number 25, and print(age) shows it.',
    tests: [],
    runMode: 'output',
    expectedOutput: '25'
  },
  {
    id: 'pp-3', title: 'Add Two Numbers',
    concept: 'Functions and arithmetic', difficulty: 'Beginner',
    instructions: 'Write a function called add(a, b) that returns the sum of a and b.',
    starter: 'def add(a, b):\n    # return a + b\n    pass',
    example: 'add(2, 3)  →  5\nadd(10, 20)  →  30',
    hint1: 'Use the + operator to add two numbers.',
    hint2: 'Replace "pass" with: return a + b',
    solution: 'def add(a, b):\n    return a + b',
    explanation: 'Functions take inputs (parameters) and return a result. + adds two numbers.',
    tests: [
      { call: 'add(2, 3)', expected: 5 },
      { call: 'add(10, 20)', expected: 30 },
      { call: 'add(-1, 1)', expected: 0 },
      { call: 'add(100, 250)', expected: 350 }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-4', title: 'Check if a Number is Positive',
    concept: 'Booleans and comparisons', difficulty: 'Beginner',
    instructions: 'Write a function is_positive(n) that returns True if n is greater than 0, otherwise False.',
    starter: 'def is_positive(n):\n    # return True if n > 0, else False\n    pass',
    example: 'is_positive(5)   →  True\nis_positive(-3)  →  False\nis_positive(0)   →  False',
    hint1: 'You can compare with > and the result is already True or False.',
    hint2: 'Just return the comparison directly: return n > 0',
    solution: 'def is_positive(n):\n    return n > 0',
    explanation: 'Comparisons (>, <, ==) return True or False directly, so you can return them.',
    tests: [
      { call: 'is_positive(5)', expected: true },
      { call: 'is_positive(-3)', expected: false },
      { call: 'is_positive(0)', expected: false },
      { call: 'is_positive(100)', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-5', title: 'Print Numbers 1 to 5',
    concept: 'for loops and range()', difficulty: 'Beginner',
    instructions: 'Use a for loop and range() to print the numbers 1, 2, 3, 4, 5 — each on its own line.',
    starter: '# Use a for loop to print 1 through 5\n',
    example: 'Output:\n1\n2\n3\n4\n5',
    hint1: 'range(1, 6) gives 1, 2, 3, 4, 5 (the end number is not included).',
    hint2: 'Loop through the range and print each value: for i in range(1, 6): print(i)',
    solution: 'for i in range(1, 6):\n    print(i)',
    explanation: 'range(1, 6) generates 1 to 5 (the second number is exclusive). The for loop runs once for each value.',
    tests: [],
    runMode: 'output',
    expectedOutput: '1\n2\n3\n4\n5'
  },
  {
    id: 'pp-6', title: 'Sum a List of Numbers',
    concept: 'Lists and loops', difficulty: 'Beginner',
    instructions: 'Write a function sum_list(nums) that returns the sum of all numbers in the list.',
    starter: 'def sum_list(nums):\n    total = 0\n    # loop through nums and add to total\n    return total',
    example: 'sum_list([1, 2, 3])     →  6\nsum_list([10, 20, 30])  →  60',
    hint1: 'Loop with: for n in nums:',
    hint2: 'Inside the loop, add to total: total += n',
    solution: 'def sum_list(nums):\n    total = 0\n    for n in nums:\n        total += n\n    return total',
    explanation: 'Start with 0, loop through the list, and add each number to a running total. (Python also has the built-in sum() — but writing the loop teaches the pattern.)',
    tests: [
      { call: 'sum_list([1, 2, 3])', expected: 6 },
      { call: 'sum_list([10, 20, 30])', expected: 60 },
      { call: 'sum_list([])', expected: 0 },
      { call: 'sum_list([-1, 1, -2, 2])', expected: 0 }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-7', title: 'Find the Largest Number',
    concept: 'Lists and tracking max', difficulty: 'Beginner',
    instructions: 'Write a function find_max(nums) that returns the largest number in the list. Assume the list has at least one element.',
    starter: 'def find_max(nums):\n    # track the largest number seen so far\n    pass',
    example: 'find_max([3, 1, 4, 1, 5, 9, 2])  →  9',
    hint1: 'Start by assuming the first element is the largest: largest = nums[0]',
    hint2: 'Loop through each number — if it is larger than largest, update largest.',
    solution: 'def find_max(nums):\n    largest = nums[0]\n    for n in nums:\n        if n > largest:\n            largest = n\n    return largest',
    explanation: 'Track the biggest number as you scan the list. Update it whenever you find something larger. This pattern shows up everywhere in coding interviews.',
    tests: [
      { call: 'find_max([3, 1, 4, 1, 5, 9, 2])', expected: 9 },
      { call: 'find_max([10])', expected: 10 },
      { call: 'find_max([-5, -1, -10])', expected: -1 },
      { call: 'find_max([0, 0, 0])', expected: 0 }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-8', title: 'Count a Word',
    concept: 'Lists and counting', difficulty: 'Beginner',
    instructions: 'Write a function count_word(words, target) that returns how many times target appears in the words list.',
    starter: 'def count_word(words, target):\n    count = 0\n    # loop and count matches\n    return count',
    example: 'count_word(["a","b","a","c","a"], "a")  →  3',
    hint1: 'Loop through words and check each one with == target.',
    hint2: 'When you find a match, do count += 1.',
    solution: 'def count_word(words, target):\n    count = 0\n    for w in words:\n        if w == target:\n            count += 1\n    return count',
    explanation: 'Counting is just looping + an if check + incrementing a counter. Python also has list.count(target) — but the loop pattern works for any condition, not just exact matches.',
    tests: [
      { call: 'count_word(["a","b","a","c","a"], "a")', expected: 3 },
      { call: 'count_word(["x","y","z"], "a")', expected: 0 },
      { call: 'count_word([], "a")', expected: 0 },
      { call: 'count_word(["hi","hi","hi"], "hi")', expected: 3 }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-9', title: 'Palindrome Check',
    concept: 'Strings and comparison', difficulty: 'Beginner',
    instructions: 'Write a function is_palindrome(s) that returns True if the string reads the same forwards and backwards.',
    starter: 'def is_palindrome(s):\n    # compare s with its reverse\n    pass',
    example: 'is_palindrome("racecar")  →  True\nis_palindrome("hello")    →  False',
    hint1: 'You can reverse a string with s[::-1]',
    hint2: 'Return whether s equals its reverse: return s == s[::-1]',
    solution: 'def is_palindrome(s):\n    return s == s[::-1]',
    explanation: 's[::-1] is Python\'s slice trick to reverse a string. If a string equals its reverse, it\'s a palindrome.',
    tests: [
      { call: 'is_palindrome("racecar")', expected: true },
      { call: 'is_palindrome("hello")', expected: false },
      { call: 'is_palindrome("a")', expected: true },
      { call: 'is_palindrome("")', expected: true },
      { call: 'is_palindrome("abba")', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'pp-10', title: 'Two Sum (Beginner Edition)',
    concept: 'Hash maps / dictionaries', difficulty: 'LeetCode Easy',
    instructions: 'Given a list of numbers and a target, return the indices of the two numbers that add up to target. You can assume exactly one solution exists.\n\nThis is the famous "Two Sum" interview problem!',
    starter: 'def two_sum(nums, target):\n    # use a dictionary to find the pair\n    pass',
    example: 'two_sum([2, 7, 11, 15], 9)  →  [0, 1]\n(because nums[0] + nums[1] = 2 + 7 = 9)',
    hint1: 'For each number, what number would you need to complete the pair? (target - num)',
    hint2: 'Store {number: index} in a dict as you go. Before adding, check if (target - num) is already in the dict.',
    solution: 'def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i',
    explanation: 'Instead of checking every pair (slow O(n²)), use a dict for O(1) lookups. As you iterate, ask: "have I already seen the number I need?" If yes — pair found. If no — store this number and keep going.',
    tests: [
      { call: 'two_sum([2, 7, 11, 15], 9)', expected: [0, 1] },
      { call: 'two_sum([3, 2, 4], 6)', expected: [1, 2] },
      { call: 'two_sum([3, 3], 6)', expected: [0, 1] }
    ],
    runMode: 'function'
  }
];
