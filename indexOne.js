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
    quote:`"I love you homie!"`,
    person:`Rikesh Shrestha`
},{
    quote:`"Nothing can bring you peace but yourself."`,
    person:`Ralph Waldo Emerson`
},{
    quote:`"Sometimes you have to stand alone just to make sure you still can."`,
    person:`Anonymous`
},{
    quote:`"I never dreamed about success. I worked for it."`,
    person:`Estée Lauder`
},{
    quote:`"Don't let yesterday take up too much of today."`,
    person:`Will Rogers`
},
{
    quote:` "You only live once, but if you do it right, once is enough."`,
    person:`Mae West`
},
{
    quote:` "My opponent is my teacher. My ego is my enemy."`,
    person:`Rikeshman`
},
{
    quote:` "Learning is a gift, even when pain is your teacher."`,
    person:`Unknown`
},
{
quote:`"I am a fighting machine with a will of iron"`,
person: `Jurgen Klopp`
},
{
    quote:`"The best way to find yourself is to lose yourself in the service of others."`,
    person: `Mahatma Gandhi`
    },
    
];
btn.addEventListener('click',()=>{
    let random =Math.floor(Math.random()*quotes.length);
    quote.innerText =quotes[random].quote;
    person.innerText =quotes[random].person;
})