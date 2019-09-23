import { shuffle } from '../../assets/js/algorithms.js';
import ChineseFlashcard from '../ChineseFlashcard/ChineseFlashcard.vue'

export default {
    name: "chinese-flashcards-tab",
    props: {
        input: Object
    },
    components: {
        'chinese-flashcard' : ChineseFlashcard
    },
    data() {
        return {
            mute: false,
            chosenCharacters: null,
        }
    },
    created() {
        this.chosenCharacters = this.input.characters;
    },
    methods: {
        pickCards: function (numberOf) {
            this.chosenCharacters = shuffle(this.input.characters).slice(0, numberOf);
        },
        flashcardStyling: function() {
            return this.chosenCharacters.length == 1 ? "flashcards_x1" : "flashcards_x4";
        },
        /* If mute is true return null for audio, if mute is false, return audio */
        setAudio: function () {
            return this.mute ? false : true;
        },
        createCharacterArray: function(characters) {
            return characters.split("");
        }
    }
}