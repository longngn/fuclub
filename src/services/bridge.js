import * as db from './db'
import * as graph from './graph'

export const updateGroupsOnBackground = (accessToken, groupIds) => {
    const getAllGroupData = async (id, groupNode) => {
        const groupPosts = await graph.getPostsFromGroup(accessToken, id)
        const groupMembers = await graph.getGroupMembers(accessToken, id)
        const groupAdmins = await graph.getGroupAdmins(accessToken, id)
        const group = groupNode
        group.feed = JSON.stringify(groupPosts)
        group.members = groupMembers.map(e => e.id)
        group.admins = groupAdmins.map(e => e.id)
        return group
    }
    groupIds.forEach(async id => {
        const groupOnDb = await db.getGroup(id)
        const groupOnGraph = await graph.getGroupInfo(accessToken, id)
        if (groupOnDb === null || groupOnDb.updated_time !== groupOnGraph.updated_time) {
            const groupData = await getAllGroupData(id, groupOnGraph)
            db.updateGroup(groupData)
        }
    })
}

export const updateUserOnBackground = async (accessToken, uid) => {
    const userOnDb = await db.getUser(uid)
    const userOnGraph = await graph.getUser(accessToken, uid)
    if (userOnDb !== null)
        if (userOnDb.name !== userOnGraph.name || userOnDb.avatar !== userOnGraph.avatar) {
            const newUser = Object.assign(userOnDb, userOnGraph)
            db.updateUser(newUser)
        }
}