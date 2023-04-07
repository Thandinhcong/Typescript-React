import React, { useState } from 'react';

function CommentForm() {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleCommentChange = (event: any) => {
        setComment(event.target.value);
    }

    const handleCommentSubmit = (event: any) => {
        event.preventDefault();
        setCommentsList([...commentsList, comment]);
        setComment('');
    }

    return (
        <div>
            <form onSubmit={handleCommentSubmit}>
                <textarea value={comment} onChange={handleCommentChange} />
                <button type="submit">Add Comment</button>
            </form>
            <ul>
                {commentsList.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentForm;
