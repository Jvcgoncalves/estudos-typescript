function sendSpaceship(name, captain) {
    const spaceship = {
        name,
        captain,
        speed: 20,
        in_mission: true,
        crew: []
    };
    alert(`A nave ${spaceship === null || spaceship === void 0 ? void 0 : spaceship.name}, comandada pelo capit]ao ${spaceship === null || spaceship === void 0 ? void 0 : spaceship.captain} foi enviada em uma missão`);
    return spaceship;
}
function accelerate(targetSpeed, spaceship) {
    if (spaceship.speed > targetSpeed) {
        alert(`Reduzindo a velociadade da nave ${spaceship.name} para ${targetSpeed} `);
    }
    else if (spaceship.speed < targetSpeed) {
        alert(`Aumentando a velociadade da nave ${spaceship.name} para ${targetSpeed} `);
    }
    else {
        alert(`Mantendo a velociadade da nave ${spaceship.name} para ${targetSpeed} `);
    }
}
const spaceshipName = prompt("Insira o nome da nave");
const spaceshipCaptain = prompt("Insira o nome do capitão da nave");
const currentSpaceship = sendSpaceship(spaceshipName, spaceshipCaptain);
const speed = +prompt("Insira a velociadade da nave na viagem");
accelerate(speed, currentSpaceship);
