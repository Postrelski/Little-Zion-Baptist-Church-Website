const hamburger = document.getElementById('hamburger');
const links = document.getElementById('links');

hamburger.addEventListener('click', () => {
    links.classList.toggle('show');
})




const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};
