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
    // rl.close();
})

updateFile = (fileName, update) => {
    console.log('update file:', { fileName, update })
    fs.readFile(fileName, (err, data) => {
        console.log('reading', fileName, data)
        fs.writeFile(fileName, `${update}\n\n${data}`, 'utf8', (err) => {
            console.log('updated CHANGELOG.md: ', update)
        })
    })
}

updatePackage = (oldVersion, newVersion) => {
    fs.readFile('package.json', 'utf8', (err, data) => {
        const fileUpdate = data.replace(oldVersion, `"version": "${newVersion}"`)
        fs.writeFile('package.json', fileUpdate, (err) => {
            if (err) {
                console.err('could not update package.json\n\n'.red, err)
            }
        })
    })
}

updateChangeLog = (newVersion) => {
    rl.question(bumpMessage, (answer) => {
        const updateMessage = `## v${newVersion}\n\n- ${answer}`
        updateFile('CHANGELOG.md', updateMessage)
        updatePackage(package.version, newVersion)
        rl.close()
    })
}

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
        default:
        console.log(`\nYou need to pick 1 | 2 | 3 for a semver update\n`.yellow)    
            process.exit(1)
    }

    console.log(`\n- ${package.version}`.red + `\n+ ${newVersion}\n`.green)

    updateChangeLog(newVersion)
}