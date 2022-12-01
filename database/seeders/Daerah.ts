import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Kecamatan from 'App/Models/Daerah/Kecamatan'
import Kota from 'App/Models/Daerah/Kota'
import Provinsi from 'App/Models/Daerah/Provinsi'
import axios from 'axios'

export default class extends BaseSeeder {
  public async run () {
    let count = 0
    // Provinsi
    const provinsi = await axios.get('http://dev.farizdotid.com/api/daerahindonesia/provinsi')
    console.log(`Jumlah API di provinsi ${count++}`)
    await Provinsi.createMany(provinsi.data.provinsi)
    // console.log(provinsi.data.provinsi)

    //Kota
    let kota : any = []
    count = 0
    for(let item of provinsi.data.provinsi){
      const list_kota : any = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${item.id}`)
      kota = kota.concat(list_kota.data.kota_kabupaten)
      console.log(`Jumlah API di kota/kabupaten ${count++}`)
    }
    await Kota.createMany(kota)
    // console.log(kota)

    //Kecamatan
    count = 0
    let kecamatan = []
    for(let item of kota){
      const list_kecamatan : any = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${item.id}`)
      kecamatan = kecamatan.concat(list_kecamatan.data.kecamatan)
      console.log(`Jumlah API di kecamatan ${count++}`)
    }
    await Kecamatan.createMany(kecamatan)
    // console.log(kecamatan)
  }
}
