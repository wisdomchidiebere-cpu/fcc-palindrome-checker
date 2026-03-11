function isCleanPalindrome(str) {
  if (typeof str !== "string") return false;
  let cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let reversedStr = cleanStr.split('').reverse().join('');
  
  return cleanStr === reversedStr;
}

console.log(isCleanPalindrome("A man, a plan, a canal. Panama"));
