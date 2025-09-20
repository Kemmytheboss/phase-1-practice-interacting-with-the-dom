let seconds = 0;

// to update timer
function updateTimer(){
    second ++;
    document.getElementById('timer').textContent = seconds;

}
// this runs the timer once DOM is fully loaded
window.addEventListener('load', ()=> {
    setInterval(updateTimer, 1000); 
}
);