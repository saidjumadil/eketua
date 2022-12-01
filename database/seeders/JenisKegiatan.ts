import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import JenisKegiatan from 'App/Models/JenisKegiatan'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    JenisKegiatan.createMany([
      {
        jenis : 'Dinas Luar',
        warna : '111D5E'
      }, 
      {
        jenis : 'Forkopimda',
        warna : 'C70039'
      }, 
      {
        jenis : 'Reses',
        warna : 'C0E218'
      }, 
      {
        jenis : 'Kunjuan Konstituen',
        warna : 'F37121'
      }, 
      {
        jenis : 'Kunjungan Tokoh',
        warna : 'FCE700'
      }, 
      {
        jenis : 'Advokasi Warga',
        warna : '00F5FF'
      }, 
      {
        jenis : 'Rapat Dewan',
        warna : 'EA047E'
      }, 
      {
        jenis : 'Sosper - Sosialisasi Perda',
        warna : '184D47'
      }, 
      {
        jenis : 'TOP',
        warna : 'C15050'
      }, 
      {
        jenis : 'Kegiatan Lainnya',
        warna : 'C70039'
      }
    ])
  }
}
