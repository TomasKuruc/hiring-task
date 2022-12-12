import React, { FC, RefObject } from 'react'
import { TextField } from '@mui/material'

interface InputProps {
    placeholder?: string
    name: string
    label: string
    inputRef?: RefObject<HTMLInputElement | undefined>
}

const Input: FC<InputProps> = ({ placeholder, name, label, inputRef }) => (
    <TextField
        type={'text'}
        inputRef={inputRef}
        id='outlined-basic'
        label={label}
        variant='outlined'
        name={name}
        placeholder={placeholder}
        style={{ minWidth: '300px' }}
    />
)

export default Input
