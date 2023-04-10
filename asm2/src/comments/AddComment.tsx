import React, { useState } from 'react';
import { IComment, commentForm, schemaComment } from '../interfaces/comment';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AddComment } from '../api/comment';

function CommentForm() {
    const [commentList, setCommentList] = useState<IComment[]>([]);
    const { register, handleSubmit, formState: { errors } } = useForm<commentForm>({
        resolver: yupResolver(schemaComment)
    })

    const handleCommentSubmit = async (comment: commentForm) => {
        const userId = localStorage.getItem('_Id');
        if (!userId) {
            console.log('User ID not found in LocalStorage!');
            return;
        } else {
            console.log(`User ID: ${userId}`);
        }

        const response = await AddComment({
            ...comment,
            userId
        });

        if (response && response.data) {
            setCommentList(prevComments => [...prevComments, response.data]);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleCommentSubmit)}>
                <textarea {...register("description")} className='mt-5 form-control ms-5' style={{ width: "500px" }} />
                <p className='text-danger ' >
                    {errors.description?.message}
                </p>
                <button type="submit" className='btn btn-primary mt-4 ms-5'>Add Comment</button>
            </form>
            <ul>
                {commentList.map((comment, index) => (
                    <li className='ms-5 mt-2' key={index}>{comment.description} - {comment.userId}</li>
                ))}
            </ul>
        </div>
    );
}

export default CommentForm;
