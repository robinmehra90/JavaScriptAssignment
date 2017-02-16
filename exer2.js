var str=prompt("Enter a string to check");

function palindrome(str) {

  var re = /[\W_]/g;

  var lowRegStr = str.toLowerCase().replace(re, '');

  var reverseStr = lowRegStr.split('').reverse().join('');
  if(reverseStr === lowRegStr)
    alert("It's a Palindrome");
  else
    alert("it's not a Palindrome");

}

palindrome(str);
