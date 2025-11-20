// Oefening 1: Tijdstip van laden

const now = new Date();
const currentTime = now.toLocaleTimeString();

const oef1 = document.getElementById('oef1');

const p = document.createElement('p');
p.textContent = `De pagina werd geladen om: ${currentTime}`;

oef1.appendChild(p);

// Oefening 2: Voetbal uitslagen 

const oef2 = document.getElementById('oef2');

function voetbal(ploegen, datum, aantalRodeKaarten) {
    const article = document.createElement('article');
    const rodeKaartClass = aantalRodeKaarten > 0 ? 'rodeKaart' : '';

    article.innerHTML = `
    <h3>${ploegen}</h3>
    <p>${datum}</p>
    <p class="${rodeKaartClass}">Rode kaarten: ${aantalRodeKaarten}</p>
  `;

    oef2.appendChild(article);
}
voetbal('Club Brugge - KAA Gent', '9/11/2025', 2);
voetbal('Standard - Anderlecht', '10/11/2025', 0);



// Oefening 3: Waterpolo uitslagen

const oef3 = document.getElementById('oef3');

const leuvenOostende = document.getElementById('Leuven-Oostende');
if (leuvenOostende) {
    leuvenOostende.remove();
}
const artikelen = oef3.getElementsByTagName('article');
for (let article of artikelen) {

    const pGoals = article.querySelector('p:nth-of-type(2)');
    if (pGoals) {
        pGoals.remove();
    }

    article.querySelector('h3').removeAttribute('style');
}


console.log("Voetbaluitslagen in div#oef2:", document.getElementById('oef2').innerHTML);


// Oefening 4: Getallenvierkant
const zijde = 10; // kan je later aanpassen om grotere of kleinere vierkanten te tekenen

// schrijf hieronder je code  

const oef4 = document.createElement('div');
document.body.appendChild(oef4);

function maakVierkant(z) {
    let html = '<table border="1" cellpadding="5">';
    let teller = 1;

    for (let i = 0; i < z; i++) {
        html += '<tr>';
        for (let j = 0; j < z; j++) {
            let klasse = '';
            if (teller % 2 === 0) klasse += 'veel2 ';
            if (teller % 3 === 0) klasse += 'veel3 ';
            if (teller % 5 === 0) klasse += 'veel5 ';
            html += `<td class="${klasse.trim()}">${teller}</td>`;
            teller++;
        }
        html += '</tr>';
    }

    html += '</table>';
    oef4.innerHTML = html;
}

const style = document.createElement('style');
style.textContent = `
  .veel2 { text-decoration: underline; }
  .veel3 { font-weight: bold; }
  .veel5 { color: red; }
`;
document.head.appendChild(style);

// Tabel maken
maakVierkant(zijde);
