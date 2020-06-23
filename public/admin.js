window.onload = () => {

    document.getElementById('newSong').onclick = createNewSong;

    for (const input of document.getElementsByTagName('input')) {

        input.value = '';

    }

};

function createNewSong() {

    const elements = document.getElementById('songCreate').childNodes,
        inputs = Array.from({ length: elements.length - 2 }, (a, b) => { if (elements[b + 1].nodeName.toLowerCase() == 'input') { return elements[b + 1]; } }),
        reqBody = {};

    inputs.forEach(input => {

        reqBody[input.id] = input.value;

    });

    const endpoint = `${window.location}post`,
        reqObj = {

            headers: {

                'Access-Control-Allow-Origin': '*',
                Accept: 'application/json',
                'content-type': 'application/json'

            },
            method: 'POST',
            body: JSON.stringify(reqBody)

        };

    // create fetch

};