import React, { Component } from 'react'
import Badges from '../../components/badges'
import CodeDemo from '../../components/code-demo'
import Select from '../../components/select'
import List from '../../components/list'

export default class Lists extends Component {
    state = {
        options: [
            { label: 'first', value: '1', isOn: false, icon: 'help'},
            { label: 'second', value: '2', isOn: true, icon: 'help'},
            { label: 'third', value: '3', isOn: false, icon: 'help'} 
        ]
    }
    clickHandler = (index, item) => {
        console.log('onClick:', index, item)
        const { options } = this.state
        this.setState({
            options: [
                ...options.slice(0, index),
                item,
                ...options.slice(index + 1)
            ]
        }, () => console.log(this.state))
    }
    changeHandler = (index, item) => {
        console.log('onChange:', item)
        const { options } = this.state
        this.setState({
            options: [
                ...options.slice(0, index),
                item,
                ...options.slice(index + 1)
            ]
        }, () => console.log(this.state))
    }
    render() {
        const { options } = this.state
        return (
            <div>
                <CodeDemo title='List with Badge' code={
                    <span>
                        <Badges
                            items={ options }
                            onClose={this.changeHandler}/>
                        <List 
                            multiple    
                            items={ options }
                            onClick={this.clickHandler}
                            onChange={this.changeHandler}
                            />
                    </span>    
                } />
                <CodeDemo title='List with Icon' code={
                    <List 
                    hasIcons
                    items={ options }
                    onClick={this.clickHandler}
                    onChange={this.changeHandler}
                    />
                } />
                <CodeDemo title='List with Checkbox' code={
                    <List 
                        onClick={this.clickHandler}
                        onChange={this.changeHandler}
                        items={ options }
                    />
                } />
                <CodeDemo title='List icon and checkbox' code={
                    <List 
                        multiple    
                        hasIcons
                        items={ options }
                        onClick={this.clickHandler}
                        onChange={this.changeHandler}
                    />
                }/>
            </div>
        )
    }
}