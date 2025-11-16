function cleanAndSortDesc(arr) {
  
  const truthy = arr.filter(Boolean);
  
  const nums = truthy.filter(v => typeof v === 'number' && Number.isFinite(v));
  
  return nums.sort((a, b) => b - a);
}

console.log(cleanAndSortDesc([0, 1, "", 7, null, "5", undefined, NaN, 2, -1, false]));
