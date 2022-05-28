const ComponenteDos= () => {
    return (
        <div>
            <h1>Componente DOSSSS</h1>
            <h1>Componente DOSSSS</h1>
            <h1>Componente DOSSSS</h1>
            <h1>Componente DOSSSS</h1>
       </div>
    )
}




//Contenedor del componente dos
const domContainer2 = document.querySelector('#componentedos');
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(<ComponenteDos />);
