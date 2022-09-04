function anagrams(str1, str2) {
  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1.shift())) {
        return false;
    }
  }

  return true
}