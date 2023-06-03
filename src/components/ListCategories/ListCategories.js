import { CardImg, CardTitle } from "reactstrap";
import { map } from "lodash";
import { BASE_NAME } from "@/config/constants";
import React from 'react';

import styles from "./ListCategories.module.scss";
import Link from "next/link";

export function ListCategories(props) {
  const { categories } = props;

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.list}>
          {map(categories, (category) => (
            <div key={category.id}>
              <Link href={`/products/${category.slug}`}>
                <CardImg
                  alt="Card image cap"
                  src={BASE_NAME + category.image}
                  className={styles.skeleton}
                />

                <div className={styles.category}>
                  <CardTitle className={styles.title}>
                    <h2>{category.name}</h2>
                    <h6>ver más</h6>
                  </CardTitle>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
