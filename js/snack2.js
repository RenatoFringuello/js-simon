/**
 * 
 * @param {*} num the num to check
 * @returns a string with format 2digit '00'~'09' | num
 */
function getDoubleDigitString(num){
    return (num < 10) ? '0' + num : num; 
}

/**
 * 
 * @param {*} fullSec all the seconds counted
 * @returns a string divided in dd:hh:mm:ss
 */
function getCronoString(fullSec){
    const days = (fullSec / 86400 > 1) ? Math.floor(fullSec / 86400) : 0;
    fullSec -= days * 86400;

    const hours = (fullSec / 3600 > 1) ? Math.floor(fullSec / 3600) : 0;
    fullSec -= hours * 3600;
    
    const minutes = (fullSec / 60 > 1) ? Math.floor(fullSec / 60) : 0;
    fullSec -= minutes * 60;
    
    const seconds = fullSec; 
    return `${getDoubleDigitString(days)}:${getDoubleDigitString(hours)}:${getDoubleDigitString(minutes)}:${getDoubleDigitString(seconds)}`;
}

//init
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const btnRestart = document.getElementById('btn-restart');
const result = document.getElementById('result');

let crono, sec = 0, isCounting = false;

btnStart.addEventListener('click', function(){
    if(!isCounting){
        crono = setInterval(()=>{
            sec++;
            result.innerHTML = getCronoString(sec);
        }, 1000);
        isCounting = true;
    }
});

btnStop.addEventListener('click', function(){
    //stop crono
    clearInterval(crono);
    isCounting = false;
});

btnRestart.addEventListener('click', function(){
    //stop crono
    sec= 0;
    result.innerHTML = getCronoString(sec);
});
