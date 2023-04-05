// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import JenisKegiatan from "App/Models/JenisKegiatan"
import Kegiatan from "App/Models/Kegiatan"
import Application from '@ioc:Adonis/Core/Application';

export default class KegiatansController {
    async index({view}){
        const kegiatan = await Kegiatan.query().whereRaw('MONTH(tanggal) = ?', [new Date().getMonth() + 1]).andWhereRaw('YEAR(tanggal) = ?', [new Date().getFullYear()])
        return view.render('kegiatan/index', {kegiatan})
    }

    async add({view}){
        const jenis = await JenisKegiatan.query()
        return view.render('kegiatan/add', {jenis} )
    }

    async edit({view, params}){
        const kegiatan = await Kegiatan.query().where('id', params.id).first()
        const jenis = await JenisKegiatan.query()
        return view.render('kegiatan/edit', {kegiatan, jenis} )
    }

    async edit_post({request, response, session}){
        const post = request.all()
        console.log(post)
        const jenis = post.jenis.split('-')
        const provinsi = post.provinsi.split('-')
        const kota = post.kota.split('-')
        const kecamatan = post.kecamatan.split('-')

        let list : any = []

        for(let i of post.link_yt){
            const link = i.split('=')
            list.push(link[1].split('&')[0])
        }

        const jenis_detail : any = await JenisKegiatan.query().where('id', jenis[0]).first()

        const data : any = {
            id_kegiatan: jenis[0],
            jenis: jenis[1],
            warna: jenis_detail.warna,
            judul: post.judul,
            deskripsi: post.kegiatan,
            tanggal: post.tanggal,
            id_provinsi: provinsi[0],
            provinsi: provinsi[1],
            id_kota: kota[0],
            kota: kota[1],
            id_kecamatan: kecamatan[0],
            kecamatan: kecamatan[1],
            alamat: post.alamat,
            yt: list.toString(),
            link: post.link ? post.link.toString() : ''
          }

        const add = await Kegiatan.query().where('id', post.id).update(data)
        if (add) {
            session.flash('status', {type : 'success', message : 'Kegiatan Berhasil DiTambahkan'})
            return response.redirect().toRoute('kegiatan.index')
        } else {
            session.flash('status', {type : 'danger', message : 'Kegiatan Gagal DiTambahkan'})
            return response.redirect('back')
        }
    }

    async hapus({params, response}){
        await Kegiatan.query().where('id', params.id).delete()
        return response.redirect().toRoute('kegiatan.index')
    }

    async post({request, response, session}){
        const post = request.all()
        console.log(post)
        const jenis = post.jenis.split('-')
        const provinsi = post.provinsi.split('-')
        const kota = post.kota.split('-')
        const kecamatan = post.kecamatan.split('-')

        let list : any = []

        for(let i of post.link_yt){
            const link = i.split('=')
            list.push(link[1].split('&')[0])
        }

        const jenis_detail : any = await JenisKegiatan.query().where('id', jenis[0]).first()

        const data : any = {
            id_kegiatan: jenis[0],
            jenis: jenis[1],
            warna: jenis_detail.warna,
            judul: post.judul,
            deskripsi: post.kegiatan,
            tanggal: post.tanggal,
            id_provinsi: provinsi[0],
            provinsi: provinsi[1],
            id_kota: kota[0],
            kota: kota[1],
            id_kecamatan: kecamatan[0],
            kecamatan: kecamatan[1],
            alamat: post.alamat,
            yt: list.toString(),
            link: post.link ? post.link.toString() : ''
          }

        console.log(data)
        const add = await Kegiatan.create(data)
        if (add) {
            session.flash('status', {type : 'success', message : 'Kegiatan Berhasil DiTambahkan'})
            return response.redirect().toRoute('kegiatan.index')
        } else {
            session.flash('status', {type : 'danger', message : 'Kegiatan Gagal DiTambahkan'})
            return response.redirect('back')
        }
    }

    async rincian({view, params}){
        const kegiatan : any = await Kegiatan.query().where('id', params.id).first()
        return view.render('kegiatan/rincian', {kegiatan})
    }
}
