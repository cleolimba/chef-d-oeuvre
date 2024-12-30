import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'paiements'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_paiement')
      table.integer('id_commande').unsigned().references('id_commande').inTable('commandes')
      table.integer('numero_paiement').notNullable()
      table.integer('montant').notNullable()
      table.string('mode_paiement').notNullable()
      table.dateTime('date_paiement').notNullable()
      table.string('motif').notNullable()
      table.string('libelle').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}