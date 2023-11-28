
// Function to check if a word is a palindrome
function palinDrome(word) {
    // Base case: an empty word or a word with a single character is a palindrome
    if (word.length <= 1) {
        return true;
    }

    // Compare the first and last characters
    if (word[0] === word[word.length - 1]) {
        // Recursively check the rest of the word (excluding the first and last characters)
        return palinDrome(word.slice(1, -1));
    } else {
        // If the first and last characters are different, it's not a palindrome
        return false;
    }
}
