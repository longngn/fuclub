import React from 'react'
import styles from './GroupPost.css'
import Linkify from 'react-linkify'
import * as utils from '../services/utils'

export default ({ post, admins}) =>{
    const postLink = "https://facebook.com/" + post.id
    const profileLink = "https://facebook.com/" + post.from.id;

    const redirect = (address) => {    
        window.open(address);
    }
    return (
        post.message != null &&
        <div className = {styles.container}>
            {admins.indexOf(post.from.id) >= 0 &&
            <object 
                type="image/svg+xml" 
                data='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMzkgMjM5Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6cmVkO30uY2xzLTJ7ZmlsbDojZmYwO308L3N0eWxlPjwvZGVmcz48dGl0bGU+QXNzZXQgMzwvdGl0bGU+PGcgaWQ9IkxheWVyXzIiIGRhdGEtbmFtZT0iTGF5ZXIgMiI+PGcgaWQ9IkxheWVyXzEtMiIgZGF0YS1uYW1lPSJMYXllciAxIj48cG9seWdvbiBjbGFzcz0iY2xzLTEiIHBvaW50cz0iMjM5IDAgMjM5IDIzOSAxMTkuNSAxMTkuNSAwIDAgMjM5IDAiLz48cG9seWdvbiBjbGFzcz0iY2xzLTIiIHBvaW50cz0iMTcxLjM3IDM5LjcyIDE4MC41MiA1OC4yOSAyMDEgNjEuMjIgMTg2LjI1IDc1LjU5IDE4OS42OCA5NS45NCAxNzEuMzcgODYuNCAxNTMuMTggOTUuOTQgMTU2LjYxIDc1LjU5IDE0MS44NiA2MS4yMiAxNjIuMzQgNTguMjkgMTcxLjM3IDM5LjcyIi8+PC9nPjwvZz48L3N2Zz4=' 
                className={styles.adminPost}
            >Admin's post</object>}
            <div>
                <img onClick = {() => redirect(profileLink)} className = {styles.avatar} src = {post.from.avatar} alt = {post.from.name + "'s avatar"}/>
                <div >
                <a id = {styles.name} href = {profileLink} target = "_blank">{post.from.name}</a>
                </div>
                <div>
                <a id = {styles.time} href = {postLink} target = "_blank">{utils.getDateInVietnamese(post.created_time)}</a>
                </div>
            </div>
            <div className={styles.post}>
                <Linkify properties = {{target: '_blank', style:{color: '#365899'} }}>
                {post.message}
                </Linkify>
                {utils.getHashtags(post.message).length !== 0 &&
                <div>
                    {utils.getHashtags(post.message).map((hashtag, idx) =>
                        <div className={styles.hashtag} key={idx}>
                            {hashtag}
                        </div>
                    )}
                </div>}
            </div>
        </div>
)}