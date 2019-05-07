import { execSync } from 'child_process'

const exec = (cmd:string) => execSync(cmd, { stdio: 'inherit'});

exec('npx hexo generate');
exec('npx firebase-tools use machinelabs-blog && npx firebase-tools deploy');
