const graphApiVersion = 'v2.10'

const graph = async (token, resource, params = {}, method = 'GET') => {
    let url = `https://graph.facebook.com/${graphApiVersion}/${resource}?access_token=${token}`
    Object.entries(params).forEach(([key, value]) => {
        url += `&${key}=${value}`
    })
    const response = await fetch(url, { method })
    const json = await response.json()
    return json
}
const node = graph
const edge = async (...args) => {
    const json = await graph(...args)
    return json.data
}

export const getGroupsOfUser = (token) => edge(token, 'me/groups', { limit: 9999 })
export const getCommentsFromPost = (token, postId) => edge(token, `${postId}/comments`, { limit: 9999 })
export const postCommentToPost = (token, postId, message) => edge(token, `${postId}/comments`, { message }, 'POST')
export const getSelfUser = async (token) => {
    const user = await node(token, 'me')
    const pictureJson = await edge(token, 'me/picture', { type: 'large', redirect: false })
    user.avatar = pictureJson.url
    return user
}
// Currently it is impossible to publish post to group
// export const postPostToGroup = async (token, groupId, message) => graph(token, `${groupId}/feed`, { message }, 'POST')
export const getGroupInfo = async (token, id) => {
    const group = await node(token, `${id}`, { fields: 'name,updated_time,cover' })
    if (group.cover) group.cover = group.cover.source
    return group
}
export const getGroupData = async(token, groupId) => {
    const json = await node(token, `${groupId}`, {
        fields: 'admins.limit(9999),feed.limit(50){attachments,type,message,created_time,from{name,picture.type(large).redirect(false)}}'
    })
    const group = {}
    group.admins = json.admins? json.admins.data : []
    group.feed = json.feed.data
    group.feed.forEach(post => {
        post.from.avatar = post.from.picture.data.url
        delete post.from.picture
    })
    return group
}