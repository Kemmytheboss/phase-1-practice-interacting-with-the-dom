document.addEventListener("DOMContentLoaded", () => {
  let count = 0;
  let isPaused = false;
  let likes = {};
  let interval = setInterval(incrementCounter, 1000);

  const counter = document.getElementById("counter");
  const plus = document.getElementById("plus");
  const minus = document.getElementById("minus");
  const heart = document.getElementById("heart");
  const pause = document.getElementById("pause");
  const likesList = document.querySelector(".likes");
  const commentForm = document.getElementById("comment-form");
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("list");
  const submit = document.getElementById("submit");

  function incrementCounter() {
    count++;
    counter.textContent = count;
  }

  plus.addEventListener("click", () => {
    count++;
    counter.textContent = count;
  });

  minus.addEventListener("click", () => {
    count--;
    counter.textContent = count;
  });

  heart.addEventListener("click", () => {
    if (!likes[count]) {
      likes[count] = 1;
      const li = document.createElement("li");
      li.id = `like-${count}`;
      li.textContent = `${count} has been liked 1 time`;
      likesList.appendChild(li);
    } else {
      likes[count]++;
      const li = document.getElementById(`like-${count}`);
      li.textContent = `${count} has been liked ${likes[count]} times`;
    }
  });

  pause.addEventListener("click", () => {
    isPaused = !isPaused;

    if (isPaused) {
      clearInterval(interval);
      pause.textContent = "resume";
      plus.disabled = true;
      minus.disabled = true;
      heart.disabled = true;
      submit.disabled = true;
    } else {
      interval = setInterval(incrementCounter, 1000);
      pause.textContent = "pause";
      plus.disabled = false;
      minus.disabled = false;
      heart.disabled = false;
      submit.disabled = false;
    }
  });

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = commentInput.value.trim();
    if (comment !== "") {
      const p = document.createElement("p");
      p.textContent = comment;
      commentList.appendChild(p);
      commentInput.value = "";
    }
  });
});
