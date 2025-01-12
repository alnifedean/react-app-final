import { Link } from 'react-router-dom';
import Cart from './CartComponents/Cart'
import styles from './Navigation.module.css'

const Navigation = () => {
  return(
    <div className={styles.navigationContainer}>
      <Link to='/' className={styles.titleNav} >Restaurante</Link>
      
      <div className={styles.actionContainer}>
        <div className={styles.actionButtons}>
          <Link to='/' className={styles.buttons} >Home</Link>
          <Link to='/Menu' className={styles.buttons} >Menu</Link>
        </div>
        <Cart />
      </div>
    </div>
  );
};

export default Navigation;