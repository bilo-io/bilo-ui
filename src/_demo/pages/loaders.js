import React, {Component} from 'react'
import {
    Button,
    Card,
    Icon,
    Loader,
    LoaderType,
    PropTypeDocs,
    propTypesLoader
} from '../../'
import docs from '../../util/proptypes'
import CodeDocs from '../../components/code-docs'

export default class Loaders extends Component {
    render() {
        return (
            <Card className='padded'>
                <h2>Loaders</h2>
                <PropTypeDocs
                    docs={docs.Loader}
                    propTypes={propTypesLoader}
                />
                <CodeDocs
                    code={
                        <div style={{ height: '30em' }}>
                            <Loader type={LoaderType.SPINNER} />
                            <Loader type={LoaderType.RAINBOW}/>
                            <Loader type={LoaderType.FULLSCREEN} />
                            <Loader type={LoaderType.ELLIPSIS} />
                            {/* <Loader type={LoaderType.MDSPINNER} /> */}
                            <Loader type={LoaderType.UI3SPIN} />
                        </div>
                    }
                />
            </Card>
        )
    }
}