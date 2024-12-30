import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Client extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

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
  declare adresse: string

  @column()
  declare sexe: string

  // @column()
  // declare service: string

  // @column()
  // declare grade: string

  // @column()
  // declare fonction: string

  // @column()
  // declare profession: string

  @column()
  declare mot_de_passe: string

  @column()
  declare role: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
