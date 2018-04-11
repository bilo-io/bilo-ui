const colors = require('colors')
const fs = require('fs')
const package = require('../package.json')
const readline = require('readline');
const semver = require('semver')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log(`${package.name}`.cyan + ` current version ` + `${package.version}`.green)
const bumpMessage = 'Type a description of the release:\n'
const bumpQuestion = `\nWhat kind of changes are you releasing?\n`.yellow +
`\n1) ` + `patch:`.cyan + ` ✓ a bugfix release or only has other minor changes with no changes to the interfaces`.green +
`\n2) ` + `minor:`.cyan + ` ~ a change that has new features, but is backwards-compatible with any existing consumers`.yellow +
`\n3) ` + `major:`.cyan + ` ! a change that includes any backwards-incompatible change`.red +
`\n\nchoose: `

rl.question(bumpQuestion, (answer) => {
    getNewVersion(Number(answer))
    rl.close();
})

getNewVersion = (bumpType) => {
    const version = package.version
    let newVersion
    switch(bumpType) {
        case 1:
            console.log('patch')
            newVersion = `${semver.major(version)}.${semver.minor(version)}.${Number(semver.patch(version))+1}`
            break
        case 2:
            console.log('minor')
            newVersion = `${semver.major(version)}.${Number(semver.minor(version)) + 1}.0`
            break
        case 3:
            console.log('major')
            newVersion = `${Number(semver.major(version)) + 1}.0.0`
            break
    }

    console.log(`${version}`.red + ' ~> ' + `${newVersion}`.green)

    rl.question(bumpMessage, (answer) => {
        console.log('TODO: update version in package.json')
        console.log('TODO: update CHANGELOG.md with message & version')
        rl.close()
    })
}