// console.log()
// var blue1,blue2,blue3,green1,green2,green3;
var colorBlue = {blue1: '', blue2: '', blue3: ''};
var colorGreen = {green1: '', green2: '', green3: ''}
var countColor = 1;
var player = true;



//What happens when click the button
function buttonEvent(id) {

    if (countColor < 7) {
        firstEvent(id);
    }
    
}

//what happens when first three clicks on 2 players
function firstEvent(id) {
    if(player){
        document.getElementById(id).style.backgroundColor="#0066ff";
        countColor++;
        player = !player
    } else {
        document.getElementById(id).style.backgroundColor="#00cc00";
        countColor++;
        player = !player
    }
}


//reset the game
function reset() {
    window.location.reload();
    // player = true;
}