async function fetchUsers() {
    const response = await fetch('/api/person/');
    const users = await response.json();
    const userTable = document.getElementById('userTable');
    userTable.innerHTML = '';
    users.forEach(user => {
        userTable.innerHTML += `
            <tr>
                
                <td>${user.name}</td>
                <td>${user.age}</td>
                <td>${user.email}</td>
                <td>
                    <button onclick="editUser(${user.id})">Edit</button>
                    <button onclick="deleteUser(${user.id})">Delete</button>
                </td>
            </tr>`;
    });
}

async function addUser(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    await fetch('/api/person/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, email })
    });
    fetchUsers();
    alert("user created successfully!")
    document.getElementById('userForm').reset();
}

async function editUser(id) {
    const user = await fetch(`/api/person/${id}/`).then(res => res.json());
    document.getElementById('name').value = user.name;
    document.getElementById('age').value = user.age;
    document.getElementById('email').value = user.email;
    document.getElementById('userId').value = id;
    document.getElementById('submitBtn').textContent = 'Save';
}

async function updateUser(event) {
    event.preventDefault();
    const id = document.getElementById('userId').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    await fetch(`/api/person/${id}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age, email })
    });
    fetchUsers();
    document.getElementById('userForm').reset();
    document.getElementById('submitBtn').textContent = 'Save';
}

async function deleteUser(id) {
    confirm = confirm("are you sure want to delete?");
    if (confirm){
        await fetch(`/api/person/${id}/`, { method: 'DELETE' });
        fetchUsers();
        location.reload();
    }
    
}

function handleFormSubmit(event) {
    const id = document.getElementById('userId').value;
    if (id) updateUser(event); else addUser(event);
}

document.addEventListener('DOMContentLoaded', fetchUsers);