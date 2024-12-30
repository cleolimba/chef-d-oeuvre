import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'clients'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_client')
      table.string('nom').notNullable()
      table.string('postnom').notNullable()
      table.string('prenom').notNullable()
      table.string('email').notNullable()
      table.string('contact').notNullable()
      table.string('adresse').notNullable()
      table.string('sexe').notNullable()
      // table.string('service').notNullable()
      // table.string('grade').notNullable()
      // table.string('fonction').notNullable()
      // table.string('profession').notNullable()
      table.string('mot_de_passe').notNullable()
      table.string('role').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}