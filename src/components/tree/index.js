import React, {Component} from 'react'
import {Icon, Loader, LoaderType} from '../'
import './style.scss'

export class Tree extends Component {
    componentWillMount() {
        const { data, isOpen } = this.props
        const tree = this.buildTree(data)
        this.setState({
            ...this.state,
            tree
        }, () => console.log(tree))
    }
    buildTree = (data) => {
        let tree = {
            ...data
        }
        if (data.children) {
            tree.isOpen = this.props.isOpen || true
            tree.children = data.children.map( (child) => this.buildTree(child))
        }
        return tree
    }
    toggle = (node) => {
        console.log('toggling: ', node)
    }
    icon = (treeNode) => {
        // Folder
        if (treeNode.children) {
            return treeNode.isOpen
            ? <Icon name='folder-open'/>
            : <Icon name='folder'/>
        }
        // Status Icon
        switch (treeNode.status) {
            case 'error':
                return <Icon color='red' name='exclamation-circle'/>
            case 'warning':
                return <Icon color='orange' name='exclamation-circle'/>
            case 'success':
                return <Icon color='green' name='check-circle'/>
            case 'loading':
                return <Icon color='#00adee' name='spinner' animation='spin'/>
            default:
                return <div className='no-icon'></div>
        }
    }

    toggle = () => {
        console.log('toggling:', this.state)
        this.props.onClick()
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        }, console.log(this.state))
    }

    clickNode = (data) => () => {
        if (data.children) {
            this.toggle()
        } else {
            this.props.onClick(data)
        }
    }

    render() {
        const { data, depth, onClick } = this.props
        const { tree, isOpen } = this.state
        let icon = this.icon(tree)

        return <div className='tree'>
            <TreeNode
                key={`node`}
                icon={icon}
                data={tree}
                depth={depth}
                onClick={ this.clickNode(tree) }
            />
            {(tree.isOpen) && (tree.children || []).map((node, i) => {
                icon = this.icon(node)
                return node.children
                    ? <Tree
                        key={i}
                        data={node}
                        depth={depth + 1}
                        isOpen={node.isOpen}
                        onClick={this.clickNode}
                    />
                    : <TreeNode
                        key={i}
                        data={node}
                        depth={depth + 1}
                        icon={icon}
                        onClick={this.clickNode(node)}
                        isOpen={node.isOpen}
                    />
            })}
        </div>
    }
}

export const TreeNode = ({data, i, depth, icon, onClick}) => {
    const indent = `${depth * 2}em`

    return <div key={i} className='leaf' onClick={onClick}>
        <div style={{
            marginLeft: indent
        }}></div>
        <div className='leaf-icon'>
            {
                icon
                    ? icon
                    : checkbox
            }
        </div>
        <div>{data.title}</div>
    </div>
}

export default Tree