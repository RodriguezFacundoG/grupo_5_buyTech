function App() {

    
    return (
        <div>
            <h1>Fetch data from an api in react</h1>
            <ComponenteTres className="componentetres" />
        </div>
    )

}


//Contenedor de la miniApp de React
const domContainer = document.querySelector('#appReact');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
