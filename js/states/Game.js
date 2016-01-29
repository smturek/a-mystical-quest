var MysticQuest = MysticQuest || {};

MysticQuest.GameState = {
    init: function () {
        this.game.physics.arcade.gravity.y = 0;
    },
    create: function() {
        //player
        this.player = this.game.add.sprite(this.game.world.centerX + 82, this.game.world.centerY + 450, 'player');
        this.player.scale.setTo(0.3);
        this.game.physics.enable(this.player);

        //groups
        this.enemies = this.add.group();

        //temp enemy
        this.enemy = this.game.add.sprite(this.game.world.centerX + 82, this.game.world.centerY + 383, 'enemy');
        this.enemy.scale.setTo(0.3);
        this.game.physics.enable(this.enemy);
        this.enemy.body.immovable = true;

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
        if(this.cursors.down.isDown) {
          this.player.body.velocity.y += 50;
        }
        if(this.cursors.left.isDown) {
          this.player.body.velocity.x -= 50;
        }
        if(this.cursors.right.isDown) {
          this.player.body.velocity.x += 50;
        }

        //collisions
        this.game.physics.arcade.collide(this.player, this.blockingLayer);
        this.game.physics.arcade.collide(this.player, this.enemy);
    },

    renderLevel: function() {
        this.map = this.game.add.tilemap('testLevel');

        this.map.addTilesetImage('Roguelike', 'levelTiles');

        this.backgroundLayer = this.map.createLayer('tileLayer');
        this.blockingLayer = this.map.createLayer('blockingLayer');
        this.game.world.sendToBack(this.backgroundLayer);

        this.map.setCollisionBetween(1, 2000, true, 'blockingLayer');

        this.backgroundLayer.resizeWorld();

        this.game.camera.follow(this.player);
    }
};
