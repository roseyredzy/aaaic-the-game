const gameContainer = document.getElementById("gameContainer");
const endGame = document.getElementById("endGame");
var playerCount, ethicsCheck;
const canCant = ["can", "can't"];

const prompts = [
    "openly celebrate the death of a political figure who promoted stripping human rights",
    "assist in an assassination attempt on the leader of a totalitarian regime",
    "convince someone to abort a baby for no reason at all",
    "go back in time and kill baby hitler",
    "use my abilities to bomb a foreign nation a majority agrees is doing genocide",
    "order doctors to euthanize a woman who had been in a vegetative state for decades",
    "aid in creating a religion",
    "shatter a child's belief in Santa Claus",
    "go back in time and teach baby Hitler how to draw Anime girls",
    "teach a conservative Catholic child about contraceptives",
    "help someone hide an affair from their spouse"
];

const principles = [
    "Deontology", "Consequentialism", "Virtue Ethics"
]

window.onload = () => {
    if (localStorage.getItem("playerCount")) {
        playerCount = localStorage.getItem("playerCount");
    } else {
        playerCount = 5;
    }

    if (localStorage.getItem("requireEthicalPrinciple")) {
        ethicsCheck = JSON.parse(localStorage.getItem("requireEthicalPrinciple"));
    }

    for (let i=1; i <= playerCount; i++){
        var messageDiv = document.createElement("div");
        messageDiv.classList.add("messages");
        messageDiv.setAttribute("id", `player${i}`)

        var userAndIconDiv = document.createElement("div");
        userAndIconDiv.classList.add("userAndIcon");

        var icon = document.createElement("img");
        icon.setAttribute("src", "../UI/images/AAAIC.svg");
        icon.classList.add("gptIcon");

        var name = document.createElement("span");
        name.textContent = `Player Learning Machine ${i}`;
        name.classList.add("gptName");
        
        var textContainer = document.createElement("span");
        var text = document.createElement("p");
        text.innerHTML = `As an AI, I <b><u>${canCant[Math.floor(Math.random()*canCant.length)]}</u></b> ${prompts[Math.floor(Math.random()*prompts.length)]} because...`
        textContainer.classList.add("gptText");

        if (ethicsCheck) {
            text.innerHTML += `<br><b><u>Ethical Principle:</u></b> ${principles[Math.floor(Math.random()*principles.length)]}`
        }

        var sliderContainer = document.createElement("div");
        sliderContainer.classList.add("sliderContainer");

        var voteSlider = document.createElement("input");
        voteSlider.setAttribute("type", `number`);
        voteSlider.setAttribute("min", `0`);
        voteSlider.setAttribute("max", `${playerCount}`);
        voteSlider.setAttribute("id", `player${i}Votes`);
        voteSlider.classList.add("imsofuckingstressed");

        messageDiv.appendChild(userAndIconDiv);
        userAndIconDiv.appendChild(icon);
        userAndIconDiv.appendChild(name);

        messageDiv.appendChild(textContainer);
        textContainer.appendChild(text);

        messageDiv.appendChild(sliderContainer);
        sliderContainer.appendChild(voteSlider);

        gameContainer.appendChild(messageDiv);
    }
};

function endGameClick() {
    var messageDiv = document.createElement("div");
    messageDiv.classList.add("messages");

    var userAndIconDiv = document.createElement("div");
    userAndIconDiv.classList.add("userAndIcon");

    var icon = document.createElement("img");
    icon.setAttribute("src", "../UI/images/AAAIC.svg");
    icon.classList.add("gptIcon");

    var name = document.createElement("span");
    name.textContent = `The AI`;
    name.classList.add("gptName");

    messageDiv.appendChild(userAndIconDiv);
    userAndIconDiv.appendChild(icon);
    userAndIconDiv.appendChild(name);

    for (let i=1; i <= playerCount; i++) {
        var votes = document.getElementById(`player${i}Votes`);
        var stringValue = votes.value;
        var voteNumber = parseFloat(stringValue);

        var textContainer = document.createElement("span");
        var text = document.createElement("p");
        if(Number.isNaN(voteNumber)) {
            text.textContent = `Player ${i}: 0 votes`
        } else {
            text.textContent = `Player ${i}: ${voteNumber} votes`
        }
        textContainer.classList.add("gptText");
        text.innerHTML += "<br>"

        messageDiv.appendChild(textContainer);
        textContainer.appendChild(text);
    }

    var textContainer = document.createElement("span");
    var text = document.createElement("p");

    text.textContent = `Game ended! Reload the page to play again.`

    messageDiv.appendChild(textContainer);
    textContainer.appendChild(text);

    gameContainer.appendChild(messageDiv);
}

endGame.addEventListener('click', function() {
    endGame.disabled = true;
});