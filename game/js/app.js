const game = ()=> {
    
    let pScore = 0;
    let cScore = 0;


    // Starting the Game
    const startGame = () => {

        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    // Playing The Match

    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function() {
                this.style.animation = "";
            });
        });


        // Getting the computer options

        const computerOptions = ["rock", "paper", "scissors"];

        // function to get the options button
        options.forEach(option => {
            option.addEventListener("click", function () {

                // Computer Choices
                const computerNumber = Math.floor(Math.random() * 3 ); 
                const computerChoice = computerOptions[computerNumber];

                setTimeout( ()=> {
                                    // Compare hands function call
                    compareHands(this.textContent,computerChoice);


                    //Update the Image
                    playerHand.src = `../assets/${this.textContent}.png`;
                    computerHand.src = `../assets/${computerChoice}.png`;

                    // Adding Animations
                    }, 2000);
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    //Update fuction

    const updateGame = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent=cScore;
    };

    //Compare the result
    const compareHands = (playerChoice, computerChoice) => {
        //update the text
        const winner = document.querySelector(".winner");

        // A tie function
        if(playerChoice === computerChoice) {
            winner.textContent = "It's a tie";
            return;
        }

        // Check for rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins!";
                pScore ++;
                updateGame();
                return;
            }else{
                winner.textContent = "Computer wins!"
                cScore ++;
                updateGame();
                return;
            }
        }

        //Check for paper
        if (playerChoice === "paper") {
            if (computerChoice === "scissors") {
                winner.textContent = "Computer wins!";
                cScore ++;
                updateGame();
                return;
            }else{
                winner.textContent = "Player wins!"
                pScore ++;
                updateGame();
                return;
            }
        }

        //Check for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "rock") {
                winner.textContent = "Computer wins!";
                cScore ++;
                updateGame();
                return;
            }else{
                winner.textContent = "Player wins!"
                pScore ++;
                updateGame();
                return;
            }
        }
    };
        // Computer Choise





    // Running the Inner Function
    startGame();
    playMatch();
};
// Start the Global function
game();



