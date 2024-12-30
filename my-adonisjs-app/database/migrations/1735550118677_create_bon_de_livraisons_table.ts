import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'bon_de_livraisons'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_bon_de_livraison')
      table
        .integer('clients_id')
        .unsigned()
        .references('id_client')
        .inTable('clients')
        .onDelete('CASCADE') // Supprime le bon si le client est supprimé
      table
        .integer('agents_id')
        .unsigned()
        .references('id_agents')
        .inTable('agents')
        .onDelete('CASCADE') // Supprime le bon si l'agent est supprimé
      table.string('chantiers').notNullable()
      table.string('materiels').notNullable()
      table.string('numero_plaque').notNullable()
      table.string('niveau_gasoil').notNullable()
      table.dateTime('heure_entree').notNullable()
      table.dateTime('heure_sortie').notNullable()
      table.string('numero_requisition').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
