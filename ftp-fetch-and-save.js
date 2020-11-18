const ftp = require('basic-ftp')

const REMOTE_PATH = 'public_html/moved_1/m50/m501464535501.json'
const LOCAL_PATH = 'data/moved_1/m50/m501464535501.json'

example()

async function example() {
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
    // console.log(await client.list())
    // await client.uploadFrom('README.md', 'README_FTP.md')
    await client.downloadTo(LOCAL_PATH, REMOTE_PATH)
  } catch (err) {
    console.log(err)
  }
  client.close()
}
