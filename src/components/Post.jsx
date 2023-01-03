import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        1,
        2,
    ])
     
    function handleCreateNewComent() {
        event.preventDefault()
        setComments([...comments, comments.length + 1]);
    } 

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    });
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>  
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString() }>{publisheddateRelativeToNow}</time>
            </header>

            <div className={styles.content} >
                {content.map(line => {
                    if(line.type == 'paragraph') {
                        return <p>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

         
            <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder="Deixe seu comentário"
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               
                
                {comments.map(()=><Comment/>)}                           

            </div>
        </article>
    )
}
