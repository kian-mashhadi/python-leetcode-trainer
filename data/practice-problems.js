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
  },

  // ===== HASH MAP PRACTICE =====
  {
    id: 'hm-1', title: 'Two Sum (Guided)', pattern: 'Hash Map',
    concept: 'Hash map + complement trick', difficulty: 'Beginner',
    instructions: 'PATTERN: Hash Map.\n\nWhy this pattern fits: you need to find a PAIR that adds to a target. Instead of checking every pair (slow), remember numbers you have seen in a dictionary so you can look up the partner instantly.\n\nTask: write two_sum(nums, target). Return the indices of the two numbers that add up to target. Exactly one answer exists.',
    starter: 'def two_sum(nums, target):\n    seen = {}            # value -> index\n    # for each number, look up the complement (target - num)\n    pass',
    example: 'two_sum([2, 7, 11, 15], 9) -> [0, 1]   (2 + 7 = 9)\ntwo_sum([3, 2, 4], 6)      -> [1, 2]   (2 + 4 = 6)',
    hint1: 'For each num, the partner you need is complement = target - num.',
    hint2: 'Before storing num, check if complement is already in seen. If yes, return [seen[complement], i].',
    solution: 'def two_sum(nums, target):\n    seen = {}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i',
    explanation: 'STEP BY STEP: (1) make an empty dict seen. (2) loop with index i and value num. (3) compute complement = target - num. (4) if complement is already a key in seen, you found the pair -> return its index and i. (5) otherwise store seen[num] = i and continue.\n\nCOMMON MISTAKE: storing the index as the key instead of the value — you must look numbers up by VALUE.\n\nTIME: O(n) — one pass. SPACE: O(n) — the dict.',
    tests: [
      { call: 'two_sum([2, 7, 11, 15], 9)', expected: [0, 1] },
      { call: 'two_sum([3, 2, 4], 6)', expected: [1, 2] },
      { call: 'two_sum([3, 3], 6)', expected: [0, 1] }
    ],
    runMode: 'function'
  },
  {
    id: 'hm-2', title: 'Contains Duplicate (Hash Map)', pattern: 'Hash Map',
    concept: 'Seen set / dictionary', difficulty: 'Beginner',
    instructions: 'PATTERN: Hash Map.\n\nWhy this pattern fits: "have I seen this before?" is an instant question for a set/dict. Checking a list each time would be slow.\n\nTask: write contains_duplicate(nums). Return True if any value appears more than once, else False.',
    starter: 'def contains_duplicate(nums):\n    seen = set()\n    # return True the first time you see a repeat\n    pass',
    example: 'contains_duplicate([1, 2, 3, 1]) -> True\ncontains_duplicate([1, 2, 3])    -> False',
    hint1: 'Keep a set of numbers you have already seen.',
    hint2: 'If the current number is already in seen, return True; otherwise add it.',
    solution: 'def contains_duplicate(nums):\n    seen = set()\n    for n in nums:\n        if n in seen:\n            return True\n        seen.add(n)\n    return False',
    explanation: 'STEP BY STEP: (1) empty set seen. (2) loop each n. (3) if n in seen -> duplicate found, return True. (4) else seen.add(n). (5) after the loop, return False.\n\nCOMMON MISTAKE: using a list for seen — n in a_list is O(n), making it O(n^2) overall. Use a set.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'contains_duplicate([1, 2, 3, 1])', expected: true },
      { call: 'contains_duplicate([1, 2, 3])', expected: false },
      { call: 'contains_duplicate([])', expected: false },
      { call: 'contains_duplicate([7, 7])', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'hm-3', title: 'Valid Anagram (Counts)', pattern: 'Hash Map',
    concept: 'Character count dictionaries', difficulty: 'Beginner',
    instructions: 'PATTERN: Hash Map (frequency counts).\n\nWhy this pattern fits: two words are anagrams when they use the same letters the same number of times. A dictionary of letter counts captures exactly that.\n\nTask: write is_anagram(a, b). Return True if b is an anagram of a.',
    starter: 'def is_anagram(a, b):\n    # build a letter-count dict for each, then compare\n    pass',
    example: 'is_anagram("listen", "silent") -> True\nis_anagram("rat", "car")       -> False',
    hint1: 'Count letters with counts[ch] = counts.get(ch, 0) + 1.',
    hint2: 'Two words are anagrams exactly when their count dictionaries are equal.',
    solution: 'def is_anagram(a, b):\n    def counts(s):\n        d = {}\n        for ch in s:\n            d[ch] = d.get(ch, 0) + 1\n        return d\n    return counts(a) == counts(b)',
    explanation: 'STEP BY STEP: (1) write a helper that builds a {letter: count} dict in one pass. (2) build it for a and for b. (3) compare the two dicts with ==.\n\nCOMMON MISTAKE: comparing only lengths — "rat" and "car" are the same length but not anagrams.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'is_anagram("listen", "silent")', expected: true },
      { call: 'is_anagram("rat", "car")', expected: false },
      { call: 'is_anagram("", "")', expected: true },
      { call: 'is_anagram("aabb", "bbaa")', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'hm-4', title: 'First Repeated Character', pattern: 'Hash Map',
    concept: 'Seen set, early return', difficulty: 'Beginner',
    instructions: 'PATTERN: Hash Map.\n\nWhy this pattern fits: you want the FIRST character that you have already seen — a set remembers seen characters with instant lookups.\n\nTask: write first_repeat(s). Return the first character that appears twice. Return "" if there is none.',
    starter: 'def first_repeat(s):\n    seen = set()\n    # return the first character you see a second time\n    pass',
    example: 'first_repeat("abca") -> "a"\nfirst_repeat("abc")  -> ""',
    hint1: 'Walk left to right, remembering characters in a set.',
    hint2: 'The first time a character is already in seen, return it immediately.',
    solution: 'def first_repeat(s):\n    seen = set()\n    for ch in s:\n        if ch in seen:\n            return ch\n        seen.add(ch)\n    return ""',
    explanation: 'STEP BY STEP: (1) empty set. (2) loop characters in order. (3) if ch already seen -> it is the first repeat, return it. (4) else add it. (5) none found -> return "".\n\nCOMMON MISTAKE: counting all letters first then scanning — that works but loses the "first" ordering unless you re-scan. The set-as-you-go approach returns the earliest repeat directly.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'first_repeat("abca")', expected: 'a' },
      { call: 'first_repeat("abc")', expected: '' },
      { call: 'first_repeat("xxy")', expected: 'x' },
      { call: 'first_repeat("")', expected: '' }
    ],
    runMode: 'function'
  },

  // ===== TWO POINTERS PRACTICE =====
  {
    id: 'tp-1', title: 'Reverse String (Two Pointers)', pattern: 'Two Pointers',
    concept: 'Left/right pointers, swap inward', difficulty: 'Beginner',
    instructions: 'PATTERN: Two Pointers.\n\nWhy this pattern fits: reversing means swapping the two ends and moving inward — a textbook two-pointer job.\n\nTask: write reverse_list(chars). Reverse the list in place and return it.',
    starter: 'def reverse_list(chars):\n    left, right = 0, len(chars) - 1\n    # swap ends and move the pointers inward\n    pass',
    example: 'reverse_list(["h","e","l","l","o"]) -> ["o","l","l","e","h"]',
    hint1: 'Start left at 0 and right at len-1.',
    hint2: 'While left < right: swap chars[left] and chars[right], then left += 1 and right -= 1.',
    solution: 'def reverse_list(chars):\n    left, right = 0, len(chars) - 1\n    while left < right:\n        chars[left], chars[right] = chars[right], chars[left]\n        left += 1\n        right -= 1\n    return chars',
    explanation: 'STEP BY STEP: (1) pointers at both ends. (2) while they have not met, swap the two ends. (3) move both inward. (4) return the list.\n\nCOMMON MISTAKE: looping past the middle (left <= right) re-swaps and undoes work. Use left < right.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'reverse_list(["h","e","l","l","o"])', expected: ['o','l','l','e','h'] },
      { call: 'reverse_list([1,2,3])', expected: [3,2,1] },
      { call: 'reverse_list([1])', expected: [1] },
      { call: 'reverse_list([])', expected: [] }
    ],
    runMode: 'function'
  },
  {
    id: 'tp-2', title: 'Valid Palindrome', pattern: 'Two Pointers',
    concept: 'Compare ends moving inward', difficulty: 'Beginner',
    instructions: 'PATTERN: Two Pointers.\n\nWhy this pattern fits: a palindrome reads the same from both ends, so compare the front and back characters and walk inward.\n\nTask: write is_palindrome(s). Return True if s reads the same forwards and backwards.',
    starter: 'def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    # compare ends, move inward\n    pass',
    example: 'is_palindrome("racecar") -> True\nis_palindrome("hello")   -> False',
    hint1: 'Compare s[left] with s[right].',
    hint2: 'If they ever differ, return False; otherwise move both inward until they meet.',
    solution: 'def is_palindrome(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        if s[left] != s[right]:\n            return False\n        left += 1\n        right -= 1\n    return True',
    explanation: 'STEP BY STEP: (1) pointers at both ends. (2) while left < right, compare the two characters. (3) mismatch -> not a palindrome. (4) otherwise step inward. (5) survived the loop -> True.\n\nCOMMON MISTAKE: building s[::-1] is fine too, but the two-pointer version can stop early at the first mismatch.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'is_palindrome("racecar")', expected: true },
      { call: 'is_palindrome("hello")', expected: false },
      { call: 'is_palindrome("a")', expected: true },
      { call: 'is_palindrome("abba")', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'tp-3', title: 'Pair Sum in Sorted List', pattern: 'Two Pointers',
    concept: 'Two pointers on a sorted array', difficulty: 'Beginner',
    instructions: 'PATTERN: Two Pointers (sorted input).\n\nWhy this pattern fits: the list is SORTED, so if the two ends sum too low, move left up; too high, move right down.\n\nTask: write pair_sum(nums, target) on a sorted list. Return True if any two numbers add up to target.',
    starter: 'def pair_sum(nums, target):\n    left, right = 0, len(nums) - 1\n    # move the pointers based on the current sum\n    pass',
    example: 'pair_sum([1, 2, 4, 7], 6) -> True   (2 + 4)\npair_sum([1, 2, 4, 7], 100) -> False',
    hint1: 'Look at nums[left] + nums[right].',
    hint2: 'If the sum is too small move left up; if too big move right down; if equal return True.',
    solution: 'def pair_sum(nums, target):\n    left, right = 0, len(nums) - 1\n    while left < right:\n        total = nums[left] + nums[right]\n        if total == target:\n            return True\n        elif total < target:\n            left += 1\n        else:\n            right -= 1\n    return False',
    explanation: 'STEP BY STEP: (1) pointers at both ends. (2) compute the sum of the two ends. (3) equal -> found. (4) too small -> need bigger, move left right. (5) too big -> move right left. (6) pointers meet -> no pair.\n\nCOMMON MISTAKE: using this on an UNSORTED list — the move-inward logic only works when sorted.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'pair_sum([1, 2, 4, 7], 6)', expected: true },
      { call: 'pair_sum([1, 2, 4, 7], 100)', expected: false },
      { call: 'pair_sum([1, 3], 4)', expected: true },
      { call: 'pair_sum([5], 5)', expected: false }
    ],
    runMode: 'function'
  },
  {
    id: 'tp-4', title: 'Move Zeroes (Intro)', pattern: 'Two Pointers',
    concept: 'Write pointer keeps order', difficulty: 'Beginner',
    instructions: 'PATTERN: Two Pointers (slow write pointer).\n\nWhy this pattern fits: one pointer scans, a second "write" pointer marks where the next non-zero goes — keeping order while pushing zeroes to the end.\n\nTask: write move_zeroes(nums). Move all 0s to the end, keep the order of the others, return the list.',
    starter: 'def move_zeroes(nums):\n    write = 0\n    # place each non-zero at index write, then fill the rest with 0\n    pass',
    example: 'move_zeroes([0, 1, 0, 3, 12]) -> [1, 3, 12, 0, 0]',
    hint1: 'Use a write index. For each non-zero value, put it at nums[write] and increase write.',
    hint2: 'After placing all non-zeros, fill positions from write to the end with 0.',
    solution: 'def move_zeroes(nums):\n    write = 0\n    for n in nums:\n        if n != 0:\n            nums[write] = n\n            write += 1\n    for i in range(write, len(nums)):\n        nums[i] = 0\n    return nums',
    explanation: 'STEP BY STEP: (1) write = 0. (2) scan each value; if it is non-zero, place it at nums[write] and bump write. (3) everything from write onward must be zeroes — fill them. (4) return.\n\nCOMMON MISTAKE: deleting zeroes mid-loop while iterating, which skips elements. The write-pointer approach avoids that.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'move_zeroes([0, 1, 0, 3, 12])', expected: [1, 3, 12, 0, 0] },
      { call: 'move_zeroes([0, 0, 1])', expected: [1, 0, 0] },
      { call: 'move_zeroes([1, 2, 3])', expected: [1, 2, 3] },
      { call: 'move_zeroes([0])', expected: [0] }
    ],
    runMode: 'function'
  },

  // ===== SLIDING WINDOW PRACTICE =====
  {
    id: 'sw-1', title: 'Max Sum of Size K', pattern: 'Sliding Window',
    concept: 'Fixed-size window sum', difficulty: 'Beginner',
    instructions: 'PATTERN: Sliding Window (fixed size).\n\nWhy this pattern fits: you want the best sum of k CONSECUTIVE numbers. Slide a window of size k, adding the entering number and removing the leaving one instead of recomputing.\n\nTask: write max_sum_k(nums, k). Return the largest sum of any k consecutive numbers. Assume len(nums) >= k >= 1.',
    starter: 'def max_sum_k(nums, k):\n    window = sum(nums[:k])\n    best = window\n    # slide: add nums[i], subtract nums[i-k]\n    pass',
    example: 'max_sum_k([1, 4, 2, 10, 2], 3) -> 16   (4 + 2 + 10)',
    hint1: 'Start with the sum of the first k items as your first window.',
    hint2: 'For i from k onward: window += nums[i] - nums[i - k]; track the best.',
    solution: 'def max_sum_k(nums, k):\n    window = sum(nums[:k])\n    best = window\n    for i in range(k, len(nums)):\n        window += nums[i] - nums[i - k]\n        best = max(best, window)\n    return best',
    explanation: 'STEP BY STEP: (1) sum the first k items = first window, also the current best. (2) slide one step at a time: add the new item nums[i], remove the old item nums[i-k]. (3) update best each step. (4) return best.\n\nCOMMON MISTAKE: recomputing sum(nums[i:i+k]) each step — that is slow O(n*k). Update by add-one/subtract-one.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'max_sum_k([1, 4, 2, 10, 2], 3)', expected: 16 },
      { call: 'max_sum_k([1, 2, 3], 3)', expected: 6 },
      { call: 'max_sum_k([5, 5, 5], 1)', expected: 5 },
      { call: 'max_sum_k([2, 1, 5, 1, 3, 2], 2)', expected: 6 }
    ],
    runMode: 'function'
  },
  {
    id: 'sw-2', title: 'Count Vowels in Window', pattern: 'Sliding Window',
    concept: 'Fixed-size window count', difficulty: 'Beginner',
    instructions: 'PATTERN: Sliding Window (fixed size).\n\nWhy this pattern fits: you want the most vowels in any k consecutive letters. Slide a window and update the vowel count as letters enter and leave.\n\nTask: write max_vowels(s, k). Return the largest number of vowels (a,e,i,o,u) in any window of size k. Assume len(s) >= k >= 1.',
    starter: 'def max_vowels(s, k):\n    vowels = set("aeiou")\n    count = sum(1 for ch in s[:k] if ch in vowels)\n    best = count\n    # slide the window and update count\n    pass',
    example: 'max_vowels("abciii", 3) -> 3   (window "iii")',
    hint1: 'Count vowels in the first k letters to start.',
    hint2: 'Sliding to i: if s[i] is a vowel add 1; if s[i-k] was a vowel subtract 1.',
    solution: 'def max_vowels(s, k):\n    vowels = set("aeiou")\n    count = sum(1 for ch in s[:k] if ch in vowels)\n    best = count\n    for i in range(k, len(s)):\n        if s[i] in vowels:\n            count += 1\n        if s[i - k] in vowels:\n            count -= 1\n        best = max(best, count)\n    return best',
    explanation: 'STEP BY STEP: (1) count vowels in the first window. (2) slide: the entering letter s[i] may add 1; the leaving letter s[i-k] may subtract 1. (3) track the best count. (4) return it.\n\nCOMMON MISTAKE: forgetting to subtract the letter that leaves the window.\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'max_vowels("abciii", 3)', expected: 3 },
      { call: 'max_vowels("aeiou", 2)', expected: 2 },
      { call: 'max_vowels("bcd", 1)', expected: 0 },
      { call: 'max_vowels("leetcode", 3)', expected: 2 }
    ],
    runMode: 'function'
  },
  {
    id: 'sw-3', title: 'Best Time to Buy/Sell (Window Intro)', pattern: 'Sliding Window',
    concept: 'Running min, best gap', difficulty: 'Beginner',
    instructions: 'PATTERN: Sliding Window / running tracker.\n\nWhy this pattern fits: think of a window from the lowest price so far to today. Track the cheapest buy seen and the best profit if you sold today.\n\nTask: write max_profit(prices). Return the best profit from buying on one day and selling on a later day. Return 0 if no profit is possible.',
    starter: 'def max_profit(prices):\n    min_price = float("inf")\n    best = 0\n    # track the cheapest buy and the best sell profit\n    pass',
    example: 'max_profit([7, 1, 5, 3, 6, 4]) -> 5   (buy 1, sell 6)',
    hint1: 'Walk left to right tracking the lowest price seen so far.',
    hint2: 'At each price, profit = price - min_price; keep the best, and update min_price.',
    solution: 'def max_profit(prices):\n    min_price = float("inf")\n    best = 0\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        else:\n            best = max(best, price - min_price)\n    return best',
    explanation: 'STEP BY STEP: (1) min_price starts very high, best = 0. (2) for each price: if it is a new low, update min_price (a better buy day). (3) otherwise see if selling today beats best. (4) return best.\n\nCOMMON MISTAKE: comparing every pair of days (O(n^2)). The single-pass running-min keeps it O(n).\n\nTIME: O(n). SPACE: O(1).',
    tests: [
      { call: 'max_profit([7, 1, 5, 3, 6, 4])', expected: 5 },
      { call: 'max_profit([7, 6, 4, 3, 1])', expected: 0 },
      { call: 'max_profit([1, 2, 3, 4, 5])', expected: 4 },
      { call: 'max_profit([2, 4, 1])', expected: 2 }
    ],
    runMode: 'function'
  },

  // ===== FREQUENCY COUNTING PRACTICE =====
  {
    id: 'fc-1', title: 'Count Characters', pattern: 'Frequency Counting',
    concept: 'Build a count dictionary', difficulty: 'Beginner',
    instructions: 'PATTERN: Frequency Counting.\n\nWhy this pattern fits: "how many of each" is exactly what a count dictionary stores.\n\nTask: write char_counts(s). Return a dictionary mapping each character to how many times it appears.',
    starter: 'def char_counts(s):\n    counts = {}\n    # counts[ch] = counts.get(ch, 0) + 1\n    pass',
    example: 'char_counts("aab") -> {"a": 2, "b": 1}',
    hint1: 'Loop over each character in s.',
    hint2: 'Use counts[ch] = counts.get(ch, 0) + 1 so missing keys start at 0.',
    solution: 'def char_counts(s):\n    counts = {}\n    for ch in s:\n        counts[ch] = counts.get(ch, 0) + 1\n    return counts',
    explanation: 'STEP BY STEP: (1) empty dict. (2) for each character, add 1 to its tally using .get with a default of 0. (3) return the dict.\n\nCOMMON MISTAKE: counts[ch] += 1 on a key that does not exist yet raises KeyError. .get(ch, 0) avoids it.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'char_counts("aab")', expected: { a: 2, b: 1 } },
      { call: 'char_counts("")', expected: {} },
      { call: 'char_counts("xyz")', expected: { x: 1, y: 1, z: 1 } }
    ],
    runMode: 'function'
  },
  {
    id: 'fc-2', title: 'Most Frequent Item', pattern: 'Frequency Counting',
    concept: 'Count then pick the max', difficulty: 'Beginner',
    instructions: 'PATTERN: Frequency Counting.\n\nWhy this pattern fits: to find the most common item, first count every item, then pick the key with the highest count.\n\nTask: write most_frequent(nums). Return the value that appears most often. If there is a tie, return the one that reaches the top count first.',
    starter: 'def most_frequent(nums):\n    counts = {}\n    # count, then return the key with the biggest count\n    pass',
    example: 'most_frequent([1, 3, 3, 2, 3]) -> 3',
    hint1: 'First build a {value: count} dictionary.',
    hint2: 'Track the best value and best count while counting, updating only when you beat the current best.',
    solution: 'def most_frequent(nums):\n    counts = {}\n    best, best_count = None, 0\n    for n in nums:\n        counts[n] = counts.get(n, 0) + 1\n        if counts[n] > best_count:\n            best_count = counts[n]\n            best = n\n    return best',
    explanation: 'STEP BY STEP: (1) empty counts, best = None. (2) for each n, increment its count. (3) if that count beats best_count, update best and best_count. (4) return best.\n\nCOMMON MISTAKE: using > (not >=) keeps the FIRST item to reach the top count on a tie, matching the spec.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'most_frequent([1, 3, 3, 2, 3])', expected: 3 },
      { call: 'most_frequent([5])', expected: 5 },
      { call: 'most_frequent([1, 1, 2, 2])', expected: 1 },
      { call: 'most_frequent([4, 4, 4, 1, 1])', expected: 4 }
    ],
    runMode: 'function'
  },
  {
    id: 'fc-3', title: 'Valid Anagram (Review)', pattern: 'Frequency Counting',
    concept: 'Equal frequency dictionaries', difficulty: 'Beginner',
    instructions: 'PATTERN: Frequency Counting (review).\n\nWhy this pattern fits: anagrams have identical letter frequencies. Build a count for each word and compare.\n\nTask: write is_anagram(a, b). Return True if b is an anagram of a. (Same idea as the Hash Map version — now from the counting angle.)',
    starter: 'def is_anagram(a, b):\n    # quick check: different lengths cannot be anagrams\n    # then compare letter counts\n    pass',
    example: 'is_anagram("anagram", "nagaram") -> True\nis_anagram("ab", "a")           -> False',
    hint1: 'If len(a) != len(b), return False right away.',
    hint2: 'Build a count dict for each word and compare them with ==.',
    solution: 'def is_anagram(a, b):\n    if len(a) != len(b):\n        return False\n    def counts(s):\n        d = {}\n        for ch in s:\n            d[ch] = d.get(ch, 0) + 1\n        return d\n    return counts(a) == counts(b)',
    explanation: 'STEP BY STEP: (1) different lengths -> not anagrams, return False early. (2) build a {letter: count} dict for each word. (3) compare the dicts. \n\nCOMMON MISTAKE: forgetting the early length check is fine for correctness but the check makes intent clear and skips work.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'is_anagram("anagram", "nagaram")', expected: true },
      { call: 'is_anagram("ab", "a")', expected: false },
      { call: 'is_anagram("cat", "act")', expected: true },
      { call: 'is_anagram("aab", "abb")', expected: false }
    ],
    runMode: 'function'
  },

  // ===== SET FOR UNIQUENESS PRACTICE =====
  {
    id: 'set-1', title: 'Contains Duplicate (Set)', pattern: 'Set',
    concept: 'Set membership / dedupe', difficulty: 'Beginner',
    instructions: 'PATTERN: Set for Uniqueness.\n\nWhy this pattern fits: a set drops duplicates automatically, so comparing sizes tells you instantly whether duplicates existed.\n\nTask: write contains_duplicate(nums). Return True if any value appears more than once.',
    starter: 'def contains_duplicate(nums):\n    # compare the size of the list to the size of its set\n    pass',
    example: 'contains_duplicate([1, 2, 3, 1]) -> True\ncontains_duplicate([1, 2, 3])    -> False',
    hint1: 'set(nums) removes duplicates.',
    hint2: 'If len(set(nums)) is smaller than len(nums), duplicates existed.',
    solution: 'def contains_duplicate(nums):\n    return len(set(nums)) != len(nums)',
    explanation: 'STEP BY STEP: (1) build a set from the list — duplicates collapse. (2) if the set is shorter than the list, something repeated. (3) return that comparison.\n\nCOMMON MISTAKE: nested loops comparing every pair (O(n^2)). The set approach is one clean O(n) line.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'contains_duplicate([1, 2, 3, 1])', expected: true },
      { call: 'contains_duplicate([1, 2, 3])', expected: false },
      { call: 'contains_duplicate([])', expected: false },
      { call: 'contains_duplicate([9, 9])', expected: true }
    ],
    runMode: 'function'
  },
  {
    id: 'set-2', title: 'Find Unique Items', pattern: 'Set',
    concept: 'Count then keep singles', difficulty: 'Beginner',
    instructions: 'PATTERN: Set / counting for uniqueness.\n\nWhy this pattern fits: you want items that appear exactly once. Count occurrences, then keep the ones with count 1, in original order.\n\nTask: write find_unique(nums). Return a list of items that appear exactly once, in their original order.',
    starter: 'def find_unique(nums):\n    # count occurrences, then keep items seen exactly once\n    pass',
    example: 'find_unique([1, 2, 2, 3, 3, 4]) -> [1, 4]',
    hint1: 'Build a {value: count} dictionary first.',
    hint2: 'Then return [n for n in nums if counts[n] == 1] to preserve order.',
    solution: 'def find_unique(nums):\n    counts = {}\n    for n in nums:\n        counts[n] = counts.get(n, 0) + 1\n    return [n for n in nums if counts[n] == 1]',
    explanation: 'STEP BY STEP: (1) count every value. (2) walk the original list again and keep values whose count is exactly 1 — this keeps the original order. (3) return that list.\n\nCOMMON MISTAKE: returning set items loses order; iterate the original list to preserve it.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'find_unique([1, 2, 2, 3, 3, 4])', expected: [1, 4] },
      { call: 'find_unique([1, 1, 1])', expected: [] },
      { call: 'find_unique([1, 2, 3])', expected: [1, 2, 3] },
      { call: 'find_unique([])', expected: [] }
    ],
    runMode: 'function'
  },
  {
    id: 'set-3', title: 'Missing Number (Intro)', pattern: 'Set',
    concept: 'Set membership to find a gap', difficulty: 'Beginner',
    instructions: 'PATTERN: Set for Uniqueness.\n\nWhy this pattern fits: put the numbers in a set, then check 0..n for the one value that is missing — each check is instant.\n\nTask: write missing_number(nums). nums holds n distinct numbers from 0..n with exactly one missing. Return the missing number.',
    starter: 'def missing_number(nums):\n    seen = set(nums)\n    # check 0..len(nums) for the one not in seen\n    pass',
    example: 'missing_number([3, 0, 1]) -> 2\nmissing_number([0, 1])    -> 2',
    hint1: 'The full range is 0..len(nums) inclusive.',
    hint2: 'Put nums in a set, then loop i in range(len(nums)+1) and return the i not in the set.',
    solution: 'def missing_number(nums):\n    seen = set(nums)\n    for i in range(len(nums) + 1):\n        if i not in seen:\n            return i',
    explanation: 'STEP BY STEP: (1) build a set of the given numbers. (2) the complete range is 0 through n (len(nums)). (3) check each value; the one not in the set is the answer.\n\nCOMMON MISTAKE: looping only to len(nums)-1 misses the case where n itself is missing. Use range(len(nums)+1).\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'missing_number([3, 0, 1])', expected: 2 },
      { call: 'missing_number([0, 1])', expected: 2 },
      { call: 'missing_number([0])', expected: 1 },
      { call: 'missing_number([1])', expected: 0 }
    ],
    runMode: 'function'
  },

  // ===== STACK PRACTICE =====
  {
    id: 'st-1', title: 'Reverse a List with a Stack', pattern: 'Stack',
    concept: 'Push all, pop all (LIFO)', difficulty: 'Beginner',
    instructions: 'PATTERN: Stack (last in, first out).\n\nWhy this pattern fits: pushing items then popping them gives them back in reverse order — a natural way to reverse.\n\nTask: write reverse_with_stack(items). Use a stack (a list with append/pop) to return the items reversed.',
    starter: 'def reverse_with_stack(items):\n    stack = []\n    # push every item, then pop them into a result list\n    pass',
    example: 'reverse_with_stack([1, 2, 3]) -> [3, 2, 1]',
    hint1: 'Push each item with stack.append(item).',
    hint2: 'Then while the stack is not empty, pop into a result list.',
    solution: 'def reverse_with_stack(items):\n    stack = []\n    for x in items:\n        stack.append(x)\n    result = []\n    while stack:\n        result.append(stack.pop())\n    return result',
    explanation: 'STEP BY STEP: (1) push every item onto the stack. (2) pop repeatedly — the last pushed comes out first. (3) collect pops into result. (4) return result.\n\nCOMMON MISTAKE: popping from an empty stack; the while stack: guard prevents that.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'reverse_with_stack([1, 2, 3])', expected: [3, 2, 1] },
      { call: 'reverse_with_stack([])', expected: [] },
      { call: 'reverse_with_stack([9])', expected: [9] },
      { call: 'reverse_with_stack(["a","b"])', expected: ["b","a"] }
    ],
    runMode: 'function'
  },
  {
    id: 'st-2', title: 'Valid Parentheses (Intro)', pattern: 'Stack',
    concept: 'Match pairs with a stack', difficulty: 'Beginner',
    instructions: 'PATTERN: Stack.\n\nWhy this pattern fits: each open bracket waits for its match; push opens and pop on a close. Only round brackets () here to keep it simple.\n\nTask: write valid(s). s contains only "(" and ")". Return True if every bracket is properly matched.',
    starter: 'def valid(s):\n    stack = []\n    # push on "(", pop on ")"; empty at the end means balanced\n    pass',
    example: 'valid("(())") -> True\nvalid("(()")  -> False\nvalid(")(")   -> False',
    hint1: 'On "(", push. On ")", you need something to pop.',
    hint2: 'If you try to pop when the stack is empty, it is unbalanced -> return False. At the end, balanced means the stack is empty.',
    solution: 'def valid(s):\n    stack = []\n    for ch in s:\n        if ch == "(":\n            stack.append(ch)\n        else:\n            if not stack:\n                return False\n            stack.pop()\n    return len(stack) == 0',
    explanation: 'STEP BY STEP: (1) empty stack. (2) push every "(". (3) on ")", if the stack is empty there is no match -> False; otherwise pop one. (4) at the end, all matched means the stack is empty.\n\nCOMMON MISTAKE: forgetting the final empty check — "(((" never pops but should be False.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'valid("(())")', expected: true },
      { call: 'valid("(()")', expected: false },
      { call: 'valid(")(")', expected: false },
      { call: 'valid("")', expected: true }
    ],
    runMode: 'function'
  },

  // ===== BINARY SEARCH PRACTICE =====
  {
    id: 'bs-1', title: 'Binary Search', pattern: 'Binary Search',
    concept: 'Halve a sorted range', difficulty: 'Beginner',
    instructions: 'PATTERN: Binary Search.\n\nWhy this pattern fits: the list is SORTED, so checking the middle tells you which half to throw away. Each step halves the search.\n\nTask: write binary_search(nums, target) on a sorted list. Return the index of target, or -1 if not found.',
    starter: 'def binary_search(nums, target):\n    low, high = 0, len(nums) - 1\n    # check the middle, then keep the half that could hold target\n    pass',
    example: 'binary_search([1, 3, 5, 7, 9], 7) -> 3\nbinary_search([1, 3, 5], 4)       -> -1',
    hint1: 'mid = (low + high) // 2.',
    hint2: 'If nums[mid] < target, search right (low = mid+1); if greater, search left (high = mid-1); if equal, return mid.',
    solution: 'def binary_search(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return -1',
    explanation: 'STEP BY STEP: (1) low and high bound the search. (2) look at the middle. (3) equal -> found. (4) middle too small -> answer is to the right. (5) too big -> to the left. (6) low passes high -> not present, return -1.\n\nCOMMON MISTAKE: using this on an UNSORTED list — binary search needs sorted data.\n\nTIME: O(log n). SPACE: O(1).',
    tests: [
      { call: 'binary_search([1, 3, 5, 7, 9], 7)', expected: 3 },
      { call: 'binary_search([1, 3, 5], 4)', expected: -1 },
      { call: 'binary_search([1, 3, 5], 1)', expected: 0 },
      { call: 'binary_search([], 1)', expected: -1 }
    ],
    runMode: 'function'
  },
  {
    id: 'bs-2', title: 'Search Insert Position', pattern: 'Binary Search',
    concept: 'Binary search for a boundary', difficulty: 'Beginner',
    instructions: 'PATTERN: Binary Search (insert point).\n\nWhy this pattern fits: in a sorted list you want where target is, or where it would go. Binary search finds that spot in log time.\n\nTask: write search_insert(nums, target). Return the index of target, or the index where it should be inserted to keep the list sorted.',
    starter: 'def search_insert(nums, target):\n    low, high = 0, len(nums) - 1\n    # binary search; if not found, low ends at the insert spot\n    pass',
    example: 'search_insert([1, 3, 5, 6], 5) -> 2\nsearch_insert([1, 3, 5, 6], 2) -> 1\nsearch_insert([1, 3, 5, 6], 7) -> 4',
    hint1: 'Do a normal binary search.',
    hint2: 'If target is not found, low (the point where low passed high) is exactly the insert position.',
    solution: 'def search_insert(nums, target):\n    low, high = 0, len(nums) - 1\n    while low <= high:\n        mid = (low + high) // 2\n        if nums[mid] == target:\n            return mid\n        elif nums[mid] < target:\n            low = mid + 1\n        else:\n            high = mid - 1\n    return low',
    explanation: 'STEP BY STEP: (1) standard binary search. (2) if found, return mid. (3) if not, when the loop ends low sits exactly where target belongs to keep order — return low.\n\nCOMMON MISTAKE: returning -1 like plain search; here you return low for the insert position.\n\nTIME: O(log n). SPACE: O(1).',
    tests: [
      { call: 'search_insert([1, 3, 5, 6], 5)', expected: 2 },
      { call: 'search_insert([1, 3, 5, 6], 2)', expected: 1 },
      { call: 'search_insert([1, 3, 5, 6], 7)', expected: 4 },
      { call: 'search_insert([1, 3, 5, 6], 0)', expected: 0 }
    ],
    runMode: 'function'
  },

  // ===== PREFIX SUM PRACTICE =====
  {
    id: 'ps-1', title: 'Running Sum', pattern: 'Prefix Sum',
    concept: 'Running total array', difficulty: 'Beginner',
    instructions: 'PATTERN: Prefix Sum.\n\nWhy this pattern fits: a running sum is the foundation of prefix sums — each position holds the total of everything up to it.\n\nTask: write running_sum(nums). Return a list where each item is the sum of all numbers up to and including that position.',
    starter: 'def running_sum(nums):\n    out = []\n    total = 0\n    # add each number to total, append total\n    pass',
    example: 'running_sum([1, 2, 3, 4]) -> [1, 3, 6, 10]',
    hint1: 'Keep a total that grows as you walk the list.',
    hint2: 'After adding each number to total, append total to the output list.',
    solution: 'def running_sum(nums):\n    out = []\n    total = 0\n    for n in nums:\n        total += n\n        out.append(total)\n    return out',
    explanation: 'STEP BY STEP: (1) total = 0, empty output. (2) for each number, add it to total. (3) append the new total. (4) return the list of running totals.\n\nCOMMON MISTAKE: appending n instead of total — append the cumulative total.\n\nTIME: O(n). SPACE: O(n).',
    tests: [
      { call: 'running_sum([1, 2, 3, 4])', expected: [1, 3, 6, 10] },
      { call: 'running_sum([1, 1, 1])', expected: [1, 2, 3] },
      { call: 'running_sum([5])', expected: [5] },
      { call: 'running_sum([])', expected: [] }
    ],
    runMode: 'function'
  },
  {
    id: 'ps-2', title: 'Range Sum Query (Intro)', pattern: 'Prefix Sum',
    concept: 'Prefix array + subtraction', difficulty: 'Beginner',
    instructions: 'PATTERN: Prefix Sum.\n\nWhy this pattern fits: build prefix totals once, then any range sum is one subtraction instead of re-adding.\n\nTask: write range_sum(nums, i, j). Return the sum of nums[i] through nums[j] inclusive. Use a prefix array.',
    starter: 'def range_sum(nums, i, j):\n    prefix = [0]\n    # build prefix totals, then return prefix[j+1] - prefix[i]\n    pass',
    example: 'range_sum([2, 4, 6, 8], 1, 2) -> 10   (4 + 6)\nrange_sum([2, 4, 6, 8], 0, 3) -> 20',
    hint1: 'Build prefix where prefix[k] is the sum of the first k items, starting with prefix = [0].',
    hint2: 'Then the sum of nums[i..j] is prefix[j+1] - prefix[i].',
    solution: 'def range_sum(nums, i, j):\n    prefix = [0]\n    total = 0\n    for n in nums:\n        total += n\n        prefix.append(total)\n    return prefix[j + 1] - prefix[i]',
    explanation: 'STEP BY STEP: (1) prefix starts [0] so prefix[k] = sum of first k items. (2) build it in one pass. (3) the range nums[i..j] = prefix[j+1] - prefix[i].\n\nCOMMON MISTAKE: off-by-one — remember the leading 0 and use j+1, not j.\n\nTIME: O(n) to build, O(1) per query. SPACE: O(n).',
    tests: [
      { call: 'range_sum([2, 4, 6, 8], 1, 2)', expected: 10 },
      { call: 'range_sum([2, 4, 6, 8], 0, 3)', expected: 20 },
      { call: 'range_sum([5], 0, 0)', expected: 5 },
      { call: 'range_sum([1, 2, 3], 0, 1)', expected: 3 }
    ],
    runMode: 'function'
  }
];
