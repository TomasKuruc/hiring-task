import { Data } from 'hooks/useLogin'
import { FC } from 'react'
import Layout from 'UI/layout/Layout'
import { Grid, Typography } from '@mui/material'

interface LoggedScreenProps {
    data: Data
}

const LoggedScreen: FC<LoggedScreenProps> = ({ data }) => (
    <Layout>
        <Grid item>
            <Typography
                variant='h1'
                component='h1'
                sx={{
                    fontSize: {
                        lg: '5rem',
                        md: '3.4rem',
                        sm: '2.5rem',
                        xs: '2.2rem',
                    },
                }}>
                User email
            </Typography>
        </Grid>
        <Grid item>
            <Typography
                variant='h2'
                component='h2'
                sx={{
                    fontSize: {
                        lg: '3rem',
                        md: '2rem',
                        sm: '1.8rem',
                        xs: '1.6rem',
                    },
                }}>
                {data.data}
            </Typography>
        </Grid>
    </Layout>
)

export default LoggedScreen
