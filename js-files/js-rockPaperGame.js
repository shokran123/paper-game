const count = JSON.parse(localStorage.getItem('countSaved'));
      let computerMove = '';
      updateScore();
      function resetScore(){
        count.win = 0;
        count.lose = 0;
        count.tie = 0;
        console.log('reseted')
        updateScore();
      }
      let result = ''
      function playGame(playerMove) {
        pickComputerMove();
        if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'win';
          }else if (computerMove === 'scissors') {
            result = 'lose';
          }else if (computerMove === 'paper') {
            result = 'tie';
          }
        }
        else if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'lose';
          }else if (computerMove === 'scissors') {
            result = 'tie';
          }else if (computerMove === 'paper') {
            result = 'win';
          }
        }
        else if(playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'tie';
          }else if (computerMove === 'scissors') {
            result = 'win';
          }else if (computerMove === 'paper') {
            result = 'lose';
          }
        }
        if(result === 'tie'){
          count.tie ++;
        }
        else if(result === 'lose'){
          count.lose ++;
        }
        else if (result === 'win') {
          count.win ++;
        }
        localStorage.setItem('countSaved', JSON.stringify(count));
        console.log(result);
        updateScore();
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-moves').innerHTML = `You 
          <img src="images/${playerMove}-emoji.png" class="move-img">
          <img src="images/${computerMove}-emoji.png" class="move-img">
          Computer`;
      }
      function pickComputerMove () {
        const randomNumber = Math.random()
        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }
      }
      function updateScore(){
        document.querySelector('.js-score').innerHTML = `wins: ${count.win}, loses: ${count.lose}, ties: ${count.tie}`
      }