let btn = document.querySelector('#newquote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: '"To live is the rarest thing in the world. Most people exist, that is all."' ,
    person: 'Oscar Wilde'
}, {
    quote: '"That it will never come again is what makes life so sweet."' ,
    person: 'Emily Dickinson'
}, {
    quote: '"It is never too late to be what you might have been."' ,
    person: 'George Eliot'
}, {
    quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."' ,
    person: 'Ralph Waldo Emerson'
}, {
    quote: '"Pain is inevitable. Suffering is optional."' ,
    person: 'Haruki Murakami'
}, {
    quote: '"Be kind, for everyone you meet is fighting a hard battle."',
    person: 'Plato'
}, {
    quote: '"Amateurs sit and wait for inspiration, the rest of us just get up and go to work."',
    person: 'Stephen King'
}, {
    quote: '"You must be the change you wish to see in the world."',
    person: 'Mahatma Gandhi'
}, {
    quote: '"Spread love everywhere you go. Let no one ever come to you without leaving happier."',
    person: 'Mother Teresa'
}, {
    quote: '"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."',
    person: 'Martin Luther King Jr.'
}
];
btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});