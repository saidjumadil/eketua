import View from '@ioc:Adonis/Core/View'
import Env from '@ioc:Adonis/Core/Env'
// import { DateTime } from 'luxon'

View.global('appUrl', (path) => {
  const APP_URL = Env.get('APP_URL')
  return path ? `${APP_URL}/${path}` : APP_URL
})
