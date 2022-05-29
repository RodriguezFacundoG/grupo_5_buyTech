
const ComponenteInicial = () => {
    let a = [1,2,3,4,5,6,7,8,9,10];
    console.log(a)
 
    return (
        <div>
            <h1>Fetch data from an api in react</h1>
    {/*         <ComponenteDos items={a} />  */}
            <ComponenteCuatro />
        </div>
    )

}





//Contenedor de la miniApp de React
const domContainer = document.querySelector('#appReact');
const root = ReactDOM.createRoot(domContainer);
root.render(<ComponenteInicial />);
