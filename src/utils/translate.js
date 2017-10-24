export class Translate {
    constructor(dataSet) {
        super(dataSet);
        let languages = []
        for(var key in dataSet) {
            languages.push(key)
        }
        console.log(`supported languages: ${languages.length}`, {languages})
    }
}