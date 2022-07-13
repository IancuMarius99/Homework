var possibleOutcomes = ['Rock', 'Paper', 'Scissors'];
            var randomItemComputer;
            var randomItemPlayer;
            var toggle = false;
            var playerScore = 0;
            var computerScore = 0;
            
            document.getElementById('player-rock').addEventListener('click', function onClick(event) {
                randomItemPlayer = 'Rock';
                this.setAttribute('class', 'active');
                document.getElementById('player-scissors').removeAttribute('class', 'active');
                document.getElementById('player-paper').removeAttribute('class', 'active');
                document.getElementById('current-choice-player').innerHTML = 'You chose: <strong>Rock</strong>';
                toggle = true;

            });
            document.getElementById('player-paper').addEventListener('click', function onClick(event) {
                randomItemPlayer = 'Paper';
                this.setAttribute('class', 'active');
                document.getElementById('player-scissors').removeAttribute('class', 'active');
                document.getElementById('player-rock').removeAttribute('class', 'active');
                document.getElementById('current-choice-player').innerHTML = 'You chose: <strong>Paper</strong>';
                toggle = true;
            });
            document.getElementById('player-scissors').addEventListener('click', function onClick(event) {
                randomItemPlayer = 'Scissors';
                this.setAttribute('class', 'active');
                document.getElementById('player-paper').removeAttribute('class', 'active');
                document.getElementById('player-rock').removeAttribute('class', 'active');
                document.getElementById('current-choice-player').innerHTML = 'You chose: <strong>Scissors</strong>';
                toggle = true;
            });

            document.getElementById('play-button').addEventListener('click', function onClick(event) {
                if (toggle == true) {
                    var randomItemComputer = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
                    document.getElementById('current-choice-computer').innerHTML = 'Computer chose: ' + randomItemComputer;
                }
                else {
                    alert('You Must Chose an Option to Play!');
                };
                
                if (randomItemComputer === 'Rock' && randomItemPlayer === 'Paper') {
                    playerScore++
                    console.log('Player Win');
                    document.getElementById('round-result').innerHTML = 'Player Win';
                }
                else if (randomItemComputer === 'Paper' && randomItemPlayer === 'Rock') {
                    computerScore++
                    console.log('Computer Win');
                    document.getElementById('round-result').innerHTML = 'Computer Win';
                }
                else if (randomItemComputer === 'Paper' && randomItemPlayer === 'Scissors') {
                    playerScore++
                    console.log('Player Win');
                    document.getElementById('round-result').innerHTML = 'Player Win';
                }
                else if (randomItemComputer === 'Scissors' && randomItemPlayer === 'Paper') {
                    computerScore++
                    console.log('Computer Win');
                    document.getElementById('round-result').innerHTML = 'Computer Win';
                }
                else if (randomItemComputer === 'Scissors' && randomItemPlayer === 'Rock') {
                    playerScore++
                    console.log('Player Win');
                    document.getElementById('round-result').innerHTML = 'Player Win';
                }
                else if (randomItemComputer === 'Rock' && randomItemPlayer === 'Scissors') {
                    computerScore++
                    console.log('Computer Win');
                    document.getElementById('round-result').innerHTML = 'Computer Win';
                }
                else {
                    document.getElementById('round-result').innerHTML = 'Draw';
                }
                document.getElementById('score-player').innerHTML = 'Player: ' + (playerScore);
                document.getElementById('score-computer').innerHTML ='Computer: ' + (computerScore); 
                
                if(playerScore > computerScore) {
                    document.getElementById('score-player').style.color = 'blue';
                    document.getElementById('score-computer').style.color = 'red';

                }
                if(playerScore < computerScore) {
                    document.getElementById('score-player').style.color = 'red';
                    document.getElementById('score-computer').style.color = 'blue';
                }
                else if (playerScore === computerScore) {
                    document.getElementById('score-player').style.color = 'green';
                    document.getElementById('score-computer').style.color = 'green';
                } 
            })
           