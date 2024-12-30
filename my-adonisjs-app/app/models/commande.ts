import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Commande extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare clientId: number

  @column()
  declare agentId: number

  @column.dateTime()
  declare dateCommande: DateTime

  @column()
  declare echeance: string

  @column()
  declare concerne: string

  @column()
  declare observation: string

  @column()
  declare produit: string

  @column()
  declare quantite: number

  @column()
  declare tare: number

  @column()
  declare poidsBrut: number

  @column()
  declare poidsNet: number

  @column()
  declare montantPaiement: number

  @column.dateTime()
  declare datePaiement: DateTime

  @column()
  declare motifPaiement: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
