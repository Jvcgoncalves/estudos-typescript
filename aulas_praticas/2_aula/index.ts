const setPilot = async (newPilot: string, spaceship: { name?: string; pilot: string; speed?: number; inMission?: boolean; }) => {
  spaceship.pilot = newPilot;
}

const accelerate = async (targetSpeed: number, spaceship: { name?: string; pilot?: string; speed: any; inMission?: boolean; }) => {
  spaceship.speed = targetSpeed;
}

const sendToMission = async (spaceship: { name?: string; pilot?: string; speed?: number; in_mission: any; }) => {
  spaceship.in_mission = true;
}

const spaceship = {
  name: '',
  pilot: '',
  speed: 0,
  in_mission: false
}

const pilot = "Han solo"

spaceship.name = "Millenium falcon"

setPilot(pilot,spaceship)
accelerate(50,spaceship)
sendToMission(spaceship)

console.log(spaceship);