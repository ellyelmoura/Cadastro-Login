//Deifinição de variáveis
let form = document.getElementById("form-body");

let firstName = document.getElementById("first-name");
let labelFirstName = document.getElementById('labelFirstName');
let validFirstName = false;

let lastName = document.getElementById("last-name");
let labelLastName = document.getElementById("lastName");
let validLastName = false;

let email = document.getElementById("email");
let labelEmail = document.getElementById("labelEmail");
let validEmail = false;

let tel = document.getElementById("tel");
let labelTel = document.getElementById("labelTel");
let validTel = false;

let pwd = document.getElementById("pwd");
let labelPwd = document.getElementById("labelPwd");
let validPwd = false;

let pwdConfirm = document.getElementById("pwd-confirm");
let labelPwdConfirm = document.getElementById("pwdConfirm");
let validPwdConfirm = false;


//funções para validação de caracteres nos inputs
firstName.addEventListener('keyup', ()=>{
    if(firstName.value.length <= 2){
        labelFirstName.setAttribute('style', 'color:red');
        firstName.setAttribute('style', 'border-color: red');
        labelFirstName.innerHTML = "Primeiro Nome: mínimo 3 caracteres"; 
        validFirstName = false;
    }else{
        labelFirstName.setAttribute ('style', 'color:green')
        firstName.setAttribute('style', 'border-color: green')
        labelFirstName.innerHTML = 'Primeiro Nome'
        validFirstName = true;
    }
});

lastName.addEventListener('keyup', ()=>{
    if(lastName.value.length <= 4){
        labelLastName.setAttribute('style', 'color:red');
        lastName.setAttribute('style', 'border-color: red');
        labelLastName.innerHTML = "Sobrenome: mínimo 5 caracteres"; 
        validLastName = false;
    }else{
        labelLastName.setAttribute ('style', 'color:green')
        lastName.setAttribute('style', 'border-color: green')
        labelLastName.innerHTML = 'Sobrenome'
        validLastName = true;
    }
});


email.addEventListener('keyup', ()=>{
    if(email.value.length <= 9 ){
        labelEmail.setAttribute('style', 'color:red');
        email.setAttribute('style', 'border-color: red');
        labelEmail.innerHTML = "Email: mínimo 10 caracteres"; 
        validEmail = false;
    }else{
        labelEmail.setAttribute ('style', 'color:green')
        email.setAttribute('style', 'border-color: green')
        labelEmail.innerHTML = 'Email'
        validEmail = true;
    }
});


tel.addEventListener('keyup', ()=>{
    if(tel.value.length <= 7 ){
        labelTel.setAttribute('style', 'color:red');
        tel.setAttribute('style', 'border-color: red');
        labelTel.innerHTML = "Número: mínimo 8 caracteres"; 
        validTel = false;
    }else{
        labelTel.setAttribute ('style', 'color:green')
        tel.setAttribute('style', 'border-color: green')
        labelTel.innerHTML = 'Número'
        validTel = true;
    }
});


pwd.addEventListener('keyup', ()=>{
    if(pwd.value.length <= 7){
        labelPwd.setAttribute('style', 'color: red');
        pwd.setAttribute('style', 'border-color: red');
        labelPwd.innerHTML = "Senha: mínimo 8 caracteres"
        validPwd = false;
    }else{
        labelPwd.setAttribute ('style', 'color:green')
        pwd.setAttribute('style', 'border-color: green')
        labelPwd.innerHTML = 'Senha'
        validPwd = true;
    }
});

pwdConfirm.addEventListener('keyup', () =>{
    if(pwdConfirm.value != pwd.value){
        labelPwdConfirm.setAttribute('style', 'color:red');
        pwdConfirm.setAttribute('style', 'border-color: red');
        labelPwdConfirm.innerHTML = 'As senhas não são iguais'
        validPwdConfirm = false;
    }else{
        labelPwdConfirm.setAttribute('style', 'color:green');
        pwdConfirm.setAttribute('style', 'border-color: green');
        labelPwdConfirm.innerHTML = 'Confirme a sua senha'
        validPwdConfirm = true;
    }

});

//função para salvar o cadastro no local Storage
function save(){
    //condição para resetar o formulário caso as senhas sejam diferentes
    if(pwdConfirm.value != pwd.value){
        form.reset();
    }

//condição que indica que todos os campos devem ser preenchidos
if(firstName.value && lastName.value && email.value && tel.value && pwd.value && pwdConfirm.value ){

    var dados = JSON.parse(localStorage.getItem("formDados"));

    if(dados == null ){
        localStorage.setItem("formDados", "[]");
        dados = [];
    }

    var registro = {
        primeiroNomeCad: firstName.value,
        sobrenomeCad: lastName.value,
        emailCad: email.value,
        telCad: tel.value,
        pwdCad: pwd.value,
    }

    dados.push(registro);
    localStorage.setItem("formDados", JSON.stringify(dados));


    //variável para mensagem de sucesso caso todos os campos estejam preenchidos
    let msgsucesso = document.getElementById('msgsucesso');
    msgsucesso.style.display = 'block';
    msgsucesso.innerHTML = 'Cadastrando Usuário...'

    //atraso de 2 segundos para o redirecionamento da página de login
    setTimeout(() => {
        window.location.href = "login.html"
    }, 2000);

    msgerro.innerHTML = "";
    msgerro.style.display = 'none';

}else{
    //variável para mensagem de erro caso exista algum campo vazio
    let msgerro = document.getElementById('msgerro');
    msgerro.style.display = 'block' ;
    msgerro.innerHTML = "Preencha todos os campos do formulário";
    msgsucesso.innerHTML = '';
    msgsucesso.style.display = 'none';
    
}
    
    
}



