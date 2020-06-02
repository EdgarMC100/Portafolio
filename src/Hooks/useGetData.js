//Creacion de nuestro custom hook para traer los datos,
//manejar el estado y parsarla a los componentes
import {useState, useEffect} from 'react';
const api = 'https://us-central1-fir-api-6e26c.cloudfunctions.net/api';

//Funcion para poder ser llamada desde cualquier componente y poder exponer los datos obtenidos desde el API

const useGetData = () => {
    const [mydata, setData] = useState([]);
    //useEffect usado para manipular elmento del DOM, 
    //hacer peticiones a una API y traer información, maneja el ciclo de vida
    useEffect(() =>{
            fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    },[]);
    return mydata;
}

export default useGetData;

