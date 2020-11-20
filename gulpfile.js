require('dotenv').config()
const gulp = require('gulp'); 
const scpClient = require('scp2');
const homedir = require('os').homedir()
const path = require("path")
const fs = require("fs")

const sshPath = process.env.SSH_PATH ? process.env.SSH_PATH : path.resolve(homedir, ".ssh")

const privateKey = fs.readFileSync(path.join(sshPath, process.env.PRIVATE_KEY_FILE))

function scp(file, dest) {
    return new Promise((resolve, reject) => {
        scpClient.scp(file, {
            host: process.env.HOST,
            username: process.env.USER, 
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
