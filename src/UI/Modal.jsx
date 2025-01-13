import { createPortal } from 'react-dom'
import { useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import styles from './Modal.module.css'


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
  const value = (+itemsState.quesadillas)+(+itemsState.tortas)+(+itemsState.tacos)+(+itemsState.gorditas)+(+itemsState.tostadas)+(+itemsState.refrescos)+(+itemsState.agua)+(+itemsState.pastel)+(+itemsState.pay)+(+itemsState.helado)

  return(
    <div className={styles["cart-container"]}>
      <h2>Carrito</h2>

      <div className={ itemsState.quesadillas > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Quesadillas:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.quesadillas || 0} onChange={quesadillasItems} />
          $ {prices.quesadillas}
        </div>
      </div>

      <div className={ itemsState.tortas > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Tortas:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.tortas || 0} onChange={tortasItems} />
          $ {prices.tortas}
        </div>
      </div>

      <div className={ itemsState.tacos > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Tacos:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.tacos || 0} onChange={tacosItems} />
          $ {prices.tacos}
        </div>
      </div>

      <div className={ itemsState.gorditas > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Gorditas:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.gorditas || 0} onChange={gorditasItems} />
          $ {prices.gorditas}
        </div>
      </div>

      <div className={ itemsState.tostadas > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Tostadas:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.tostadas || 0} onChange={tostadasItems} />
          $ {prices.tostadas}
        </div>
      </div>

      <div className={ itemsState.refrescos > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Refrescos:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.refrescos || 0} onChange={refrescosItems} />
          $ {prices.refrescos}
        </div>
      </div>

      <div className={ itemsState.agua > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Agua:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.agua || 0} onChange={aguaItems} />
          $ {prices.agua}
        </div>
      </div>

      <div className={ itemsState.pastel > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Pastel:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.pastel || 0} onChange={pastelItems} />
          $ {prices.pastel}
        </div>
      </div>

      <div className={ itemsState.pay > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Pay:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.pay || 0} onChange={payItems} />
          $ {prices.pay}
        </div>
      </div>

      <div className={ itemsState.helado > 0 ? styles.itemsContainer : styles.itemsContainerInactive }>
        <label>Helado:</label>
        <div className={styles.actions}>
          <input type="number" value={itemsState.helado || 0} onChange={heladoItems} />
          $ {prices.helado}
        </div>
      </div>

      <div className={value === 0 ? styles.emptyCart : styles['display: none']}>{value === 0 ? 'No hay items...' : ''}</div>

      <div className={styles.totalContainer}>
        <div>
          <button className={styles.buttonCerrar} type='button' onClick={onConfirm}>Cerrar</button>
          <Link to={'/info'} ><button className={styles.buttonPagar} type='button' onClick={onConfirm} >Pagar</button></Link>
          
        </div>
        <div className={styles.totals}>
          <input type="number" value={value || 0} readOnly />
          <span>$ {total}</span>
        </div>
      </div>
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