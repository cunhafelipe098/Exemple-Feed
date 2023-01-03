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
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)

    }

    function handleNewCommentInvalid () {
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    function deleteComment(commentToDelete) {

        const commentsWithoutDeletOne = comments.filter(comment => comment !== commentToDelete)
        setComments(commentsWithoutDeletOne)
    }

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    })

    const publisheddateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true
    });

    const isNewCommetEmpty = newCommentText.length === 0;

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

                <time 
                    title={publishedDateFormatted} 
                    dateTime={publishedAt.toISOString() }
                >
                    {publisheddateRelativeToNow}
                </time>
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
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button disabled={isNewCommetEmpty} type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
               
                
                {comments.map(
                    (comment) => { 
                        return (
                            <Comment 
                                key={comment} 
                                content={comment} 
                                onDeleteComment={deleteComment}
                            />
                        )
                    }
                )}                           

            </div>
        </article>
    )
}
