import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import styles from './AddGroupButton.css'

export default ({ onClick }) => (
    <FlatButton className={styles.container} onClick={onClick} style={{ height: '60px' }}>
        <img   
            className={styles.icon}
            src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUyIDUyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MiA1MjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggZD0iTTI2LDBDMTEuNjY0LDAsMCwxMS42NjMsMCwyNnMxMS42NjQsMjYsMjYsMjZzMjYtMTEuNjYzLDI2LTI2UzQwLjMzNiwwLDI2LDB6IE0yNiw1MEMxMi43NjcsNTAsMiwzOS4yMzMsMiwyNiAgIFMxMi43NjcsMiwyNiwyczI0LDEwLjc2NywyNCwyNFMzOS4yMzMsNTAsMjYsNTB6IiBmaWxsPSIjMDAwMDAwIi8+Cgk8cGF0aCBkPSJNMzguNSwyNUgyN1YxNGMwLTAuNTUzLTAuNDQ4LTEtMS0xcy0xLDAuNDQ3LTEsMXYxMUgxMy41Yy0wLjU1MiwwLTEsMC40NDctMSwxczAuNDQ4LDEsMSwxSDI1djEyYzAsMC41NTMsMC40NDgsMSwxLDEgICBzMS0wLjQ0NywxLTFWMjdoMTEuNWMwLjU1MiwwLDEtMC40NDcsMS0xUzM5LjA1MiwyNSwzOC41LDI1eiIgZmlsbD0iIzAwMDAwMCIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
            alt='Add other groups'
        />
        <p className={styles.label}>Chọn thêm nhóm</p>
    </FlatButton>
)