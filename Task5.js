function Fizzbuzz(num) {
    for(let i = 1; i <= num; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz')
      }
        else if(i % 3 === 0) {
        console.log('fizz')
      }
        else if(i % 5 === 0) {
        console.log('buzz')
      }
        else {
        console.log(i)
      }
    }
  }
  Fizzbuzz(3);
  console.log("\n")
  Fizzbuzz(5);
  console.log("\n")
  Fizzbuzz(20);
  
