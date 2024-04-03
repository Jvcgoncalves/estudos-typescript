let input: unknown // Não pode ser atribuido para tipos especificos
let outPut: any // typescript para de ler, não recomendado

input = "Test"
input = 20
input = []

let text: string
text = "1"

function sendSpaceship(spaceship: { pilot: string, copilot?: string }){

}

sendSpaceship({pilot: "eu", copilot: "nos"})
sendSpaceship({pilot: "eu"})

// '?' diz que o parametro é opcional 

function verification(){
  if (false) {
    
  } else {
    let _check: never

    return
  }
}