function decoder(s) {
    let decodedString = '';
    let num = '';
    for (let char of s) {
        if (!isNaN(parseInt(char))) {
            num += char;
        } else {
            decodedString += String.fromCharCode(char.charCodeAt(0) + parseInt(num));
            num = '';
        }
    }
    return decodedString;
}

console.log(decoder("2fcjjm"));
