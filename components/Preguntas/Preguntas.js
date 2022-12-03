import styles from '../../styles/Preguntas.module.css'

/* import Image from 'next/image' */

export default function Preguntas({ preguntas }) {
    return (
        <footer className={styles.container} ref={preguntas}>
            Preguntas
        </footer>
    )
}