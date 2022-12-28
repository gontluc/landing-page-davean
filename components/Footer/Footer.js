import styles from '../../styles/Footer.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowTop.png'
import ig from '../../public/images/igIcon.png'
import fb from '../../public/images/fbIcon.png'

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
        }, 7000);
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
                        <div className={styles.red}>
                            <Image className={styles.redIcon} src={ig} alt='instagram' quality={100}/>
                            <div>@comuniones_davean</div>
                        </div>
                        <div className={styles.red}>
                            <Image className={styles.redIcon} src={fb} alt='facebook' quality={100}/>
                            <div>@daveanphotography</div>
                        </div>
                    </div>

                    <div className={styles.phone}>Info y Reservas: 691 041 289</div>
                </div>

                <div className={styles.right}>
                    <div className={styles.arrowContainer} ref={arrowUp} onClick={() => header.current.scrollIntoView()}>
                        <Image className={styles.arrow} src={arrow} alt='ir al principio de página' quality={100}/>
                    </div>
                </div>
            </div>

            <div className={styles.line}></div>

            <div className={styles.bottomFooter}>
                <div className={styles.bottomLeftContainer}>
                    <div>2022</div> 
                    <div>&copy;</div> 
                    <p>Comuniones Davean</p>
                </div>

                <div className={styles.bottomRightContainer}>
                    <div>by</div>
                    <p>Lucas Gontijo</p>
                </div>
            </div>
        </footer>
    )
}