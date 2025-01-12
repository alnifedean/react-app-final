import { useState, useEffect } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import styles from './Cart.module.css'
import Modal from '../../UI/Modal'
import cartImg from '../../UI/Images/cart-icon.jpg'

const Cart = () => {

  const {data} = useAuthContext();
  const [openCart, setOpenCart] = useState(null);
  const [state, setState] = useState({ quesadillas: 0, tortas: 0, tacos: 0, gorditas: 0, tostadas: 0, refrescos: 0,
    agua: 0, pastel: 0, pay: 0, helado: 0});


  useEffect(() => {
    if (data.id === 'abcd-0001') {
      setState((prevState) => ({
        ...prevState,
        quesadillas: data.counter,
      }));
    } else if (data.id === 'efgh-0010') {
      setState((prevState) => ({
        ...prevState,
        tortas: data.counter,
      }));
    } else if (data.id === 'ijkl-0011') {
      setState((prevState) => ({
        ...prevState,
        tacos: data.counter,
      }));
    } else if (data.id === 'mnop-0100') {
      setState((prevState) => ({
        ...prevState,
        gorditas: data.counter,
      }));
    } else if (data.id === 'qrst-0101') {
      setState((prevState) => ({
        ...prevState,
        tostadas: data.counter,
      }));
    } else if (data.id === 'uvwx-0110') {
      setState((prevState) => ({
        ...prevState,
        refrescos: data.counter,
      }));
    } else if (data.id === 'yzab-0111') {
      setState((prevState) => ({
        ...prevState,
        agua: data.counter,
      }));
    } else if (data.id === 'cdef-1000') {
      setState((prevState) => ({
        ...prevState,
        pastel: data.counter,
      }));
    } else if (data.id === 'ghij-1001') {
      setState((prevState) => ({
        ...prevState,
        pay: data.counter,
      }));
    } else if (data.id === 'klmn-1010') {
      setState((prevState) => ({
        ...prevState,
        helado: data.counter,
      }));
    }
  }, [data]);

  const modalHandler = () => {
    setOpenCart('onConfirm')
  };

  const closeModal = () => {
    setOpenCart(null)
  };

  const value = (+state.quesadillas)+(+state.tortas)+(+state.tacos)+(+state.gorditas)+(+state.tostadas)+(+state.refrescos)+(+state.agua)+(+state.pastel)+(+state.pay)+(+state.helado)

  return(
    <>
      <div className={styles["cart-container"]} onClick={modalHandler} >
        <div className={styles.cartInputs}>
          <h3>Carrito</h3>
          <p className={styles.cartInput}>{value}</p>
        </div>
        <img src={cartImg} alt='Descripcion de la imagen' />
      </div>
      {openCart && <Modal onConfirm={closeModal} />}
    </>
  )
};

export default Cart;