(async function main() {
  const ftp = require('basic-ftp')
  console.log('started main')
  const REMOTE_PATH = 'public_html/cork/waterLevels/'
  const LOCAL_PATH = '../cork-data-archive-1/waterLevels/'
  // for (let i = 0; i < 10; i += 1) {
  //   const client = new ftp.Client()
  //   //   console.log(client)
  //   //   client.ftp.verbose = true
  //   try {
  //     await client.access({
  //       host: 'cphost1.nuim.ie',
  //       user: 'corkdashboard',
  //       password: 'Hp$sVEooKQ%o',
  //       secure: false
  //     })
  //     console.log('*****')
  //     console.log('*   *')
  //     console.log('*   *')
  //     await client.cd(REMOTE_PATH)
  //     console.log(await client.pwd())
  //     // for (let i = 0; i < 10; i += 1) {
  //     // await client.cd('..')
  //     // console.log(await client.pwd())
  //     // await client.cd('alerts')
  //     // console.log(await client.pwd())
  //     console.log('Loop ' + i)
  //     let date = new Date()
  //     console.log('Started at ' + date)
  //     await client.downloadToDir(LOCAL_PATH)
  //     date = new Date()
  //     console.log('Finished download dir contents at ' + date)
  //     console.log('*****')
  //     await client.clearWorkingDir()
  //     console.log('Cleared working dir')
  //     console.log('*****')
  //     date = new Date()
  //     console.log('Finished at ' + date)
  //     console.log('*   *')
  //     console.log('*   *')
  //     console.log('*****')
  //     // }
  //   } catch (err) {
  //     console.log(err)
  //     client.close()
  //   }
  //   client.close()
  // }
})()
