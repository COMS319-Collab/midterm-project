// Astronomy Picture of the Day

const fetchApod = async () => {
    // Normally, I wouldn't hardcode an API key, but for the sake of you being able to run locally I have to.
    const url = `https://api.nasa.gov/planetary/apod?api_key=lj0zYFMC7YrzbbHPcDFsTd0WUspXyr1rQlvBDR6v&count=1`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

addEventListener('DOMContentLoaded', async (event) => {
    // Wait for the DOM to be loaded, then fetch the APOD response.
    event.preventDefault();

    const apod = await fetchApod();
    console.log(apod);
    const apodContainer = document.getElementById('apod');
    apodContainer.innerHTML = `
        <h2>${apod[0].title}</h2>
        <img src="${apod[0].url}" alt="${apod[0].title}" />
        <p>${apod[0].explanation}</p>
    `;
});