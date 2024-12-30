import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Caillasse extends BaseModel {
  @column({ isPrimary: true })
  declare id_caillasse: number

  @column()
  declare code_caillasse: string

  @column()
  declare produit: string

  @column()
  declare tare: number

  @column()
  declare poids_net: number

  @column()
  declare poids_brut: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
