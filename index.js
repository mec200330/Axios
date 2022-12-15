

const getCountyInfo = countryName => {
    axios
    .get( `https://restcountries.com/v3.1/name/${countryName}`)
    .then(response => {
       const countryDetails = response.data

    
        const nameBox = document.querySelector('#nameCountry')
        const contryFlag = document.querySelector('#countryFlag')
        
        for(let i=0; i<countryDetails.length; i++ ){
           
            let pais = document.createElement('h1')
            let capital = document.createElement('h2')
            let flag = document.createElement('img')
            let fronteras = document.createElement('ul')
            let abreviatura = document.createElement('h1')
            
            document.querySelector('body').appendChild(pais)
            document.querySelector('body').appendChild(capital)
            document.querySelector('body').appendChild(flag)
            document.querySelector('body').appendChild(fronteras)
            document.querySelector('body').appendChild(abreviatura)
            
           pais.innerText = `Country: ${countryDetails[i].name.common}`
           capital.innerText = `Capital: ${countryDetails[i].capital}`
           flag.setAttribute('src', countryDetails[i].flags.png)
           abreviatura.innerText=`Abbreviation: ${countryDetails[i].cca3}`
           fronteras.innerText = `Borders: ${countryDetails[i].borders}`
        }
        console.log(response);
        
    }) 
}

const btnContry = document.querySelector('#countryBtn')

btnContry.addEventListener('click', () =>{

    const userInfo = document.querySelector('#countryIn').value 
    getCountyInfo(userInfo)
})