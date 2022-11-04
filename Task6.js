const findVowels = str => {
    let count = 0
    const vowels = ['a', 'e', 'i', 'o', 'u']
    for(let char of str.toLowerCase()) {
//метод includes() выявляет содержит ли массив определенное значение, возвращает true, если массив содержит указанное значение, и false, если нет.
      if(vowels.includes(char)) {
        count++
      }
    }
    return count
  }
console.log(findVowels('hello,it is me'));
console.log(findVowels('i was wondering if after all these years'));
console.log(findVowels('you would like to meet, to go over'));
console.log(findVowels('everything'));
