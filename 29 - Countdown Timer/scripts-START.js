let countdown;
const timeDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]');
const pause = document.querySelector('.pause-button');
const play = document.querySelector('.play-button');
const reset = document.querySelector('.reset-button');

function timer(seconds) {
    clearInterval(countdown);
    const now = Date.now(); //start time
    const then = now + seconds * 1000; //end time
    displayTimeLeft(seconds);
    console.log(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds) {

    const minutes = Math.floor(seconds / 60);
    console.log(seconds);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timeDisplay.textContent = display;
}


function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be Back At ${hour > 12 ? hour -12 : hour}:${mins < 10 ? '0' : ''}${mins}`;
}

function startTimer() {
    
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
    console.log(this.dataset.time)

}
// function startUpTimer(){

    // const seconds = parseInt(this.dataset.time);
    // timer(countdown);
    // console.log(this.dataset.time)
// }

function pauseTime() {
    console.log('pressed');
    clearInterval(countdown);
}



    // const now = Date.now(); //start time
    // const then = now + seconds * 1000; //end time
    //  displayTimeLeft(seconds);
    // console.log('pressed');
    // countdown = setInterval(() => {
    //     const secondsLeft = Math.round((then - Date.now()) / 1000);
    //     if (secondsLeft < 0) {
    //         clearInterval(countdown);
    //         return;
    //     }
    //     displayTimeLeft(secondsLeft)
    // }, 1000)


function resetFunct(){
   console.log('pressed') 
    clearInterval(countdown);
   let display = `${'0'}:${'0'}${'0'}`
   document.title = display;
   timeDisplay.textContent = display;
   
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const mins = this.minutes.value;
    console.log(mins);
    timer(mins * 60);
    this.reset();
})

pause.addEventListener('click', pauseTime);
// play.addEventListener('click', startUpTimer);
reset.addEventListener('click', resetFunct)