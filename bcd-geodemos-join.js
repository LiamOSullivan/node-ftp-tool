'use strict'

const fetch = require('node-fetch')

async function main() {

  console.log('start geodemos-join')
  try {
    // 1.fetch the map of SA -> group number
    const SA_COUNTY_CORK_ENDPOINT = 'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Census2016_Theme5Table2_SA/FeatureServer/0/query?where=COUNTYNAME%20%3D%20\'CORK%20COUNTY\'&outFields=OBJECTID,GUID,COUNTY,COUNTYNAME,SMALL_AREA,Shape__Area,Shape__Length&outSR=4326&f=json'
    const corkSAs = await fetchJsonAsyncTimeout(SA_COUNTY_CORK_ENDPOINT)
    console.log(corkSAs)

    // 2. fetch the SAs geojson for county Cork

    // 3. join group number to each geojson feature

    console.log('finished geodemos-join')
  }
  catch (e) {
    console.log(e);
  }
}

const fetchJsonAsyncTimeout = async function (url, duration = 30000) {
  try {
    if (url != null) {
      const res = await Promise.race([fetch(url), new Promise((resolve, reject) => setTimeout(() => reject(new TimeoutError(`Timeout waiting for <b>${url}</b> to respond to our request for data`)), duration)
      )])
      const json = await res.json()
      return json
    } else {
      console.log(`Error trying to fetch invalid url. url is ${url}`)
    }
  } catch (e) {
    console.log(`Error trying to fetch ${url}`)
    return e
  }
}

main()