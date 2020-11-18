const ftp = require('basic-ftp')

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
    console.log(await client.list())
    // await client.uploadFrom('README.md', 'README_FTP.md')
    // await client.downloadTo('README_COPY.md', 'README_FTP.md')
  } catch (err) {
    console.log(err)
  }
  client.close()
}
