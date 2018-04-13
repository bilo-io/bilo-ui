import React, {Component} from 'react'
import {
    Catch,
    Tree,
    PropTypeDocs,
    propTypesTree
} from '../../'
import docs from '../../util/proptypes'

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
    treeClickAction = (item, i) => {
        console.log('clicked: ', item, i)
    }
    render() {
        const {treeData} = this.state;
        return <div>
            <PropTypeDocs
                docs={docs.Tree}
                propTypes={propTypesTree}
            />
            <Tree
                data={treeData}
                depth={0}
                index={0}
                path={[]}
                onClick={this.treeClickAction}
            />
        </div>
    }
}

export default Trees