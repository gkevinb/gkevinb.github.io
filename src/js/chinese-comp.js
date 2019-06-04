Vue.component("chinese-flashcards-tab", {
    name: "chinese-flashcard-tab",
    template:  `<div :id="name">
                <div id="flashcards">
                <chinese-flashcard v-for="(char, index) in characters" v-bind:key="char.id" :id="char.english" :english="char.english" :character="char.character" :pinyin="char.pinyin">
                </chinese-flashcard>
                </div>
			    </div>`,
    data: function () {
        return {
            name: "chinese-flashcards",
            characters: [
                {
                    'character' : '我',
                    'english' : 'I',
                    'pinyin' : 'wǒ'
                },
                {
                    'character' : '也',
                    'english' : 'also',
                    'pinyin' : 'yě'
                },
                {
                    'character' : '很',
                    'english' : 'very',
                    'pinyin' : 'hěn'
                },
                {
                    'character' : '你',
                    'english' : 'you',
                    'pinyin' : 'nǐ'
                },
                {
                    'character' : '是',
                    'english' : 'are, is',
                    'pinyin' : 'shì'
                },
                {
                    'character' : '一',
                    'english' : '1',
                    'pinyin' : 'yi'
                },
                {
                    'character' : '二',
                    'english' : '2',
                    'pinyin' : 'èr'
                },
                {
                    'character' : '三',
                    'english' : '3',
                    'pinyin' : 'sān'
                },
                {
                    'character' : '四',
                    'english' : '4',
                    'pinyin' : 'sì'
                },
                {
                    'character' : '五',
                    'english' : '5',
                    'pinyin' : 'wu'
                },
                {
                    'character' : '叫',
                    'english' : 'call',
                    'pinyin' : 'jiào'
                },
                {
                    'character' : '好',
                    'english' : 'good',
                    'pinyin' : 'hǎo'
                },
                {
                    'character' : '人',
                    'english' : 'people',
                    'pinyin' : 'rén'
                },
                {
                    'character' : '不',
                    'english' : 'no, not',
                    'pinyin' : 'bù'
                },
                {
                    'character' : '那',
                    'english' : 'that',
                    'pinyin' : 'nà'
                },
                {
                    'character' : '这',
                    'english' : 'this',
                    'pinyin' : 'zhè'
                },
                {
                    'character' : '住',
                    'english' : 'live',
                    'pinyin' : 'zhù'
                },
                {
                    'character' : '在',
                    'english' : 'in',
                    'pinyin' : 'zài'
                },
                {
                    'character' : '家',
                    'english' : 'home',
                    'pinyin' : 'jiā'
                },
                {
                    'character' : '们',
                    'english' : 'us',
                    'pinyin' : 'women'
                },
            ]
        }
    }
})
