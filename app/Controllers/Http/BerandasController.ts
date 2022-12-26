// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import JenisKegiatan from "App/Models/JenisKegiatan"
import Kegiatan from "App/Models/Kegiatan"

export default class BerandasController {
    async index({view}){
        const jenis = await JenisKegiatan.query()
        const kegiatan = await Kegiatan.query().orderBy('tanggal', 'desc').limit(5)
        return view.render('beranda', {jenis, kegiatan})
    }
}
