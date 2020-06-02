 import React , {Component, useState} from 'react';

//1st Way
//  class Helloworld extends Component{
//     state = { //añadiendo estado inicial activo
//         active:true,
//     }
//     //funcion para manipular el estado
//     handleClick = () => {
//         this.setState({
//             active: !this.state.active,
//         })
//     }

//     render(){
//          return (
//            <div>
//             <button onClick={this.handleClick}>Ocultar</button>
//             {this.state.active &&
//                 <h1>Hola Mundo</h1>
//             }
//            </div>  
//          );
//      }
//  }

//2nd Way
const HelloWorld = () =>{
    //Destructura los elementos del el estado y 
    //la funcion que se encarga de actualizar el estado
    const [active, setActive] = useState(true);

    //actualiza el estado
    const handleClick = () =>{
        setActive(!active);
    };

    return(
        <div>
            <button onClick={handleClick}>Ocultar</button>
            {active &&
                <h1>Hello World</h1>
            }
        </div>
    );
}
 export default HelloWorld;

