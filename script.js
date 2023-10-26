window.onload = function() {
    // Load existing username and code from localStorage when the page is loaded
    var savedUsername = localStorage.getItem("username");
    var savedCode = localStorage.getItem("code");
    if(savedUsername && savedCode) {
        document.getElementById("code-output").textContent = savedUsername + ": " + savedCode;
    }
}

function postCode() {
    var usernameInput = document.getElementById("username-input").value;
    var codeInput = document.getElementById("code-input").value;
    var codeOutput = document.getElementById("code-output");

    // Display username and code
    codeOutput.textContent = usernameInput + ": " + codeInput;

    // Save username and code to localStorage
    localStorage.setItem("username", usernameInput);
    localStorage.setItem("code", codeInput);
}
