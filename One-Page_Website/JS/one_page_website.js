function openModal(n) {
    document.getElementById("modal").style.display = "block"
    nonDisplay();
    bigImages[n].style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function nonDisplay() {
    bigImages = document.getElementsByClassName("bigImage")
    for(i = 0; i < bigImages.length; i++) {
        bigImages[i].style.display = "none";
    }
}