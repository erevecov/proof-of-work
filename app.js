const SHA256 = require('crypto-js/sha256')
const chalk = require('chalk')
const prompts = require('prompts')
const {
    performance
} = require('perf_hooks')

main()

async function main () {
    let textToFind = await promptHandler()
    let it = 0
    let startTime = performance.now()

    console.log(`Searching ${textToFind}...`)

    while (true) {
        let str = createRandomString()
        it += 1

        let obj = {
            str,
            sha: SHA256(str).toString(),
            it
        }

        if (obj.sha.includes(textToFind)) {
            obj.time = `${handleTime(startTime)} seconds`

            handleResponse({obj, textToFind})

            break
        }
    }
}

function handleResponse({obj, textToFind}) {
console.log(`
str: ${chalk.green(obj.str)}
sha256: ${obj.sha.split(textToFind).join(chalk.bgGreen(textToFind))}
count: ${obj.it}
time: ${obj.time}
`)
}

async function promptHandler() {
    let res = await prompts({
        type: 'text',
        name: 'value',
        message: 'substring to find (min 1 character lowercase a-f and 0-9):',
        validate: value => (/^[a-f0-9]+$/.test(value) && value.length > 0) ? true : 'min 1 character lowercase (a-f and 0-9)'
    })

    return res.value.toLowerCase()
}

function handleTime(startTime) {
    let endTime = performance.now()
    let timeDiff = endTime - startTime
    timeDiff /= 1000

    return timeDiff.toFixed(3)
}

function createRandomString (stringLength = 10) {
    let randomString = ''
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (let i = 0; i < stringLength; i++) {
        randomString += chars.charAt(Math.floor(Math.random() * chars.length))
    }

    return randomString
}


