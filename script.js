function firstWord(s) {
  // Remove leading and trailing whitespace
  s = s.trim();
  
  // If the string is empty, return an empty string
  if (!s) {
    return '';
  }
  
  // Find the index of the first space character
  const spaceIndex = s.indexOf(' ');
  
  // If no space is found, return the entire string
  if (spaceIndex === -1) {
    return s;
  }
  
  // Otherwise, return the substring up to the first space
  return s.slice(0, spaceIndex);
}


// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
