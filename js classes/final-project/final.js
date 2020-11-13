const h1 = document.querySelector("h1");
const letters = h1.innerText.split('');
let html = "";

letters.forEach(letter => {
    if(letter !== ' ')
    html = html + `<span class='letter js=letter'>${letter}</span>`
})
h1.innerHTML = html