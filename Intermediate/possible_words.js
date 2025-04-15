function getPermutations(str) {
  if (str.length === 1) return [str];

  let perms = [];
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    let remainingPerms = getPermutations(remaining);

    for (let perm of remainingPerms) {
      perms.push(currentChar + perm);
    }
  }
  return perms;
}

console.log(getPermutations("abc"));
