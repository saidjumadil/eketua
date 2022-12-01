import View from '@ioc:Adonis/Core/View'
import Env from '@ioc:Adonis/Core/Env'
// import { DateTime } from 'luxon'

View.global('appUrl', (path) => {
  const APP_URL = Env.get('APP_URL')
  return path ? `${APP_URL}/${path}` : APP_URL
})

const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const hari = ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min']

View.global('bulans', {
  0: 'Januari',
  1: 'Februari',
  2: 'Maret',
  3: 'April',
  4: 'Mei',
  5: 'Juni',
  6: 'Juli',
  7: 'Agustus',
  8: 'Sebtember',
  9: 'Oktober',
  10: 'November',
  11: 'Desember',
})

View.global('bulan_array', [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'Sebtember', 'Oktober', 'November', 'Desember'
])

View.global('tipe_kegiatan', [
  'Dinas Luar', 'Forkopimda', 'Reses', 'Kunjuan Konstituen', 'Kunjungan Tokoh', 'Advokasi Warga', 'Rapat Dewan', 'Sosper - Sosialisasi Perda', 'TOP', 'Kegiatan Lainnya'
])

View.global('date', (tanggal) => {
  return `${tanggal.getDate()} ${bulan[tanggal.getMonth()]} ${tanggal.getFullYear()}`
})

View.global('hari', (index) => {return hari[index]})