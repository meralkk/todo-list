// Get references to the input box and the list container
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Enter button
inputBox.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

// Function to add a new task
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new <li> element
        let li = document.createElement("li");
        // Set the content of the <li> element to the value of the input box
        li.innerHTML = inputBox.value;
        // Append the <li> element to the list container
        listContainer.appendChild(li);

        // Add 'x' to the task for deletion
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // 'x' symbol in Unicode
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";
    // Save the updated task list to local storage
    saveData();
}

// Event listener for the list container to handle task checking and deletion
listContainer.addEventListener("click", function (e) {
    // If the clicked element is an <li> element
    if (e.target.tagName === "LI") {
        // Toggle the 'checked' class for the clicked <li> element
        e.target.classList.toggle("checked");
        // Save the updated task list to local storage
        saveData();
    }
    // If the clicked element is a <span> element (deletion 'x' button)
    else if (e.target.tagName === "SPAN") {
        // Remove the parent <li> element of the clicked <span>
        e.target.parentElement.remove();
        // Save the updated task list to local storage
        saveData();
    }

    // Enter button
    button.addEventListener("click", addTask);

}, false);

// Function to save the current task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to show tasks from local storage when the page loads
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show tasks when the page loads
showTask();
