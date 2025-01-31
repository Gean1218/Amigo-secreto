let amigo = document.querySelector('input');
let listaamigo = []; 
    
function adicionar(){
    let nome = amigo.value.trim();
    console.log('Adicionar amigo');
    let resultado = document.getElementById('resultado');
    resultado.innerHTML='';
    if(Verificar(nome)){
        listaamigo.push(nome);
        console.log(listaamigo);
        Mostrarlista(listaamigo);
        
    }
     
    return limpar();
    
 
}

amigo.addEventListener('keydown',function(event){
  if(event.key ==='Enter'){
    adicionar();
  }
})

 function sortearAmigo(){
    let amigosecreto = listaamigo[Math.floor(Math.random()*listaamigo.length)];
    console.log(amigosecreto);
   mostraResultado(amigosecreto)


   listaamigo.splice(0,listaamigo.length);
   Mostrarlista();
 }



function limpar(){
    amigo.value = '';

}


function mostraResultado(amigosecreto =''){
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto é ${amigosecreto}`;

}
function Mostrarlista(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaamigo.join('<br>');



}


function Verificar(nome){
    if(listaamigo.some(amigo=> amigo.toLowerCase()===nome.toLowerCase())){
        alert('Porfavo tente novamente, Colocando o sobrenome!');
      return false;
     }else if(/\d/.test(amigo.value)){
        alert('Porfavo não digite números!! , tente novamente');
        return false;
     }else if(!nome){
        alert('Porfavo digite um nome!! , tente novamente')
        return false;
     }
    return true;
    }

    
