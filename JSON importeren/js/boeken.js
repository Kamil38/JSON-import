const uitvoer = document.getElementById('boeken');
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let resultaat = JSON.parse(xhr.responseText);
        boeken.data = resultaat
        boeken.uitvoeren();
    }
}
xhr.open('GET', 'boekenKamil.json', true);
xhr.send();

const boeken = {

    //er wordt hier een eigenschap data aangemaakt (regel 7)
    uitvoeren() {
        let html = "";
        this.data.forEach( boek => {
            html += `<h3>${boek.titel}</h3>`
        });
        uitvoer.innerHTML = html
    }
}

