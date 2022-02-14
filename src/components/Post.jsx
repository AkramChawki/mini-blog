import React from 'react'
import { Link } from 'react-router-dom'

function Post({ post, deletePost }) {
    return (
        <div className="card mb-3" key={post.id}>
            <div className="card-header">
              post 
            </div>
            <div className="card-body">
              <h5 className="card-title"><Link to={"/post/"+ post.id}>{post.title}</Link></h5>
              <p className="card-text">{post.body}</p>
              <a href="#" className="btn btn-danger" onClick={() => deletePost(post.id)}>delete</a>
            </div>
          </div>
    )
}

export default Post
