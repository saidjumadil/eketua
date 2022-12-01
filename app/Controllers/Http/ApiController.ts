// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Kecamatan from "App/Models/Daerah/Kecamatan";
import Kota from "App/Models/Daerah/Kota";
import Provinsi from "App/Models/Daerah/Provinsi";
import Kegiatan from "App/Models/Kegiatan";

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
        return await Kegiatan.query().whereRaw('MONTH(tanggal) = ?', [parseInt(bulan) + 1]).andWhereRaw('YEAR(tanggal) = ?', [tahun])
    }
}
