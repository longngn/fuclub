import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import styles from './AddGroupButton.css'

export default ({ onClick }) => (
    <FlatButton className={styles.container} onClick={onClick} style={{ height: '60px' }}>
        <img 
        src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA+CAYAAACY9hNHAAAACXBIWXMAAAsSAAALEgHS3X78AAAFL0lEQVRo3uWbTWjbZhjH/3pl68OS4m97IystdIed2p66wxZWCOywHZbBDoFBt7IP2CGHQaEtjB1LAoXBctgYg+7Yw6CGQS8jkNLt0PTS9ZTDCoXWXWNJ/pJlfdjSu0PjzF6c1E4c1bb+N1sfr348el49j/R/GUopgpJhmGcAJPpsuq8oUjWo62COClpV9UUAi5TS4wBebbVaCd/3+Far1bMfIQyiUQ4sy2oMQ+qEEBWg64Ig/qgo0qOxh1ZV7WuGYb7wPP+YZZmy4zjwfX/o80SjHHiehyjGnlFK71JKv83lMg/GBtowzIRt279Q6s81m2bKsqyRRiUSiSAWkx2O454A+CabTd94qdCaVr7hed779XpVbrfbR56LkiRBkuTHAPNxOp28Eyi0quqLDIPVer2ecRwbQYoQAlmecXieu8vzwgcHmQCHhtY0/bbjuG/W61UeL1HRKIdEIqF5nvdJPp+7dSTQxeI/x0VRvFsu6/lWy8W4KJVKu4SQ77LZzOWRQut6ZY5S/zdd1+IHmY0DyvXf0+nUuyOB1vXKHIBbmlaSxxG4G1yWlT9TqeTbL5wXpgEYAEzTRKNhvFUuV/44MLRhmAnPaxcmAfj/4Ftb6vcHgnZd50GtVk1NCnA3uO97X25tlT4fClrTyjdqtdqxIAqOo1C1WuFZlr1mGGZiIGhdr8y1Wu5C0EXHqFWplOOu66wPBO37/vV6vcZjwtVut9FsNk9vd3t7Q6uqtmxZ5slJy+O91GgYYFnyw77QlOJT0zQDeJlgYG1tLaD8riZUVVvuC62q2nKz2cgHcSFXrlzB0tISNjc3j3wsx7HBMMxne0Sa+WjUvfB+kQaAer0eyHjNppnpzm0CAKWSdsq2rZOYUpmmCUrppR5oliXXbNvCNItS+nrnuU22H1NvTGohMqgsy5Rt27oAAMQwzBOu28phymVZFhiGWQAAYtvWh45j8wiBPM9/bfv2Zt6Z9JJzcOh2GgAIIcwJhETtdituGOY54rpuIjzQHhoN4wxh2YgQFmjPa4Pj+DMRz2sfOqHX1taGKimLxSIAoFAo4N69ewMfd/78eSiKcqjOCwAihwUuFotYWlo60LGFQmHosa5evXroiB8aenZ2Fqurq0NF+ubNm3j69CkWFhYwOzs7VKRHocgoTjI/P4/5+fmB99/Y2NiBPnv2bOC5HaqJLBJ5HmMyiolsUsSyEbiuc59wHFcNT6RZyLJyn/g+fRQe6GhNUaR1AtDbPC+E5fbWAYAIgnid5wUnHNDkCQAQRZGqHBctTTuwKIqglBZ23pwQQjY70/n0QksNQRCv70B7nn9REMSphmYY5u+OP4UAQC6XeSAI4sNpBZYkCQzDrOxUZP9tor+KYjDR7nRKMzMzgYwXi0lat/+sx35RKmnPdF098q8chmFgY2NjqHr9oOJ5AYqirHQbcXqgn3/Aa14K4ntWUMrnX6mmUslkT8PR/SObzVwWRekhIWQqgGVZgef5X+3qsnb9QciFmZn4xBcrzz2lsb/6eUl3QafTyTvRKFeY9NI0mUzVOI4/17ef7vdnJpNajMfjjye1YEkkko7neRf38o3umbwcx5+KxxPlSctvSZJACPtTPp/7ec9CZT/H4CSZ5zrAg7gG9w3jtqf6vUwm1xj3iI/MJtkNnk5nauMK3jHEDgI8EHQH3HHc09lsfisa5cYKOJVKu6IYWxnUAfzCnO6nUJncuxW65Qy9UQ/RwpXejilkS5R23/YhWYy2X94jDMsOB0iFvgtMFUVaD3Iy/BeM390A0X8WJQAAAABJRU5ErkJggg=='
        alt='Add other groups' 
        className={styles.icon}/>
        <p className={styles.label}>Chọn thêm nhóm</p>
    </FlatButton>
)