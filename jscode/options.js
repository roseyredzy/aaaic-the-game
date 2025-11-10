var slider = document.getElementById("playerCount");
var output = document.getElementById("sliderVal");
const ethicalPrinciple = document.getElementById("specifyEthicalPrinciple");

function updateSliderValue() {
    output.textContent = this.value;

    var min = slider.min ? slider.min : 2;
    var max = slider.max ? slider.max : 10;
    var percentage = ((this.value - min) / (max - min)) * 100;

    output.style.left = percentage + "%";
    output.style.transform = "translateX(-100%)"; 
}

window.onload = () => {
    if (localStorage.getItem(playerCount)) {
        const storedValue = localStorage.getItem(playerCount);
        slider.value = storedValue;
        output.textContent = slider.value;
        updateSliderValue.call(slider);
    } else {
        localStorage.setItem(playerCount, slider.value);
        output.textContent = slider.value;
        updateSliderValue.call(slider);
    }

    if (localStorage.getItem("requireEthicalPrinciple")) {
        ethicalPrinciple.checked = JSON.parse(localStorage.getItem("requireEthicalPrinciple"));
    }
};

slider.addEventListener("input", function() {
    localStorage.setItem(playerCount, slider.value);
    output.textContent = slider.value;
    updateSliderValue.call(slider);
});

ethicalPrinciple.addEventListener("change", function() {
    localStorage.setItem("requireEthicalPrinciple", JSON.stringify(this.checked));
})