/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'
import './hook'

Route.group(() => {
  Route.on('/').redirect('/login')
  Route.get('login', 'Auth/AuthController.index').as('login')
  Route.post('login', 'Auth/AuthController.login').as('login.check')
})

Route.get('logout', 'Auth/AuthController.logout').as('logout')


Route.get('/beranda','BerandasController.index').as('beranda')
Route.get('/deskripsi', 'DeskripsisController.index').as('deskripsi')

Route.group(() => {
  Route.get('/', 'KegiatansController.index').as('index')
  Route.get('/by-month/:bulan/:tahun', 'KegiatansController.perBulan').as('perBulan')
  Route.get('/rincian/:id', 'KegiatansController.rincian').as('rincian')
  Route.get('/add', 'KegiatansController.add').as('add')
  Route.post('/add', 'KegiatansController.post').as('post')
}).prefix('kegiatan').as('kegiatan')

Route.group(() => {
  Route.get('provinsi', 'ApiController.provinsi').as('provinsi')
  Route.get('kota', 'ApiController.kota').as('kota')
  Route.get('kecamatan', 'ApiController.kecamatan').as('kecamatan')
  Route.get('kegiatan', 'ApiController.kegiatan').as('kegiatan')
}).as('api').prefix('api')