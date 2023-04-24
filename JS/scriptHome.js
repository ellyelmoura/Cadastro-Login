let userLogado = JSON.parse(localStorage.getItem('userLogado')); 

let logado = document.getElementById('logado')

logado.innerHTML = `Olá, ${userLogado.nome}`

if(localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar esta página')
    window.location.href = 'login.html'
}

function exit(){
    localStorage.removeItem('token');
    window.location.href = 'login.html';
    localStorage.removeItem('userLogado');
}