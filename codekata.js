  let arr = userInput[0];//[1,6,4,0,3]
  let N = arr.length;
  let arr2 = []; //[0, 1, 3, 4, 6]
  for (let i=0; i<arr.length; i++) {
      arr2[i] = arr[i];
  }
arr2.sort();
let smallNum = arr2[0];
let largeNum = arr2[N-1];
for (let i=0; i<N; i++) {
    if (arr[i] == smallNum) {
        smallIndex = i;
    }else if (arr[i] == largeNum) {
        largeIndex = i;
    }
}
 let result = largeIndex - smallIndex; 


  console.log(result);