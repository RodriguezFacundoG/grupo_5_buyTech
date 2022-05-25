window.addEventListener('load', function()  {
    let productName = document.querySelector('#create_form_product_name');
    let productDescription = document.querySelector('#create_form_product_description');
    let productImage = document.querySelector('#create_form_product_image');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        if(productName.value.length <5 ) {
           return alert('Ingrese un nombre válido, de al menos 5 caracteres');
        };

        if(productDescription.value.length <20 ) {
            return alert('Ingrese una descripción válida, de al menos 20 caracteres');
        };

         /* verificacione de IMAGEN */
        
         let imageRegExp = /\.(jpg|jpeg|png|gif)$/i;
         let testeoImage = imageRegExp.test(productImage.value);
         
             if (image.value == "") {
                 return alert('Ingrese una imagen');
             }
             if(testeoImage == false) {
                return alert('Ingrese una imagen valida');
             };
         
         if ( productName.value.length >= 5 && productDescription.value.length >=20 && testeoImage == true) {
             return form.submit();
         }
        

    });

});
