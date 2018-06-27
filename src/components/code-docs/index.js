import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {Code} from './code'
import { Card, Icon, Tabs, If, PropTypeDocs  } from '../'
import './style.scss'

export const propTypesCodeDocs = {
    code: PropTypes.object,
    isOpen: PropTypes.bool,
    title: PropTypes.string,
}

export class CodeDocs extends Component {
    static propTypes = {
        ...propTypesCodeDocs
    }
    state = {
        isOpen: false,
        activeTab: 0
    }

    toggle() {
        this.setState({
            ...this.state,
            isOpen: !this.state.isOpen
        })
    }

    render() {
        const {isOpen} = this.state
        const { code, title, language } = this.props
        const selectTab = (i) => {
            console.log(`<CodeDocs/>: selectTab(${i})`)
            this.setState({
                activeTab: i
            })
        }

        const renderDocs = () => {
            const { activeTab } = this.state
            const tabs = ['code', 'propTypes']
            return <div>
                <Tabs
                    tabs={tabs}
                    activeTab={activeTab}
                    selectTab={selectTab}
                />
                <If isTrue={activeTab === 0}>
                    <Card className='code-block'>
                        <Code
                            code={code}
                            language={language || 'html'}
                        />
                    </Card>
                </If>
                <If isTrue={activeTab === 1}>
                    <Card>
                        <PropTypeDocs
                            propTypes={propTypesCodeDocs}
                            docs={{ propTypes: propTypesCodeDocs }}
                        />
                    </Card>
                </If>
            </div>
        }

        return this.state && code
            ? (
                <div
                    className='ws-card'
                    style={{
                    paddingBottom: '1em'
                }}>
                    <div className='code-docs'>
                        <span className='title'>{title}</span>
                        <div className='toggle' onClick={() => this.toggle()}>
                            <Icon name='code'/>
                        </div>
                        <br/>
                        <div className='code-block'>
                            {
                                isOpen
                                    ? renderDocs()
                                    : null
                            }
                        </div>
                    </div>
                    {code}
                </div>
            )
            : null
    }
}

export default CodeDocs