import { db } from '../firebase';
import { useEffect, useState } from 'react';

import { collection, getDocs } from 'firebase/firestore';

const Pedidos = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        const getList = async() => {
            try {
                const querySnapshot = await getDocs(collection(db, 'clientes'))
                const docs = [];
                querySnapshot.forEach((doc) => {
                    docs.push({...doc.data(), id: doc.id })
                })

                setList(docs)
            
            } catch (error) {
                console.log(error)
            }
        }
        getList()
    }, [list])


  return (
    <div className='container'>
          {/* Lista de pedidos */}
          <div className="col-md-8">
                    <h2 className="text-center">Lista de Usuarios</h2>
                    <div className="container card">
                        <div className="card-body">
                        {
                            list.map(lista => (
                                <div key={lista.id}>
                                <p>Nombre: {lista.nombre}</p>
                                <p>Pedido: {lista.pedido}</p>
                                <p>Dirección: {lista.direccion}</p>

                                <button className="btn btn-danger">
                                    Eliminar
                                </button>

                                <button className="btn btn-success m-1">
                                    Actualizar
                                </button>
                                <hr />
                            </div>
                            ))
                        }
                           
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Pedidos