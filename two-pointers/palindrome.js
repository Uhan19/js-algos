export const isPalindrome = (s) => {
  let head = 0;
  let tail = 0;

  for (let i = 0; i < s.length; i++) {
    head = i;
    tail = s.length - 1 - i;
    if (s[head] !== s[tail]) {
      return false;
    }
  }
  return true;
};
