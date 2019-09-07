import { Howl } from 'howler';
const HanziWriter = require('hanzi-writer');

export default {
    name: "chinese-flashcard",
    props: {
        english: String,
        character: String,
        pinyin: String,
        audio: String,
     },
    data() {
        return {
            writer: null,
            card: null,
            flipCardId: null,
            frontCardId: null,
            sound: null
        }
    },
    created() {
        this.flipCardId = this.generateRandomId();
        this.frontCardId = this.generateRandomId();

        let url= 'files/audio/' + this.audio + '.mp3';
        this.sound = new Howl({
            src: [url]
        });
    },
    mounted() {
        this.card = document.getElementById(this.flipCardId);
        this.writer = HanziWriter.create(this.frontCardId, this.character, {
            width: 200,
            height: 200,
            padding: 10,
            showOutline: true,
            strokeColor: '#B52020',
            strokeAnimationSpeed: 5,
            delayBetweenStrokes: 500
        });
    },
    methods: {
        generateRandomId: function() {
            return Math.random().toString(36).substring(2, 7) + Math.random().toString(36).substring(2, 7);
        },
        flipFlashcard: function() {
            this.card.classList.toggle('is-flipped');
            
            if(this.audio != null){
                this.sound.play();
            }
        },
        writeStroke: function() {
            this.writer.animateCharacter();
        }
    }
}