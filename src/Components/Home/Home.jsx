import styles from './Home.module.css'
import image from '../../UI/Images/home.jpg'

const Home = () => {

  return(
    <>
      <div className={styles.mainContainer}>
        <h1>COMIDA MEXICANA TRADICIONAL</h1>
        <div className={styles.infoContainer}>
          <div className={styles.imageContainer}><img src={image} alt="Mexican food" /></div>
          <div className={styles.description}>La comida mexicana es deliciosa debido a su rica mezcla de sabores y aromas. La combinación de ingredientes frescos y variados, como chiles, maíz, frijoles y especias, crea una experiencia culinaria única. Además, cada platillo tiene una receta familiar transmitida de generación en generación, lo que agrega un toque de autenticidad y amor. <br/><br/>El valor histórico de la comida mexicana es inmenso. Desde la época prehispánica hasta la actualidad, la cocina mexicana ha evolucionado incorporando influencias de diferentes culturas. Los ingredientes y técnicas ancestrales se han mantenido, preservando la identidad cultural del país.</div>
        </div>
      </div>
    </>
  );
};

export default Home;