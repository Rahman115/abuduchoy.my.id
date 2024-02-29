async function getUsers() {
    try {
        const response = await fetch(
            './js/artikel.json',
            {
                method: 'GET',
            },
        );

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}

getUsers().then(data => {
    // console.log(data);

    const preElement = document.getElementById('json-data');

    preElement.style.fontSize = '18px';

    preElement.innerHTML = JSON.stringify(data, null, 2);
});
