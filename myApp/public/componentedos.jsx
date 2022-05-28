const ComponenteDos= () => {
    return (
        <div>
            <h1>Componente DOSSSS</h1>
            <h1>
            <ul>
                {/* {fetch("http://localhost:3000/api/users/")
                .then(res => res.json())
                .then (data => { 
                    data.map(user => {
                        return <li>{user.email}</li>
                    })
                })
                .catch(error => console.log(error))
                } */}
    )
            </ul>
            </h1>
       </div>
)





//Contenedor del componente dos
const domContainer2 = document.querySelector('#componentedos')
const root2 = ReactDOM.createRoot(domContainer2)

root2.render(<ComponenteDos />)