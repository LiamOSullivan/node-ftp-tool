import { fetchJsonAsync } from './bcd-async.js'
(async function main() {
  'use strict'
  console.log('start geodemos-join')

  // 1.fetch the map of SA -> group number
  const SA_COUNTY_CORK_ENDPOINT = 'https://services1.arcgis.com/eNO7HHeQ3rUcBllm/arcgis/rest/services/Census2016_Theme5Table2_SA/FeatureServer/0/query?where=COUNTYNAME%20%3D%20\'CORK%20COUNTY\'&outFields=OBJECTID,GUID,COUNTY,COUNTYNAME,SMALL_AREA,Shape__Area,Shape__Length&outSR=4326&f=json'
  const corkSAs = await d3.json(SA_COUNTY_CORK_ENDPOINT)
  console.log(corkSAs.features.length)

  // 2. fetch the SAs geojson for county Cork

  // 3. join group number to each geojson feature

  console.log('finished geodemos-join')
})()
