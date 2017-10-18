import React from 'react'
import moment from 'moment'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {}
        }

        this.sendForm = this.sendForm.bind(this)
    }
    sendForm(ev) {
        ev.preventDefault()

        if(this.props.type == 'update') {
            fetch('https://owcrud-api.now.sh/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            })
                .catch(err => console.error(err))
                .then(res => res.json())
                .then(item => this.props.updateItem(item))
        } else {
            fetch('https://owcrud-api.now.sh/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state.form)
            })
                .catch(err => console.log(err))
                .then(res => res.json())
                .then(thing => console.log(thing))
        }
    }
    componentDidMount() {
        if(this.props.type == 'update') {
            const elements = document.querySelectorAll('.FormInput-Input')

            elements[0].value = this.props.item.title
            elements[1].value = this.props.item.contents.toString()
            elements[2].value = this.props.item.releaseDate.split('T')[0]
            elements[3].value = this.props.item.image
            elements[4].checked = this.props.item.special

            this.setState({ form: { ...this.state.form, _id: this.props.item._id } })
        }
    }
    render() {
        return(
            <form className="PostForm">
                <div className="FormInput">
                    <label htmlFor="Title" className="FormInput-Label">Título</label>
                    <input
                        type="text"
                        className="FormInput-Input"
                        name="Title"
                        onChange={(ev) => { this.setState({ form: { ...this.state.form, title: ev.target.value } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="Categories" className="FormInput-Label">Categorías</label>
                    <input
                        type="text"
                        className="FormInput-Input"
                        name="Categories"
                        onChange={(ev) => { this.setState({ form: { ...this.state.form, contents: ev.target.value.split(',') } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="ReleaseDate" className="FormInput-Label">Fecha de lanzamiento</label>
                    <input
                        type="date"
                        className="FormInput-Input"
                        name="ReleaseDate"
                        onChange={(ev) => { this.setState({ form: { ...this.state.form, releaseDate: moment(ev.target.value).unix() } }) }} 
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="ImageURL" className="FormInput-Label">URL de la Imagen</label>
                    <input
                        type="text"
                        className="FormInput-Input"
                        name="ImageURL"
                        onChange={(ev) => { this.setState({ form: {  ...this.state.form, image: ev.target.value } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="Special" className="FormInput-Label">Curso Especial</label>
                    <input
                        type="checkbox"
                        className="FormInput-Input"
                        name="Special"
                        onChange={(ev) => { let result = (ev.target.value == 'on') ? true : false
                                            this.setState({ form: { ...this.state.form, special: result } }) }}
                    />
                </div>
                <button onClick={this.sendForm} className="Form-Btn">Publicar curso</button>
            </form>
        )
    }
}

export default PostForm