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
        <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>${data.name}</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"/><image src="${data.photo}" /></svg>
              <h2 class="fw-normal">${data.name}</h2>
              <p>${data.description}</p>
    `;

    mainContainer.appendChild(div);
}

fetchData();