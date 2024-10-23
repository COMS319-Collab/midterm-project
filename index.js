function fetchData() {

    console.log("Begin Fetch >>>")

    fetch('./planets.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        for(let i = 0; i < data.length; i++) {
            console.log(data[i]);
            appendData(data[i]);
        }

    })
    .catch(function (err) {
        console.log('Error:' + err);
    });

    console.log("End Fetch");
}

function appendData(data) {
    
    let mainContainer = document.getElementById("planets");
    let div = document.createElement("div");

    div.classList.add("col-lg-4");
    div.innerHTML = `
        <img src="${data.photo}" alt="${data.name}" width="140" height="140">
        <h2 class="fw-normal">${data.name}</h2>
        <p>${data.description}</p>
    `;

    mainContainer.appendChild(div);
}

fetchData();