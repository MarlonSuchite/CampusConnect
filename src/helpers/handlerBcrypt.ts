//Importamos nuestro encriptador
import bcryptjs from 'bcryptjs'

//Funcion para encriptar
export const encrypt = async(data: string): Promise<string> => {
    try{
        //Encriptamos nuestra data
        const data = await bcryptjs.hash('data', 10) //.hash('data a encriptar', numero-de-saltos)
        return data
    }catch(e){
        console.error(e)
        return 'Error al encriptar la data'
    }
}