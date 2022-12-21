import styles from '../../styles/Plazas.module.css'

import logo from '../../public/images/logoLine.png'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'
import regalo from '../../public/images/regalo.png'

import Image from 'next/image'

export default function Plazas({ isMobile }) {
    return (
        <div className={styles.container}>

            <div className={styles.title}>
                <h1 className={styles.mainTitle}>PLAZAS LIMITADAS</h1>
                <h2 className={styles.subTitle}>¡No te quedes sin tu bonito recuerdo!</h2>
                <div className={styles.lineLogo}>
                    <div className={styles.line}></div>
                    <Image className={styles.logo} quality={100} priority alt='logo davean' src={logo}/>
                    <div className={styles.line}></div>
                </div>
                <p className={styles.subSubTitle}>Reservar es muy fácil, solo tienes que seguir estos pasos:</p>
            </div>

            <div className={styles.icons}>
                <div className={styles.iconContainer}>
                    <Image className={styles.icon} quality={100} priority alt='icono pack' src={icon1}/>
                    <div className={styles.iconText}>Elige la opción que más te guste: Pack Básico, Pro o Deluxe</div>
                </div>

                <div className={styles.iconContainer}>
                    <Image className={styles.icon} quality={100} priority alt='icono calendario' src={icon2}/>
                    <div className={styles.iconText}>Elige la fecha y hora que se adapte mejor a tus necesidades</div>
                </div>

                <div className={styles.iconContainer}>
                    <Image className={styles.icon} quality={100} priority alt='icono reservar' src={icon3}/>
                    <div className={styles.iconText}>Completa la reserva con un pago inicial y ¡Listo!</div>
                </div>
            </div>

            <div className={styles.gift}>
                <Image className={styles.giftImg} quality={100} priority alt='icono regalo' src={regalo}/>
                <h1 className={styles.giftTitle}>¡NOSOTROS REGALAMOS!</h1>
                <p className={styles.giftDescription}>Reserva tu sesión antes del 31 de enero y consigue GRATIS una fotografía impresa en 30x40 cm de la foto que más os guste de la sesión.</p>
            </div>

        </div>
    )
}