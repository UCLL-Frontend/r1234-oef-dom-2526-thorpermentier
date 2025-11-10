Je krijgt voor deze opgave de HTML, de CSS en de startregel van het student.js bestand. Je schrijft code in student.js.

# 1. Huidige tijdstip
In index.html vind je div#oef1. Gebruik JS om in die div een paragraaf aan te maken 
die aangeeft om hoe laat de pagina geladen werd. 
Gebruik volgende code om het huidige tijdstip te bepalen en te tonen in JS (zie ook [de documentatie](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date))
```
const now = new Date();
const currentTime = now.toLocaleTimeString();
```

# 2. Voetbal uitslagen 
In index.html vind je div#oef2. 
- Schrijf JS code zodat deze HTML toegevoegd wordt aan de div:
```
    <article>
      <h3>Cercle Brugge - OH Leuven</h3>
      <p>8/11/2025</p>
      <p>Rode kaarten: 0</p>
    </article>
```
- Maak nu een functie voetbal(ploegen, datum, aantalRodeKaarten) die dezelfde HTML toevoegt aan de div, maar nu met de parameters van de functie als ploeg, datum en aantal rode kaarten. Gebruik de functie om 2 extra voetbal uitslagen te tonen op het scherm.
- Pas de functie aan zodat de laatste paragraaf rood wordt weergegeven als er minstens één rode kaart is. Gebruik de CSS klasse .rodeKaart hiervoor.

# 3. Vierkant met getallen
 Schrijf code die een vierkant met de gegeven zijde maakt met opeenvolgende getallen, startend met 1. Dit moet het ongeveer worden:
![screenshot vierkant](img/screenshotVierkant.png)

Het ligt voor de hand om dit vierkant te maken via een HTML-tabel. Bekijk zeker even hoe je een tabel maakt in HTML. De elementen die je nodig hebt zijn table, tr en td. 

Bestudeer de CSS goed. Veelvouden van 2, 3 en 5 worden via een class anders getoond (vet, onderlijnd of in het rood).

Tips:
- Werk met functions (klassiek of vette pijl maakt niet uit)
- Deel het probleem op in deelproblemen: een tabel bestaat uit rijen, een rij bestaat uit aparte cellen …
- De variabele bovenaan student.js geeft de zijde van het vierkant. Als je die waarde wijzigt, wijzigt ook het formaat van het vierkant.
