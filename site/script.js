function logar(){
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("senha");

    var login = document.getElementById('loginE').value;
    var senha = document.getElementById('senha').value;

    if (login === storedEmail && senha === storedPassword) {
        alert("Login bem-sucedido!");
        location.href = "html.html"
    }else{
        alert("Usuário ou senha incorreto")
    }
}


const form = document.getElementById("register");
const username = document.getElementById("nomeCad");
const email = document.getElementById("emailCad");
const password = document.getElementById("senhaCad");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (username.value === "" || email.value === "" || password.value === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        localStorage.setItem("nome", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", password.value);
        alert("Cadastrado com sucesso! Faça seu login!");
        form.reset();
        location.href = "#";
    }
});
