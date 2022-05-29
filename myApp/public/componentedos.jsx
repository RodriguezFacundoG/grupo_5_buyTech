const ComponenteDos= (props) => {

    /* const dataApiUsers = fetch('http://localhost:3000/api/users')
   .then (response => response.json())
    .then (data => {
        console.log(data);
    }
    )
    .catch(error => console.log(error)); */
    //
    //
    //
    const [user, setUser] = useState([]);

    useEffect(() => {
        console.log('se Montó el componente 2');
        fetch('http://localhost:3000/api/users')
        .then(response => response.json())
        .then( data => {
            setUser(data)
        })
        .catch(error => console.log(error));
    }, []);

    
   return (
        <div>
            <h1>Componente DOSSSS</h1>
            <ul>
                {user.map(user => {
                    return <li>{user.name}</li>
                }
                )
                }
            </ul>
       </div>

    )

}

//Contenedor del componente dos
const domContainer2 = document.querySelector('#componentedos')
const root2 = ReactDOM.createRoot(domContainer2)
root2.render(<ComponenteDos />) 