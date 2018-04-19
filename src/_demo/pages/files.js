import React, { Component }  from 'react'
import CodeDocs from '../../components/code-docs'
import Input from '../../components/input'

export default class Files extends Component {
    render() {
        return (
            <div className='ws-card'>
                <h2>Files</h2>
                <CodeDocs title='upload' code={ 
                    <div>
                        <input name='myFile' type='file' onChange={ (e) => {
                            console.log('file upload changed:', e.target.value)
                            this.setState({
                                ...this.state,
                                file: e.target.value
                            })
                        }}/>
                    </div>
                }/>
                <CodeDocs title='download' code={ 
                    <div>
                        {/* <a href="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png" download>Download</a> */}
                        <a href={ this.state && this.state.file } download>Download</a>
                    </div>
                }/>
            </div>
        )
    }
}