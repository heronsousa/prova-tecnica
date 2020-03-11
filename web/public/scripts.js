function selectMedia(){
    var x = document.querySelector('form select').selectedIndex;
            
    if(x===9){
        document.querySelector('.other').classList.remove('hide')
    }
    else {
        document.querySelector('.other').classList.add('hide')
    }
}

function showSocialMedia() {
    document.querySelector('.select-social-media').classList.remove('hide')
}

function hideSocialMedia() {
    document.querySelector('.select-social-media').classList.add('hide')
}

function getFormData() {
    
}
