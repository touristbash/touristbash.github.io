
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    if (name) {
        const listItem = document.createElement('li');
        listItem.textContent = name;
        document.getElementById('nameList').appendChild(listItem);
        document.getElementById('successMsg').style.display = 'block';
        document.getElementById('signupForm').reset();
    }
});
