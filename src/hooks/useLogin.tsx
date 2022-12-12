import { FormEvent, RefObject, useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router'

export type Data = {
    error: string | null
    data: string
}

interface UseLoginReturnValues {
    data: Data
    inputRef: RefObject<HTMLInputElement>
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
}

export const useLogin = (): UseLoginReturnValues => {
    const initialData: Data = { error: '', data: '' }
    const [nickname, setNickname] = useState('')
    const [data, setData] = useState(initialData)
    const navigate = useNavigate()
    const location = useLocation()
    const inputRef = useRef<HTMLInputElement>(null)

    const checkUsername = async (username: string) => {
        // simulate API response delay
        await new Promise((res) => setTimeout(res, 100))

        if (RegExp(/^[a-z-_.]+$/i).test(username) === false) {
            return {
                error: 'InvalidFormat',
                data: "username can only consist of characters a-z, A-Z, '-', '_' and '.'",
            }
        }

        if (['admin', 'null', 'root'].includes(username)) {
            return { error: 'AlreadyExists', data: 'this username is already taken' }
        }

        return {
            error: null,
            data: `${username.toLowerCase()}@dig-it-ally.com`,
        }
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        setNickname(event.target[0].value)
    }

    useEffect(() => {
        if (!nickname) {
            location.pathname.includes('logged') && navigate('', { replace: true })
            return
        }

        (async () => {
            try {
                const res = await checkUsername(nickname)
                setData(res)

                // redirect to logged screen after successful login
                if (!res.error) navigate('logged', { replace: true })
            } catch (err) {
                console.error(err)
            }
        })()
    }, [nickname])

    // clear form and alert
    useEffect(() => {
        if (!Boolean(data.error)) return

        const timer = setTimeout(() => {
            setData(initialData)

            if (inputRef.current) {
                inputRef.current.value = ''
            }
        }, 2000)

        return () => clearTimeout(timer)
    }, [data])

    return {
        data,
        inputRef,
        handleSubmit,
    }
}
