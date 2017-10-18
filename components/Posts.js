import React from 'react'
import moment from 'moment'

import Header from './Header'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

        this.deletePost = this.deletePost.bind(this)

    }
    deletePost(ev) {
        let el = ev.target
        let id = el.dataset.id
        let index = el.dataset.index

        fetch(`https://owcrud-api.now.sh/api/posts/${id}`, {
            method: 'DELETE'
        })
         .catch(err => console.error(err))
         .then(() => {
            let posts = this.state.posts
            posts.splice(index, 1)
            this.setState({ posts })
         })
    }
    componentDidMount() {
        fetch('https://owcrud-api.now.sh/api/posts')
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(posts => this.setState({ posts }))
    }
    render() {
        if(this.state.posts.length > 0) {
            return(
                <div className="App">
                    <Header />
                    <div className="Posts">
                        {
                            this.state.posts.reverse().map((post, index) => (
                                <div className="Posts-Item" key={index}>
                                    <div className="PhotoSegment">
                                        <img src={post.image} alt={post.title}/>
                                    </div>
                                    <div className="DetailsSegment">
                                        <a href={`/post/${post._id}`} className="Post-Link">
                                            <h2 className="Post-Title">{post.title}</h2>
                                        </a>
                                        <h3 className="Post-Date">{moment(post.releaseDate).fromNow()}</h3>
                                        <span
                                            className="fa fa-trash"
                                            onClick={this.deletePost}
                                            data-id={post._id}
                                            data-index={index}
                                        />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>   
            )
        } else {
            return(
                <h3>Cargando...</h3>
            )
        }
    }
}

export default Posts