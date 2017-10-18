import React from 'react'
import Head from 'next/head'

import Posts from '../components/Posts'
import Post from '../components/Post'

function FirstPage() {
    return(
        <div className="App">
            <Head>
                <link rel="stylesheet" href="/static/app.css"/>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
            </Head>
<<<<<<< HEAD
            <HashRouter history={history}>
                <div id="Routes">
                    <Route path='/' component={Posts} exact/>
                    <Route path='/:id' component={Post} />
                </div>
            </HashRouter>
=======
            <Posts />
>>>>>>> parent of b2b4c65... [Add] React Router
        </div>
    )
}

export default FirstPage