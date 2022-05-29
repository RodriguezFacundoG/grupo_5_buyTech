const ComponenteCuatro= (props) => {
   
    class componito extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items : [],
            estado : "",
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items : json,
                    estado : "soy un compi cargando..."
                });
            })
    }
    render() {
        const { items, estado  } = this.state;
        if (!estado) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "componentecuatro_resultados">
            <h1> Pretendo ser un Fetch muy feliz</h1>  {
                items.map((item) => ( 
                <ul key = { item.id } >
                    <li>{ item.name }</li>
                    name: { item.name }, 
                    email: { item.email },
                </ul>
                ))
            }
            <h3>hola hola hola</h3>
        </div>
    );
}
}
   


}

//Contenedor del componente dos
const domContainer4 = document.querySelector('#componentecuatro')
const root4 = ReactDOM.createRoot(domContainer4)
root4.render(<ComponenteCuatro />) 