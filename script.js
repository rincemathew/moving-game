// console.log()
// var blue1,blue2,blue3,green1,green2,green3;
// var color = [blue:{one:'', two:''}]
var colorBlue = {blue1: '', blue2: '', blue3: ''};
var colorGreen = {green1: '', green2: '', green3: ''};
// var countColor = 1;
var player = true;

// console.log(colorBlue)
console.log(Object.values(colorGreen))
//What happens when click the button
function buttonEvent(id) {
    
    if (colorGreen.green3 == '') {
        firstEvent(id);
    } else {
        console.log('dsdsd')
    }
    
}

//what happens when first three clicks on 2 players
function firstEvent(id) {
    if(player){
        document.getElementById(id).style.backgroundColor="#0066ff";
        // countColor++;
        player = !player
        for (var i=0; i < Object.values(colorBlue).length; i++) {
            if (Object.values(colorBlue)[i] == '') {
                // colorBlue.Object.keys
                var j = Object.keys(colorBlue)[i]
                colorBlue[j] = id
                console.log(j)
                break;
            }
        }
        gameOver();
    } else {
        document.getElementById(id).style.backgroundColor="#00cc00";
        // countColor++;
        player = !player
        for (var i=0; i < Object.values(colorGreen).length; i++) {
            if (Object.values(colorGreen)[i] == '') {
                var j = Object.keys(colorGreen)[i]
                colorGreen[j] = id
                console.log(j)
                break;
            }
        }
        gameOver();
    }
}

//check the game is finished or not
function gameOver() {
    console.log(colorBlue)
}


//reset the game
function reset() {
    window.location.reload();
    // player = true;
}