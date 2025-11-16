function delaySquare(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * num);
    }, 3000);
  });
}

Promise.resolve(3) 
  .then(result => {
    console.log('First result:', result);
    return delaySquare(result); 
  })
  .then(result => {
    console.log('Second result:', result);
    return delaySquare(result); 
  })
  .then(result => {
    console.log('Тhird result:', result);
    
    console.log('Final result:', result);
  });
