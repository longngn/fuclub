import React from 'react'
import CircularProgress from 'material-ui/CircularProgress'

const styles = {
    flex: '1 1 auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default () => (
    <div style={styles}>
        <CircularProgress
            size={100}
            thickness={10}
        />
    </div>
)