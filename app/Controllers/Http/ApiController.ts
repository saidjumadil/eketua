// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Kecamatan from "App/Models/Daerah/Kecamatan";
import Kota from "App/Models/Daerah/Kota";
import Provinsi from "App/Models/Daerah/Provinsi";
import Kegiatan from "App/Models/Kegiatan";
// import Application from '@ioc:Adonis/Core/Application';
import JenisKegiatan from "App/Models/JenisKegiatan";

export default class ApiController {
    async provinsi(){
        return await Provinsi.query()
    }

    async kota({request}){
        const {id} = request.all()
        return await Kota.query().where('id_provinsi', id)
    }

    async kecamatan({request}){
        const {id} = request.all()
        return await Kecamatan.query().where('id_kota', id)
    }

    async kegiatan({request}){
        const {bulan, tahun} = request.all()
        return await Kegiatan.query().whereRaw('MONTH(tanggal) = ?', [parseInt(bulan) + 1]).andWhereRaw('YEAR(tanggal) = ?', [tahun]).orderBy('tanggal', 'asc')
    }

    async gambar({request}){
        try {
            const {id} = request.all()
            // console.log(request.file('gambar'))
            const kegiatan : any = await Kegiatan.query().where('id', id).first()
            let file : any = []
            if (kegiatan.gambar) {
                file  = kegiatan.gambar.split(',')
            }
            
            const gambar = request.files('gambar')
            for(let item of gambar){
                //simpan gambar
                // await gambar.moveToDisk(`images/${id}/`)
                file.push(item.fileName)
            }
            

            // console.log(file.toString())
            // await Kegiatan.query().where('id', id).update({gambar : file.toString()})
            return {status : true, message : 'Berhasil menambahkan gambar', fig: file}
        } catch (error) {
            console.log(error)
            return {status : false, message : 'Gagal menambahkan gambar'}
        }
        
    }

    async delete_gambar({request}){
        const {id, gambar} = request.all()
        const kegiatan : any = await Kegiatan.query().select('gambar').where('id', id).first()
        let list_gambar = kegiatan.gambar.split(',').filter( e => e != gambar)
        await Kegiatan.query().where('id', id).update('gambar', list_gambar.toString())
    }

    async chart(){
        const jenis = await JenisKegiatan.query()
        let detail : any = []
        for(let e of jenis){
            const jumlah : any = await Kegiatan.query().where('id_kegiatan', e.id)
            detail.push({
                x : e.jenis,
                y : jumlah.length,
                fillColor : `#${e.warna}`
            })
        }
        return {jenis : detail}
    }

    async tambah_galeri({request}){
        const page = request.param('page')
        const limit = 10

        const posts = await Kegiatan.query().paginate(page, limit)
        // console.log(posts.length)
        // const galeri : any = await Kegiatan.query().limit(10).orderBy("tanggal", "desc")
        let list_gambar : any = []
        // let count = 0
        for(let item of posts){
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
        return {galeri : list_gambar}
    }
}
