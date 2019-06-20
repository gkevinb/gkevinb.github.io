"use strict"

function shuffle (arra1) {
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
}

console.log($(window));

$( window ).on( "orientationchange", function( event ) {
    var height = $(window).height();
    var width = $(window).width();
    if (width > height) {
        // this.alert("orientation changed to portrait");
        // window.scroll(0, 700);
        // window.scroll(20,findPos(document.getElementById("business-card")));
    } else {
        // this.alert(document.getElementById('save-contact__button'));
        // window.scrollTo(0, document.body.scrollHeight);
        // window.scroll(0, 600)
        

    };
});
// console.log(document.getElementById('business-card'));

export { shuffle };