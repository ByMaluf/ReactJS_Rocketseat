import { useState } from 'react';
import Avatar from '../Avatar';
import Comment from '../Comment';
import styles from './Post.module.css'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale';

export default function Post({ author, publishedAt, content }) {

  const [comments, setComments] = useState(['Post muito bacana, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  })

  function handleNewCommentChange(e) {
    event.target.setCustomValidity('')
    const value = e.target.value
    setNewCommentText(value)
  }

  function handleCreateNewComment(e) {
    e.preventDefault();
    setComments((prevComments) => [...prevComments, newCommentText]);
    setNewCommentText('')
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment != commentToDelete;

    })
    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

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
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line =>
          line.type === 'paragraph'
            ?
            <p key={line.content}>{line.content}</p>
            :
            <p key={line.content}><a href='#'>{line.content}</a></p>
        )}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name='comment'
          placeholder='Deixe um comentário...'
          value={newCommentText}
          onChange={(e) => handleNewCommentChange(e)}
          required
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => <Comment key={comment} content={comment} onDeleteComment={deleteComment} />)}
      </div>
    </article>
  );
}