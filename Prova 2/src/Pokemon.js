const pokeData = [
    [
        'Pikachu',
        './resources/pikachu.png',
        'Eletrico',
        '6 kg',
        '0,4 m'],
    [
        'Infernape',
        './resources/infernape.png',
        'Fogo e Lutador',
        '55 kg',
        '1,8 m'],
    
    [
        'Arceus',
        './resources/arceus.png',
        'Normal',
        '320 kg',
        '3,9 m'],
    
    [
        'Dialga',
        './resources/dialga.png',
        'Metal e Dragão',
        '602 kg',
        '6,5 m'],
    
    [
        'Golem',
        './resources/golem.png',
        'Pedra e Terra',
        '300 kg',
        '2,7 m'],
    
    [
        'Primarina',
        './resources/primarina.png',
        'Água e fada',
        '0,8 kg',
        '0,8 m'],
    
    [
        'Blastoise',
        './resources/blastoise.png',
        'Água',
        '85 kg',
        '1,5 m'],
    
    [
        'Blaziken',
        './resources/blaziken.png',
        'Fogo e Lutador',
        '62 kg',
        '1,9 m'],
    
    [
        'Umbreon',
        './resources/umbreon.png',
        'Noturno',
        '23 kg',
        '1,1 m'],
    
    [
        'Rotom',
        './resources/rotom.png',
        'Elétrico e Fantasma',
        '0,3 kg',
        '0,3 m'],
    
    [
        'Urshifu',
        './resources/urshifu.png',
        'Trevas e Lutador',
        '30 kg',
        '1,3 m'],
    
    [
        'Hacker',
        './resources/hacker.png',
        'Inseto',
        '0,1 kg',
        '0,1 m'],
    
]

//tentei fazer require dinâmico mas aparentemente não funciona
//só dá para invocar ele de forma estática, o que complica bastante

export function getImagem(pokenome){ 
    pokenome = pokenome.toLowerCase()
    if(pokenome == "pikachu"){
      return require('./resources/pikachu.png')
    }
    else if(pokenome == "infernape"){
      return require('./resources/infernape.png')
    }
    else if(pokenome == "arceus"){
      return require('./resources/arceus.png')
    }
    else if(pokenome == "dialga"){
      return require('./resources/dialga.png')
    }
    else if(pokenome == "golem"){
      return require('./resources/golem.png')
    }
    else if(pokenome == "primarina"){
      return require('./resources/primarina.png')
    }
    else if(pokenome == "blastoise"){
      return require('./resources/blastoise.png')
    }
    else if(pokenome == "blaziken"){
      return require('./resources/blaziken.png')
    }
    else if(pokenome == "umbreon"){
      return require('./resources/umbreon.png')
    }
    else if(pokenome == "rotom"){
      return require('./resources/rotom.png')
    }
    else if(pokenome == "urshifu"){
      return require('./resources/urshifu.png')
    }
    else{
      return require('./resources/hacker.png')
    }

  }

export {
    pokeData
  }