import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commande_caillasses'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id_commande').unsigned().references('id_commande').inTable('commandes')
      table.integer('id_caillasse').unsigned().references('id_caillasse').inTable('caillasses')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}