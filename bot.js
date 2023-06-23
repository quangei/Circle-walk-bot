const mineflayer = require('mineflayer')
const { Vec3 } = require('vec3')

const bot = mineflayer.createBot({ 
  username: 'Circle',
  host: 'localhost',
  port: '25565',
  version: '1.8.9' 
})

bot.once('spawn', () => {
  const center = bot.entity.position.clone()
  const radius = 6
  const speed = 2 * Math.PI / (radius * 20)
  let theta = 0

  bot.on('physicTick', () => {
    theta += speed
    const x = center.x + radius * Math.cos(theta)
    const z = center.z + radius * Math.sin(theta)
    const y = bot.entity.position.y
    const target = new Vec3(x, y, z)
    bot.lookAt(target)
    bot.setControlState('forward', true)
  })
})
