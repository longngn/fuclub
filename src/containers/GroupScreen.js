import React from 'react'
import Chatbox from './Chatbox'
import GroupFeed from './GroupFeed'
import styles from './GroupScreen.css'

export default ({ group, user }) => {
    return (
        <div className={styles.verticalContainer}>
            <div className={styles.headerBar}>
                <p className={styles.groupName}>{group.name}</p>
                <a className={styles.linkToFb} href={`https://fb.com/${group.id}`} target='_blank'>
                    Xem trên Facebook <ArrowIcon />
                </a>
            </div>
            <div className={styles.horizontalContainer}>
                <Chatbox groupId={group.id} user={user} />
                <GroupFeed group={group} />
            </div>
        </div>
    )
}

const ArrowIcon = () => <img 
    src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4IiB2aWV3Qm94PSIwIDAgNDUxLjg0NiA0NTEuODQ3IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NTEuODQ2IDQ1MS44NDc7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNMzQ1LjQ0MSwyNDguMjkyTDE1MS4xNTQsNDQyLjU3M2MtMTIuMzU5LDEyLjM2NS0zMi4zOTcsMTIuMzY1LTQ0Ljc1LDBjLTEyLjM1NC0xMi4zNTQtMTIuMzU0LTMyLjM5MSwwLTQ0Ljc0NCAgIEwyNzguMzE4LDIyNS45MkwxMDYuNDA5LDU0LjAxN2MtMTIuMzU0LTEyLjM1OS0xMi4zNTQtMzIuMzk0LDAtNDQuNzQ4YzEyLjM1NC0xMi4zNTksMzIuMzkxLTEyLjM1OSw0NC43NSwwbDE5NC4yODcsMTk0LjI4NCAgIGM2LjE3Nyw2LjE4LDkuMjYyLDE0LjI3MSw5LjI2MiwyMi4zNjZDMzU0LjcwOCwyMzQuMDE4LDM1MS42MTcsMjQyLjExNSwzNDUuNDQxLDI0OC4yOTJ6IiBmaWxsPSIjM2Y1MWI1Ii8+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' 
    alt=''
    className={styles.arrowIcon}
/>