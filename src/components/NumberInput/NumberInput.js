/* eslint react/prop-types: 0 */
import React from 'react';
import style from './numberInput.module.css'

const NumberInput = ({
    input,
    meta,
    label,
    placeholder
}) => (
    <div>
        <label className={style.numberInputLabel}>{label}</label>
        <input className={style.numberInput} {...input} type="number" placeholder={placeholder}/>
        {meta.error && meta.touched && <div className={style.error}>{meta.error}</div>}
    </div>
    );

export default NumberInput
