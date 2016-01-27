var MysticQuest = MysticQuest || {};

MysticQuest.GameState = {
    create: function() {
        this.player = this.game.add.sprite(this.game.world.centerX - 300, this.game.world.centerY);
        this.game.physics.enable(this.player);
        this.game.camera.follow(this.player);

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.renderLevel();
    },

    update: function() {
        //player movement
        this.player.body.velocity.y = 0;
        this.player.body.velocity.x = 0;

        if(this.cursors.up.isDown) {
          this.player.body.velocity.y -= 50;
        }
        else if(this.cursors.down.isDown) {
          this.player.body.velocity.y += 50;
        }
        if(this.cursors.left.isDown) {
          this.player.body.velocity.x -= 50;
        }
        else if(this.cursors.right.isDown) {
          this.player.body.velocity.x += 50;
        }
    },

    renderLevel: function() {
        this.map = this.game.add.tilemap('testLevel');

        this.map.addTilesetImage('Roguelike', 'levelTiles');

        this.backgroundLayer = this.map.createLayer('tileLayer');
        this.blockingLayer = this.map.createLayer('blockingLayer');

        this.map.setCollisionBetween(1, 2000, true, 'blockingLayer');

        this.backgroundLayer.resizeWorld();

        this.player.bringToTop();
    }
};
