function frequencyAnalysis(str) {
  var countObj = {};

  for (var i = 0; i < str.length; i++) {
    if (countObj[str[i]]) {
      countObj[str[i]]++;
    } else {
      countObj[str[i]] = 1;
    }
  }

  return countObj;
}
