// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {
    async index({ view }) {
        return view.render('login')
    }
  
    async daftar({ view }){
        return view.render('daftar')
    }
  
    //   login function
    public async login({response}){
        return response.redirect().toRoute('beranda')
    }
  
    //   logout function
    public async logout({ auth, response, session }) {
      await auth.logout()
      session.clear()
      return response.redirect().toRoute('login')
    }
}
