let btn = document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person = document.querySelector('.person');
const quotes =[{
    quote:`"The purpose of our lives is to be happy."`,
    person:`Dalai Lama`
},{
    quote:` "Life is what happens when you're busy making other plans." `,
    person:`John Lenon`
},{
    quote:`"Get busy living or get busy dying."`,
    person:`Stephen King`
},{
    quote:` "You only live once, but if you do it right, once is enough."`,
    person:`Mae West`
},];
btn.addEventListener('click',()=>{
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
})