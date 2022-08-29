
const loadCountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    const countryContainer = document.getElementById('countries-container');
    // for (const country of countries) {
    //     console.log(country);
    // }
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        console.log(country);
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common} </h3>
        <p> Status: ${country.status}</p>
        <p>Capital: ${country.capital ? country.capital[0] : 'no Capital'}</p>
        <button onclick="loadCountryDetail('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(countryDiv);
    })
}
const loadCountryDetail = (code) => {

    // https://restcountries.com/v2/alpha/{code}

    const url = `https://restcountries.com/v2/alpha/${code}`

    // console.log('get details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))

}
loadCountry();



