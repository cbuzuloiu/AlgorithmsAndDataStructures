function binarySearch(nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = Math.trunc((high + low) / 2);

  while (low < high) {
    if (target === nums[mid]) {
      return mid;
    } else if (target > nums[mid]) {
      low = mid + 1;
      mid = Math.trunc((high + low) / 2);
    } else {
      high = mid - 1;
      mid = Math.trunc((high + low) / 2);
    }
  }

  return -1;
}

console.log(binarySearch([-1, 0, 3, 5, 9, 12], 9));
