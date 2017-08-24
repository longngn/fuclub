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
    return(
    post.message != null ?
    <div className = {styles.container}>
        {admins.indexOf(post.from.id) >= 0 ?
        <img className={styles.adminPost} src = {require('./admin.svg')} Alt = "admin's post" />
        :null}
        <div>
            <img onClick = {() => redirect(profileLink)} className = {styles.avatar} src = {post.from.avatar} alt = {post.from.name + "'s avatar"}/>
            <div className = {styles.name} onClick = {() => {redirect(profileLink)}}>
                {post.from.name}
            </div>
            <br/>
            <div onClick = {() => redirect(postLink)} id = {styles.time}>
                {utils.getDateInVietnamese(post.created_time)}
            </div>
        </div>
        <div className={styles.post}>
            <Linkify properties = {{target: '_blank', style:{color: '#365899'} }}>
            {post.message}
            </Linkify>
            {utils.getHashtags(post.message).length !== 0 ? 
            <div>{utils.getHashtags(post.message).map(values =>
                <div className={styles.hashtag}>{values}</div>)}
            </div> : null}
        </div>
    </div>
    : null
)}