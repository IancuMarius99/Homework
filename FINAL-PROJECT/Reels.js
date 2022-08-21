let q1 = 'Lorem Ipsum1';
let q2 = 'Lorem Ipsum2';
let q3 = 'Lorem Ipsum3';
let q4 = 'Lorem Ipsum4';
let q5 = 'Lorem Ipsum5';
const quotes = [q1, q2, q3, q4, q5];

function quotesFunction () {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]; 
    document.getElementById('quote-display').innerHTML= randomQuote;  
    }; 
    

const films = [
    
]