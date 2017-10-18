import React from 'react'

function Header() {
    return(
        <div className="Header">
            <div className="Col">
                <a href="/">
                    <img src="https://dc722jrlp2zu8.cloudfront.net/static/img/logos/logo-openwebinars-monocromo.svg" alt=""/>
                </a>
            </div>
            <div className="Col">
                <h2 className="Header-Mini">CRUD</h2>
                <h1 className="Header-Title">Listado de cursos</h1>
            </div>
        </div>
    )
}

export default Header