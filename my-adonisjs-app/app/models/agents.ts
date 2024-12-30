import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Agents extends BaseModel {
  @column({ isPrimary: true })
  declare id_client: number

  @column()
  declare matricule_agent: string

  @column()
  declare nom: string

  @column()
  declare postnom: string

  @column()
  declare prenom: string

  @column()
  declare email: string

  @column()
  declare contact: string

  @column()
  declare role: string

  @column()
  declare sexe: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
