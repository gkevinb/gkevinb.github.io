import { shuffle } from './algorithms.js';

Vue.component("chinese-flashcards-tab", {
    name: "chinese-flashcard-tab",
    template:  `<div :id="name">
                    <div id="chinese_header">
                        <h1>Chinese Flashcards</h1>
                        <p>Click on a card to reveal the english and pinyin meaning of the Chinese symbol. Use this application to memrise the Chinese symbols, their pronunciation, and their meaning.</p>
                        
                        <button @click="pickCards(characters.length)" type="button">All</button>
                        <button @click="pickCards(1)" type="button">Random</button>
                        <button @click="reset()" type="button">Reset</button>
                    </div>
                    <div :id="flashcardStyling()">
                        <chinese-flashcard v-for="(char, index) in chosenCharacters" :key="char.character" :english="char.english" :character="char.character" :pinyin="char.pinyin">
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
                    'pinyin' : 'yī'
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
                    'pinyin' : 'wǔ'
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
                    'character' : '字',
                    'english' : 'symbol',
                    'pinyin' : 'zì'
                },
                {
                    'id' : 21,
                    'character' : '中',
                    'english' : 'middle',
                    'pinyin' : 'zhōng'
                },
                {
                    'id' : 22,
                    'character' : '吃',
                    'english' : 'to eat',
                    'pinyin' : 'chī'
                },
                {
                    'id' : 23,
                    'character' : '请',
                    'english' : 'please',
                    'pinyin' : 'qǐng'
                },
                {
                    'id' : 24,
                    'character' : '来',
                    'english' : 'to come',
                    'pinyin' : 'lái'
                },
                {
                    'id' : 25,
                    'character' : '他',
                    'english' : 'he',
                    'pinyin' : 'tā'
                },
                {
                    'id' : 26,
                    'character' : '她',
                    'english' : 'she',
                    'pinyin' : 'tā'
                },
                {
                    'id' : 27,
                    'character' : '的',
                    'english' : '\'s',
                    'pinyin' : 'de'
                },
                {
                    'id' : 28,
                    'character' : '吗',
                    'english' : '?',
                    'pinyin' : 'ma'
                },
                {
                    'id' : 29,
                    'character' : '吧',
                    'english' : 'ok?',
                    'pinyin' : 'ba'
                },
                {
                    'id' : 30,
                    'character' : '美',
                    'english' : 'beautiful',
                    'pinyin' : 'měi'
                },
            ]
        }
    },
    methods: {
        reset: function () {
            this.chosenCharacters = null;
        },
        pickCards: function (numberOf) {
            this.chosenCharacters = shuffle(this.characters).slice(0, numberOf);
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
