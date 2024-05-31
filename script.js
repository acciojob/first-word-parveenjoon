function firstWord(s) {
  // If the string is empty or does not contain any space, return the entire string
  if (s === '' || s.indexOf(' ') === -1) {
    return s;
  }
  
  // Split the string by space and return the first element
  return s.split(' ')[0];
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
