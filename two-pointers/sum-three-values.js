function findSumOfThree(nums, target) {
  // Sort the input list
  nums.sort((a, b) => {
    return a - b;
  });

  // Fix one integer at a time and find the other two
  for (let i = 0; i < nums.length - 2; i++) {
    // Initialize the two pointers
    let low = i + 1;
    let high = nums.length - 1;

    // Traverse the list to find the triplet whose sum equals the target
    while (low < high) {
      let triple = nums[i] + nums[low] + nums[high];

      // The sum of the triplet equals the target
      if (triple == target) {
        return true;
      }

      // The sum of the triplet is less than target, so move the low pointer forward
      else if (triple < target) low++;
      // The sum of the triplet is greater than target, so move the high pointer backward
      else high--;
    }
  }

  // No such triplet found whose sum equals the given target
  return false;
}
