const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

const config = {
  SESSION_ID: process.env.SESSION_ID || 'kord_ai-b7K5f9vyAdgusYqX',
  OWNER_NUMBER: process.env.OWNER_NUMBER || '2348160148832',
  WORKTYPE: process.env.WORKTYPE || 'private',
  PREFIX: process.env.PREFIX || '[.!?]',
  TIMEZONE: process.env.TIMEZONE || 'Africa/Lagos',
  OWNER_NAME: process.env.OWNER_NAME || 'Orefyspace',
  BOT_NAME: process.env.BOT_NAME || 'Orefyspace PERSONAL BOT BY LËGĒNDÃRY LAB STUDIO',
}

function writeEnvFile(filePath) {
  const envText = Object.entries(config)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')
  fs.writeFileSync(filePath, envText)
  console.log('config.env written')
}

writeEnvFile(path.join(process.cwd(), 'config.env'))
console.log('Setup complete.')
