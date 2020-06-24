window.onload = () => {

    document.getElementById('newSong').onclick = createNewSong;
    document.getElementById('removeSong').onclick = deleteSong;
    document.getElementById('updateSong').onclick = songUpdate;

    for (const input of document.getElementsByTagName('input')) {

        input.value = '';

    }

};

function createNewSong() {

    const elements = document.getElementById('songCreate').childNodes,
        inputs = Array.from({ length: elements.length - 2 }, (a, b) => { if (elements[b + 1].nodeName.toLowerCase() == 'input') { return elements[b + 1]; } }),
        reqBody = {};

    inputs.forEach(input => {

        if (input.value != '') { reqBody[input.className] = input.value; }

    });

    if (Object.keys(reqBody).length != 7) { return alert('All fields are required') };

    const endpoint = `${window.location}/newSong`,
        reqObj = {

            headers: {

                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'content-type': 'application/json'

            },
            method: 'POST',
            body: JSON.stringify(reqBody)

        };

    fetch(endpoint, reqObj)
        .then(rs => { return rs.json(); })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); })

    inputs.forEach(input => {

        input.value = '';

    });

};

// update song function

function deleteSong() {

    const songID = document.getElementById('delSongID').value;
    songIdInput = document.getElementById('delSongID');

    if (songID == '') { return alert('Must enter a song ID'); };

    const endpoint = `${window.location}/deleteSong/${songID}`,
        reqObj = {

            method: 'DELETE'

        };

    fetch(endpoint, reqObj)
        .then(rs => { return rs.json(); })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); })

    songIdInput.value = '';

};

function songUpdate() {

    const songID = document.getElementById('upSongID').value,
        songIdInput = document.getElementById('upSongID');


    if (songID == '') { return alert("Must Enter a Valid Song ID"); };

    const elements = document.getElementById('songPatch').childNodes,
        inputs = Array.from({ length: elements.length - 3 }, (a, b) => { if (elements[b + 2].nodeName.toLowerCase() == 'input') { return elements[b + 2]; } }),
        reqBody = {};

    inputs.forEach(input => {

        if (input.value != '') { reqBody[input.className] = input.value; }

    });

    if (Object.keys(reqBody).length < 1) { return alert("Must include at least one field to update the song document"); };

    const endpoint = `${window.location}/updateSong/${songID}`,
        reqObj = {

            headers: {

                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'content-type': 'application/json'

            },

            method: 'PATCH',
            body: JSON.stringify(reqBody)

        };

    fetch(endpoint, reqObj)
        .then(rs => { return rs.json(); })
        .then(res => { console.log(res); })
        .catch(err => { console.log(err); })

    songIdInput.value = '';

    inputs.forEach(input => {

        input.value = '';

    });

};