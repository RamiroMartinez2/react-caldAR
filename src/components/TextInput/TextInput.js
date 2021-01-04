/* eslint react/prop-types: 0 */
import React from 'react';
import style from './textInput.module.css'

const TextInput = ({
    input,
    meta,
    label,
    placeholder
}) => (
    <div>
        <label className={style.textInputLabel}>{label}</label>
        <input className={style.textInput} {...input} type="text" placeholder={placeholder}/>
        {meta.error && meta.touched && <div className={style.error}>{meta.error}</div>}
    </div>
    );

export default TextInput
