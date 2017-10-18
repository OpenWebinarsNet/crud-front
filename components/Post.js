import React from 'react'
import moment from 'moment'

import Header from './Header'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }
    componentDidMount() {
        fetch(`https://owcrud-api.now.sh/api/posts/${this.props.id}`)
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(item => this.setState({ item }))
    }
    render() {
        if(this.state.item._id) {
            return(
                <div className="App">
                    <Header />
                    <div className="Post">
                        <div className="Item">
                            <div className="Item-Detail">
                                <div className="Item-Line">
                                    <h1 className="Post-Title">{this.state.item.title}</h1>
                                    <span
                                        className="Post-Icon fa fa-pencil"
                                        onClick={this.updatePost}
                                        data-id={this.state.item._id}
                                    />
                                </div>
                                <h3 className="Post-Date">{moment(this.state.item.releaseDate).fromNow()}</h3>
                            </div>
                            <div className="Item-Categories">
                                <p>En este curso aprenderás:
                                {
                                    this.state.item.contents.map(content => (
                                        <p className="Content-Item">{content}</p>
                                    )) 
                                }
                                </p>
                            </div>
                            <div className="Item-Photo">
                                <img src={this.state.item.image} alt={this.state.item.title}/>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return('Cargando...')
        }
    }
}

export default Post