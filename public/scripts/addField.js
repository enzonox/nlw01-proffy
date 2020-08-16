// Procurar o Botão
document.querySelector("#add-time")
// QUando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. Que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // pegar os campos. QUe campos
    const fields = newFieldContainer.querySelectorAll('input')

    // Para cada campo limpar
    fields.forEach(function(field) {
        //pega o field do momento e limpa ele
        field.value = ""
    })

    // Colar na página : onde?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}