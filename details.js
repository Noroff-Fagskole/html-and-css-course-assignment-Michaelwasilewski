const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get('id');

const APIUrl = `http://flowerpower.local/wp-json/wc/store/products/${id}`;

const gameName = document.querySelector('.game-name');
const gameDetails = document.querySelector('.game-details');

async function getGameDetails() {
  try {
    const response = await fetch(APIUrl);
    const singleGameDetail = await response.json();
    let gamePicture = singleGameDetail.images[0].src;
    let altText = singleGameDetail.images[0].alt;
    let gameOriginalPrice = singleGameDetail.prices.regular_price;
    let gamePrice = singleGameDetail.prices.price;
    let currency = singleGameDetail.prices.currency_code;
    let gameinfo = singleGameDetail.name;
    let gameDescription = singleGameDetail.description;
    gameName.innerHTML += ` 
    <div class="games">
    <div class="game-container">
        <div class="game-items">
            <div class="game">
                <div class="game-content">
                    <div class="game-img"><img src="${gamePicture}" alt="${altText}"></img></div>
                </div>
            </div>
            <div class="game-info">
                <div class="game-info-top">
                    <h1 class="game-name">${gameinfo}</h1>
                </div>
                <h3 class="sm-title">${gameDescription}</h3>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                </div>
                <div class="product-price">
                    <p class="original-price">Original Price<span>${gameOriginalPrice} ${currency}</span></p>
                    <p class="new-price">New Price:<span>${gamePrice}</span> ${currency}</p>
                </div>
                <div class="purchase-info">
          <input type="number" min="0" value="1">
          <a href="/checkout.html"><button type="button" class="add-cart">
            Add to Cart <i class="fas fa-shopping-cart"></i>
          </button></a>
          <a href="/checkout.html"><button type="button" class="add-cart">
            Buy Now
          </button></a>
        </div>
        <div class="social-links">
          <p>Find us at:</p>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-discord"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitch"></i>
          </a>
        </div>
            </div>
        </div>
    </div>
    </div>`;
  } catch (error) {
    console.log(error);
  }
}
getGameDetails();
