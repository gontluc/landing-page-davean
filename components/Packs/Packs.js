import styles from '../../styles/Packs.module.css'

/* import Image from 'next/image' */

export default function Packs({ packs }) {
    return (
        <div className={styles.container} ref={packs}>
            Packs
        </div>
    )
}