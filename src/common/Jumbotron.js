import React from 'react'
import { Jumbotron as Jumbo, Container } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
    .jumbotron {
        background: url(https://cms.qz.com/wp-content/uploads/2017/10/magic-mushrooms-psychedelics.jpg?quality=75&strip=all&w=1600&h=900&crop=1) no-repeat fixed bottom;
        background-size: cover;
        color: #000;
        height: 300px;
        position: relative;
        z-index: -2
    }

    .overlay {
        background-color: #000;
        opacity: 0.6;
        position: absolute;
        top: 0;
    }
`

const Jumbotron = props => {
    return <Styles>
        <Jumbo fluid className='jumbo'>
            <div className='overlay'></div>
            <Container>
                <h3>Alice's Evidence</h3>
                <p>Chapter Ten – Lobster Quadrille</p>
            </Container>
        </Jumbo>
    </Styles>
}

export default Jumbotron