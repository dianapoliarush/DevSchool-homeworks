const groupAnagrams = function(array){
    // object for storing groups of anagrams
    const anagramsObject = {};

    for(const word of array) {
        const anagram = word.split('').sort().join('');

        if (!anagramsObject[anagram]) {
            // add key to the object, value - empty array
            anagramsObject[anagram] = [];
        }
        anagramsObject[anagram].push(word);
    }

    return Object.values(anagramsObject);
}


console.log(groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]))
console.log(groupAnagrams(["рим", "клоун", "мир", "уклон", "сосиска", "кулон"]))