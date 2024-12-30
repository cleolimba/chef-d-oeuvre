import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'caillasses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_caillasse')
      table.string('code_caillasse').notNullable()
      table.string('produit').notNullable()
      table.integer('tare').notNullable()
      table.integer('poids_net').notNullable()
      table.integer('poids_brut').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}