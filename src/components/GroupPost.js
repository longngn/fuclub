import React from 'react'
import PostPhotos from './PostPhotos.js'
import styles from './GroupPost.css'
import Linkify from 'react-linkify'
import * as utils from '../services/utils'

export default ({ post, admins}) =>{
    const postLink = "https://facebook.com/" + post.id
    const profileLink = "https://facebook.com/" + post.from.id;

    const redirect = (address) => { window.open(address) }
    let AttachmentComponent
    if (post.type === 'photo') AttachmentComponent = () => <PostPhotos photos={utils.extractPhotosFromPost(post)} />
    else AttachmentComponent = () => <div></div>

    return (
        post.message != null &&
        <div className = {styles.container}>
            {admins.indexOf(post.from.id) >= 0 &&
            <object type="image/svg+xml" data={require("./admin.svg")} className={styles.adminPost}>
            Admin's post
            </object>}
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
            {post.type !== 'status' && 
                <div className={styles.attachment}>
                    <AttachmentComponent />
                </div>
            }
        </div>
)}