import styles from "./TopBar.module.scss";
import { CardImg } from "reactstrap";
import Link from "next/link";
import React from 'react';

export function TopBar() {
  return (
    <>
      <div className={styles.topBar}>
        <Link href="/">
          <CardImg src="/image/logo.jpg" alt="5" />{" "}
        </Link>

        <div className={styles.title}>
         
        
        </div>
        <div className={styles.title}>         
          <p className={styles.name}>MAZDA TOKIO AUTOPARTES</p>
          <p className={styles.extra}>REPUESTOS ORIGINALES, DESPACHOS A TODA COLOMBIA</p>
        </div>
        
      </div>
    </>
  );
}
