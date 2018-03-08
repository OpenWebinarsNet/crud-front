import React from 'react'
import Head from 'next/head'
import withRedux from 'next-redux-wrapper'

import Posts from '../components/Posts'
import { configureStore } from '../store'

function FirstPage() {
    return(
        <div className="App">
            <Head>
                <link rel="stylesheet" href="/static/app.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
            <Posts />
        </div>
    )
}

export default withRedux(configureStore, null, null)(FirstPage)