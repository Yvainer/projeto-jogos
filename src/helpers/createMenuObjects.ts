type menuOptions = '' | 'all' | 'rpg' | 'luta' | 'tiro'| 'corrida'| 'acao'
 
export const createMenuObject = (activeMenu:menuOptions ) =>{
 
    let returnObject = {
        all: false,
        rpg:false,
        luta: false,
        tiro: false,
        corrida:false,
        acao: false,
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
    return returnObject
   
}