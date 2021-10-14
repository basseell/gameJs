//update score
const game = () => {
    let pScore=0;
    let cScore=0;
    const playBtn = document.querySelector('.intro button');

    //start game
    const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const match = document.querySelector('.match');

    playBtn.addEventListener('click',()=>{
        introScreen.classList.add("fadeOut");
        match.classList.add('fadeIn');
    });
};
//play match
const playMath =()=>{
    const options =document.querySelectorAll('.options button');
    const playerHand=document.querySelector('.player-hands');
    const computerHand=document.querySelector('.computer-hands');
    //computer options
    const computerOptins = ['rook','Papper','scissors'];

    options.forEach(option => {
        option.addEventListener('click',function(){
            //computer choice
            const computerNumber=Math.floor(Math.random()*3);
            const computerChoice=computerOptins[computerNumber];
            //here is where we call compare hands
            compareHands(this.textContent, computerChoice);
            //update img
            playerHand.src=`./img/${this.textContent}.png`;
            computerHand.src=`./img/${computerChoice}.png`;
        });
    });  
};
const updateScore=()=>{
    const playerScore = document.querySelector('.player-score p');
    const computerScore = document.querySelector('.computer-score p');
    playerScore.textContent=pScore;
    computerScore.textContent=cScore;
}

const compareHands = (playerChoice,computerChoice)=>{
    //update text
    const winner = document.querySelector('.winner');
    //checking for a tie
    if(playerChoice === computerChoice){
        winner.textContent = 'It is a draw';
        return;
    }
    //check for rook
    if(playerChoice === 'rook'){
        if(computerChoice === 'scissors'){
            winner.textContent='player Wins';
            pScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'computer wins';
            cScore++;
            updateScore();
            return;
        }
    }
    //check for Papper
    if(playerChoice === 'Papper'){
        if(computerChoice === 'scissors'){
            winner.textContent='computer Wins';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    //check for scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'rook'){
            winner.textContent='computer Wins';
            cScore++;
            updateScore();
            return;
        }else{
            winner.textContent = 'player wins';
            pScore++;
            updateScore();
            return;
        }
    }
    
}

// call game function
startGame();
playMath();
};

//start game function
game();