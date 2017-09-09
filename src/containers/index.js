import React from 'react'
import AppContainer from './AppContainer'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { colors } from '../config'

const customMuiTheme = getMuiTheme({
    palette: {
        primary1Color: colors.main
    },
    flatButton: {
        primaryTextColor: colors.main
    }
})

const Root = () => (
    <MuiThemeProvider muiTheme={customMuiTheme}>
        <AppContainer />
    </MuiThemeProvider>
)

export default Root