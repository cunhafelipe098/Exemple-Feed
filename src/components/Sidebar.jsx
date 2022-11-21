import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>

            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1609741199432-c3ff173d436b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=40" 
            />
            <div className={styles.profile}>

                <img 
                    className={styles.avatar} 
                    src="https://github.com/cunhafelipe098.png" 
                />
                <strong>Felipe Cnunha</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size="20"/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}