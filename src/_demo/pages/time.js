import React, { Component }  from 'react'
import { CodeDocs, Now, Switch } from '../../components'

export default class Time extends Component {
    state = {
        isChecked: true
    }
    render() {
        const { isChecked } = this.state
        return (
            <div>
                {/* <Now date={Date.now().toLocaleTimeString()}/> */}
                {/* <Now date={Date.now().toLocaleTimeString()}format='HH:mm'/> */}
                {/* <Now date={Date.now().toLocaleTimeString()}format='HH:mm:ss' /> */}

                <CodeDocs title='Switches' code={
                    <div>
                        <Switch />
                        <Switch
                            isRound
                            isChecked={isChecked}
                            onChange={this.setState({ isChecked: !isChecked})}
                            />
                        <Switch
                            isRound
                            isChecked={isChecked}
                            onChange={this.setState({ isChecked: !isChecked})}
                            title={'custom switch'}
                        />
                    </div>    
                }/>
            </div>
        )
    }
}