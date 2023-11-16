import { useState } from "react";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import "./Product.css";

const Product = () =>{
  const [preferenceId, setPreferenceId] = useState(null);

  //Aqui se pone el public key (lo que se hace en la pagina de mercadopago checkout pro)
  initMercadoPago("YOUR_PUBLIC_KEY");


  const createPreference = async () => {
    try {
      const response = await axios.post("http://localhost:8080/create_preference", {
        description: "Nombre del producto",
        price: 100,
        quantity: 1,
        currency_id: "MXN"
      });

      const { id } = response.data;
      return id;
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = async () => {
    const id = await createPreference();
    if (id) {
      setPreferenceId(id);
    }
  };

    return (
        <div className='card-product-container'>
      <div className='card-product'>
        <div className='card'>
          <img src='' alt='Product Image' />
          <h3>Producto</h3>
          <p className='price'>$100</p>
          <button onClick={handleBuy}>Comprar</button>
          {preferenceId && <Wallet initialization={{ preferenceId }} />}
        </div>
      </div>
    </div>
    )
}

export default Product