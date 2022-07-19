var btn = document.querySelector('.searchbox-btn')

btn.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
    this.previousElementSibling.focus()
})