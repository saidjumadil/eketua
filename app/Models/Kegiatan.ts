import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Kegiatan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_kegiatan: number

  @column()
  public jenis: string

  @column()
  public warna: string

  @column()
  public judul: string

  @column()
  public deskripsi: number

  @column()
  public tanggal: Date

  @column()
  public id_provinsi: number

  @column()
  public provinsi: string

  @column()
  public id_kota: number

  @column()
  public kota: string

  @column()
  public id_kecamatan: number

  @column()
  public kecamatan: string

  @column()
  public alamat: string

  @column()
  public link: string

  @column()
  public gambar: string

  @column()
  public yt: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
