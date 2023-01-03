import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { useState } from 'react'


export function Post({author, publishedAt, content}) {

    const [comments, setComments] = useState([
        'post top'
    ])

    const [newCommentText, setNewCommentText] = useState('')
     
    function handleCreateNewComent(newComment) {
        event.preventDefault()
        
        setComments([...comments, newCommentText]);
        setNewCommentText('')
    } 

    function handleNewCommentChange() {
        setNewCommentText(event.target.value)

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
                        return <p key={line.content}>{line.content}</p>
                    } else if (line.type == 'link') {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

         
            <form onSubmit={handleCreateNewComent} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    name="comment"
                    placeholder="Deixe seu comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />
                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               
                
                {comments.map((comment)=><Comment key={comment} content={comment}/>)}                           

            </div>
        </article>
    )
}
