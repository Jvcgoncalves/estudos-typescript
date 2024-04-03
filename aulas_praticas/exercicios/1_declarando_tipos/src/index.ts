const spaceships: Spaceship[] = []

class Menu{

  static startMenu(){
    let userOption: number

    do{
      userOption = this.menuOptions()
      switch(userOption){
        case 1:
          HandleUserOptionFunctions.saveSpaceship()
        break;
        case 2:
          HandleUserOptionFunctions.addMemberToSpaceshipCrew()
        break;
        case 4:
          alert(HandleUserOptionFunctions.listAllSpaceships())
        break
        case 6:
          alert("Finalizando o sistema...")
        break;
        default:
          alert("Opção inválida!")
      }
    } while(userOption !== 6)
  }

  static menuOptions(): number{
    const userOption = +prompt(`
      Escolha uma opção
      1 - Salvar uma nave
      2 - Adicionar um membro a uma tripulação
      3 - Enviar uma nava para um missão
      4 - Listar todas as naves e suas informações
      5 - Remover um membro de uma nave
      6 - Sair
    `)
    return userOption
  }
}

class HandleUserOptionFunctions{

  static #spaceshipName: string
  static #pilotName: string
  static #crewLimit: number
  static #newCrewMember: string

  static saveSpaceship(){
    this.#spaceshipName = prompt(`Qual o nome da nave`)
    this.#pilotName = prompt(`Qual o nome do piloto da nave`)
    this.#crewLimit = +prompt(`Qual o limite de tripulantes da nave`)
    spaceships.push(new Spaceship({
      shipName: this.#spaceshipName,
      pilot: this.#pilotName,
      crewLimit: this.#crewLimit
    }))  
  }

  static addMemberToSpaceshipCrew(){
    this.#spaceshipName = prompt(`${this.listAllSpaceships()} \n Qual o nome da nave que deseja adicionar tripulante`)
    const shipIndex: number = this.#getShip({name: this.#spaceshipName});
    if(shipIndex < 0) return alert(`Nave não encontrada`)

    this.#newCrewMember = prompt(`Qual o nome do novo tripulante`)
    spaceships[shipIndex].addCrewMember({name: this.#newCrewMember})
  }

  static listAllSpaceships(): string{
    const text:string = spaceships.reduce((finalText, currentText ):string =>{
      finalText += `
      Nome da nave: ${currentText.shipName}
      Nome da nave: ${currentText.pilot}
      Nome da nave: ${currentText.crewLimit}
      Nome da nave: ${currentText.showCrewMembers()}
      Nome da nave: ${currentText.inMission === false ? "Não":"Sim"}
      `      
      return finalText
    }, "") 
    return text
  }

  static #getShip({name}: {name: string }){
    return spaceships.findIndex(ship => ship.shipName.toLocaleLowerCase() === name.toLocaleLowerCase())
  }
}

class Spaceship{

  shipName: string
  pilot: string
  crewLimit: number
  crew: string[] = []
  inMission: boolean = false

  constructor({shipName, pilot, crewLimit}: {shipName: string, pilot: string, crewLimit: number}){
    this.shipName = shipName
    this.pilot = pilot
    this.crewLimit = crewLimit
  }

  addCrewMember({name}: {name: string}){
    if(this.crew.length === this.crewLimit){
      alert(`Não é possível adicionar mais tripulantes, limite da nave atingido`)
      return
    } else{
      this.crew.push(name)
      alert(`Tripulante ${name} adicionado à nave ${this.shipName}`)
    }
  }
  removeCrewMember({name}: {name: string}){
    if(!this.crew.find(member => member === name)){
      alert(`Membro não encontrado`)
      return
    }
    this.crew.filter(member => member !== name)
  }

  showCrewMembers(){
    return this.crew.reduce((finalText,currentText):string =>{
      finalText += `${currentText} - `
      return finalText
    }, "")
  }
}

function start(){
  Menu.startMenu()
}

start()
