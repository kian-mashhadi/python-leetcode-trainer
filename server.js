const express = require('express');
const path = require('path');
const levels = require('./data/lessons');
const practiceProblems = require('./data/practice-problems');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const problems = [
  {
    id: 1,
    title: 'Two Sum',
    difficulty: 'Easy',
    concept: 'Hash Maps (Dictionaries)',
    tags: ['Array', 'Hash Table'],
    whatYouLearn: 'How to use a dictionary for O(1) lookups instead of nested loops',
    explanation: 'Given a list of numbers and a target value, find the two numbers that add up to the target and return their positions (indices).\n\nExample:\n  nums = [2, 7, 11, 15], target = 9\n  Answer: [0, 1]  →  nums[0] + nums[1] = 2 + 7 = 9\n\nThe brute force approach checks every pair (O(n²)). With a dictionary, we can solve it in a single pass — O(n).',
    starterCode: 'def two_sum(nums, target):\n    # Your code here\n    pass\n\n# Test your solution\nprint(two_sum([2, 7, 11, 15], 9))  # Expected: [0, 1]\nprint(two_sum([3, 2, 4], 6))       # Expected: [1, 2]',
    hint1: 'As you loop through the list, store each number in a dictionary where key = number and value = its index. This lets you check in O(1) if a number exists.',
    hint2: 'For each number num, calculate what you need: complement = target - num.\nCheck if complement is already in your dictionary.\nIf yes, return [seen[complement], current_index].',
    solution: 'def two_sum(nums, target):\n    seen = {}  # stores {number: index}\n    for i, num in enumerate(nums):\n        complement = target - num\n        if complement in seen:\n            return [seen[complement], i]\n        seen[num] = i',
    solutionExplanation: 'Step 1: Create an empty dictionary called "seen" to track numbers we\'ve visited.\n\nStep 2: Loop through nums using enumerate() to get both the index (i) and value (num).\n\nStep 3: Calculate complement = target - num. This is the number we need to find.\n\nStep 4: Check if complement is in "seen". If it is, we found our pair — return [seen[complement], i].\n\nStep 5: If complement isn\'t found yet, store seen[num] = i and move on.\n\nWhy this works: Dictionary lookups are O(1), so instead of checking all pairs (O(n²)), we do a single pass — O(n) total.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 2,
    title: 'Contains Duplicate',
    difficulty: 'Easy',
    concept: 'Sets',
    tags: ['Array', 'Hash Table', 'Sorting'],
    whatYouLearn: 'How to use a set to detect duplicates in O(n) time',
    explanation: 'Given a list of numbers, return True if any number appears more than once. Return False if all numbers are unique.\n\nExample 1: nums = [1, 2, 3, 1]  →  True  (1 appears twice)\nExample 2: nums = [1, 2, 3, 4]  →  False (all unique)\n\nA Python set only stores unique values. Adding a duplicate to a set has no effect — we can use this to detect duplicates instantly.',
    starterCode: 'def contains_duplicate(nums):\n    # Your code here\n    pass\n\n# Test your solution\nprint(contains_duplicate([1, 2, 3, 1]))  # Expected: True\nprint(contains_duplicate([1, 2, 3, 4]))  # Expected: False',
    hint1: 'Python sets don\'t allow duplicates. As you loop through the numbers, check if the current number is already in your set before adding it.',
    hint2: 'If you find a number that\'s already in the set, return True immediately.\nIf you finish the entire loop without finding a duplicate, return False.',
    solution: 'def contains_duplicate(nums):\n    seen = set()\n    for num in nums:\n        if num in seen:\n            return True\n        seen.add(num)\n    return False\n\n# Pythonic one-liner:\n# return len(nums) != len(set(nums))',
    solutionExplanation: 'Step 1: Create an empty set called "seen".\n\nStep 2: Loop through each number in nums.\n\nStep 3: Before adding a number, check if it\'s already in the set. If yes, we found a duplicate — return True immediately.\n\nStep 4: If the number is new, add it to the set with seen.add(num).\n\nStep 5: If the loop finishes without finding duplicates, return False.\n\nBonus one-liner: Converting a list to a set removes duplicates. If len(set(nums)) < len(nums), duplicates existed.\n\nTime: O(n) — single pass. Space: O(n) — the set stores up to n elements.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)'
  },
  {
    id: 3,
    title: 'Valid Anagram',
    difficulty: 'Easy',
    concept: 'Hash Maps / Character Counting',
    tags: ['Hash Table', 'String', 'Sorting'],
    whatYouLearn: 'How to count character frequencies using a dictionary',
    explanation: 'Given two strings s and t, return True if t is an anagram of s.\n\nAn anagram uses the exact same letters, just in a different order.\n\nExample 1: s = "anagram", t = "nagaram"  →  True\nExample 2: s = "rat",     t = "car"      →  False\n\nApproach: Count how many times each character appears in both strings. If the counts match exactly, they\'re anagrams.',
    starterCode: 'def is_anagram(s, t):\n    # Your code here\n    pass\n\n# Test your solution\nprint(is_anagram("anagram", "nagaram"))  # Expected: True\nprint(is_anagram("rat", "car"))          # Expected: False',
    hint1: 'If the two strings have different lengths, they can\'t be anagrams — return False early.\n\nThen try building a dictionary that counts each character in string s.',
    hint2: 'Build a count dictionary from s (count[char] += 1 for each char).\nThen loop through t, decrementing the count for each character.\nIf a character doesn\'t exist in count or its count reaches 0 before you\'re done, return False.',
    solution: 'def is_anagram(s, t):\n    if len(s) != len(t):\n        return False\n\n    count = {}\n    for char in s:\n        count[char] = count.get(char, 0) + 1\n\n    for char in t:\n        if char not in count or count[char] == 0:\n            return False\n        count[char] -= 1\n\n    return True\n\n# Alternative using sorting (O(n log n)):\n# return sorted(s) == sorted(t)',
    solutionExplanation: 'Step 1: If lengths differ, return False immediately — anagrams must have the same length.\n\nStep 2: Build a frequency dictionary from string s.\n  count.get(char, 0) returns 0 if the char isn\'t in the dict yet, then we add 1.\n\nStep 3: Loop through string t. For each character:\n  - If it\'s not in count → t has a char that s doesn\'t → return False\n  - If count[char] == 0 → t uses this char more times than s → return False\n  - Otherwise, decrement count[char] by 1\n\nStep 4: If we finish both loops cleanly, return True.\n\nAlternative: sorted(s) == sorted(t) works but is O(n log n) due to sorting.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) — at most 26 unique characters'
  },
  {
    id: 4,
    title: 'Reverse String',
    difficulty: 'Easy',
    concept: 'Two Pointers',
    tags: ['Two Pointers', 'String'],
    whatYouLearn: 'The two-pointer technique for in-place array manipulation',
    explanation: 'Given a list of characters s, reverse it in-place.\nYou must modify the input directly — you cannot allocate a new list.\n\nExample:\n  Input:  ["h","e","l","l","o"]\n  Output: ["o","l","l","e","h"]\n\nThe two-pointer technique: one pointer starts at the left end, one at the right end. They swap elements and move toward each other until they meet in the middle.',
    starterCode: 'def reverse_string(s):\n    # Use two pointers\n    # left starts at 0, right starts at the last index\n    # Swap and move them toward each other\n    pass\n\n# Test your solution\ns = ["h","e","l","l","o"]\nreverse_string(s)\nprint(s)  # Expected: ["o","l","l","e","h"]',
    hint1: 'Start with left = 0 and right = len(s) - 1.\nThese are your two pointers. Keep looping as long as left < right.',
    hint2: 'Inside the loop:\n  1. Swap s[left] and s[right]:\n     s[left], s[right] = s[right], s[left]\n  2. Move pointers inward:\n     left += 1\n     right -= 1',
    solution: 'def reverse_string(s):\n    left, right = 0, len(s) - 1\n    while left < right:\n        s[left], s[right] = s[right], s[left]\n        left += 1\n        right -= 1',
    solutionExplanation: 'Step 1: Initialize two pointers — left at index 0, right at index len(s) - 1.\n\nStep 2: Loop while left < right. When left >= right, the pointers have crossed and we\'re done.\n\nStep 3: Swap the elements at both pointers using Python\'s simultaneous assignment:\n  s[left], s[right] = s[right], s[left]\n  (This is a Python trick — no temporary variable needed!)\n\nStep 4: Move left pointer right (left += 1) and right pointer left (right -= 1).\n\nStep 5: When left >= right, we\'ve reversed the entire list in-place.\n\nThis is the classic two-pointer pattern. You\'ll see it again in palindrome checks, pair-sum problems, and sorting algorithms.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1) — in-place, no extra memory'
  },
  {
    id: 5,
    title: 'Best Time to Buy and Sell Stock',
    difficulty: 'Easy',
    concept: 'Sliding Window / Greedy',
    tags: ['Array', 'Dynamic Programming', 'Greedy'],
    whatYouLearn: 'How to track a running minimum to find the best opportunity in one pass',
    explanation: 'Given a list of stock prices where prices[i] is the price on day i, find the maximum profit you can make by buying on one day and selling on a later day.\n\nReturn 0 if no profit is possible.\n\nExample:\n  prices = [7, 1, 5, 3, 6, 4]\n  Buy on day 1 (price=1), sell on day 4 (price=6)  →  profit = 5\n\nKey rule: You must buy BEFORE you sell.',
    starterCode: 'def max_profit(prices):\n    # Track the minimum price seen so far\n    # Track the maximum profit seen so far\n    pass\n\n# Test your solution\nprint(max_profit([7, 1, 5, 3, 6, 4]))  # Expected: 5\nprint(max_profit([7, 6, 4, 3, 1]))     # Expected: 0 (no profit possible)',
    hint1: 'Keep track of the lowest price you\'ve seen so far as you loop through the prices.\nThe best day to buy is always the lowest price seen so far.',
    hint2: 'At each price, calculate the profit if you sold today:\n  profit = current_price - min_price_so_far\nUpdate your max_profit if this is the best profit you\'ve seen yet.',
    solution: 'def max_profit(prices):\n    min_price = float("inf")\n    max_profit = 0\n\n    for price in prices:\n        if price < min_price:\n            min_price = price\n        elif price - min_price > max_profit:\n            max_profit = price - min_price\n\n    return max_profit',
    solutionExplanation: 'Step 1: Initialize min_price to float("inf") so any real price will be smaller. Initialize max_profit to 0.\n\nStep 2: Loop through each price.\n\nStep 3: If the current price is lower than min_price, update min_price. This represents finding a better buying opportunity.\n\nStep 4: Otherwise, calculate the profit if we sold today: price - min_price. If it beats our current max_profit, update it.\n\nStep 5: Return max_profit. If prices only decrease, max_profit stays 0 (no profitable trade).\n\nWhy float("inf")? It\'s a common trick to initialize a minimum tracker. Any real number will be smaller, so the first price always sets min_price.\n\nThis is a greedy approach: at each step, we always assume we bought at the cheapest price seen so far.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)'
  }
];

app.get('/api/course', (req, res) => {
  res.json(levels);
});

app.get('/api/practice-problems', (req, res) => {
  res.json(practiceProblems);
});

app.get('/api/problems', (req, res) => {
  const summary = problems.map(({ id, title, difficulty, concept, tags, whatYouLearn }) => ({
    id, title, difficulty, concept, tags, whatYouLearn
  }));
  res.json(summary);
});

app.get('/api/problems/:id', (req, res) => {
  const problem = problems.find(p => p.id === parseInt(req.params.id));
  if (!problem) return res.status(404).json({ error: 'Problem not found' });
  res.json(problem);
});

app.listen(PORT, () => {
  console.log(`Python LeetCode Trainer running at http://localhost:${PORT}`);
});
