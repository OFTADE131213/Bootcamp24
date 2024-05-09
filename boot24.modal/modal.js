const btnElem = document.querySelector('.btn')
const modalElem = document.querySelector('.modale')
const concelElem = document.querySelector('.cancel-btn')
const submitElem = document.querySelector('.submit-btn')
const alertElem = document.querySelector('.alert')


btnElem.addEventListener('click',()=>{
    modalElem.classList.add('active-modal')
})
concelElem.addEventListener('click',()=>{
    modalElem.classList.remove('active-modal')
    alertElem.style.display ="none"
})
submitElem.addEventListener('click',()=>{
    modalElem.classList.remove('active-modal')
    alertElem.style.display ="block"

})