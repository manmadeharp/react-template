import React from 'react'
import ResponsiveAppBar from '../MaterialUI/AppBar'

/**
 * @author
 * @function Layout
 **/

const Layout = (props) => {
    return(
        <>
            <ResponsiveAppBar/>
            {props.children}
        </>
    )

}

export default Layout