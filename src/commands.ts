import {ChatInputCommandInteraction, MessageFlags} from "discord.js"

type Command = {
    data: {
        name: string,
    },
    execute: (interaction: ChatInputCommandInteraction) => any
}

export const commands: Map<string, Command> = new Map()

commands.set('test', {
    data: {
        name: 'test',
    },
    execute: async interaction => {
        await interaction.reply({
            content: 'This is a test command',
            flags: MessageFlags.Ephemeral
        })
    }
})