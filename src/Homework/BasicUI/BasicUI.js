import React from 'react';
import styles from './BasicUI.module.css';

export default function BasicUI() {
  return (
    <div className={styles.container}>
        <div className={styles.div_left}>
            <img alt='' src='Basicimage/1.jpg' style={{width: '100%'}}></img>
        </div>
      <div className={styles.information}>
        <h2 style={{fontSize: 50}}>Clothing Apparel</h2>
        <br/>
        <ul style={{fontSize: 30, color: 'gray'}}>
                <li>Accessories</li>
                <li>Bags</li>
                <li>Kids Fashion</li>
                <li>Mens</li>
        </ul>
      </div>
    </div>

  )
};
