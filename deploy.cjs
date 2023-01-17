

const path = require('path')
// import {NodeSSH} from 'node-ssh';
const Client = require('ssh2-sftp-client');
const dist = '/home/www/website/docpal'
const src = path.join(__dirname, '/src/.vuepress/dist')
console.log('Create SFTP client');
const sftp = new Client();

async function main() {
  try{
    console.log('Connecting ...');
      await sftp.connect({
          host: process.env.DEPLOY_IP || '132.148.160.42',
          username:'root',
          password:'password123'
      })
      console.log('Connected');
      sftp.on('upload', info => {
          console.log(`Listener: Uploaded ${info.source}`);
        });
        let rslt = await sftp.uploadDir(src, dist);
        return rslt;
  } catch(err) {
      console.log(err, 'catch error');
  }
  finally {
    console.log('finish');
    sftp.end();
    }
}
// const ssh = new NodeSSH()
// const host = process.env.DEPLOY_IP || '132.148.160.42';
// const options = {
//     host,
//     username: 'root',
//     passphrase: 'password123',
//     privateKey: '/Users/seantsang/.ssh/id_ed25519',
//     tryKeyboard: true,
// }
// console.log(options)
// async function main() {
//     await ssh.connect(options);
//     try {
//         console.log('uploading tar')
//         await ssh.putDirectory( path.join(__dirname, '/src/.vuepress/dist'), '/home/www/website/docpal')
//         console.log('finish upload file')
//     } catch (error) {
//         console.log(error)
//     }
//     ssh.dispose();
// }

main();