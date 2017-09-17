import React from 'react'
import styles from './PostPhotos.css'

const Photo = ({ photo, className, style }) => (
    <a href={photo.url}>
        <img className={className} src={photo.src} alt='' style={style}/>
    </a>
)

const LastPhotoOfFourWithOverlay = ({ photo, style, overlayText }) => (
    <a href={photo.url} style={{ position: 'relative' }}>
        <img className={styles.fourPhotos} src={photo.src} alt='' style={style}/>
        <div className={styles.morePhotosOverlay} style={style}>{overlayText}</div>        
    </a>
)

export default ({ photos }) => {
    switch (photos.length) {
        case 0: return <div></div>
        case 1: return <Photo className={styles.onePhoto} photo={photos[0]} />
        case 2: 
            const height = Math.min(500, Math.max(photos[0].height, photos[1].height))
            return (
                <div>
                    <Photo className={styles.twoPhotos} photo={photos[0]} style={{ height: `${height}px` }} />
                    <Photo className={styles.twoPhotos} photo={photos[1]} style={{ height: `${height}px` }} />
                </div>
            )
        case 3:
            let bottomHeight = Math.min(500, Math.max(photos[1].height, photos[2].height))
            return (
                <div>
                    <Photo className={styles.threePhotosTop} photo={photos[0]} />
                    <Photo className={styles.threePhotosBottom} photo={photos[1]} style={{ height: `${bottomHeight}px` }} />
                    <Photo className={styles.threePhotosBottom} photo={photos[2]} style={{ height: `${bottomHeight}px` }} />
                </div>
            )
        case 4:
            let topHeight = Math.min(500, Math.max(photos[0].height, photos[1].height))
            bottomHeight = Math.min(500, Math.max(photos[2].height, photos[3].height))
            return (
                <div>
                    <Photo className={styles.fourPhotos} photo={photos[0]} style={{ height: `${topHeight}px` }} />
                    <Photo className={styles.fourPhotos} photo={photos[1]} style={{ height: `${topHeight}px` }} />
                    <Photo className={styles.fourPhotos} photo={photos[2]} style={{ height: `${bottomHeight}px` }} />
                    <Photo className={styles.fourPhotos} photo={photos[3]} style={{ height: `${bottomHeight}px` }} />
                </div>
            )
        default: 
            topHeight = Math.min(500, Math.max(photos[0].height, photos[1].height))
            bottomHeight = Math.min(500, Math.max(photos[2].height, photos[3].height))
            return (
                <div>
                    <Photo className={styles.fourPhotos} photo={photos[0]} style={{ height: `${topHeight}px` }} />
                    <Photo className={styles.fourPhotos} photo={photos[1]} style={{ height: `${topHeight}px` }} />
                    <Photo className={styles.fourPhotos} photo={photos[2]} style={{ height: `${bottomHeight}px` }} />
                    <LastPhotoOfFourWithOverlay photo={photos[3]} style={{ height: `${bottomHeight}px` }} overlayText={`+${photos.length - 4}`} />
                </div>
            )
    }
}