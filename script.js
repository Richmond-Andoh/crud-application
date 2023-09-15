
//Get references to HTML elements
const form = document.getElementById("crud-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const genderInput = document.getElementsByName("gender");
const occupationInput = document.getElementById("occupation");
const userList = document.getElementById("user-list");

//Initialize an array to store user data
let users = localStorage.getItem("users") || [];

//Function to render the user list
function renderUsers() {
    userList.innerHTML = "";
    users.forEach((user, index) => {
        const listItem = document.createElement("tr");
        listItem.innerHTML = `
            <td> ${user.name}</td>
            <td> ${user.email}</td>
            <td>${user.gender}</td>
            <td> ${user.occupation}</td>
            <div class="d-flex">
                <button class="btn btn-warning btn-sm mx-1" onclick="deleteUser(${index})">Delete</button>
                <button class="btn btn-danger mx-1 btn-sm" onclick="editUser(${index})">Edit</button>
            </div>
        `;
        userList.appendChild(listItem);
    });
}

// Function to add a new user
function addUser(event) {
    event.preventDefault();
    // const gender = Array.from(genderInputs).find(input => input.checked);
    // if (!gender) {
    //     alert("Please select a gender.");
    //     return;
    //}
    const newUser = {
        name: nameInput.value,
        email: emailInput.value,
        gender: gender.value,
        occupation: occupationInput.value,
    };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Save to local storage
    renderUsers();
    form.reset();
}

//Function to edit a user
function editUser(index) {
    const editedUser = users[index];
    nameInput.value = editedUser.name;
    emailInput.value = editedUser.email;
    // genderInputs.forEach(input => {
    //     if (input.value === editedUser.gender) {
    //         input.checked = true;
    //     }
    // });
    occupationInput.value = editedUser.occupation;
    users.splice(index, 1); // Remove the original user
    localStorage.setItem("users", JSON.stringify(users)); // Update local storage
    renderUsers();
}

// Function to delete a user
function deleteUser(index) {
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users)); // Update local storage
    renderUsers();
}

// Load users from local storage on page load
const storedUsers = localStorage.getItem("users");
if (storedUsers) {
    users = JSON.parse(storedUsers);
    renderUsers();
}

// Event listener for form submission
form.addEventListener("submit", addUser);