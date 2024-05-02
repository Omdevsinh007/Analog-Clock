function rotate() {
    let hour = document.getElementById('hour');
    let minute = document.getElementById('minutes');
    let second = document.getElementById('seconds');
    let time = new Date();

    let secondRotate = `${time.getSeconds()*6}`;
    let minuteRotate = `${time.getMinutes()*6}`;
    let hourRotate = `${(time.getHours()*30)}`;

    if(secondRotate == 0) {
        second.style.transition = `none`;
    } else if(minuteRotate == 0) {
        minute.style.transition = `none`;
    } else if(hourRotate == 0) {
        hour.style.transition = `none`;
    } else {
        second.style.transition = `${1}s linear`;
        minute.style.transition = `${1}s linear`;
        hour.style.transition = `${1}s linear`;
    }

    second.style.rotate = `${secondRotate}deg`;
    minute.style.rotate = `${minuteRotate}deg`;
    hour.style.rotate = `${hourRotate}deg`;
}
setInterval(rotate,1000);