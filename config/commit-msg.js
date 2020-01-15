const path = require('path');
const fs = require('fs');
const chalk = require('chalk');

const reg = new RegExp('^\\[(config|bugfix|doc|feature)\\]');

const gitPath = path.join(__dirname, '../', process.env.HUSKY_GIT_PARAMS);
const msg = fs.readFileSync(gitPath, 'utf-8').replace('\n', '');
if(reg.test(msg)) {
    console.log(chalk.green('valid commit msg'));
} else {
    console.log(chalk.red('invalid commit msg.'));
    console.log(chalk.red('for example: [config] xxxx'));
    process.exit(1);
}
