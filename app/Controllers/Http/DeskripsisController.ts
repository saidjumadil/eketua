// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeskripsisController {
    async index({view}){
        return view.render('deskripsi')
    }
}
