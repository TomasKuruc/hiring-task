import { CSSProperties, FC, ReactNode } from 'react'
import { Grid } from '@mui/material'

interface LayoutProps {
    children: ReactNode | ReactNode[]
    style?: CSSProperties
}

const Layout: FC<LayoutProps> = ({ children, style }) => (
    <Grid
        container
        spacing={2}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={style}>
        {children}
    </Grid>
)

export default Layout
