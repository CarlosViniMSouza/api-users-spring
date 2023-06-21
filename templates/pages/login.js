function loadData() {
    const login = document.getElementById('idLogin')
    const email = document.getElementById('idEmail')
    const nome = document.getElementById("idNome")
    const senha = document.getElementById('idSenha')

    fetch('http://localhost:8080/user/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome.value,
            login: login.value,
            senha: senha.value,
            email: email.value
        })
    })
        .then(response => {
            if (response.ok) {
                console.log('User saved successfully');
            } else {
                console.log('An error occurred! Error ' + response.status);
            }
        })
        .catch(error => console.error(error));
}