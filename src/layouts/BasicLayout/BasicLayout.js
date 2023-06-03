import { TopBar } from "../../components";
import styles from "./BasicLayout.module.scss";
import React from 'react';

export function BasicLayout(props) {
  const { children } = props;

  return (
    <>
      <div className={styles.basicLayout}>
        <TopBar />
        {children}
      </div>
    </>
  );
}
