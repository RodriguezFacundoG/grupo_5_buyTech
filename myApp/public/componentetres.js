const ComponenteTres= (props) => {
   
    let [user, setUser] = useState([]);
    
    
    
    fetch('http://localhost:3000/api/users')
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${response.status}`
        );
      }
      return response.json();
    })
    .then((actualData) => console.log(actualData))
    .catch((err) => {
      console.log(err.message);
    });



   return (
        <div>
            <h1>Componente TRESSSSHHH</h1>
           
       </div>

    )

}

//Contenedor del componente dos
const domContainer3 = document.querySelector('#componentetres')
const root3 = ReactDOM.createRoot(domContainer3)
root3.render(<ComponenteTres />) 