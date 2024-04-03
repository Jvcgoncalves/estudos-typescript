const spaceship = {
  name: "X-wing",
  speed: 23
}

function accelerate(spaceship: {name: string, speed: number}, speed: number){
  spaceship.speed = speed
}

accelerate(spaceship,50)