const package = require('../package.json')
const exec = require('child_process').exec;
function puts(err, stdout, stderr) { console.log(stdout) }
// exec("ls -la", puts);

exec(`git add -u`, (err, stdout, stderr) => {
    if (err) {
        process.exit(1)
    }
    exec(`git commit -m "version bump: v${package.version}"`, (err, stdout, stderr) => {
        if (err) {
            process.exit(1)
        }
        // exec(`git push origin master`, (err, stdout, stderr) => {
        //     if (err) {
        //         process.exit(1)
        //     }
        //     exec(`npm publish`, (err, stdout, stderr) => {
        //         if (err) {
        //             process.exit(1)
        //         }
        //     })
        // })
    })
})