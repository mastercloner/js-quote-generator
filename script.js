let btn = document.getElementById('btn');
let quote = document.getElementById('quote');
let author = document.getElementById('author');
const apiUrl = "https://api.quotable.io/random";

async function getQuote(){
    try{
        quote.innerText = "updating...";
        author.innerText = "updating";
        btn.disabled = true;
        const response = await fetch(apiUrl);
        const data = await response.json();
        quote.innerText = data.content;
        author.innerText = "~" + data.author;
        btn.disabled = false;
    }
    catch{
        quote.innerText = "Error try again";
        author.innerText = "Error try again";
    }
    
}
btn.addEventListener('click', getQuote);