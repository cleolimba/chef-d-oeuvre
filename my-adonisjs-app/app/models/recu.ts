import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Recu extends BaseModel {
  @column({ isPrimary: true })
  declare id_recu: number

  @column()
  declare paiement_id: number

  @column()
  declare agent_id: number

  @column()
  declare numero_recu: number

  @column()
  declare montant: string

  @column.dateTime()
  declare date: DateTime

  @column()
  declare motif: string

  @column.dateTime()
  declare heure: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
