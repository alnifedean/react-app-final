import styles from './paymentForm.module.css'

const PaymentForm = () => {
  return(
    <div className={styles.paymentForm}>
      <div>
        <label>Nombre</label>
        <input type="text" />
      </div>
      <div>
        <label>Direccion</label>
        <input type="text" />
      </div>
      <div>
        <label>Telefono</label>
        <input type="text" />
      </div>
      <div>
        <label>Email</label>
        <input type="text" />
      </div>
      <div>
        <label>card</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default PaymentForm;