console.log("=========================step1");
function unique(arr) {
   
    let uniqueArr=[];
    for (let i of arr) {
        if (uniqueArr.indexOf(i)===-1) {
            uniqueArr.push(i);
            
        }
        
    }
    return uniqueArr;
    
        
    }
     const array=[11,3,4,11,4,7,3];
     console.log(unique(array));
     console.log("===============================step2");
    //  const mySentence = "freeCodeCamp is an awesome resource";
//      const words = mySentence.split(" ");
//      for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].substr(1);

// }
// words.join(" ");
function FirstAndLast(str)
{
 
    // Create an equivalent string
    // of the given string
    var ch = str.split('');
    for (var i = 0; i < ch.length; i++)
    {
 
        // k stores index of first character
        // and i is going to store index of last
        // character.
        var k = i;
        while (i < ch.length && ch[i] != ' ')
            i++;
 
        // Check if the character is a small letter
        // If yes, then Capitalise
        ch[k] = String.fromCharCode(ch[k] >= 'a' && 
        ch[k] <= 'z' ? (ch[k].charCodeAt(0) - 32)
                     : ch[k].charCodeAt(0));
        ch[i - 1] = String.fromCharCode(ch[i - 1] >= 'a'
        && ch[i - 1] <= 'z'? (ch[i - 1].charCodeAt(0) - 32)
                            : ch[i - 1].charCodeAt(0));
    }
 
    return ch.join('');
}
 
// Driver code
 
var str = "How are you mate";
console.log( str + "");
console.log( FirstAndLast(str));
 
 



