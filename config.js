const token = process.env['TOKEN'];
module.exports = {
    app: {
        px: '-',
        token: token,
        playing: 'by DJ Sona ❤️'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {}
    }
};