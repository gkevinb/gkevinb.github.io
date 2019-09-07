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
            this.writer = HanziWriter.create(this.frontCardId, this.character[0], {
                width: 200,
                height: 200,
                padding: 10,
                showOutline: true,
                strokeColor: '#B52020',
                strokeAnimationSpeed: 5,
                delayBetweenStrokes: 500
            });
        }
        if (this.character.length == 2) {
            this.writer = HanziWriter.create(this.leftCardId, this.character[0], {
                width: 100,
                height: 100,
                padding: 0,
                showOutline: true,
                strokeColor: '#B52020',
                strokeAnimationSpeed: 5,
                delayBetweenStrokes: 500
            });
            this.writer2 = HanziWriter.create(this.rightCardId, this.character[1], {
                width: 100,
                height: 100,
                padding: 0,
                showOutline: true,
                strokeColor: '#B52020',
                strokeAnimationSpeed: 5,
                delayBetweenStrokes: 500
            });
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
        }
    }
}