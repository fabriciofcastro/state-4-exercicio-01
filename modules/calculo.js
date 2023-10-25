export function adcao(numberOne, numberTwo) {
  let result = numberOne + numberTwo
  let parImpar = result % 2

  if (parImpar === 0) {
    alert(`Resultado da adcao é ${result} e este número é Par`)
  }else {
    alert(`Resultado da adcao é ${result} e este número é Impar` )
  }
  return result
}

export function multiplicacao(numberOne, numberTwo) {
  let result = numberOne * numberTwo
  let parImpar = result % 2

  if (parImpar === 0) {
    alert(`Resultado da multiplicacao é ${result} e este número é Par`)
  }else {
    alert(`Resultado da multiplicacao é ${result} e este número é Impar` )
  }
  return result
}

export function divisao(numberOne, numberTwo) {
  let result = numberOne / numberTwo
  let parImpar = result % 2

  if (parImpar === 0) {
    alert(`Resultado da divisão é ${result} e este número é Par`)
  }else {
    alert(`Resultado da divisão é ${result} e este número é Impar` )
  }
  return result
}

export function subtracao(numberOne, numberTwo) {
  let result = numberOne - numberTwo
  let parImpar = result % 2

  if (parImpar === 0) {
    alert(`Resultado da subtração é ${result} e este número é Par`)
  }else {
    alert(`Resultado da subtração é ${result} e este número é Impar` )
  }
  return result
}

