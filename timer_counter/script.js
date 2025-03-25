let time = document.getElementById('time').textContent;

let id;

const startTimer = () => {
    id = setInterval(() => {
        if (time == 0) {
            alert("Time out!")
            clearInterval(id);
            return;
        }
        time--;
        document.getElementById('time').textContent = time > 9 ? time : '0' + time;
                      
    }, 1000)
}
const stopTimer = () => {
    clearInterval(id);
}

const resetTimer =()=>{
    clearInterval(id);
    time = 60;
    document.getElementById('time').textContent = time ;
}