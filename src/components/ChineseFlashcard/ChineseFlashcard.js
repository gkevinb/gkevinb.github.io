import {
    Howl
} from 'howler';
const HanziWriter = require('hanzi-writer');

export default {
    name: "chinese-flashcard",
    props: {
        english: String,
        character: Array,
        pinyin: String,
        audio: Boolean,
    },
    data() {
        return {
            writer: null,
            writer2: null,
            card: null,
            flipCardId: null,
            frontCardId: null,
            leftCardId: null,
            rightCardId: null,
            sound: null
        }
    },
    created() {
        this.flipCardId = this.generateRandomId();
        let char = ''

        if (this.character.length == 1) {
            this.frontCardId = this.generateRandomId();

            char = this.character[0]
        }
        if (this.character.length == 2) {
            this.leftCardId = this.generateRandomId();
            this.rightCardId = this.generateRandomId();

            char = this.character[0] + this.character[1]
        }

        let url = 'files/audio/' + char + '.mp3';
        this.sound = new Howl({
            src: [url]
        });
    },
    mounted() {
        this.card = document.getElementById(this.flipCardId);
        if (this.character.length == 1) {
            this.writer = HanziWriter.create(this.frontCardId, this.character[0], this.hanziWriterSettings(200, 10));
        }
        if (this.character.length == 2) {
            this.writer = HanziWriter.create(this.leftCardId, this.character[0], this.hanziWriterSettings(100, 0));
            this.writer2 = HanziWriter.create(this.rightCardId, this.character[1], this.hanziWriterSettings(100, 0));
        }
    },
    methods: {
        generateRandomId: function () {
            return Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);
        },
        flipFlashcard: function () {
            this.card.classList.toggle('is-flipped');

            if (this.audio) {
                this.sound.play();
            }
        },
        writeStroke: function () {
            this.writer.animateCharacter();
        },
        hanziWriterSettings: function (_size, _padding) {
            return {
                width: _size,
                height: _size,
                padding: _padding,
                showOutline: true,
                strokeColor: '#B52020',
                strokeAnimationSpeed: 5,
                delayBetweenStrokes: 500
            }
        }
    }
}