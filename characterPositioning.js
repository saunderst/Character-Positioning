function characterPositioning (str) {
  stats = {};

  for (let i = 0; i < str.length; ++i) {
    if (str[i] !== ' ') {
      if (stats[str[i]] === undefined)
        stats[str[i]] = [];
      stats[str[i]].push(i);
    }
  }
  return stats;
}

console.log(characterPositioning("lighthouse in the house"));
