import { WhatsApp } from "../WhatsApp";
import styles from "./FooterApp.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineCategory } from "react-icons/md";
import { MdOutlineLocalOffer } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { BtnLink } from "../Common";
import React from 'react';

export function FooterApp() {
  return (
    <div className={styles.btnWhatsapp}>
      <div className={styles.paneluser}>
        <BtnLink link={"/"} title={"HOME"} logo={<AiOutlineHome size={30} color="black" />} />
        <BtnLink
          link={"/featured"}
          title={"EXCL"}
          logo={<MdOutlineCategory size={30} color="black" />}
        />

        <WhatsApp
          phoneNumber="+573103900666"
          message="Hola, me gustaría obtener más información sobre sus productos."
        />
        <BtnLink
          link={"/ofert"}
          title={"OFER"}
          logo={<MdOutlineLocalOffer size={30} color="black" />}
        />
        <BtnLink
          link={
            "https://majos.catalogointeractivo.com.co/admin-dashboard/"
          }
          title={"ADMI"}
          logo={<CiUser size={30} color="black" />}
        />
      </div>
    </div>
  );
}
