import React from 'react'
import moment from 'moment'
import { connect } from 'react-redux'

import Header from './Header'
import Form from './Form'
import { getPost, updatePost } from '../redux/actions/index'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {},
            showUpdate: false
        }

        this.toggleUpdate = this.toggleUpdate.bind(this)
        this.updateItem = this.updateItem.bind(this)
    }
    toggleUpdate() {
        this.setState({ showUpdate: !this.state.showUpdate })
    }
    updateItem(item) {
        this.props.updatePost(item)
        this.toggleUpdate()
    }
    componentDidMount() {
        this.props.getPost(this.props.id)
    }
    render() {
        if(!this.props.currentPost.loading) {
            let showForm = (this.state.showUpdate) ? (<div className="Update-Form">
                                                        <Form
                                                            type="update"
                                                            item={this.props.currentPost.data}
                                                            updateItem={this.updateItem}
                                                        />
                                                    </div>) : null

            return(
                <div className="App">
                    <Header />
                    {showForm}
                    <div className="Post">
                        <div className="Item">
                            <div className="Item-Detail">
                                <div className="Item-Line">
                                    <h1 className="Post-Title">{this.props.currentPost.data.title}</h1>
                                    <span
                                        className="Post-Icon fa fa-pencil"
                                        onClick={this.toggleUpdate}
                                        data-id={this.props.currentPost.data._id}
                                    />
                                </div>
                                <h3 className="Post-Date">{moment(this.props.currentPost.data.releaseDate).fromNow()}</h3>
                            </div>
                            <div className="Item-Categories">
                                <p>En este curso aprenderás:
                                {
                                    this.props.currentPost.data.contents.map(content => (
                                        <p className="Content-Item">{content}</p>
                                    )) 
                                }
                                </p>
                            </div>
                            <div className="Item-Photo">
                                <img src={this.props.currentPost.data.image} alt={this.props.currentPost.data.title}/>
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

const mapStateToProps = state => {
    return {
        currentPost: state.currentPost
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getPost: (id) => {
            dispatch(getPost(id))
        },
        updatePost: (post) => {
            dispatch(updatePost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)