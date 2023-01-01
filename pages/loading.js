import camara from '../public/images/camara.png'
import boton from '../public/images/boton.png'
import d from '../public/images/d.png'

import Image from 'next/image'

import styles from '../styles/Loading.module.css'

export default function Loading() {
    return (
        <div className={styles.container}>
            <div className={styles.imgs}>
                <Image src={camara} alt='camara logo davean' quality={100} priority className={styles.camara}/>
                <Image src={boton} alt='boton logo davean' quality={100} priority className={styles.boton}/>
                <Image src={d} alt='d logo davean' quality={100} priority className={styles.d}/>
            </div>

            <h1 className={styles.title}>Davean Comuniones</h1>
        </div>
    )
}