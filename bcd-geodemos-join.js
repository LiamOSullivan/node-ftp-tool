'use strict'

const fetch = require('node-fetch')

async function main() {

  console.log('start geodemos-join')
  try {
    // 1.fetch the map of SA -> group number
    const map = await fetchJsonAsyncTimeout('./data/cork_clusters_sa_cluster.csv')
    // console.log(corkSAs.features.length)
    // console.log(corkSAs.features[0])


    // 2. fetch the SAs geojson for county Cork
    // const SA_COUNTY_CORK_ENDPOINT = 'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Census2016_Theme5Table2_SA/FeatureServer/0/query?where=COUNTYNAME%20%3D%20\'CORK%20COUNTY\'&outFields=OBJECTID,GUID,COUNTY,COUNTYNAME,SMALL_AREA,Shape__Area,Shape__Length&outSR=4326&f=json'
    // const corkSAs = await fetchJsonAsyncTimeout(SA_COUNTY_CORK_ENDPOINT)
    // console.log(corkSAs.features.length)
    // console.log(corkSAs.features[0])


    // 3. join group number to each geojson feature

    // 4. save to file/s3

    console.log('finished geodemos-join')
    return {}
  }
  catch (e) {
    console.log(e);
    return {}
  }
}

const fetchJsonAsyncTimeout = async function (url, duration = 30000) {
  try {
    if (url != null) {
      const res = await Promise.race([fetch(url), new Promise((resolve, reject) => setTimeout(() => reject(new TimeoutError(`Timeout waiting for <b>${url}</b> to respond to our request for data`)), duration)
      )])
      console.log(res.headers);
      const json = await res.json()
      return json
    } else {
      console.log(`Error trying to fetch invalid url. url is ${url}`)
    }
  } catch (e) {
    console.log(`Error trying to fetch ${url}`)
    throw e
  }
}

class TimeoutError extends Error {
  constructor(message = '') {
    super(message)
    this.name = 'TimeoutError'
  }
}

main()