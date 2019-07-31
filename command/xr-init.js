#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const tplObj = require(`${__dirname}/../template`)
const exec = require('child_process').exec


// 下面这两句不能放在 module.exports 方法中，不然会循环很多次，导致内存溢出
program.usage('<template-name> [project-name]')
program.parse(process.argv)

module.exports = () => {

    //当没有输入参数的时候给个提示
    if (program.args.length < 1) return program.help()
    // 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
    // 第一个参数是 git clone template.json中的那个模板，第二个命令就是项目名称（文件夹名）
    let templateName = program.args[0]
    let projectName = program.args[1]
    console.log(['templateName', templateName])
    console.log(['projectName', projectName])
        // 小小校验一下参数
    if (!tplObj[templateName]) {
        console.log(chalk.red('Template does not exit!'))
        return
    }
    if (!projectName) {
        console.log(chalk.red('Project should not be empty!'))
        return
    }
    const url = tplObj[templateName];
    // 执行下载方法并传入参数
    let cmdStr = `git clone ${url} ${projectName}`;
    console.log(chalk.green(`clone project from ${url}`));
    console.log(chalk.green('\n Start generating...'))
    // 出现加载图标
    const spinner = ora("Downloading...");
    spinner.start();
    exec(cmdStr, (error, stdout, stderr) => {
        if (error) {
            console.log(error)
            process.exit()
        }
        console.log(chalk.green('\n √ Generation completed!'))
        console.log(`\n cd ${projectName} && npm install \n`)
        process.exit()
    })
    // 会报 128 的错误。烦人，就用上面 git 原生命令来git clone 远端项目就好了
    // download(
    //     url,
    //     projectName, { clone: true },
    //     err => {
    //         if (err) {
    //             spinner.fail();
    //             console.log(chalk.red(`Generation failed. ${err}`))
    //             console.log(url)
    //             return
    //         }
    //         // 结束加载图标
    //         spinner.succeed();
    //         console.log(chalk.green('Generation completed!'))
    //         console.log('To get started')
    //         console.log(`cd ${projectName}`)
    //     }
    // )
}
