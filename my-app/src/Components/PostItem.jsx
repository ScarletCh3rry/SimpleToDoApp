import React from 'react';
import MyBtn from "./UI/button/MyBtn";
import {useHistory} from 'react-router-dom';

const PostItem = (props) => {
    const router = useHistory()
    return (
        <div className='post'>
            <div className='post__content' style={{marginRight: 7}}>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'>
                <MyBtn style={{marginRight: 7}} onClick={() => router.push(`/posts/${props.post.id}`)}>Open</MyBtn>
                <MyBtn onClick={() => props.remove(props.post)}>Delete</MyBtn>
            </div>
        </div>
    );
};

export default PostItem;