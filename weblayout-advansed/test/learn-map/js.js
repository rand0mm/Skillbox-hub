function BitwiseOne(arr) {
  console.log(arr)
  console.log(arr[0])
  console.log( parseInt(arr[0], 2))
  let x = parseInt(arr[0], 2) | arr[1];
  x = x.toString(2);
  console.log(x);
}
BitwiseOne(["00011","01010"])
