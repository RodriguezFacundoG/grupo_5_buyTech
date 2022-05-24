window.onload = function()  {
    let form = document.querySelector('.form-complete');
    let firstName = document.querySelector('#first_name');
    let lastName = document.querySelector('#last_name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');
    let confirmPassword = document.querySelector('#password_verification');

    //let prueba = document.querySelector("#prueba");
    let proof = document.querySelector(".proof");
    prueba.style.color = 'blue';
    proof.style.color = 'blue';


    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(firstName.value.length <2 ) {
            firstName.value = 'PPPPPPP Ingrese un nombre valido, minimo 2 caracteres';
        }
        if(lastName.value.length <2 ) {
            lastName.value = 'zzzzzzzz   Ingrese un apellido valido, minimo 2 caracteres';
        }
        if(email.value=="") {
           alert("Ingrese un email valido");
        }
        if(password.value.length < 8) {
            alert("Ingrese una contraseña valida, minimo 8 caracteres");
        }
        /* if(firstName.value.length >=2 && lastName.value.length >=2 && email.indexOf('@') && password.value.length >= 8 && password.value == confirmPassword.value) {
            form.submit();
        } */
    }); 
    

    
    }


