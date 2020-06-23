const body = document.body;

window.onload = () => {

    document.getElementById('searchBtn').onclick = displayResults;
    document.getElementById('query').value = '';

};

function displayResults() {
    const input = document.getElementById('query').value.trim().toLowerCase().replace(/\s+/g, ""),
        filterRegExp = new RegExp(input, 'g'),
        titles = document.getElementsByClassName('titles'),
        artist = document.getElementsByClassName('artist');

    for (let a = 0; a < Object.keys(titles).length; a++) {

        if (!filterRegExp.test(titles[a].childNodes[0].innerText.trim().toLowerCase().replace(/\s+/g, ""))) {

            titles[a].parentNode.style.display = 'none';

        }
        if (!filterRegExp.test(artist[a].childNodes[0].innerText.trim().toLowerCase().replace(/\s+/g, ""))) {

            artist[a].parentNode.style.display = 'none';

        }
        if (filterRegExp.test(titles[a].childNodes[0].innerText.trim().toLowerCase().replace(/\s+/g, ""))) {

            titles[a].parentNode.style.display = 'inline';

        }
        if (filterRegExp.test(artist[a].childNodes[0].innerText.trim().toLowerCase().replace(/\s+/g, ""))) {

            artist[a].parentNode.style.display = 'inline';

        }

    }

};