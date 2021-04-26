let myImg = document.querySelector('img')

myImg.onclick = function() {
    let myAlt = myImg.getAttribute('alt')

    if(myAlt == 'inigambar') {
        myImg.setAttribute('alt', 'inigambar2')
    }
}