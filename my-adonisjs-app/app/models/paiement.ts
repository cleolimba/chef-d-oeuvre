import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Paiement extends BaseModel {
  @column({ isPrimary: true })
  declare id_paiement: number

  @column()
  declare id_commande: number

  @column()
  declare numero_paiement: number

  @column()
  declare montant: number

  @column()
  declare mode_paiement: string

  @column.dateTime()
  declare date_paiement: DateTime

  @column()
  declare motif: string

  @column()
  declare libelle: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
