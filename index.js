$(document).keydown((event)=>{
    level =0
    startGame()
})

let arr = []
let colorName = ["wrong", "green", "red", "blue", "yellow"]
let currArr = []

function startGame(){
    arr=[]
    currArr=[]
    nextGame()
}


function nextGame(){
    arr.push(Math.floor((Math.random()*4)+1));
    $("#level-title").text("Level "+arr.length)
    blinkAndSound(arr[arr.length-1])
}
$(".green").click((event)=>{
    currArr.push(1)
    blinkAndSound(1)
    checkGame()
})
$(".red").click((event)=>{
    currArr.push(2)
    blinkAndSound(2)
    checkGame()
})
$(".blue").click((event)=>{
    currArr.push(3)
    blinkAndSound(3)
    checkGame()
})
$(".yellow").click((event)=>{
    currArr.push(4)
    blinkAndSound(4)
    checkGame()
})

function blinkAndSound(n){
    console.log("blink num "+ n+" "+colorName[n])
    let audio = new Audio(`./sounds/${colorName[n]}.mp3`);
    audio.play()
    $(`.${colorName[n]}`).addClass("pressed")
    setTimeout(()=>{
        $(`.${colorName[n]}`).removeClass("pressed")
    }, 100)
}

function checkGame(){
    console.log(arr)
    console.log(currArr);
    if(arr[currArr.length-1]!=currArr[currArr.length-1]){
        console.log("selection is not correct");
        win = false
        let audio = new Audio(`./sounds/wrong.mp3`);
        $("body").css("background-color", "red")
        setTimeout(()=>{
            $("body").css("background-color", "#011F3F")
        }, 200)
        audio.play()
        currArr = []
        $("#level-title").text("Game Over, Press Any Key to Restart")
    }
    else if(arr.length == currArr.length){
        currArr=[]
        console.log("selection is correct, going to next level"+ arr.length);
        nextGame()
    }
}
