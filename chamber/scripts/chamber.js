todaysDate = new Date(document.lastModified);
dayName = todaysDate.getDate();
monthName = todaysDate.getMonth() + 1;
year = todaysDate.getFullYear();
time = todaysDate.toLocaleTimeString('it-IT');
document.querySelector('#year').textContent = `${year} Barinas Chamber`;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;


const hamButton = document.querySelector('#displayMenu');
const navigation = document.querySelector('.menu');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

spotlightTitles = document.querySelectorAll('.spotlightTitles');

spotlights = [`<h4>The best products for your constructions</h4>
			   <a href="">hello@saforti.com</a>
			   <a href="">+111-1111-1111</a>
			   <a href="">Website</a>`,

			   `<h4>The best products for your daily diet</h4>
			   <a href="">contact@garzon.com</a>
			   <a href="">+555-5555-5555</a>
			   <a href="">Website</a>`,

			   `<h4>You will have an unforgettable night</h4>
			   <a href="">build@eurobuilding.com</a>
			   <a href="">+888-8888-8888</a>
			   <a href="">Website</a>`

			];

let control = true;

spotlightTitles[0].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').textContent = '';
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		document.querySelector('#spotlightOne').classList.toggle('spotlightP');
		document.querySelector('#spotlightOne').innerHTML = `<h4>The best products for your constructions</h4>
															 <a href="">hello@saforti.com</a>
															 <a href="">+111-1111-1111</a>
															 <a href="">Website</a>`;
		control = false;
	}else{
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		control = true;
	}

})

spotlightTitles[1].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').innerHTML = ''
		document.querySelector('#spotlightTwo').classList.toggle('spotlightP');
		document.querySelector('#spotlightTwo').innerHTML =`<h4>The best products for your daily diet</h4>
															<a href="">contact@garzon.com</a>
															<a href="">+555-5555-5555</a>
															<a href="">Website</a>`;
		control = false;
	}else{
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		control = true;
	}

})

spotlightTitles[2].addEventListener('click', ()=>{
	if(control === true){
		document.querySelector('#spotlightOne').classList.remove('spotlightP')
		document.querySelector('#spotlightOne').textContent = '';
		document.querySelector('#spotlightTwo').classList.remove('spotlightP')
		document.querySelector('#spotlightTwo').textContent = '';
		document.querySelector('#spotlightThree').classList.toggle('spotlightP');
		document.querySelector('#spotlightThree').innerHTML =`<h4>You will have an unforgettable night</h4>
															<a href="">build@eurobuilding.com</a>
															<a href="">+888-8888-8888</a>
															<a href="">Website</a>`;
		control = false;
	}else{
		document.querySelector('#spotlightThree').classList.remove('spotlightP')
		document.querySelector('#spotlightThree').textContent = '';
		control = true;
	}

})


/***********************WeatherToday*********************/

const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon-today');
const captionDesc = document.querySelector('#todayCaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=30368f78cca2b27d0603441e7cc15f73';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }

}


function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', imgSrc);
    weatherIcon.setAttribute('alt', 'weatherIcon');
    captionDesc.textContent = desc;
}

apiFetch();

/************************ForecastWeather********************/
const forecastTemp = document.querySelector('#forecast-temp');
const forecastIcon = document.querySelector('#weather-icon-forecast');
const forecastCaption = document.querySelector('#forecastCaption');

const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=49.75&lon=6.64&units=imperial&appid=30368f78cca2b27d0603441e7cc15f73';

async function apiFetchForecast(){
	try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
			displayResultsFore(data);
        }else{
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResultsFore(data){
    forecastTemp.innerHTML = `${data.list[16].main.temp}&deg;F`
    const imgSrc = ` https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`
    let desc = data.list[16].weather[0].description;

    forecastIcon.setAttribute('src', imgSrc);
    forecastIcon.setAttribute('alt', 'weatherIcon');
    forecastCaption.textContent = desc;
}


apiFetchForecast();