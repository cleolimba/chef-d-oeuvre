import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class BonDeLivraison extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare commandeId: number

  @column()
  declare agentId: number

  @column()
  declare chantiers: string

  @column()
  declare materiels: string

  @column()
  declare numeroPlaque: string

  @column()
  declare niveauGasoil: string

  @column.dateTime()
  declare heureEntree: DateTime

  @column.dateTime()
  declare heureSortie: DateTime

  @column()
  declare numeroRequisition: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
