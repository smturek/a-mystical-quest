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
        this.load.image('enemy', 'assets/images/enemy.png');
        this.load.image('hero', 'assets/images/hero.png');
        this.load.image('heroBox', 'assets/images/hero-box.png');
        this.load.image('actionBox', 'assets/images/action-bar.png');
        this.load.image('monster', 'assets/images/monster.png');
        this.load.image('monsterBox', 'assets/images/monster-box.png');
    },
    create: function() {
        this.state.start('Battle');
    }
};
