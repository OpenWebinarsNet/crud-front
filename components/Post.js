import React from 'react'

class Post extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: {}
        }
    }
    componentDidMount() {
        fetch('https://owcrud-api.now.sh/api/posts/${this.props.params.id}')
            .catch(err => console.error(err))
            .then(res => res.json())
            .then(item => this.setState({ item }))
    }
    render() {
        if(this.state.item.id) {
            return(
                <div className="Post">
                    <div className="Item">
                        <div className="Item-Detail">
                            <h1 className="Post-Title">{this.state.item.title}</h1>
                            <span
                                className="fa fa-pencil"
                                onClick={this.updatePost}
                                data-id={this.state.item.id}
                                data-index={index}
                            />
                            <h3 className="Post-Date">{moment(this.state.item.releaseDate).fromNow()}</h3>
                        </div>
                        <div className="Item-Photo">
                            <img src={this.state.item.image} alt={this.state.item.title}/>
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