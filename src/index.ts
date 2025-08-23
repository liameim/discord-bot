import 'dotenv/config'
import {client} from "./discordClient"
import {port, server} from "./webServer"

client.login(process.env.DISCORD_TOKEN)

server.listen(port)