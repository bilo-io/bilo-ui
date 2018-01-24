import React from 'react'
export default class Switch extends React.Component {
    render() {
        const { isRound, isChecked, onChange } = this.props
        return (
            <label className='switch'>
                <input type='checkbox' checked={ isChecked } onChange={onChange} />
                <div className='slider' className={ isRound ? 'round' : '' }></div>
            </label>
         )
     }
 }