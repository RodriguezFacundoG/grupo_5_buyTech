//import ComponenteDos from "componentedos.jsx";



const ComponenteInicial = () => {
    return (
        <div>
            <h1>Componente Inicial</h1>
            <h1>Componente Inicial</h1>
            <h1>Componente Inicial</h1>
            <h1>Componente Inicial</h1>

            <ComponenteDos />

        </div>

    )
}




//Contenedor de la miniApp de React
const domContainer = document.querySelector('#appReact');
const root = ReactDOM.createRoot(domContainer);
root.render(<ComponenteInicial />);
