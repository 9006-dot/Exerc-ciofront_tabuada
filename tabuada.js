function tabuada(){
  // Pega o valor digitado no campo de entrada
    let num = document.getElementById("txtnum")
  // Pega a tabela onde vamos exibir os resultados 
    let tab = document.getElementById('seltab')
    
    if(num.value.length == 0){
        window.alert("Erro! Por favor, digite um número.")
    }else{
        let n = Number(num.value)
          // Limpa a tabela antes de gerar uma nova
        tab.innerHTML=''
        for(i=1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)
            //Adiciona o novo item como filho da lista
        }
    }
}