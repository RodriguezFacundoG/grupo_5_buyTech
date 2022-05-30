window.addEventListener('load', function()  {
    let form = document.querySelector('.create_formº');
    let productName = document.querySelector('#create_form_product_name');
    let productDescription = document.querySelector('#create_form_product_description');
    let productCategory = document.querySelector('#create_form_product_category');
    let productStock = document.querySelector('#create_form_product_stock');
    let productImage = document.querySelector('#create_form_product_image');

    console.log("testeando validacion")
    
    form.addEventListener('submit', function(e) {
        
        e.preventDefault();
        
        if(productName.value.length <5 ) {
            return alert('Ingrese un nombre válido, de al menos 5 caracteres');
        };
        
        console.log("estoy en el medio del IF")
        if(productDescription.value.length <20 ) {
            return alert('Ingrese una descripción válida, de al menos 20 caracteres');
        };
        
        if(productCategory.value == 0) {
            return alert('Seleccione una categoría');
        };

        if(productStock.value == 0) {
            return alert('Ingrese un stock');
        }


         /* verificacione de IMAGEN */
        
         let imageRegExp = /\.(jpg|jpeg|png|gif)$/i;
         let testeoImagen = imageRegExp.test(productImage.value);
         
             if (image.value == "") {
                 testeoImagen = false;
                 return alert('Ingrese una imagen');
             }
             if(testeoImagen == false) {
                return alert('Ingrese una imagen valida');
             };
         
         if ( productName.value.length >= 5 && productDescription.value.length >=20 && testeoImagen == true && productCategory.value != 0 && productStock.value != 0) {
             return form.submit();
         }
        

    });

});
