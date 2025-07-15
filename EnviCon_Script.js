// Add JavaScript code for your web site here and call it from index.html.
document.addEventListener('DOMContentLoaded', () => {
    let toggleButton = document.getElementById('mode-toggle');
    let body = document.body;

    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        
        if (body.classList.contains('light-mode')) {
            toggleButton.textContent = 'Dark Mode';
        } else {
            toggleButton.textContent = 'Light Mode';
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const addParticipant = (event) => {
        event.preventDefault();

        const name = document.getElementById("fname").value.trim();
        const state = document.getElementById("state").value.trim(); 

        if (!name || !state) {
            alert("Please enter both name and state.");
            return;
        }

        // this creates a new participant line
        const newParticipant = document.createElement("p");
        newParticipant.textContent = `🎟️ ${name} from ${state} has RSVP'd.`;

        // Add to the RSVP participant list
        const rsvpList = document.querySelector(".rsvp-participants");
        rsvpList.appendChild(newParticipant);

        // this clears the forms
        document.getElementById("fname").value = "";
        document.getElementById("state").value = "";
        document.getElementById("email").value = "";
    };
    // this attaches event listener to the button
    let submitButton = document.getElementById("sub");
    submitButton.addEventListener("click", addParticipant);
});

