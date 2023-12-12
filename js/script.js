let btn = document.getElementById("bars-responsive");
let itens = document.querySelector(".itens");
let theme = document.getElementById("theme");
let change = document.querySelector(".change");

btn.addEventListener('click', () => {
if (btn.classList.contains("active")) {
        btn.classList.toggle("active");
        btn.classList.remove("fa-bars");
        btn.classList.add("fa-times");
        itens.style.left = "0";
}
else {
    btn.classList.toggle("active");
    btn.classList.add("fa-bars");
    btn.classList.remove("fa-times");
    itens.style.left = "-1000px";
}
});

theme.addEventListener('click', () => {
    if (theme.classList.contains("fa-moon")) {
        theme.classList.remove("fa-moon");
        theme.classList.add("fa-sun");
        change.classList.toggle("active")
    }
    else {
        theme.classList.add("fa-moon");
        theme.classList.remove("fa-sun");
        change.classList.toggle("active");
    }
});

