function strFrequency(stringArr) {
  return stringArr.reduce(function(obj, elem) {
    if (obj[elem]) {
      obj[elem]++;
    } else obj[elem] = 1;
    return obj;
  }, {});
}
