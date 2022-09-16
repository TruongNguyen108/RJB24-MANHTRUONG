import React from 'react';
import styles from './ChartBar2.module.css';

function ChartBar2({
    text= 'text',
    color = 'Green',
    icon= 'logo-html5',
    percentage = 50,
}) {
  return (
    <div className={styles.container}>
        <div className={styles.icon}>
            <div className={styles.icon_left} style={{backgroundColor: color}}><ion-icon name={icon}></ion-icon></div>
            <div className={styles.icon_right}>{text}</div>
        </div>
        <div className={styles.skill_chart}>
            <div className={styles.skill_chart_item} style={{backgroundColor: color, width: `${percentage}%`}}></div>
        </div>
    </div>
  )
}
export default ChartBar2
