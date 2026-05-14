function calcular() {
    let tarefas = Number(document.getElementById('num').value)
    let resFinal = document.getElementById('res')
    let salario = 1200
    let msg
   

    if (tarefas > 5 && tarefas < 11) {
        msg = `Voce realizou ${tarefas} tarefas, recebe um Valor adicional de R$100! 
        Resultado total: R$${salario + 100}`

    } else if (tarefas > 10) {
        msg = `Voce realizou ${tarefas} tarefas, recebe um Abono de ${30/100 * 1200} Valor Final!`
    } else {
        msg = `Voce reaizou poucas tarefa, n recebe nenhum abono!`
    }

    resFinal.innerHTML = msg

}