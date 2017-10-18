import React from 'react'
import Head from 'next/head'

import Post from '../components/Post'

class SinglePage extends React.Component {
    static async getInitialProps({ req }) {
        return { id: req.params.id }
    }
    render() {
        return(
            <div className="App">
                <Head>
                    <link rel="stylesheet" href="/static/app.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </Head>
                <Post id={this.props.id}/>
            </div>
        )
    }
}

export default SinglePage