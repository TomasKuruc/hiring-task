import { FC } from 'react'
import { Alert } from '@mui/material'

interface AlertProps {
    text: string
}

const AppAlert: FC<AlertProps> = ({ text }) => (
    <Alert
        variant={'filled'}
        severity={'error'}
        style={{ minWidth: '300px', marginBottom: '20px' }}>
        {text}
    </Alert>
)

export default AppAlert
