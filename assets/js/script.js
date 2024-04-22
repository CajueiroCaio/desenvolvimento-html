/*
 Case sensitive = reconhece letras maiúsculas e minúsculas
 
 por tag: getElementByTagName()
 por id: getElementById()
 por nome: getElementsByName()
 por classe: getElementsByClassName()
 por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto  = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector('#txtNome')

    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome Inválido!'
        txt.style.color = red
    } else {
        txt.innerHTML = 'Nome Válido!'
        txt.style.color = green
        nomeOk = true
    }
}

function validaEmail() {
    let txt = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txt.innerHTML = 'Email Inválido'
        txt.style.color = red
    } else {
        txt.innerHTML = 'Email Válido'
        txt.style.color = green
        emailOk = true
    }
}

function validaAssunto() {
    let txt = document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100) {
        txt.innerHTML = '<h1>Texto muito grande, tem que ter no máximo 100 caracteres.</h1>'
    } else {
        txt.innerHTML = '<h1>Texto Válido</h1>'
        assuntoOk = true
    }
}

function enviar() {

    if(numeroOk == true && emailOk == true && assuntoOk) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}
