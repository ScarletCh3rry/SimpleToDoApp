import React from 'react';
import classes from './MyBtn.module.css'

const MyBtn = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    );
};

export default MyBtn;