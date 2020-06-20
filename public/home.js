const body = document.body;

//? Unable to get the filter working as of now

// window.onload = () => {

//     document.getElementById('searchBtn').onclick = displayResults.bind(this, document.getElementById('query').value.trim().toLowerCase().replace(/\s+/g, ""));

// };

// function displayResults(inputStr) {

//     const filterRegExp = new RegExp(inputStr, 'g'),
//         allData = [],
//         found = [];

//     const titles = document.getElementsByClassName('titles');
//     const artists = document.getElementsByClassName('artists');

//     for (let a = 0; a < Object.keys(titles).length; a++) {

//         allData.push(titles[a].childNodes[0].text.toLowerCase().replace(/\s+/g, ""));
//         if (!allData.includes(artists[a].childNodes[0].text.toLowerCase().replace(/\s+/g, ""))) { allData.push(artists[a].childNodes[0].text.toLowerCase().replace(/\s+/g, "")); };

//     };

//     for (let a = 0; a < allData.length; a++) {

//         if (filterRegExp.test(allData[a])) {

//             found.push(allData[a]);

//         }

//     }

//     found.forEach(elm => {

//         const tags = document.getElementsByTagName('td');

//         for (let a = 0; a < Object.keys(tags).length; a++) {

//             if (tags[a].childNodes[0].text != undefined) {

//                 if (tags[a].childNodes[0].text.toLowerCase().replace(/\s+/g, "") != elm) {

//                     let tr = tags[a].parentElement;

//                     tr.style.display = 'none';

//                 } else {

//                     let tr = tags[a].parentElement;

//                     tr.style.display = 'initial';

//                 }

//             }

//         }

//     });

// };