Vue.component("chinese-flashcards-tab", {
    name: "chinese-flashcard-tab",
    template:  `<div :id="name">
                <div id="chinese_header">
                <h1>Chinese Flashcards</h1>
                <p>Click on a card to reveal the english and pinyin meaning of the Chinese symbol. Use this application to memrise the Chinese symbols, their pronunciation, and their meaning.</p>
                <button @click="pickCards(characters.length)" type="button">All</button>
                <button @click="pickRandomCard()" type="button">Random</button>
                <button @click="reset()" type="button">Reset</button>
                </div>
                <div :id="flashcardStyling()">
                <chinese-flashcard v-for="(char, index) in chosenCharacters" :key="char.id" :english="char.english" :character="char.character" :pinyin="char.pinyin">
                </chinese-flashcard>
                </div>
			    </div>`,
    data: function () {
        return {
            name: "chinese-flashcards",
            chosenCharacters: null,
            characters: [
                {
                    'id' : 1,
                    'character' : '我',
                    'english' : 'I',
                    'pinyin' : 'wǒ'
                },
                {   
                    'id' : 2,
                    'character' : '也',
                    'english' : 'also',
                    'pinyin' : 'yě'
                },
                {
                    'id' : 3,
                    'character' : '很',
                    'english' : 'very',
                    'pinyin' : 'hěn'
                },
                {
                    'id' : 4,
                    'character' : '你',
                    'english' : 'you',
                    'pinyin' : 'nǐ'
                },
                {
                    'id' : 5,
                    'character' : '是',
                    'english' : 'are, is',
                    'pinyin' : 'shì'
                },
                {
                    'id' : 6,
                    'character' : '一',
                    'english' : '1',
                    'pinyin' : 'yi'
                },
                {
                    'id' : 7,
                    'character' : '二',
                    'english' : '2',
                    'pinyin' : 'èr'
                },
                {
                    'id' : 8,
                    'character' : '三',
                    'english' : '3',
                    'pinyin' : 'sān'
                },
                {
                    'id' : 9,
                    'character' : '四',
                    'english' : '4',
                    'pinyin' : 'sì'
                },
                {
                    'id' : 10,
                    'character' : '五',
                    'english' : '5',
                    'pinyin' : 'wu'
                },
                {
                    'id' : 11,
                    'character' : '叫',
                    'english' : 'call',
                    'pinyin' : 'jiào'
                },
                {
                    'id' : 12,
                    'character' : '好',
                    'english' : 'good',
                    'pinyin' : 'hǎo'
                },
                {
                    'id' : 13,
                    'character' : '人',
                    'english' : 'people',
                    'pinyin' : 'rén'
                },
                {
                    'id' : 14,
                    'character' : '不',
                    'english' : 'no, not',
                    'pinyin' : 'bù'
                },
                {
                    'id' : 15,
                    'character' : '那',
                    'english' : 'that',
                    'pinyin' : 'nà'
                },
                {
                    'id' : 16,
                    'character' : '这',
                    'english' : 'this',
                    'pinyin' : 'zhè'
                },
                {
                    'id' : 17,
                    'character' : '住',
                    'english' : 'live',
                    'pinyin' : 'zhù'
                },
                {
                    'id' : 18,
                    'character' : '在',
                    'english' : 'in',
                    'pinyin' : 'zài'
                },
                {
                    'id' : 19,
                    'character' : '家',
                    'english' : 'home',
                    'pinyin' : 'jiā'
                },
                {
                    'id' : 20,
                    'character' : '们',
                    'english' : 'us',
                    'pinyin' : 'women'
                },
            ]
        }
    },
    methods: {
        pickRandomCard: function () {
            this.chosenCharacters =  [this.characters[Math.floor(Math.random() * this.characters.length)]];
            console.log(this.chosenCharacters);
        },
        reset: function () {
            this.chosenCharacters = null;
        },
        pickCards: function (numberOf) {
            this.chosenCharacters = null;
            var chars = this.characters;
            this.chosenCharacters = this.shuffle(chars).slice(0, numberOf);
        },
        shuffle: function (arra1) {
            let ctr = arra1.length;
            let temp;
            let index;

            // Whilevthere are elements in the array
            while (ctr > 0) {
            // Pick a random index
                index = Math.floor(Math.random() * ctr);
            // Decrease ctr by 1
                ctr--;
            // And swap the last element with it
                temp = arra1[ctr];
                arra1[ctr] = arra1[index];
                arra1[index] = temp;
            }
            return arra1;
        },
        flashcardStyling: function() {
            if(this.chosenCharacters == null){
                return "flashcards_x4";
            }else{
                if(this.chosenCharacters.length == 1){
                    return "flashcards_x1";
                }else{
                    return "flashcards_x4";
                }
            }
        }
    }
})
