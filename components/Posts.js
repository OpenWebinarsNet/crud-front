import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import Header from './Header'
import { getPosts, deletePost } from '../redux/actions/index'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.deletePost = this.deletePost.bind(this)
    }
    deletePost(ev) {
        let el = ev.target
        let id = el.dataset.id
        let index = el.dataset.index

         this.props.deletePost(id, index)
    }
    async componentDidMount() {
        await this.props.getPosts()
    }
    render() {
        if(!this.props.posts.loading) {
            return(
                <div className="App">
                    <Header />
                    <div className="Posts">
                        {
                            this.props.posts.data.reverse().map((post, index) => (
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

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts: () => {
            dispatch(getPosts())
        },
        deletePost: (id, index) => {
            dispatch(deletePost(id, index))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)