import React, { Component }  from 'react'
import CodeDemo from '../../components/code-demo'
import Card from '../../components/card'

// https://codepen.io/sdthornton/pen/wBZdXq
export default class Cards extends Component {
    render() {
        return (
            <div className='ws-card'>
                Cards
                <Card>
                    card depth 1                
                </Card>
                <br />
                <Card depth={'2'}>
                    card depth 2
                </Card>
                <br />
                <Card depth={'3'}>
                    card depth 3
                </Card>
                <br />
                <Card depth={'4'}>
                    card depth 4
                </Card>
                <br />
                <Card depth={'5'}>
                    card depth 5
                </Card>
                <br />
                <h1>cards</h1>
            </div>
        )
    }
}