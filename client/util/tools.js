const checkFileParams = (route, state) => {
    let parentFileId = 'Desktop'
    let parentFileType = 'Desktop'
    if (route.name === 'Folder') {

    } else {

    }

    return { parentFileId, parentFileType }
}

module.exports = {
    checkFileParams
}