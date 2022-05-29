const ComponenteCuatro= (props) => {
   
    class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch("http://localhost:3000/api/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "componentecuatro_resultados">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item.id } >
                    firstName: { item.username }, 
                    lastName: { item.name }, 
                    email: { item.email } 
                    </ol>
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