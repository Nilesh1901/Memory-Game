let usrSeq = [];
let gameSeq = [];
let scoreCount = 0;
let level = 0;
let start = false;
let h3 = document.querySelector('h3');
let higestScr = document.querySelector('h4');
let btns = ['red','yellow','blue','green']

document.addEventListener('keypress',function(){
    if(start == false){
        console.log('game start')
        start = true;

        leveUp();
    }

})

function leveUp(){
    usrSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
    let randIndx = Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(`gameSeq is ${gameSeq}`)
    gameFlash(randBtn);
    
}

function gameFlash(btn){
    btn.classList.add('gameflash')
    setTimeout(function(){
        btn.classList.remove('gameflash')
    },500)
}

let gameBtns = document.querySelectorAll('.box');
for(gameBtn of gameBtns){
    gameBtn.addEventListener('click', userPress)
}

function userPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute('id');
    usrSeq.push(userColor);
    // console.log(`userSeq is ${usrSeq}`);
    checkAns(usrSeq.length-1);
    
}

function userFlash(btn){
    btn.classList.add('userflash')
    setTimeout(function(){
        btn.classList.remove('userflash')
    },250)
}

function checkAns(idx){
    if(gameSeq[idx]== usrSeq[idx]){
        if(gameSeq.length == usrSeq.length){
            setTimeout(leveUp,1000)
        }
    } else{
        h3.innerHTML = `Oops Game Over! your score was <b>${level}</b> </br> press any key to start again`
        document.querySelector('body').style.backgroundColor = 'red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = 'white';
        }, 200)
        if(level > scoreCount){
            scoreCount = level;
        }
        higestScr.innerText = `Higest score ${scoreCount}`;
        reset();
    }
}

function reset(){
    start = false;
    level = 0;
    usrSeq = [];
    gameSeq = [];
}