import { Navigate, Route, Routes } from 'react-router'
import LoginForm from 'pages/login/LoginForm'
import LoggedScreen from 'pages/logged/LoggedScreen'
import { useLogin } from 'hooks/useLogin'
import Layout from 'UI/layout/Layout'
import AppAlert from 'UI/components/alert/AppAlert'

const AppRoutes = () => {
    const { data, inputRef, handleSubmit } = useLogin()

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {Boolean(data.error) && <AppAlert text={data.data} />}
            <Routes>
                <Route
                    path={'/'}
                    element={<LoginForm inputRef={inputRef} handleSubmit={handleSubmit} />}
                />
                <Route path={'/logged'} element={<LoggedScreen data={data} />} />
                <Route path={'*'} element={<Navigate to={'/'} />} />
            </Routes>
        </Layout>
    )
}

export default AppRoutes
