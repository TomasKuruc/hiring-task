import { FC, Fragment, ReactNode } from 'react'

//@todo not working


// @ts-ignore
const withPermission = (WrappedComponent: FC<any>): ReactNode => (props: any) => {
    const data = { error: '' }
    if (data.error === null) {
        return <WrappedComponent {...props} />
    }
    
    return <Fragment>
        <h1>403 forbidden permission</h1>
    </Fragment>
}

withPermission.displayName = 'WithPermission'

export default withPermission
