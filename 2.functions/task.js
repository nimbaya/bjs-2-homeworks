function getArrayParams(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let avg = parseFloat(
    (arr.reduce((sum, num) => sum + num, 0) / arr.length).toFixed(2)
  );
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  return arr.reduce((sum, num) => sum + num, 0);
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let difference = Math.max(...arr) - Math.min(...arr);
  return difference;
}

function differenceEvenOddWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if(arr.length === 0){
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      sumEvenElement+= arr[i];
      countEvenElement+= 1;
    }
  }
  return sumEvenElement / countEvenElement;
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = arrOfArr.length > 0 ? Math.max(...arrOfArr[0]) : - Infinity;
  for(let i = 0; i < arrOfArr.length; i++){
    const current = func(...arrOfArr[i]);
    if(current > maxWorkerResult){
      maxWorkerResult = current;
    }
  }
  return maxWorkerResult;
}
