const getUid = () => new Promise(resolve => {
    chrome.cookies.get({
        url: "https://facebook.com",
        name: "c_user"
    }, cookie => resolve(cookie.value))
})

const getDtsg = () => new Promise(resolve => {
    fetch(
        "https://www.facebook.com/ajax/settings/granular_privacy/search.php?__a=1", 
        { credentials: "include" }
    ).then(response => response.text())
    .then(source => {
        const json = JSON.parse(source.slice(9));
        const dtsgInitialData = json.jsmods.define.find(e => e[0] === "DTSGInitialData")
        const dtsg = dtsgInitialData[2].token;
        resolve(dtsg);
    })
})

const modifyOriginHeader = () => {
    chrome.webRequest.onBeforeSendHeaders.addListener(details => {
            const headers = details.requestHeaders
            const originHeaderIndex = headers.findIndex(header => header.name === "Origin")
            headers[originHeaderIndex].value = "https://www.facebook.com"
            return { requestHeaders: headers };
        },
        { urls: ["https://*.facebook.com/*/dialog/oauth/confirm*"] },
        ["blocking", "requestHeaders"]
    );
}

const getAccessToken = () => new Promise(resolve => {
    modifyOriginHeader()
    Promise.all([getDtsg(), getUid()])
    .then(result => fetch(
        "https://www.facebook.com/v1.0/dialog/oauth/confirm?fb_dtsg=" + result[0] + "&app_id=165907476854626&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&__CONFIRM__=1&__user=" + result[1], 
        {
            method: "POST",
            credentials: "include"
        }
    )).then(response => response.text())
    .then(responseText => {
        const token = responseText.match(/access_token=(.*)(?=&expires_in)/)[1];
        resolve(token)
    })
})

const parseDocumentCookie = (documentCookie) => {
    if (documentCookie === "") return {}
    const cookiesInString = documentCookie.split('; ')
    const cookies = {}
    cookiesInString.forEach(cookie => {
        const separatorIdx = cookie.indexOf('=')
        const firstHalf = cookie.slice(0, separatorIdx)
        const secondHalf = cookie.slice(separatorIdx + 1)
        cookies[firstHalf] = secondHalf
    })
    return cookies
}

const assignDocumentCookie = (cookies) => {
    Object.entries(cookies).forEach(([key, value]) => document.cookie = `${key}=${value}`)
}

const isTokenValid = async (token) => {
    const response = await fetch(`https://graph.facebook.com/v2.10/me?access_token=${token}`)
    const json = await response.json()
    return !json.error
}

const checkToken = async () => {
    const uid = await getUid()
    const cookies = parseDocumentCookie(document.cookie)
    const validToken = cookies.accessToken? await isTokenValid(cookies.accessToken) : null
    if (!cookies.uid || uid != cookies.uid || !validToken) {
        const token = await getAccessToken()
        cookies.uid = uid
        cookies.accessToken = token
        assignDocumentCookie(cookies)
        // console.log('Saving access token to document.cookie successfully')
    }
}

checkToken()