import { BaseSchema } from '@adonisjs/lucid/schema'

export default class Agents extends BaseSchema {
  protected tableName = 'agents'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_agents').primary()
      table.string('matricule').notNullable()
      table.string('nom').notNullable()
      table.string('postnom').notNullable()
      table.string('prenom').notNullable()
      table.string('email').notNullable().unique() // Ajout d'une contrainte unique pour l'email
      table.string('contact').notNullable()
      table.string('role').notNullable()
      table.string('sexe').notNullable()

      table.timestamp('created_at', { useTz: true }).defaultTo(this.now())
      table.timestamp('updated_at', { useTz: true }).defaultTo(this.now())
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
