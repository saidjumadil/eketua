import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Kecamatan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public id_kota: number

  @column()
  public nama: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
