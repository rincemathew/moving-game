// console.log()
var colorBlue = [];
var colorGreen = [];
var colorList = []
// var countColor = 1;
var player = true;

//What happens when click the button
function buttonEvent(id) {
    
    if (colorGreen.length < 3) {
        return colorList.includes(id) ? alert('you already clicked this'): firstEvent(id);
    } else {
        console.log('dsdsd')
    }
    
}

//what happens when first three clicks on 2 players
function firstEvent(id) {
    if(player){
        document.getElementById(id).style.backgroundColor="#0066ff";
        player = !player
        colorBlue.push(id)
        colorList.push(id)
        console.log(colorBlue)
        gameOver();
    } else {
        document.getElementById(id).style.backgroundColor="#00cc00";
        player = !player
        colorGreen.push(id)
        colorList.push(id)
        console.log(colorGreen)
        console.log(colorList)
        gameOver();
    }
}

//check the game is finished or not
function gameOver() {
    // console.log(colorBlue)
}


//reset the game
function reset() {
    window.location.reload();
    // player = true;
}