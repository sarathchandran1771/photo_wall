import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import Title from './title'
import Photowall from "./photoWall";
import AddPhoto from './AddPhoto';

function Main() {
    const [post, setPost] = useState([
        {
            id: "0",
            discription: "Beautiful Landscape",
            imageLink: "https://www.firstcry.com/intelli/articles/wp-content/uploads/2022/02/1205174596.jpg"
        },
        {
            id: "1",
            discription: "Aliens",
            imageLink: "https://www.firstcry.com/intelli/articles/wp-content/uploads/2022/02/1205174596.jpg"
        },
        {
            id: "2",
            discription: "On the road",
            imageLink: "https://www.firstcry.com/intelli/articles/wp-content/uploads/2022/02/1205174596.jpg"
        }
    ]);

    const navigate = useNavigate();

    const addPhoto = (postSubmitted) => {
        setPost([...post, postSubmitted]);
        navigate('/');
    }

    const removePhoto = (postRemoved) => {
        setPost(post.filter(postItem => postItem !== postRemoved));
    }

    
    return (
        <div>
            <Routes>
                <Route exact path="/" element={<div>
                    <Title title={'Photowall'} />
                    <Photowall posts={post} onRemovePhoto={removePhoto} />
                </div>} />

                <Route path="/AddPhoto" element={<AddPhoto onAddPhoto={addPhoto} />} />
            </Routes>
        </div>
    );
}

export default Main;
