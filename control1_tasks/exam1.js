function currency(input) {
  
  const arr = Array.isArray(input) ? input : [input];

  arr.forEach((amount, i) => {
    const value = Number(amount);
    if (!Number.isFinite(value)) {
      console.log(`#${i}: Error, incorrect data`);
    } else {
      console.log(value.toFixed(2) + " BYN");
    }
  });
}
currency(["1", "qwerty", "34.52666", "-5"])