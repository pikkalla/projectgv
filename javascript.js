const name = document.getElementById('name')
const password =document.getElementById('password')
const form = document.getElementById('myform')
const errorElement = document.getElementById('error')
// const mykeysValues = window.location.search;


form.addEventListener('submit', (e) => {
    let messages= []
    // if(name.value === '' || name.value == null){
    //     messages.push('Name is required')
    // }
    if(password.value.length <= 6){
       messages.push('password must be longer than 6 characters') 
    }
    if(password.value.length >= 20){
        messages.push('password must be shorter than 20 characters') 
     }
    if(messages.length > 0){
        e.preventDefault()
       
       
        errorElement.innerText = messages.join(', ')
    }
})