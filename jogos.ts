


type jogos = {
    type: 'nome' | 'tipo' | 'vendas'
    image: string,
    name: string,
    vendas: string,
}

const data: jogos[] = {

  getAll:() =>{
    return data
  }

  getFromtype: (type: Petype): Pet[] =>{
    return data.filter(item => {
        /*
             se o item type for ugual ao type
             que eu recebi no meu parametro (Petttype)
             então retorne o truepara esse item

        */
       if(item.type == type) {
        return true
       } else {
        return false
       }
    })
  },

  gettFrommName:(name: string): Pet[] => {
    return data.filter
  }
    



  
  
}

  