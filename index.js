function toggleBackgroundColor() {
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color="black";
        document.getElementById("theme").innerText = "🌞";
    } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color="white";
        document.getElementById("theme").innerText = "🌜";
    }
}



