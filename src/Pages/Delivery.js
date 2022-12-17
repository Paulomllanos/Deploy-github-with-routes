import { db } from '../firebase';

import { useState } from 'react';

import { collection, addDoc } from 'firebase/firestore';

const Delivery = () => {

    const valorInicial = {
        nombre: '',
        pedido: '',
        direccion: ''
    }

    //variables de estados

    const [user, setUser] = useState(valorInicial);
   

    const catchInputs = (e) => {
        e.preventDefault();
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }

    const guardarDatos = async(e) => {
        e.preventDefault();

        try{
            await addDoc(collection(db, 'clientes'), {
                ...user
            })
            
        } catch (error){
            console.log(error)
        }
        setUser({...valorInicial});
    }




  return (
    <div className="container">
            <div className="row">
                {/* Formulario2 */}
                <div className="col-md-4">
                    <h2 className="text-center">Ingresar Usuario</h2>
                    <form onSubmit={guardarDatos}>
                        <div className="card card-body">
                            <div className="form-group">
                                <input type='text' name="nombre" className="form-control mb-3" placeholder="Tu nombre acá" onChange={catchInputs} value={user.nombre} required/>
                                <input type='text' name="pedido" className="form-control mb-3" placeholder="Que deseas Llevar?" onChange={catchInputs} value={user.pedido} required/> 
                                <input type='text' name="direccion" className="form-control mb-3" placeholder="Tu dirección" onChange={catchInputs} value={user.direccion} required/>
                            </div>
                            <button className="btn btn-primary">
                                Guardar
                            </button>
                        </div>
                    </form>
                </div>
              
                </div>
            </div>
  )
}

export default Delivery