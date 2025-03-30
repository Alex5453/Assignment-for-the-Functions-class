function getArrayParams(...arr) {
  if (arr.length === 0) return { min: 0, max: 0, avg: 0 };

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    sum += arr[i];
  }

  let avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}
