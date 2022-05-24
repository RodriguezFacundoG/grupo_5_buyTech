window.addEventListener('load', function()  {
    let form = document.querySelector('.form-complete');
    let firstName = document.querySelector('#first_name');
    let lastName = document.querySelector('#last_name');
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(firstName.value.length <2 ) {
           return firstName.value = 'Ingrese un nombre valido, minimo 2 caracteres';
        };
        if(lastName.value.length <2 ) {
            return lastName.value = 'Ingrese un apellido valido, minimo 2 caracteres';
        };
       
        let valor = email.value;
        let mailRegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        let testeoMail = mailRegExp.test(valor);
            if(testeoMail == false) {
             alert('Ingrese un email valido');
        };

        if(password.value.length < 8) {
            alert("Ingrese una contraseña valida, minimo 8 caracteres");
        };
    });
});

