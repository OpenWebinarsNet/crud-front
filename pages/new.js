import React from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'

import Form from '../components/Form'
import { configureStore } from '../store'

class AddPost extends React.Component {
    render() {
        return(
            <div className="App">
                <Head>
                    <link rel="stylesheet" href="/static/app.css"/>
                    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
                </Head>
                <Form />
            </div>
        )
    }
}

export default withRedux(configureStore, null, null)(AddPost)