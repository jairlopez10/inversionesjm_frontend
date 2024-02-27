import { useState, useEffect } from "react"
import axios from 'axios'

const Checkout = () => {

  const [nombre, setNombre] = useState('');
  const [total, setTotal] = useState('');

  const pedido = [
    {
      id: 2,
      nombre: "Lampara Luna Recargable",
      precio: 34900,
      cantidad: 3
    },
    {
      id: 5,
      nombre: 'Lonchera Electrica Almuerzo',
      precio: 19900,
      cantidad: 1
    },
    {
      id: 10,
      nombre: 'Orvis X 5000 Fluorescentes',
      precio: 12000,
      cantidad: 2
    }
  ]

  const crearpedido = async () => {
    try {
      const url = `${import.meta.env.VITE_BACKEND_URL}/api/pedidos`;
      await axios.post(url, {cliente: nombre, total: total})

      

    } catch (error) {
      console.log(error);
    }

    setNombre('');
    setTotal('')
  }


  return (
    <>
      <div className="contenedor">

        <h1>Datos del Envio</h1>

        <div className="informacion-cliente">

          <div className="flex flex-col">
            <label htmlFor="nombre">Nombre</label>
            <input id="nombre" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="total">Total</label>
            <input id="total" type="number" placeholder="Total" value={total} onChange={(e) => setTotal(e.target.value)}/>
          </div>
          
        </div>

        <h1>Tu pedido</h1>

        <div className="informacion-pedido">
          <div className="productos-pedido">
            {pedido.map(item => (
                <div key={item.id}>
                  {item.nombre}
                </div>
            ))}
          </div>
          <p className=" mt-10">Total: $100.000</p>
        </div>

        <button className=" bg-green-400 p-3 rounded-xl" onClick={crearpedido}>Confirmar Pedido</button>


      </div>
      
      

    </>
  )
}

export default Checkout