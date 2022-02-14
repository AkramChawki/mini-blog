import React, { useState, useEffect } from 'react'
import Post from "../components/Post";
import axios from "axios";

function Home() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [posts, setPosts] = useState([]);

    const sendPost = () => {
        const post = { title, body };
        axios.post("http://localhost:5000/posts", post)
            .then(() => {
                alert("post added");
                getPosts();
            })
            .catch(() => alert("error"))
    }

    const getPosts = () => {
        axios.get("http://localhost:5000/posts")
            .then(result => setPosts(result.data))
    }

    const deletePost = (id) => {
        axios.delete("http://localhost:5000/posts/" + id)
            .then(() => {
                alert("success");
                getPosts();
            })
            .catch(() => alert("error"))
    }

    useEffect(() => {
        getPosts();
    }, [])
    return (
        <div className="container">
            <h1 className="display-4 text-center py-5">Our Blog</h1>
            <p>{title}</p>
            <p>{body}</p>
            <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" className="form-control mb-3" onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="form-group">
                <label>body</label>
                <textarea name="body" className="form-control mb-3" rows="6" onChange={(e) => setBody(e.target.value)}></textarea>
            </div>
            <button onClick={sendPost} className="btn btn-success form-control mb-5">Add Post</button>

            {
                posts.map(post => (
                    <Post post={post} deletePost={deletePost} />
                ))
            }
        </div>
    )
}

export default Home
