document.addEventListener("DOMContentLoaded", function () {
    IMask(document.querySelector('input[name="phone"]'), {
      mask: '00 - 00000000'
    })
});

function selectMedia(){
    var option = document.querySelector('form select').selectedIndex;
            
    if(option===9){
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

        const name = document.querySelector('input[name="name"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const selectMedia = document.querySelector('form select').value;
        const socialMedia = document.querySelector('input[type="radio"]:checked');

        if(name.trim().split(' ').length < 2){
            alert('Informe nome e sobrenome.')
        }
        else {
            const metUs = (selectMedia != "other" ? selectMedia : document.querySelector('input[name="other"]').value);
    
            const socialMediaArray = [];
    
            if(socialMedia) {
                if(socialMedia.value === "yes"){
                    document.getElementsByName('social-media').forEach(function(obj) {
                        obj.checked ? socialMediaArray.push(obj.value) : '';
                    });
                } 
            }

            data = {name, phone, metUs, socialMediaArray};

            fetch("http://localhost:8080", {
                method: "POST",
                body: JSON.stringify(data)
            });

            document.querySelector('button').disabled = true;
        }
    })