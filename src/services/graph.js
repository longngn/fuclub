const graphApiVersion = 'v2.10'

const graph = async (token, resource, params = {}, method = 'GET') => {
    let url = `https://graph.facebook.com/${graphApiVersion}/${resource}?access_token=${token}`
    Object.entries(params).forEach(([key, value]) => {
        url += `&${key}=${value}`
    })
    const response = await fetch(url, { method })
    const json = await response.json()
    return json.data
}

export const getGroups = async (token) => graph(token, 'me/groups', { limit: 9999 })
export const getPostsFromGroup = async (token, groupId) => graph(token, `${groupId}/feed`, { limit: 100 })
export const getCommentsFromPost = async (token, postId) => graph(token, `${postId}/comments`, { limit: 9999 })
export const postCommentToPost = async (token, postId, message) => graph(token, `${postId}/comments`, { message }, 'POST')
export const getUser = async (token) => {
    const userResponse = await fetch(`https://graph.facebook.com/${graphApiVersion}/me?access_token=${token}`)
    const user = await userResponse.json()
    const pictureJson = await graph(token, 'me/picture', { type: 'large', redirect: false })
    user.avatar = pictureJson.url
    return user
}   
// Currently it is impossible to publish post to group
// export const postPostToGroup = async (token, groupId, message) => graph(token, `${groupId}/feed`, { message }, 'POST')