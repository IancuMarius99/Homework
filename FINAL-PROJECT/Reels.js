let q1 = 'Never give in, never give in, never, never, never, never—in nothing, great or small, large or petty—never give in except to convictions of honour and good sense. - by Sir. Winston Churchill';
let q2 = 'If you want to be happy, be... - by Lev Tolstoi';
let q3 = 'I love not Man the less, but Nature more - by Lord Byron';
let q4 = 'One of the penalties for refusing to participate in politics is that you end up being governed by your inferiors. - by Plato';
let q5 = "'If voting changed anything, they'd make it illegal. - by Emma Goldman";
const quotes = [q1, q2, q3, q4, q5];

let f1 = 'The Office US';
let f2 = 'Brookyn 99';
let f3 = 'Homeland';
let f4 = 'The Crown';
let f5 = 'Shetland';
const films = [f1, f2, f3, f4, f5];

function quotesFunction() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById('quote-display').innerHTML = randomQuote;
};

function filmsFunction() {
    const randomFilm = films[Math.floor(Math.random() * films.length)];
    document.getElementById('film-display').innerHTML = randomFilm;
}; 