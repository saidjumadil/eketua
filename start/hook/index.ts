import View from '@ioc:Adonis/Core/View'
import Env from '@ioc:Adonis/Core/Env'
// import { DateTime } from 'luxon'
import Application from '@ioc:Adonis/Core/Application';

View.global('appUrl', (path) => {
  const APP_URL = Env.get('APP_URL')
  return path ? `${APP_URL}/${path}` : APP_URL
})

View.global('path', (path) => {
  const url = Application.tmpPath(path)
  return url
})

const bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember']
const hari = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab']

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

View.global('tanggal', (tanggal) => {
  const date = ('0' + tanggal.getDate()).slice(-2)
  const month = ('0' + (tanggal.getMonth() + 1)).slice(-2)
  const year = tanggal.getFullYear()
  return `${year}-${month}-${date}`
})

View.global('time', (tanggal) => {
  if (tanggal == null) {
    return "00:00"
  }
  const hour = ('0' + tanggal.getHours()).slice(-2)
  const minute = ('0' + (tanggal.getMinutes())).slice(-2)
  return `${hour}:${minute}`
})

View.global('hari', (index) => {return hari[index]})