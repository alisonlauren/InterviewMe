randomStrings = ['elephant', 'cat', 'penguin', 'bird', 'dog', 'rat', 'lion', 'parrot']


function fourOrMore(array) {
    let newArray = [];
    let oldArray = [];
    for (let index = 0; index < array.length; index++) {
        const string = array[index];
        if (string.length >= 4) {
            newArray.push(string)
        } else {
            oldArray.push(string)
            
        }
        
    }
    return newArray;
}

console.log(fourOrMore(randomStrings))




function AddandReverse(str1, str2) {
    let newString = str1 + ' ' + str2;
    let reverseString = newString.split('').reverse().join('');
    console.log(reverseString)
}

AddandReverse("hello", "you")


function find4thChar(string) {
    if (string.length < 4) {
        console.log("too short of string")
    } else {
        let position = string.charAt(3)
        console.log(position)
    }

}
find4thChar("hello")
find4thChar("hi")
find4thChar("alison")

