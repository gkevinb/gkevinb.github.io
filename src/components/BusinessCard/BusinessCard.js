import { shuffle } from "../../assets/js/algorithms.js"

export default {
    name: "business-card-tab",
    props: {
        input: Object
    },
    data() {
        return {
            fullName: "GABOR KEVIN BARTA",
            position: "Fullstack Developer",
            codeSymbol: "</>",
            card: null,
            flipping: null,
            chosenBrands: null,
            numberOfBrandsToDisplay: 5,
        }
    },
    mounted() {
        this.card = document.getElementById("business-card");
        this.chooseBrands();
    },
    methods: {
        flipFlashcard: function () {
            /*
                Checks if classList is not empty, because when it is not empty, it means the card is
                flipped to the backside. And that is when the new brands are selected to be displayed
                on the frontside of the card. Intervals are need to not change brands on double tap
                on frontside of the card.
            */
            if (this.card.classList.length != 0) {
                clearInterval(this.flipping);
            }else{
                this.flipping = setInterval(this.chooseBrands, 400);
            }
            this.card.classList.toggle('is-flipped');
        },
        brandStyling: function (code) {
            return 'brand-logo ' + code;
        },
        contactIconStyling: function (code) {
            return 'contact-icon ' + code;
        },
        chooseBrands: function () {
            this.chosenBrands = shuffle(this.input.brands).slice(0, this.numberOfBrandsToDisplay);
        }
    }
}