function selectMedia(){
    var x = document.querySelector('form select').selectedIndex;
            
    if(x===9){
        document.querySelector('.other').classList.remove('hide')
    }
    else {
        document.querySelector('.other').classList.add('hide')
    }
}

