document.getElementById("cadeau").addEventListener("click", function() {
    let headerMessage = document.querySelector("h1");
    headerMessage.innerText = "Clique sur le gâteau !";
    document.getElementById("cadeau").classList.add("hidden");
    document.getElementById("gateau").classList.remove("hidden");
});

document.getElementById("gateau").addEventListener("click", function() {
    document.getElementById("gateau").classList.add("hidden");
    document.querySelector("h1").classList.add("hidden");
    document.getElementById("message").classList.remove("hidden");
    animateMessage();
});

function animateMessage() {
    let text = document.querySelector("#message p");
    let strText = text.textContent;
    let splitText = strText.split("");
    text.textContent = "";

    for (let i = 0; i < splitText.length; i++) {
        text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 50);

    function onTick() {
        let span = text.querySelectorAll('span')[char];
        span.classList.add('fade');
        char++;
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        clearInterval(timer);
        timer = null;
    }
}
