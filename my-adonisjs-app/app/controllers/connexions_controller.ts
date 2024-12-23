import type { HttpContext } from '@adonisjs/core/http'

export default class ConnexionsController {
    Admin = async (ctx: HttpContext) => {
        console.log('Tentative de connexion');
        
    }
}