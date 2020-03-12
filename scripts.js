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

document.querySelector('form')
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementsByTagName("input")[0].value;
        const phone = document.getElementsByTagName("input")[1].value;
        const other = document.getElementsByTagName("input")[2].value;

        const yes = document.querySelector('input[name="radio"]:checked').value;
        
        console.log(name, phone, other, yes);
    })
