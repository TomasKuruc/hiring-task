import { FC } from 'react'
import { Button } from '@mui/material'

interface ButtonProps {
    text: string
}

const ButtonContained: FC<ButtonProps> = ({ text }) => (
    <Button variant='contained' type={'submit'} size='large' style={{ minWidth: '300px' }}>
        {text}
    </Button>
)

export default ButtonContained
