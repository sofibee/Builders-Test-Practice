function getMid(s) {
  //Code goes here!

  if (s.length % 2 !== 0) {
    return s[Math.floor(s.length / 2)];
  }
  return s[Math.floor(s.length / 2) - 1] + s[Math.floor(s.length / 2)];
}
