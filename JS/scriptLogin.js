function enter(){

    let email = document.getElementById('email');
    let pwd = document.getElementById('pwd');
    let msgerro = document.getElementById('msgerro');

    
    const admUsers = {
        email: '',
        pwd: '',
    }


    if(email.value == admUsers.email && pwd.value == admUsers.pwd){
        window.location.href = 'homeAdm.html'
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)
    }
    
    let listaUser = [];

    let userValid = {
        nome:'',
        email: '',
        pwd: ''
    }

    listaUser = JSON.parse(localStorage.getItem('formDados'))

    listaUser.forEach((dados) =>{
        if(email.value == dados.emailCad && pwd.value == dados.pwdCad){
            
            userValid = {
                nome: dados.primeiroNomeCad,
                email: dados.emailCad,
                pwd: dados.pwdCad
            }
        }   
    })

    if(email.value == userValid.email && pwd.value == userValid.pwd){
        window.location.href = 'home.html';

        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify(userValid))
    
    }else{
        email.setAttribute('style', 'border-color: red');
        pwd.setAttribute('style', 'border-color: red');
        msgerro.setAttribute('style', 'display: block')
        msgerro.innerHTML = 'Email ou senha incorretos'
        email.focus()
    }
    
}