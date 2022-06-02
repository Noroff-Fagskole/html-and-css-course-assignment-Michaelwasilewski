const APIUrl = 'https://relieved-tortoise.flywheelsites.com/wp-json/wc/store/products';

const gamesContainer = document.querySelector('.games-container');

async function getGames() {
  try {
    const response = await fetch(APIUrl);
    const gameData = await response.json();
    console.log(gameData);
    gamesContainer.innerHTML = '';
    for (let i = 0; i < gameData.length; i++) {
      let gamePicture = gameData[i].images[0].src;
      let altText = gameData[i].images[0].alt;
      let gamePrice = gameData[i].prices.price;
      let currency = gameData[i].prices.currency_code;
      let gameName = gameData[i].name;
      gamesContainer.innerHTML += `
               <div class="game">
                 <div class="game-content">
                  <a href="gameinfo.html?id=${gameData[i].id}">
                   <img class="game-img" src="${gamePicture}" alt="${altText}">
                  </a>
                 <div>
                 <p>${gameName}</p>
                 <p>${gamePrice} ${currency}</p>
                 </div>
                 <div>
                 <a href="gameinfo.html?id=${gameData[i].id}">
                     <div class="btn-buy">Buy now</div>
                    </a>
                 </div>
                </div>
            </div>
            </div>`;
    }
  } catch (error) {
    console.log('There is error', error);
  }
}

getGames();
