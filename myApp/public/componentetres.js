class ComponenteTres extends React.Component {
    // Constructor 
    constructor(props) {
        super(props);
    
        this.state = {
            items : [],
            estado : "",
        };
    }


componentDidMount(){
  fetch('http://localhost:3000/api/users')
  .then((res) => res.json())
  .then((data) => {this.setState({ items : data, estado : "soy un compi cargando..." })});
}

render(){

  let contenido 
    if (this.state.items == ""){
      contenido = <h3>Cargando...</h3>
    } else {
      contenido = <h3> {this.state.items} </h3>
    }
    return (
      <div>
        {contenido}
      </div>
    )

  }
}


//Contenedor del componente dos
const domContainer3 = document.querySelector('.componentetres')
const root3 = ReactDOM.createRoot(domContainer3)
root3.render(<ComponenteTres />) 