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
            frontCardId: null
        }
    },
    created() {
        this.flipCardId = this.generateRandomId();
        this.frontCardId = this.generateRandomId();
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
        flipFlashcard: function(audio) {
            this.card.classList.toggle('is-flipped');
            if(audio != null){
                this.playAudio(audio);
            }
        },
        playAudio: function(audio) {
            var url = 'files/audio/' + audio + '.mp3';

            var sound = new Howl({
                src: [url]
            });
            
            sound.play();
        },
        writeStroke: function() {
            this.writer.animateCharacter();
        }
    }
}