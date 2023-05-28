
//get the form element
let form = document.getElementById("form");
let table = document.getElementById("table");
let tbody = document.getElementById("tbody");
let userArr = JSON.parse(localStorage.getItem("users")) || []


// listen to the submit event on the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const userData = {
        id: "00" + (userArr.length + 1),
        name: form.name.value,
        email: form.email.value,
        gender: form.gender.value,
        occupation: form.occupation.value
    }
    addUsers(userData);
    form.reset();
    userArr.push(userData)
    localStorage.setItem("users", JSON.stringify(userArr))
});


// declare the addUsers Function 

let addUsers = (userData)  => {
 let tr  = document.createElement("tr");
 tr.innerHTML = ` 
                <td>${userData.id}</td>
                <td>${userData.name}</td>
                <td>${userData.email}</td>
                <td>${userData.gender}</td>
                <td>${userData.occupation}</td>
                <td class="d-flex">
                    <button id="${userData.id}" data-identity="${userData.id}" onClick="deleteUser(${userData.id})" class="btn btn-danger me-1 btn-sm" id="delete">Delete</button>
                    <button class="btn btn-warning btn-sm" id="edit">Edit</button>

                </td>
            `
tbody.appendChild(tr)
table.appendChild(tbody)
}

document.addEventListener("DOMContentLoaded", () => {
    userArr.forEach(user => {
        addUsers(user);
    })
})

// declare deleteUser function

let deleteUser = (element) => {
    alert("button click");
    let userId = element[0].id;

}