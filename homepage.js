

const button = document.querySelector('.my-button');


button.addEventListener('click', () => {
  alert('Hello world!');
});


function colorChange() {
  document.querySelector(".my-button").style.backgroundColor = "red";
  document.querySelector(".my-button").style.position = "absolute";
  
  document.querySelector(".my-button").style.left = Math.floor(Math.random() * (window.innerWidth - 100)) + "px";
  document.querySelector(".my-button").style.top = Math.floor(Math.random() * (window.innerHeight - 50)) + "px";
}

