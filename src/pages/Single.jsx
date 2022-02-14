import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";

function Single() {
    const {id} = useParams();
    const [post, setPost] = useState({})
    const getPost = (id) => {
        axios.get("http://localhost:5000/posts/" + id)
        .then(result => setPost(result.data))
    }
    useEffect(() => {
        getPost(id)
    }, [id]) 
    return (
        <div className="card mb-3" key={post.id}>
            <div className="card-header">
              post 
            </div>
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
    )
}

export default Single
