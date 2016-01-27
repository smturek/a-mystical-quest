var MysticQuest = MysticQuest || {};

MysticQuest.PreloadState = {
    preload: function() {
        this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loadBar');
        this.preloadBar.anchor.setTo(0.5);
        this.preloadBar.scale.setTo(100, 1);

        this.load.setPreloadSprite(this.preloadBar);

        this.load.tilemap('testLevel', 'assets/levels/tiledTest.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('levelTiles', 'assets/images/tiles.png');
        this.load.image('player', 'assets/images/player.png');
    },
    create: function() {
        this.state.start('Game');
    }
};
