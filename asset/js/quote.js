// ? Html Elements
var newQuoteBtn = document.getElementById("newQuote")
var QuoteEl = document.getElementById("Quote");
var autherQuoteEl = document.getElementById("autherQuote");
// ? App Variables
// ? Functions 
function newQuote() {
    var Quotes =[
        {   
            auther:"— CharlesR.Swindoll",
            quote:"“Life is 10% what happens to you and 90% how you react to it.”" 
        },
        {
            auther:"—WaltDisney" ,
            quote:"“All our dreams can come true if we have the courage to pursue them.” "
        },
        {
            auther:" — BenSweetland",
            quote:" “Success is a journey not a destination.”"
        },
        {
            auther:"— Nelson Mandela",
            quote:"“It always seems impossible until it's done.”"
        },
        {
            auther:"— MallikaTripathi",
            quote:"“Success only comes to those who dare to attempt.” "
        },
        {
            auther:"—NapoleonHill",
            quote:"“If you cannot do great things, do small things in a great way.”"
        },
        {
            auther:" — W.ClementStone",
            quote:"“Aim for the moon. If you miss, you may hit a star.”"
        },
        {
            auther:"–MeghanMarkle",
            quote:"“You are enough just as you are. ”"
        },
        {
            auther:"–AlbertEinstein",
            quote:"“Life is like riding a bicycle. To keep your balance, you must keep moving.” "
        },
        {
            auther:"– Mahatma Gandhi",
            quote:"“ You must be the change you wish to see in the world. ”"
        },
        {
            auther:"– ThomasCarlyle",
            quote:"“No pressure, no diamonds.” "
        },
        {
            auther:"– TheodoreRoosevelt",
            quote:"“ Believe you can and you’re halfway there.” "
        },
        {
            auther:"–GeorgeEliot”",
            quote:"“It is never too late to be what you might have been.” "
        },
        {
            auther:"– Chris Brady",
            quote:"“No guts, no story.” "
        },
        {
            auther:"– Tupac Shakur",
            quote:"“Our future is our confidence and self-esteem.” "
        },
        {
            auther:"– Jay-Z",
            quote:"“I’m not afraid of dying, I’m afraid of not trying.” "
        }
    ]
    var randomQuote= Math.trunc(Math.random()* Quotes.length);
    QuoteEl.innerHTML=Quotes[randomQuote]["quote"];
    autherQuoteEl.innerHTML=Quotes[randomQuote]["auther"];
}
newQuote()
// ? Events
newQuoteBtn.onclick =newQuote;