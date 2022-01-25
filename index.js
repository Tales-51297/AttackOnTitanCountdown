


const metrics = document.querySelectorAll(".block h4");

// set deadline

const futureDate = new Date(2022,0,31,0,0);

const year = new Date().getFullYear();
const month = new Date().getMonth();
const date = new Date().getDate()
const day = new Date().getDay();



const deadline = futureDate.getTime();

const countdown = ()=>{
    const timeNow = new Date().getTime();
    let difference = deadline - timeNow;
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    
    let days = Math.floor( difference / oneDay);
    let hours = Math.floor((difference % oneDay) / oneHour);
    let minutes = Math.floor((difference % oneHour ) / oneMinute);
    let seconds = Math.floor((difference % oneMinute) / 1000);
    
    let array = [days,hours,minutes,seconds];
    
    const addZero = (i)=>{
        if(i < 10){
            return `0${i}`
        }
        return i
    }
    
    metrics.forEach((item,index)=>{
        item.innerHTML = addZero(array[index])
    })
}

// set interval

const interval = setInterval(countdown, 1000);
countdown();




