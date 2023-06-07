export const findSumOfThree = (nums, target) => {
  // Replace this placeholder return statement with your code
  const sortedNums = nums.sort((a, b) => a - b);
  let i = 0;
  while (i < sortedNums.length) {
    let low = i + 1;
    let high = sortedNums.length - 1;
    while (high > low) {
      if (sortedNums[i] + sortedNums[low] + sortedNums[high] === target) {
        return true;
      }
      high--;
    }
    i++;
  }
  return false;
};
