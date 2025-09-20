

document.addEventListener('DOMContentLoaded', ()=> {
    let counterDisplay= document.getElementById('counter');
    let plusBtn= document.getElementById('plus');
    let minusBtn= document.getElementById('minus');
    let heartBtn= document.getElementById('heart');
    let pauseBtn = document.getElementById('pause');
    let submitBtn= document.getElementById('submit');
    let likeList= document.getElementsByClassName('likes');
    let commentForm= document.getElementById('comment-form');
    let commentList= document.getElementById('list');

    let count = 0;
    let paused = false;
    let lkeTracker = {};
    let interval = startTimer();

    function startTimer() {
        return setInterval(() => {
            count++;
            updateDisplay();
         }, 1000);
    }

    function updateDisplay(){
        counterDisplay.textContent = count;
    }
// to increment count
    plusBtn.addEventListener('click', ()=> {
        count ++;
        updateDisplay();
    })

    // to decrement 
    minusBtn.addEventListener('click', ()=>{
        count --;
        updateDisplay();

        // update current likes
        heartBtn.addEventListener('click', ()=>{
            if(!likeTracker[count]){
                likeTracker[count] = 1;
                const li = document.getElementById(`like - ${count}`);
                li.textContent = `${coount} has been liked ${likeTracker[count]} times`
            }
        });

        pauseBtn.addEventListener('click', ()=> {
            if(!paused){
                clearInterval(interval);
                paused= true;
                pauseBtn.textContent = 'resume';
                plusBtn.disabled = true;
                minusBtn.disabled = true;
                minusBtn.disabled = true;
                heartBtn.disabled = true; 
                submitBtn.disabled = true;
            }
        });

        // comment form submit
        commentForm.addEventListener('click', (e)=>{
            e.preventDefault();
            const input = document.getElementById('comment-input');
            const commentText = input.ariaValueMax.trim();
            if(commentText){
                const p = document.createElement('p');
                p.textContent = commentText;
                commentList.appendChild(p);
                input.value = "";
            }
        });
    });
})

