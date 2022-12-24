import styles from '../../styles/Footer.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowTop.png'

import { useRef, useEffect } from 'react'

export default function Footer({ header }) {

    const arrowUp = useRef(null)

    useEffect(() => {
        // Animating arrowUp
        setInterval(() => {
            arrowUp.current.style.transform = "translateY(-30%)";

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 500);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(-30%)";
            }, 1000);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 1500);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(-30%)";
            }, 2000);

            setTimeout(() => {
                arrowUp.current.style.transform = "translateY(0)";
            }, 2500);
        }, 4500);
    }, [])

    return (
        <footer className={styles.container}>
            <div className={styles.topFooter}>
                <div className={styles.estudio}>
                    <p>Estudio:</p>
                    <p>C/ Clara de Jesús Montero, 32</p>
                    <p>Barrio Triana - Sevilla</p>
                </div>

                <div className={styles.middle}>
                    <div className={styles.redesContainer}>
                        <div className={styles.red}>@comuniones_davean</div>
                        <div className={styles.red}>@daveanphotography</div>
                    </div>

                    <div className={styles.phone}>Info y Reservas: 691 041 289</div>
                </div>

                <div className={styles.right}>
                    <div className={styles.arrowContainer} ref={arrowUp} onClick={() => header.current.scrollIntoView()}>
                        <Image className={styles.arrow} src={arrow} alt='ir al principio de página' priority quality={100}/>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bottomFooter}>a</div>
        </footer>
    )
}