import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'kegiatans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('id_kegiatan').notNullable()
      table.string('jenis').notNullable()
      table.string('warna').notNullable()
      table.string('judul').notNullable()
      table.text('deskripsi')
      table.date('tanggal')
      table.date('tanggal_akhir')
      table.integer('id_provinsi')
      table.string('provinsi')
      table.integer('id_kota')
      table.string('kota')
      table.integer('id_kecamatan')
      table.string('kecamatan')
      table.string('alamat')
      table.integer('jumlah_peserta')
      table.text('link')
      table.text('gambar')
      table.text('yt')

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
