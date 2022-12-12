import { Grid } from '@mui/material'
import Input from 'UI/components/input/Input'
import ButtonContained from 'UI/components/button/ButtonContained'
import { FC, FormEvent, RefObject } from 'react'
import Layout from 'UI/layout/Layout'

interface LoginFormProps {
    inputRef: RefObject<HTMLInputElement>
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

const LoginForm: FC<LoginFormProps> = ({ inputRef, handleSubmit }) => (
    <form onSubmit={(e) => handleSubmit(e)}>
        <Layout>
            <Grid item xs={12}>
                <Input
                    inputRef={inputRef}
                    label={'Nickname'}
                    name={'nickname'}
                    placeholder={'Type your nickname'}
                />
            </Grid>
            <Grid item xs={12}>
                <ButtonContained text={'Login'} />
            </Grid>
        </Layout>
    </form>
)

export default LoginForm
