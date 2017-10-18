import React from 'react'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                title: '',
                contents: '',
                image: '',
                releaseDate: '',
                special: ''
            }
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
                        onChange={(ev) => { this.setState({ form: { name: ev.target.value } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="Categories" className="FormInput-Label">Categorías</label>
                    <input
                        type="text"
                        className="FormInput-Input"
                        name="Categories"
                        onChange={(ev) => { this.setState({ form: { contents: ev.target.value } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="ReleaseDate" className="FormInput-Label">Fecha de lanzamiento</label>
                    <input
                        type="date"
                        className="FormInput-Input"
                        name="ReleaseDate"
                        onChange={(ev) => { this.setState({ form: { releaseDate: ev.target.value } }) }} 
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="ImageURL" className="FormInput-Label">URL de la Imagen</label>
                    <input
                        type="text"
                        className="FormInput-Input"
                        name="ImageURL"
                        onChange={(ev) => { this.setState({ form: {  image: ev.target.value } }) }}
                    />
                </div>
                <div className="FormInput">
                    <label htmlFor="Special" className="FormInput-Label">Curso Especial</label>
                    <input
                        type="checkbox"
                        className="FormInput-Input"
                        name="Special"
                        onChange={(ev) => { this.setState({ form: { special: ev.target.value } }) }}
                    />
                </div>
            </form>
        )
    }
}