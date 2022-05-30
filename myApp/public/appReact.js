function App() {

    return (
        <div>
            <h1>Fetch data from an api in react</h1>
            <Wrapper />
        </div>
    )

}

//Contenedor de la miniApp de React
const domContainer = document.querySelector('#appReact');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />);
