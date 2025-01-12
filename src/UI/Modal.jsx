import { createPortal } from 'react-dom'
import { useEffect } from 'react';
import styles from './Modal.module.css'
import { useAuthContext } from '../context/AuthContext';


const ModalOverlay = ({ onConfirm }) => {

  const {data,setData, itemsState, setItemsState} = useAuthContext();


  
  useEffect(() => {
    if (data.id === 'abcd-0001') {
      setItemsState((prevState) => ({
        ...prevState,
        quesadillas: data.counter,
      }));
    } else if (data.id === 'efgh-0010') {
      setItemsState((prevState) => ({
        ...prevState,
        tortas: data.counter,
      }));
    } else if (data.id === 'ijkl-0011') {
      setItemsState((prevState) => ({
        ...prevState,
        tacos: data.counter,
      }));
    } else if (data.id === 'mnop-0100') {
      setItemsState((prevState) => ({
        ...prevState,
        gorditas: data.counter,
      }));
    } else if (data.id === 'qrst-0101') {
      setItemsState((prevState) => ({
        ...prevState,
        tostadas: data.counter,
      }));
    } else if (data.id === 'uvwx-0110') {
      setItemsState((prevState) => ({
        ...prevState,
        refrescos: data.counter,
      }));
    } else if (data.id === 'yzab-0111') {
      setItemsState((prevState) => ({
        ...prevState,
        agua: data.counter,
      }));
    } else if (data.id === 'cdef-1000') {
      setItemsState((prevState) => ({
        ...prevState,
        pastel: data.counter,
      }));
    } else if (data.id === 'ghij-1001') {
      setItemsState((prevState) => ({
        ...prevState,
        pay: data.counter,
      }));
    } else if (data.id === 'klmn-1010') {
      setItemsState((prevState) => ({
        ...prevState,
        helado: data.counter,
      }));
    }
    
  }, [data, setItemsState]);


  const quesadillasItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'abcd-0001'
    }))
  };

  const tortasItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'efgh-0010'
    }))
  };

  const tacosItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'ijkl-0011'
    }))
  };

  const gorditasItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'mnop-0100'
    }))
  };

  const tostadasItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'qrst-0101'
    }))
  };

  const refrescosItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'uvwx-0110'
    }))
  };

  const aguaItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'yzab-0111'
    }))
  };

  const pastelItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'cdef-1000'
    }))
  };

  const payItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'ghij-1001'
    }))
  };

  const heladoItems = (event) =>{
    setData((prevState) => ({
      ...prevState,
      counter: event.target.value,
      id: 'klmn-1010'
    }))
  };


  const prices = {
    quesadillas: 50*itemsState.quesadillas,
    tortas: 80*itemsState.tortas,
    tacos: 30*itemsState.tacos,
    gorditas: 40*itemsState.gorditas,
    tostadas: 30*itemsState.tostadas,
    refrescos: 30*itemsState.refrescos,
    agua: 25*itemsState.agua,
    pastel: 60*itemsState.pastel,
    pay: 60*itemsState.pay,
    helado: 40*itemsState.helado,
  };

  const total = Object.values(prices).reduce((suma, valor) => suma + valor, 0);

  return(
    <div className={styles["cart-container"]}>
      <h2>Carrito</h2>

      <div className={styles['items-container']}>
        <label>Quesadillas:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.quesadillas || 0} onChange={quesadillasItems} />
          $ {prices.quesadillas}
        </div>
      </div>

      <div>
        <label>Tortas:
          <input type="number" value={itemsState.tortas || 0} onChange={tortasItems} />
        $ {prices.tortas}</label>
      </div>

      <div>
        <label>Tacos:
          <input type="number" value={itemsState.tacos || 0} onChange={tacosItems} />
        $ {prices.tacos}</label>
      </div>

      <div>
        <label>Gorditas:
          <input type="number" value={itemsState.gorditas || 0} onChange={gorditasItems} />
        $ {prices.gorditas}</label>
      </div>

      <div>
        <label>Tostadas:
          <input type="number" value={itemsState.tostadas || 0} onChange={tostadasItems} />
        $ {prices.tostadas}</label>
      </div>

      <div>
        <label>Refrescos:
          <input type="number" value={itemsState.refrescos || 0} onChange={refrescosItems} />
        $ {prices.refrescos}</label>
      </div>

      <div>
        <label>Agua:
          <input type="number" value={itemsState.agua || 0} onChange={aguaItems} />
        $ {prices.agua}</label>
      </div>

      <div>
        <label>Pastel:
          <input type="number" value={itemsState.pastel || 0} onChange={pastelItems} />
        $ {prices.pastel}</label>
      </div>

      <div>
        <label>Pay:
          <input type="number" value={itemsState.pay || 0} onChange={payItems} />
        $ {prices.pay}</label>
      </div>
      
      <div>
        <label>Helado:
          <input type="number" value={itemsState.helado || 0} onChange={heladoItems} />
        $ {prices.helado}</label>
      </div>

      <button type='button' onClick={onConfirm}>Cerrar</button>
      <span>Total: ${total}</span>
    </div>
  );
};

const Backdrop = ({ onConfirm }) => {
  return<div className={styles.backdrop} onClick={onConfirm}></div>;
};

const Modal = ({ onConfirm }) => {
  return (
    <>
      {createPortal(<ModalOverlay onConfirm={onConfirm} />,
      document.getElementById('modal-root'))}

      {createPortal(<Backdrop onConfirm={onConfirm} />,
      document.getElementById('backdrop-root'))}
    </>
    
  );
};

export default Modal;