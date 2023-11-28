# recursive-checkpoint
# Palindrome Checker

## Description

This JavaScript function `palinDrome` checks whether a given word is a palindrome. A palindrome is a word that reads the same backward as forward, such as "gag," "kayak," or "radar."

## Function Explanation

The `palinDrome` function follows a recursive approach:

1. **Base Case:**
    - If the word is empty or has a length of 1, it is considered a palindrome, and the function returns `true`.

2. **Recursive Check:**
    - The function compares the first and last characters of the word.
    - If they are the same, the function calls itself recursively with the substring excluding the first and last characters.
    - If they are different, the function returns `false`.
