async function getName() {
    try {
        const character = document.getElementById("character").value;
        const url = "https://api.disneyapi.dev/character?name="+character;
        const headers = new Headers();
        headers.append("Accept", "application/json");

        const response = await fetch(url, { headers:headers });

        const json = await response.json();
        console.log(JSON.stringify(json));

        
        // character = json.results;

        const nameHolder = document.getElementById("characterHolder")

        let img = document.createElement('img');
        img.src = json.data[1].imageUrl;
        img.width = 100;
        nameHolder.appendChild(img)

    }

    catch (error) {
        console.log(error);
    }
}