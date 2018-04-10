import React, {Component} from 'react'
import {Tree} from '../../'
import {Catch} from '../../'
export class Trees extends Component {
    state = {
        treeData: {
            title: 'My Data Tree',
            children: [
                {
                    title: 'Group 1',
                    children: [
                        {
                            title: 'Nested Group 1',
                            children: [
                                {
                                    title: 'nested 1',
                                    status: 'success'
                                }, {
                                    title: 'Node with really long title, to test the text wrapping capabilities of the tree ' +
                                            'components',
                                    status: 'normal'
                                }, {
                                    title: 'nested 4',
                                    status: 'loading'
                                }
                            ]
                        }, {
                            title: 'Nested 2: Icons',
                            children: [
                                {
                                    title: 'success',
                                    status: 'success'
                                }, {
                                    title: 'warning',
                                    status: 'warning'
                                }, {
                                    title: 'error',
                                    status: 'error'
                                }, {
                                    title: 'loading',
                                    status: 'loading'
                                }, {
                                    title: 'checkbox',
                                    status: 'checkbox'
                                }
                            ]
                        }, {
                            title: 'Data Leaf',
                            status: 'checkbox'
                        }, {
                            title: 'Nested Group 3',
                            children: [
                                {
                                    title: 'Nested 3.3',
                                    children: [
                                        {
                                            title: 'Nested 3.3',
                                            children: [
                                                {
                                                    title: 'nested 1',
                                                    status: 'success'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }, {
                    title: 'Data Leaf'
                }, {
                    title: 'More data',
                }, {
                    title: 'And More ',
                }, {
                    title: 'More Data for everyone',
                }, {
                    title: 'Hello Data',
                }
            ]
        }
    }
    treeClickAction = (item) => () => {
        console.log('leaf clicked: ', item)
    }
    render() {
        const {treeData} = this.state;
        return <div>
            <Tree
                data={treeData}
                depth={0}
                onClick={this.treeClickAction}/>
        </div>
    }
}

export default Trees