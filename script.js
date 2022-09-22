// console.log()
var colorBlue = [];
var colorGreen = [];
var colorList = []
answerList = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3'],['A1','B1','C1'],['A2','B2','C2'],['A3','B3','C3'],['A1','B2','C3'],['C1','B2','A3']]
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
        gameOver(colorBlue);
    } else {
        document.getElementById(id).style.backgroundColor="#00cc00";
        player = !player
        colorGreen.push(id)
        colorList.push(id)
        gameOver(colorGreen);
    }
}

//check the game is finished or not
function gameOver(color) {
    for (var i=0; i<answerList.length; i++) {
        // console.log(answerList[i])
        console.log(player)
        if (answerList[i].every(item => color.includes(item))) {
            alert('game over')
        }
    }
}


//reset the game
function reset() {
    window.location.reload();
    // player = true;
}