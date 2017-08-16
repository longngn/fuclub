import React from 'react'
import AppContainer from './AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo500 } from 'material-ui/styles/colors'

const customMuiTheme = getMuiTheme({
    palette: {
        primary1Color: indigo500
    },
    flatButton: {
        primaryTextColor: indigo500
    }
})

const Root = () => (
    <MuiThemeProvider muiTheme={customMuiTheme}>
        <AppContainer />
    </MuiThemeProvider>
)

export default Root