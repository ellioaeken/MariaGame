document.addEventListener('DOMContentLoaded', () => {
    const character = document.getElementById('character');
    const socialRoom = document.getElementById('socialRoom');
    const assignmentRoom = document.getElementById('assignmentRoom');

    // Initial character position
    let positionX = 150;
    let positionY = 150;

    // Movement speed
    const speed = 5;

    // Movement function
    function moveCharacter(event) {
        switch(event.key) {
            case 'ArrowUp':
                positionY -= speed;
                break;
            case 'ArrowDown':
                positionY += speed;
                break;
            case 'ArrowLeft':
                positionX -= speed;
                break;
            case 'ArrowRight':
                positionX += speed;
                break;
        }
        character.style.top = `${positionY}px`;
        character.style.left = `${positionX}px`;
    }

    // Event listener for character movement
    window.addEventListener('keydown', moveCharacter);

    // Interact with Thug Survivor
    document.getElementById('thugSurvivor').addEventListener('click', () => {
        alert('Thug Survivor clicked!');
    });
});