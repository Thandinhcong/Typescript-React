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
                <textarea value={comment} className='mt-5 form-control ms-5' style={{ width: "500px" }} onChange={handleCommentChange} />
                <button type="submit" className='btn btn-primary mt-4 ms-5'>Add Comment</button>
            </form>
            <ul>
                {commentsList.map((comment, index) => (
                    <li className='ms-5 mt-2' key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentForm;
