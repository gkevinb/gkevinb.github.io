import { shuffle } from '../../assets/js/algorithms.js';
import ChineseFlashcard from '../ChineseFlashcard/ChineseFlashcard.vue'

export default {
    name: "chinese-flashcards-tab",
    props: {
        china: Object
    },
    components: {
        'chinese-flashcard' : ChineseFlashcard
    },
    data() {
        return {
            name: "chinese-flashcards",
            mute: false,
            chosenCharacters: null,
        }
    },
    created() {
        this.chosenCharacters = this.china.characters;
    },
    methods: {
        pickCards: function (numberOf) {
            this.chosenCharacters = shuffle(this.china.characters).slice(0, numberOf);
        },
        flashcardStyling: function() {
            if(this.chosenCharacters.length == 1){
                return "flashcards_x1";
            }else{
                return "flashcards_x4";
            }
        },
        /* If mute is true return null for audio, if mute is false, return audio */
        setAudio: function () {
            if(this.mute){
                return false;
            }
            else{
                return true;
            }
        },
        createCharacterArray: function(characters) {
            return characters.split("");
        }
    }
}