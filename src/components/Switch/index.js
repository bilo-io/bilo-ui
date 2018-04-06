import React from 'react'
import './style.scss'

export default class Switch extends React.Component {
    render() {
        const { isRound, isChecked, onChange } = this.props
        const defaultOnChange = onChange ? onChange : (e) => console.log('switch not handling ', e.target.value) 
        return (
            <label className='switch'>    
                <input type='checkbox' checked={ isChecked || true } onChange={ defaultOnChange }/>
                <div className='slider' className={ isRound ? 'round' : '' }></div>
            </label>
         )
     }
 }