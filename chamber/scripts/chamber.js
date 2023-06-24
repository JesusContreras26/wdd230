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


