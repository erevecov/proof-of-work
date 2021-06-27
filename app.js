const SHA256 = require('crypto-js/sha256')

let findText = ''
let textToFind = 'b00da'
let it = 0

main()

function main () {
    while (!findText.includes(textToFind)) {
        let res = sha256Handler(createRandomString())

        findText = res.sha

        console.log(res)
    }
}

function sha256Handler(str) {
    it += 1

    return {
        str,
        sha: SHA256(str).toString(),
        it
    }
}

function createRandomString (stringLength = 5) {
    let randomString = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < stringLength; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return randomString
}


