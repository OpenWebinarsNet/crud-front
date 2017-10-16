import React from 'react'
import moment from 'moment'

import Header from './Header'

class Posts extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }

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
                            this.state.posts.map((post) => (
                                <div className="Posts-Item">
                                    <div className="PhotoSegment">
                                        <img src={post.image} alt={post.title}/>
                                    </div>
                                    <div className="DetailsSegment">
                                        <h2 className="Post-Title">{post.title}</h2>
                                        <h3 className="Post-Date">{moment(post.releaseDate).fromNow()}</h3>
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