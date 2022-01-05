function translate (str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let pigLatin = "";

    if (vowels.indexOf(str[0]) > -1) {
        pigLatin = str + "way";
        return pigLatin.toLowerCase();
    } else {
        let firstMatch = str.match(/[aeiou]/g) || 0;
        let vowel = str.indexOf(firstMatch[0]);
        pigLatin = str.substring(vowel) + str.substring(0, vowel) + "ay";
        return pigLatin.toLowerCase();
    }
}



module.exports = translate; 

