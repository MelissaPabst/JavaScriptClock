const clock = document.querySelector('.clock span')

function updateClock() {
    // creating a new date object
    const now = new Date()

    // getting the current hour
    let hours = now.getHours()
    // getting the current minute
    let minutes = now.getMinutes()
    // getting the current second 
    let seconds = now.getSeconds()
    // getting the AM/PM 
    let am_pm = hours >= 12 ? 'PM' : 'AM'

    // converting 24 hours format to 12 hours
    if(hours > 12) hours -= 12

    // adding a zero in front of the times
    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds

    clock.innerHTML = `${hours}:${minutes}:${seconds} ${am_pm}`
}

updateClock()