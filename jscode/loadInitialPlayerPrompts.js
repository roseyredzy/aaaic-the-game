const gameContainer = document.getElementById("gameContainer");
var playerCount, ethicsCheck;

window.onload = () => {
    if (localStorage.getItem(playerCount)) {
        playerCount = localStorage.getItem(playerCount);
    } else {
        playerCount = 5;
    }

    if (localStorage.getItem("requireEthicalPrinciple")) {
        ethicsCheck = JSON.parse(localStorage.getItem("requireEthicalPrinciple"));
    }

    console.log(`Player Count ${playerCount}`);
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

        messageDiv.appendChild(userAndIconDiv);
        userAndIconDiv.appendChild(icon);
        userAndIconDiv.appendChild(name);

        gameContainer.appendChild(messageDiv);
    }
};