import React from 'react';

export const Toaster = (props) => {
    return (
        <div className='toaster'>
            {
                
                props.toasts.map((t) => {
                    let toastStyle = t.style || 'default';
                    <div className={`toast-${toastStyle}`}>{t.message}</div>
                })
            }
        </div>
    )
}