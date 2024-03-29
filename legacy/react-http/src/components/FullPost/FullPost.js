import axios from 'axios'
import React, { Component } from 'react';

import './FullPost.css';

class FullPost extends Component {
    state = {
        post: null
    }

    deletePostHandler = () => {
        axios.delete(`/posts/${this.state.post.id}`)
            .then((response) => {
                console.log(response)
            })
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if (this.props.id) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>;
        }
        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>

            );
        }
        return post;
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.post || (this.state.post && this.state.post.id !== this.props.id)) {
                axios.get(`/posts/${this.props.id}`)
                    .then((response) => {
                        this.setState({ post: response.data })
                    })
            }
        }
    }
}

export default FullPost;