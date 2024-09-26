const form = document.getElementById('player-form');
const outputDiv = document.getElementById('output');
const data = [];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const playerId = document.getElementById('player-id').value;
    const playerName = document.getElementById('player-name').value;
    const playerRole = document.getElementById('player-role').value;

    // Validate user input
    if (!playerId || !playerName || !playerRole) {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = 'Please fill out all fields!';
        errorMessage.style.color = 'red';
        form.appendChild(errorMessage);
        return;
    }

    // Create a new player object
    const player = {
        "PlayerID": playerId,
        "PlayerNameOverwrite": playerName,
        "PlayerNation": playerRole,
        "Color": "#FFFFFF"
    };

    // Add the player object to the data array
    data.push(player);

    // Update the output div with the generated JSON code
    try {
        const jsonData = JSON.stringify(data, null, 2);
        outputDiv.innerText = `JSON Data:\n${jsonData}`;
    } catch (error) {
        console.error('Error generating JSON data:', error);
    }

    // Reset the form fields
    form.reset();
});