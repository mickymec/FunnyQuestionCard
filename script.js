const button = document.getElementById('btn');
button.addEventListener('click', function () {
    button.style.left = `${Math.ceil(Math.random() * 70)}%`;
    button.style.top = `${Math.ceil(Math.random() * 70)}%`;
});


const button2 = document.querySelector(".main-btn");
const Text = document.querySelector(".text");

button2.addEventListener("click", ()=>{
    Text.innerHTML = "I knew it &#128514"
});

const reload = document.querySelector(".reloaded");

reload.addEventListener("click", ()=> {
    Text.innerHTML = "Were your species are donkeys?"
});

