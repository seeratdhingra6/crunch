import React from 'react'
import { Container } from 'react-bootstrap'
import { accessUrl } from './Spotify'

const LoginApi = () => {

    return (
        <div>
            <Container className="d-flex justify-content-center align-items-center"
            style={{minHeight : "100vh"}}>
                <a className="btn btn-success btn-lg" href={accessUrl}>Login with spotify</a>
            </Container>
        </div>
    )
}

export default LoginApi
