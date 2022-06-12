window.addEventListener("load", function () {
    let form = document.querySelector(".create_form");
    let productName = document.querySelector("#create_form_product_name");
    let productDescription = document.querySelector("#create_form_product_description");
    let productImage = document.querySelector("#create_form_product_image");
    let productCategory = document.querySelector("#create_form_product_category");
    let productStock = document.querySelector("#create_form_product_stock");
    let productColor = document.querySelector("#create_form_product_color");
    let productWeight = document.querySelector("#create_form_product_weight");
    let productSize = document.querySelector("#create_form_product_size");

    


    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      if (productName.value.length < 5) {
        return alert("Ingrese un nombre válido, de al menos 5 caracteres");
      };
  
      if (productDescription.value.length < 20) {
        return alert("Ingrese una descripción válida, de al menos 20 caracteres");
      };
      /* verificacione de IMAGEN */
      let imageRegEx = /\.(jpg|jpeg|png|gif)$/i;
      let testeoImagen = imageRegEx.test(productImage.value);
  
      if (productImage.value == "" || testeoImagen == null) {
        testeoImagen = true;
        /* return alert("Ingrese una imagen"); */
      };
      if (testeoImagen == false) {
        return alert("Ingrese una imagen valida");
      };
      /* fin de verificacion IMAGEN */
  
      if (productCategory.value == 0) {
        return alert("Seleccione una categoría");
      };
  
      if (productStock.value == 0) {
        return alert("Ingrese un stock");
      };
      let isNumber = /[^a-z ]\ *([.0-9])*\d/g;
      if (isNumber.test(productStock.value)) {
        return alert("Ingrese un stock válido");
      }

      let areLetters = /[a-zA-Z]+[-_]*[a-zA-Z]+/g;
      if (areLetters.test(productColor.value)) {
        return alert("Ingrese un color válido");
      }
      if (isNumber.test(productWeight.value)) {
        return alert("Ingrese un peso válido");
      }
      if (isNumber.test(productSize.value)) { 
        return alert("Ingrese un tamaño válido");
      }
  
      if (
        productName.value.length >= 5 &&
        productDescription.value.length >= 20 &&
        testeoImagen == true &&
        productCategory.value != 0 &&
        productStock.value != 0
      ) {
        return form.submit();
      };
    });
  });
  