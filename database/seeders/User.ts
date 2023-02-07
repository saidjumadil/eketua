import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import md5 from 'crypto-js/md5';

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.create({
      username : 'admin',
      nama : 'Admin',
      password : md5('admin').toString(),
      ktp : '0',
      no_hp : '081354132223',
      alamat : 'Banda Aceh',
      email : 's.jumadil.akbar@gmail.com'
    })
  }
}
