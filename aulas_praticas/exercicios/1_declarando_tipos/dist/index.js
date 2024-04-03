var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _HandleUserOptionFunctions_spaceshipName, _HandleUserOptionFunctions_pilotName, _HandleUserOptionFunctions_crewLimit, _HandleUserOptionFunctions_newCrewMember, _HandleUserOptionFunctions_getShip;
const spaceships = [];
class Menu {
    static startMenu() {
        let userOption;
        do {
            userOption = this.menuOptions();
            switch (userOption) {
                case 1:
                    HandleUserOptionFunctions.saveSpaceship();
                    break;
                case 2:
                    HandleUserOptionFunctions.addMemberToSpaceshipCrew();
                    break;
                case 4:
                    alert(HandleUserOptionFunctions.listAllSpaceships());
                    break;
                case 6:
                    alert("Finalizando o sistema...");
                    break;
                default:
                    alert("Opção inválida!");
            }
        } while (userOption !== 6);
    }
    static menuOptions() {
        const userOption = +prompt(`
      Escolha uma opção
      1 - Salvar uma nave
      2 - Adicionar um membro a uma tripulação
      3 - Enviar uma nava para um missão
      4 - Listar todas as naves e suas informações
      5 - Remover um membro de uma nave
      6 - Sair
    `);
        return userOption;
    }
}
class HandleUserOptionFunctions {
    static saveSpaceship() {
        __classPrivateFieldSet(this, _a, prompt(`Qual o nome da nave`), "f", _HandleUserOptionFunctions_spaceshipName);
        __classPrivateFieldSet(this, _a, prompt(`Qual o nome do piloto da nave`), "f", _HandleUserOptionFunctions_pilotName);
        __classPrivateFieldSet(this, _a, +prompt(`Qual o limite de tripulantes da nave`), "f", _HandleUserOptionFunctions_crewLimit);
        spaceships.push(new Spaceship({
            shipName: __classPrivateFieldGet(this, _a, "f", _HandleUserOptionFunctions_spaceshipName),
            pilot: __classPrivateFieldGet(this, _a, "f", _HandleUserOptionFunctions_pilotName),
            crewLimit: __classPrivateFieldGet(this, _a, "f", _HandleUserOptionFunctions_crewLimit)
        }));
    }
    static addMemberToSpaceshipCrew() {
        __classPrivateFieldSet(this, _a, prompt(`${this.listAllSpaceships()} \n Qual o nome da nave que deseja adicionar tripulante`), "f", _HandleUserOptionFunctions_spaceshipName);
        const shipIndex = __classPrivateFieldGet(this, _a, "m", _HandleUserOptionFunctions_getShip).call(this, { name: __classPrivateFieldGet(this, _a, "f", _HandleUserOptionFunctions_spaceshipName) });
        if (shipIndex < 0)
            return alert(`Nave não encontrada`);
        __classPrivateFieldSet(this, _a, prompt(`Qual o nome do novo tripulante`), "f", _HandleUserOptionFunctions_newCrewMember);
        spaceships[shipIndex].addCrewMember({ name: __classPrivateFieldGet(this, _a, "f", _HandleUserOptionFunctions_newCrewMember) });
    }
    static listAllSpaceships() {
        const text = spaceships.reduce((finalText, currentText) => {
            finalText += `
      Nome da nave: ${currentText.shipName}
      Nome da nave: ${currentText.pilot}
      Nome da nave: ${currentText.crewLimit}
      Nome da nave: ${currentText.showCrewMembers()}
      Nome da nave: ${currentText.inMission === false ? "Não" : "Sim"}
      `;
            return finalText;
        }, "");
        return text;
    }
}
_a = HandleUserOptionFunctions, _HandleUserOptionFunctions_getShip = function _HandleUserOptionFunctions_getShip({ name }) {
    return spaceships.findIndex(ship => ship.shipName.toLocaleLowerCase() === name.toLocaleLowerCase());
};
_HandleUserOptionFunctions_spaceshipName = { value: void 0 };
_HandleUserOptionFunctions_pilotName = { value: void 0 };
_HandleUserOptionFunctions_crewLimit = { value: void 0 };
_HandleUserOptionFunctions_newCrewMember = { value: void 0 };
class Spaceship {
    constructor({ shipName, pilot, crewLimit }) {
        this.crew = [];
        this.inMission = false;
        this.shipName = shipName;
        this.pilot = pilot;
        this.crewLimit = crewLimit;
    }
    addCrewMember({ name }) {
        if (this.crew.length === this.crewLimit) {
            alert(`Não é possível adicionar mais tripulantes, limite da nave atingido`);
            return;
        }
        else {
            this.crew.push(name);
            alert(`Tripulante ${name} adicionado à nave ${this.shipName}`);
        }
    }
    removeCrewMember({ name }) {
        if (!this.crew.find(member => member === name)) {
            alert(`Membro não encontrado`);
            return;
        }
        this.crew.filter(member => member !== name);
    }
    showCrewMembers() {
        return this.crew.reduce((finalText, currentText) => {
            finalText += `${currentText} - `;
            return finalText;
        }, "");
    }
}
function start() {
    Menu.startMenu();
}
start();
