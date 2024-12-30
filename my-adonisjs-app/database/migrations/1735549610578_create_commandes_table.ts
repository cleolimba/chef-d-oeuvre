import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'commandes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_commande')
      table.integer('client_id').unsigned().references('id_client').inTable('clients')
      table.dateTime('date_commande').notNullable()
      table.string('echeance').notNullable()
      table.string('concerne').notNullable()
      table.string('observation').notNullable()
      table.string('produit').notNullable()
      table.integer('quantite').notNullable()
      table.integer('tare').notNullable()
      table.integer('poids_brut').notNullable()
      table.integer('poids_net').notNullable()
      table.integer('montant_paiement').notNullable()
      table.dateTime('date_paiement').notNullable()
      table.string('motif_paiement').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}