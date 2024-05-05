'use strict';
let secretNubmer= Math.trunc(Math.random()*20+1)

let score =20
let hightScore=0

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    document.querySelector('.number').textContent="?"
    document.querySelector('body').style.backgroundColor='#222'

    if(!guess){
        document.querySelector('.message').textContent='🛑 no number'
    }
    else if( guess === secretNubmer){
        document.querySelector('.number').textContent=secretNubmer
        document.querySelector('.message').textContent='🎉 correct number'
        document.querySelector('body').style.backgroundColor='#60b347'
        if(hightScore<score){
            hightScore=score
            document.querySelector('.highscore').textContent= hightScore
           
        }
        score=20
    }
    else if(guess > secretNubmer){
        if(score >1){
            document.querySelector('.message').textContent='📈 to hight!'
        score--
            document.querySelector('.score').textContent = score
        }
       else
        {
            document.querySelector('.message').textContent='you lose the game'
            document.querySelector('.score').textContent = 0

        }
      
    }
    else if(guess<secretNubmer){
        if(score >1){
            score--
            document.querySelector('.score').textContent = score
            document.querySelector('.message').textContent='📈 to Low!'
        }
        else{
            document.querySelector('.message').textContent='you lose the game'
            document.querySelector('.score').textContent = 0
        }
    }
   

})
document.querySelector('.again').addEventListener('click',function(){
    secretNubmer= Math.trunc(Math.random()*20+1)
    document.querySelector('.score').textContent = 20
    document.querySelector('.message').textContent='Start guessing...'
        document.querySelector('.highscore').textContent=0
        document.querySelector('body').style.backgroundColor='#222'
        score=20
        document.querySelector('.number').textContent=secretNubmer
        document.querySelector('.number').textContent="?"
        document.querySelector('.guess').value=''
        document.querySelector('.highscore').textContent= hightScore
})
