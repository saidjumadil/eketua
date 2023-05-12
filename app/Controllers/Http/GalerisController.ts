// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Kegiatan from "App/Models/Kegiatan"

export default class GalerisController {
    public async index({view, request}){
        const page = request.input('page', 1)
        const limit = 10

        const posts = await Kegiatan.query().paginate(page, limit)
        console.log(posts.length)
        const galeri : any = await Kegiatan.query().limit(10).orderBy("tanggal", "desc")
        let list_gambar : any = []
        // let count = 0
        for(let item of galeri){
            if(item.gambar != null){
                const list = item.gambar.split(',')
                for(let i of list){
                    if (!(i == null || i == "")) {
                        list_gambar.push(`${item.id}/${i}`)
                        // count++
                    }
                }
            }
        }
        return view.render('galeri', {galeri : list_gambar})
    }
}
