import React from 'react'
import styles from './GroupPost.css'
import Linkify from 'react-linkify'
import * as utils from '../services/utils'

export default ({ post }) =>{

    const id = post.id.split("_")
    const postLink = "https://facebook.com/groups/" + id[0] + "/permalink/" + id[1];
    const profileLink = "https://facebook.com/" + post.from.id;

    const redirect = (address) => {    
        window.open(address);
    }
    return(
    <div className = {styles.container} onClick = {() => redirect(postLink)}>
        <div>
            <img className = {styles.avatar} src = {post.from.avatar} alt = {post.from.name + "'s avatar"}/>
            <p className = {styles.name} onClick = {(event) => {
                event.stopPropagation();redirect(profileLink)}
            }>{post.from.name}</p>
            <p id = {styles.time}>{utils.getDateInVietnamese(post.created_time)}</p>
        </div>
        <div className={styles.post}>
            <Linkify properties = {{target: '_blank', onClick: (event) => event.stopPropagation(), style:{color: '#365899'} }}>
            {post.message}
            </Linkify>
            {utils.getHashtags(post.message).length !== 0 ? <p>{utils.getHashtags(post.message).map(values =>
                values)}</p> : ""}
        </div>
    </div>
)}