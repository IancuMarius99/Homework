let q1 = 'Lorem Ipsum1';
let q2 = 'Lorem Ipsum2';
let q3 = 'Lorem Ipsum3';
let q4 = 'Lorem Ipsum4';
let q5 = 'Lorem Ipsum5';
const quotes = [q1, q2, q3, q4, q5];

function quotesFunction() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-display').innerHTML = randomQuote;
};

let films = [];
films.push('https://www.google.com/search?q=homeland+poster&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjAwrKAsuL5AhVt57sIHRB2CNoQ_AUoAXoECAEQDg&biw=1920&bih=961#imgrc=tyNcaGdLp6UqpM');
films.push('https://www.google.com/search?q=the+office+poster&oq=the+office+poster&aqs=chrome.0.0i512l8j46i512j0i512.7989j0j9&sourceid=chrome&ie=UTF-8#imgrc=962xdaJOkM51WM');

function filmsFunction() {
    const randomFilm = films[Math.floor(Math.random() * films.length)];
    document.getElementById('film-display').innerHTML = randomFilm;
}; 