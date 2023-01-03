import styles from '../../styles/Footer.module.css'

import Image from 'next/image'

import arrow from '../../public/images/arrowTop.png'
import ig from '../../public/images/igIcon.png'
import fb from '../../public/images/fbIcon.png'

import { useRef, useEffect } from 'react'

import Link from 'next/link'

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
                    <Link href="https://www.google.com/maps/place/Davean+Fotograf%C3%ADa/@37.3865212,-6.0079765,15z/data=!4m5!3m4!1s0x0:0xa681617cebdedf2e!8m2!3d37.3865212!4d-6.0079765" legacyBehavior>
                        <a target="_blank">
                            <p>Estudio:</p>
                            <p>C/ Clara de Jesús Montero, 32</p>
                            <p>Barrio Triana - Sevilla</p>
                        </a>
                    </Link>
                </div>

                <div className={styles.middle}>
                    <div className={styles.redesContainer}>
                        <div className={styles.red}>
                            <Link href="https://www.instagram.com/comuniones_davean/" legacyBehavior>
                                <a target="_blank">
                                    <Image className={styles.redIcon} src={ig} alt='instagram' quality={100}/>
                                    <div>@comuniones_davean</div>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.red}>
                            <Link href="https://es-es.facebook.com/daveanphotography/" legacyBehavior>
                                <a target="_blank">
                                    <Image className={styles.redIcon} src={fb} alt='facebook' quality={100}/>
                                    <div>@daveanphotography</div>
                                </a>
                            </Link>
                        </div>
                    </div>

                    <div className={styles.webPrincipal}>
                        <Link href="http://davean.es/" legacyBehavior>
                            <a target="_blank">
                                www.davean.es
                            </a>
                        </Link>
                    </div>
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
                    <div className={styles.phone}>
                        <Link href="tel:+34691041289" legacyBehavior>
                            <a>
                                Info y Reservas: 691 041 289
                            </a>
                        </Link>
                    </div>
                </div>

                <div className={styles.bottomRightContainer}>
                    <Link href="https://lucasgontijo.com/" legacyBehavior>
                        <a target="_blank">
                            <div>by</div>
                            <p>Lucas Gontijo</p>
                        </a>
                    </Link>
                </div>
            </div>
        </footer>
    )
}