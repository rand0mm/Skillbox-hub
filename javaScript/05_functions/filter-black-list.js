function diffArray (arrayA, arrayB) {
  let el
  const diff = []
  for (el of arrayA) {
    if (arrayB.indexOf(el) === -1) diff.push(el)
  }

  return diff
}

export default diffArray
