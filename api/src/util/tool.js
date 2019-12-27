const createAuthCode = (length) => {
    length = length || 6
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let result = ''
    let tmp
    for (let i = 0; i < length; i++) {
        tmp = Math.floor(Math.random() * 10)
        if (i === 0 && tmp === 0) tmp = Math.floor((Math.random() * 9) + 1)
        result += arr[tmp]
    }
    return result
}
const getRandomStr = (length) => {
    length = length || 32
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let pos = chars.length
    let nonces = []
    let i
    for (i = 0; i < length; i++) {
        nonces.push(chars.charAt(Math.floor(Math.random() * pos)))
    }
    return nonces.join('')
}

module.exports = {
    createAuthCode,
    getRandomStr
}