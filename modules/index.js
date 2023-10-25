import { adcao, multiplicacao, divisao, subtracao } from './calculo.js'

const printResult = document.querySelector(".resultado")

const btn = document.querySelector( '#enviar' )

btn.addEventListener( "click", function ( e )
{
  e.preventDefault()

  let select = document.getElementById( 'opcoes-conta' )
  let value = select.value

  const number1= document.querySelector( '#numberOne' )
  const number2 = document.querySelector( '#numberTwo' )

  let numberOne = Number(number1.value)
  let numberTwo = Number(number2.value)

  
  console.log( value );

  if ( numberOne === numberTwo ) {
    alert( `Os números digitados Número ${ numberOne } é igual a o Número ${ numberTwo }` )
  } else {
    alert( `Os valores digitados Número ${ numberOne } não é igual a o Número ${ numberTwo }` )
  }


  switch ( value ) {
    case 'adcao': {
      printResult.innerHTML = adcao( numberOne, numberTwo )
      
      break
    }

    case 'subtracao': {
      printResult.innerHTML = subtracao( numberOne, numberTwo )
      break
    }

    case 'divisao': {
      printResult.innerHTML = divisao( numberOne, numberTwo )
      break
    }

    case 'multiplicacao': {
      printResult.innerHTML = multiplicacao( numberOne, numberTwo )
      break
    }

    default:
      alert( `Opção iválida!` )
      break;
  }
} )
