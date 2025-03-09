function firstWord(s) {
  // your code here
	let trimmedStr = s.trim();
    let firstSpaceIndex = trimmedStr.indexOf(" ");

    // If there's no space, return the entire string
    if (firstSpaceIndex === -1) {
        return trimmedStr;
    }

    // Return substring from the start to the first space
    return trimmedStr.substring(0, firstSpaceIndex);
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
