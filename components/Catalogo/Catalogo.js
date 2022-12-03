import styles from '../../styles/Catalogo.module.css'

/* import Image from 'next/image' */

export default function Catalogo({ catalogo }) {
    return (
        <div className={styles.container} ref={catalogo}>
            catalogo
        </div>
    )
}