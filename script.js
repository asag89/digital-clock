
setInterval(() => {
    const time = document.getElementById("time")

    const date = new Date()

    let hours = date.getHours().toString()
    if (hours.length < 2) {
        hours = `0${hours}`
    }

    let minutes = date.getMinutes().toString()
    if (minutes.length < 2) {
        minutes = `0${minutes}`
    }

    let seconds = date.getSeconds().toString()
    if (seconds.length < 2) {
        seconds = `0${seconds}`
    }

    const part = hours < 12 ? "AM" : "PM"

    time.innerHTML = `${hours}:${minutes}:${seconds} ${part}`

}, 1000)