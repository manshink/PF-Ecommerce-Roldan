import products from "./data"

function getAsyncData() {
    
    console.log("Solicitando datos...")
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")

            console.log('Promesa terminada')
            resolve( products )
        }, 2000 )
        } )

    console.log("Promesa generada.")

    return promiseData;
}

export function GetAsyncDataById(id) {
    
    console.log("Solicitando datos...")
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")

            console.log('Promesa terminada')

            const itemRequested = products.find( product => {return product.id === Number   (id)} )

            if (itemRequested === undefined) reject("Producto no encontrado")

            resolve( itemRequested )
        }, 500 )
        } )

    console.log("Promesa generada.")

    return promiseData;
}

export function GetAsyncDataByCategory(catid) {
    
    console.log("Solicitando datos...")
    
    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false
        
        setTimeout( () => {
            if (errorFatal) reject("algo salio mal!!")

            console.log('Promesa terminada')

            const itemRequested = products.filter( product => {return product.category.toLowerCase() === catid.toLowerCase()} )

            if (itemRequested === undefined) reject("Producto no encontrado")

            resolve( itemRequested )
        }, 500 )
        } )

    console.log("Promesa generada.")

    return promiseData;
}


export default getAsyncData