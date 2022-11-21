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