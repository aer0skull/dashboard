const gulp = require('gulp'); 
const scpClient = require('scp2');
const homedir = require('os').homedir()
const path = require("path")
const fs = require("fs")
const privateKey = fs.readFileSync(path.resolve(homedir, ".ssh/id_rsa_win"))

function scp(file, dest) {
    return new Promise((resolve, reject) => {
        scpClient.scp(file, {
            host: "hades",
            username: "corentin", 
            path: path.join("/home/corentin/temp_api", dest),
            privateKey
        }, (err) => {
            if (err) {
                console.log(err)
                reject()
            } else {
                resolve()
            }
        })
    })
}

gulp.task('deploy', async () => {
    scp("dist", "public")
});

