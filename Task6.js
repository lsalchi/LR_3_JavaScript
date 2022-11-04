function findVowels(str)
{
    let res=0
    res+=str.split('').filter(str => str=='a').length;
    res+=str.split('').filter(str => str=='e').length;
    res+=str.split('').filter(str => str=='i').length;
    res+=str.split('').filter(str => str=='o').length;
    res+=str.split('').filter(str => str=='u').length;
    return res
}
console.log(findVowels('hello,it is me'));
console.log(findVowels('i was wondering if after all these years'));
console.log(findVowels('you would like to meet, to go over'));
console.log(findVowels('everything'));
