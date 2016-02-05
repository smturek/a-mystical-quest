var MysticQuest = MysticQuest || {};

MysticQuest.BattleState = {
    create: function() {
        this.playerRect = this.game.add.sprite(48, 192, 'heroBox');
        this.allyRect = this.game.add.sprite(128, 192, 'heroBox');

        this.monster1 = this.game.add.sprite(16, 48, 'monster');
        this.monster2 = this.game.add.sprite(96, 48, 'monster');
        this.monster3 = this.game.add.sprite(176, 48, 'monster');

        this.monsterBox1 = this.game.add.sprite(16, 1, 'monsterBox');
        this.monsterBox2 = this.game.add.sprite(96, 1, 'monsterBox');
        this.monsterBox3 = this.game.add.sprite(176, 1, 'monsterBox');

        this.hero1 = this.game.add.sprite(80, 128, 'hero');
        this.hero2 = this.game.add.sprite(160, 128, 'hero');

        this.actionTopLeft = this.game.add.sprite(53, 160, 'actionBox');
        this.actionBottomLeft = this.game.add.sprite(53, 176, 'actionBox');
        this.actionTopRight = this.game.add.sprite(133, 160, 'actionBox');
        this.actionBottomRight = this.game.add.sprite(133, 176, 'actionBox');


    }
};
