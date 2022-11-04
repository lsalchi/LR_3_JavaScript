function palindrome(str)
{
 let str1= str.split('').reverse().join('');
 if (str1===str) return true;
    else
    return false;
}
console.log(palindrome('racecar'));
console.log(palindrome('table'));
console.log(palindrome('лаба, супер! !репус ,абал'));
console.log(palindrome('...!.,.'));
