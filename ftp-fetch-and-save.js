const ftp = require('basic-ftp')

const REMOTE_PATH = 'public_html/moved_1/m50/'
const LOCAL_PATH = '../cork-data-archive-0⁩/⁨moved_1⁩/m50/'

example()

async function example () {
  const client = new ftp.Client()
  //   console.log(client)
  //   client.ftp.verbose = true
  try {
    await client.access({
      host: 'cphost1.nuim.ie',
      user: 'corkdashboard',
      password: 'Hp$sVEooKQ%o',
      secure: false
    })
    await client.cd(REMOTE_PATH)
    console.log(await client.pwd())
    for (let i = 0; i < 10; i += 1) {
      await client.cd('..')
      console.log(await client.pwd())
      console.log('*****')
      await client.cd('m50')
      console.log(await client.pwd())
      console.log('Loop ' + i)
      const start = new Date()
      console.log('Started at ' + start)
      // start = start.getTime()
      await client.downloadToDir(LOCAL_PATH)
      console.log('Finished download dir contents')
      const downloaded = new Date()
      // downloaded = downloaded.getTime()
      // const elapsed = (downloaded - start) / 1000
      // console.log('Download duration (s):' + elapsed)
      await client.clearWorkingDir()
      console.log('Cleared working dir')
      console.log('*****')
    }
  } catch (err) {
    console.log(err)
  }
  client.close()
}
