import React from 'react'
import ReactDOM from 'react-dom'
import Global from './components/Global'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
    <MuiThemeProvider>
        <Global />
    </MuiThemeProvider>,
    document.getElementById('root')
)
