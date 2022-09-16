import React from 'react';
import styles from './ChartBar.module.css';

function ChartBar({
    text= "text",
    color1= "Green",
    color2= "Orange",
    percentage = 50,
}) {
  return (
    <div className={styles.container}>
        <div className={styles.colum_left} style={{backgroundColor: color1}}>
        <span className={styles.text}>{text}</span>
        </div>
        <div className={styles.colum_right}>
            <div className={styles.colum_percentage_left} 
            style={{backgroundColor: color2, width: `${percentage}%`}}>
            <span className={styles.text}>{percentage}%</span>
            </div>
        <div className={styles.colum_percentage_right}></div>
        </div>
    </div>
  );
}
export default ChartBar;