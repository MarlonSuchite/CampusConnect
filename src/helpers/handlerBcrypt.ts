//Importamos nuestro encriptador
import bcryptjs from 'bcryptjs'

//Funcion para encriptar
export const encrypt = async(data: string): Promise<string> => {
    try{
        //Encriptamos nuestra data
        const encryptValue = await bcryptjs.hash(data, 10) //.hash('data a encriptar', numero-de-saltos)
        return encryptValue
    }catch(e){
        console.error(e)
        return 'Error al encriptar la data'
    }
}


//Comparar el texto encriptado
export const compare = async(noEncrypt: string,  encryptValue: string): Promise<boolean> => {
    try{
        return await bcryptjs.compare(noEncrypt, encryptValue)//.compare('valor-no-encriptado', 'valor-encriptado')
    }catch(e){
        console.error(e)
        return false
    }
}