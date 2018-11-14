import React, { Component }  from 'react'
import CodeDocs from '../../components/code-docs'
import Button from '../../components/button'
import Modal from '../../components/modal'

export default class Modals extends Component {
    state = {
        isModalOpen: false
    }
    openModal = e => {
        this.setState({
            isModalOpen: true
        })
    }
    closeModal = e => {
        this.setState({
            isModalOpen: false
        })
    }
    render() {
        const { isModalOpen } = this.state
        return <div className='ws-card'>
            <h2>Files</h2>
            <CodeDocs title='upload' code={
                <div>
                    <div>
                        <Button onClick={this.openModal}>Show Modal</Button>
                    </div>
                    {/* <Modal
                        isOpen={isModalOpen}
                        onClose={this.closeModal}
                        header={`bilo-ui modal`}
                        content={
                            <div>This is the modal content</div>
                        }
                        footer={
                            <Button onClick={this.closeModal}>Close</Button>
                        }
                    /> */}
                </div>
            } />
        </div>
    }
}