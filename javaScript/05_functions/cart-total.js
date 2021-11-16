function calcSum (originalSum, amount, factor = null) {
  let newSum = originalSum
  if (factor === 'ДАРИМ300') {
    if (newSum > 300) {
      newSum -= 300
    } else {
      newSum = 0
      return newSum
    }
  }
  newSum = amount >= 10 ? newSum * 0.95 : newSum
  newSum = newSum > 50000 ? 50000 + (newSum - 50000) * 0.8 : newSum
  newSum = factor === 'СКИДКА15' ? newSum >= 20000 ? newSum * 0.85 : newSum : newSum

  return newSum
}

export default calcSum
