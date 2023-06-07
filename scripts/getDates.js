todaysDate = new Date(document.lastModified)
dayName = todaysDate.getDay();
if(dayName === 0){
    dayName += 1;
}

monthName = todaysDate.getMonth() + 1;
year = todaysDate.getFullYear();
time = todaysDate.toLocaleTimeString('it-IT');
console.log(time);
document.querySelector('#year').textContent = year;
document.querySelector('#lastModified').textContent = `Last Modification: ${dayName}/${monthName}/${year} ${time}`;