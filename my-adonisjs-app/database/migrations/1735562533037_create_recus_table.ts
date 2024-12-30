import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'recus'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_recu')
      table.integer('paiement_id').unsigned().references('id_paiement').inTable('paiements').onDelete('CASCADE')
      table.integer('agents_id').unsigned().references('id_agents').inTable('agents').onDelete('CASCADE')
      table.integer('numero_recu').notNullable()
      table.string('montant').notNullable()
      table.dateTime('date').notNullable()
      table.string('motif').notNullable()
      table.dateTime('heure').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}