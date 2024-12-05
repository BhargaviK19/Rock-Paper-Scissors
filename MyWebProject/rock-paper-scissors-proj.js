let scores = JSON.parse(localStorage.getItem('scores'));
    if (scores === null) {
        scores = {
            wins : 0,
            losses : 0,
            Ties: 0

        };
    }
    
    updateScoreElement();


    function playGame(playerMove) {
      const compMove = computerChoice(); // Get computer's move

      let result = '';

      // Determine the result
      if (playerMove === compMove) {
        result = 'It\'s a Tie!';
      } else if (
        (playerMove === 'rock' && compMove === 'scissors') ||
        (playerMove === 'paper' && compMove === 'rock') ||
        (playerMove === 'scissors' && compMove === 'paper')
      ) {
        result = 'You Win!';
      } else {
        result = 'You Lose!';
      }

      if (result === 'You Win!') {
        scores.wins += 1;
      } else if (result === 'You Lose!') {
        scores.losses += 1;
      } else if (result === 'It\'s a Tie!') {
        scores.Ties += 1;
      }

      
      localStorage.setItem('scores', JSON.stringify(scores));
      updateScoreElement();


      document.querySelector('.js-result')
      .innerHTML = result;

      document.querySelector('.js-moves')
      .innerHTML = `Your move <img src="${playerMove}-emoji.png" class="move-icon"> <img src="${compMove}-emoji.png" class="move-icon">
      Computer move</p>`;
      
    }



    function updateScoreElement() {
        document.querySelector('.js-scores')
        .innerHTML = `Wins: ${scores.wins} Losses: ${scores.losses} Ties: ${scores.Ties}`;

    }

    function computerChoice() {
      const randomNum = Math.random();
      if (randomNum < 1 / 3) {
        return 'rock';
      } else if (randomNum < 2 / 3) {
        return 'paper';
      } else {
        return 'scissors';
      }
    }