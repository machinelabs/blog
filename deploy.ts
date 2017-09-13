import { execSync } from 'child_process'

const exec = (cmd:string) => execSync(cmd, { stdio: 'inherit'});

exec('hexo generate');
exec('firebase use machinelabs-blog && firebase deploy');