

const ComponenteDos= () => {

   fetch('http://localhost:3000/api/users')
   .then (response => response.json())
    .then (data =>console.log(data))

    let aaa = "Hola soy un comentario";
    return (
        <div>
            
            
            <h1>Componente {aaa} DOSSSS</h1>
                        
       </div>

    )

    }

//Contenedor del componente dos
const domContainer2 = document.querySelector('#componentedos')
const root2 = ReactDOM.createRoot(domContainer2)

root2.render(<ComponenteDos />)