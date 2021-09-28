// sound-player.js
class SoundPlayer {
    constructor() {
        this.foo = 'bar';
    }

    playSoundFile(fileName) {
        return('Playing sound file ' + fileName);
    }
}

module.exports = SoundPlayer;