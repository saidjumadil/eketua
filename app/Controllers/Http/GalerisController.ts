// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Kegiatan from "App/Models/Kegiatan"

export default class GalerisController {
    public async index({view}){
        const galeri : any = await Kegiatan.query().limit(30)
        let list_gambar : any = []
        let count = 0
        for(let item of galeri){
            if(item.gambar != null){
                const list = item.gambar.split(',')
                for(let i of list){
                    list_gambar.push(`${item.id}/${i}`)
                    count++
                }
            }
            if (count >= 30) {
                break
            }
        }
        return view.render('galeri', {galeri : list_gambar})
    }
}
