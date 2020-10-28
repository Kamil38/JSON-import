const uitvoer = document.getElementById('boeken');
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState == 4 && xhr.status == 200) {
        let resultaat = JSON.parse(xhr.responseText);
        console.log(resultaat);
    }
}
xhr.open('GET', 'boekenKamil.json', true);
xhr.send();

