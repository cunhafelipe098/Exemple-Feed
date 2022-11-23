import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src="https://github.com/diego3g.png" />
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.content}</span>
                    </div>  
                </div>

                <time title="8 de maio" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content} >
                <p>Fala Galera</p>
                <p>Acabei de subir mais um conteúdo no meu portifólio</p>
                <p><a href="">felipe.com</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>                            

            </div>
        </article>
    )
}
