import React, { Component }  from 'react'
import CodeDemo from '../../components/code-demo'
import Card from '../../components/card'

// https://codepen.io/sdthornton/pen/wBZdXq
export default class Cards extends Component {
    render() {
        return (
            <div className='ws-card'>
                <CodeDemo title='vertical alignment' code={
                    <div>
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
                    </div>
                }/>
                <CodeDemo title='horizontal alignment' code={
                    <div style={{display: 'flex', flexDirection: 'row'}}>
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
                            <br />
                            A card is of responsive dimensions, so their size will generally adapt to wrap the content of it's children
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
                    </div>
                }/>
            </div>
        )
    }
}