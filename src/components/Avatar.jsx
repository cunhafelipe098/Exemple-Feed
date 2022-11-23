import styles from './Avatar.module.css'

export function Avatar ({hasBorder = true, ...props}) {
    
    
    return (
        <div >
            <img 
                className={hasBorder ? styles.avatarWithBorder : styles.avatar } 
                src={props.src}
            />
        </div>
    ) 
}
