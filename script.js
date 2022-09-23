// console.log()
var colorBlue = [];
var colorGreen = [];
var colorList = [];
answerList = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3'],['A1','B1','C1'],['A2','B2','C2'],['A3','B3','C3'],['A1','B2','C3'],['C1','B2','A3']]
// var countColor = 1;
const indexList = [['A1','A2','A3'],['B1','B2','B3'],['C1','C2','C3']]

var selectedItem = '';
var indexCheck = [];
var player = true;



//What happens when click the button
function buttonEvent(id) {
    if (colorGreen.length < 3) {
        return colorList.includes(id) ? alert('you already clicked this'): firstEvent(id);
    } else {
        if (!selectedItem) {

          if (player) {
            return colorBlue.includes(id) ? somefunction() : alert("click on valid blue item");
          } else {
            return colorGreen.includes(id) ? somefunction() : alert("click on valid Green item");
          }
          function somefunction() {
            selectedItem = id;
            document.getElementById(id).style.backgroundColor="#ff0000";
          }

        } else if (id == selectedItem) {
            if (player) {
                selectedItem = "";
                document.getElementById(id).style.backgroundColor = "#0066ff";
            }else {
                selectedItem = "";
                document.getElementById(id).style.backgroundColor = "#00cc00";
            }

        } else {
            moveItem(id);
        }
    }
}

//take index of moving item & validate it goes to empty space and next element
function moveItem(id) {
    indexList.forEach((item, index) => {
        if (item.indexOf(id) != '-1') {
            var indexItem = item.indexOf(id)
            checkEmptyElt(index, indexItem, id)
        }
    })
    function checkEmptyElt(indexId, indexItem, id) {
        if(id == 'B2') {
            for (var j=indexId-1; j <= indexId+1; j++) {
                if (indexList[j] != undefined) {
                  for (var i = indexItem - 1; i <= indexItem + 1; i++) {
                    indexCheck.push(indexList[j][i]);
                  }
                }
            }
        } else {
            for (var j=indexId-1; j <= indexId+1; j++) {
                if (indexList[j] != undefined) {indexCheck.push(indexList[j][indexItem]);}
            }
            for (var i = indexItem - 1; i <= indexItem + 1; i++) {
                indexCheck.push(indexList[indexId][i]);
            }
        }
    }
    if (indexCheck.includes(selectedItem) && !colorList.includes(id)) {
        if(player) {
            document.getElementById(id).style.backgroundColor="#0066ff";
            colorBlue = colorBlue.filter((item)=> {
                return item != selectedItem
            })
            colorBlue.push(id)
            setTimeout(gameOver,50,colorBlue)
        } else {
            document.getElementById(id).style.backgroundColor="#00cc00";
            colorGreen = colorGreen.filter((item)=> {
                return item != selectedItem
            })
            colorGreen.push(id)
            setTimeout(gameOver,50,colorGreen)
        }
        colorList = colorList.filter((item)=> {
            return item != selectedItem
        })
        colorList.push(id)
        player = !player
        indexCheck = [];
        document.getElementById(selectedItem).style.backgroundColor="#fff";
        selectedItem = '';
    } else {
        alert('this is not a nearest empty position')
    }
}

//what happens when first three clicks on 2 players
function firstEvent(id) {
    if(player){
        document.getElementById(id).style.backgroundColor="#0066ff";
        player = !player
        colorBlue.push(id)
        colorList.push(id)
        setTimeout(gameOver,50,colorBlue)
    } else {
        document.getElementById(id).style.backgroundColor="#00cc00";
        player = !player
        colorGreen.push(id)
        colorList.push(id)
        setTimeout(gameOver,50,colorGreen)
    }
}

//check the game is finished or not
function gameOver(color) {
    for (var i=0; i<answerList.length; i++) {
        if (answerList[i].every(item => color.includes(item))) {
            if (player) {
                if(!alert('Team Green wins')){window.location.reload();}
            } else {
                if(!alert('Team Blue wins')){window.location.reload();}
            }
            // return player? alert('Team Green wins'): alert('Team Blue wins')
        }
    }
}


//reset the game
function reset() {
    window.location.reload();
    // player = true;
}
