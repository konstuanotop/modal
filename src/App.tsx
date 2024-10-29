import styles from './App.module.scss';
import sigma from './assets/img/sigma.gif'
import close from './assets/img/close.png'
import { useState } from 'react';

function App() {

  const [openModal, setOpenModal] = useState(false)


  return (


    <div className={styles.App}>

      {
        !openModal ?
          <button
            className={styles.btn_open}
            onClick={() => setOpenModal(true)}
          >Нажми на меня</button>

          : <div className={styles.modal}>
            <img
              className={styles.btn_close}
              src={close}
              onClick={() => setOpenModal(false)}
            />
            <img className={styles.img} src={sigma} />
          </div>
      }


    </div>





  );
}

export default App;
