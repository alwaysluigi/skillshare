const h1 = document.querySelector("h1");
const letters = h1.innerText.split('');
let html = "";

letters.forEach(e => {
    if(e !== ' ')
    html = html + `<span class='letter js-letter'>${e}</span>`
})
h1.innerHTML = html