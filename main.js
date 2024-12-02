var header = document.getElementById ('navbar');

window.addEventListener('scroll', ()=> {
    var scroll = window.scrollY

    if(scroll>20){
        header.style.backgroundColor ='#ece6e8'
    } else {
        header.style.backgroundColor ='transparent'
    }
})