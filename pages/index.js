import React from 'react'
import Head from 'next/head'

import Posts from '../components/Posts'

function FirstPage() {
    return(
        <div className="App">
            <Head>
                <link rel="stylesheet" href="/static/app.css"/>
            </Head>
            <Posts />
        </div>
    )
}

export default FirstPage