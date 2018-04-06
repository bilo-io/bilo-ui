import Loadable from 'react-loadable'

export const AsynComponent = (props) => {
    const { loader, path } = props
    return Loadable({
        loader: () => import(path),
        loading: loader ? loader : <div>Loading...</div>,
    })
}