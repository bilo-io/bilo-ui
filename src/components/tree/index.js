import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
    componentWillReceiveProps(nextProps, nextState) {
        const { data } = nextProps
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
            ? <Icon name='angle-down'/>
            : <Icon name='angle-right'/>
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
        this.props.onClick()
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        }, console.log('toggled', this.state))
    }

    clickNode = (data, i) => () => {
        if (data.children) {
            this.toggle(i)
        } else {
            this.props.onClick(data, [...this.props.path,i])
        }
    }

    render() {
        const { data, depth, onClick, index, path } = this.props
        const { tree, isOpen } = this.state
        let icon = this.icon(tree)

        return <div className='tree'>
            <TreeNode
                key={`node`}
                icon={icon}
                data={tree}
                path={path}
                index={index}
                depth={depth}
                onClick={ this.clickNode(tree, index) }
            />
            {(tree.isOpen) && (tree.children || []).map((node, i) => {
                icon = this.icon(node)
                return node.children
                    ? <Tree
                        key={i}
                        data={node}
                        depth={depth + 1}
                        index={ i }
                        path={[...path, i]}
                        isOpen={node.isOpen}
                        onClick={this.props.onClick}
                    />
                    : <TreeNode
                        key={i}
                        data={node}
                        path={[...path, index]}
                        depth={depth + 1}
                        icon={icon}
                        isOpen={node.isOpen}
                        onClick={this.clickNode(node, i)}
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