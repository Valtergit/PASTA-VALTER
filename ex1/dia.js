var agora = new Date()
var diaSemana = agora.getDay()

/*  
segunda
terca 
quarta
quinta 
sexta
sabado
domindo
*/


switch(diaSemana){
    case 0 :
          console.log('domingo')
    break

    case 1 :
          console.log('segunda')
    break

    case 2 :
          console.log('terca')
    break

    case 3 :
          console.log('quarta')
    break

    case 4 : 
          console.log('quinta')
    break

    case 5 : 
          console.log('sexta')
    break

    case 6 : 
          console.log('sabado')
    break
}

