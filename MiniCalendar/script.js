const monthName = document.getElementById('month-name')
const dayName = document.getElementById('day-name')
const dayNumber = document.getElementById('day-number')
const year = document.getElementById('year')

const date = new Date()

const month = date.getMonth()

monthName.innerText = date.toLocaleString('it',{
    month:"long"

})

dayName.innerText = date.toLocaleString('it',{
    weekday:"long"
    
})

dayNumber.innerText = date.getDate()
year.innerText = date.getFullYear()
console.log(date)