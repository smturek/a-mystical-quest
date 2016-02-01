var MysticQuest = MysticQuest || {};

MysticQuest.BattleState = {
    create: function() {
        this.playerRect = this.game.add.sprite(55, 190, 'rectangle');
        this.playerRect.scale.setTo(0.5, 0.3);

        this.allyRect = this.game.add.sprite(220, 190, 'rectangle');
        this.allyRect.scale.setTo(0.5, 0.3);

        this.bottomLeftRect = this.game.add.sprite(60, 167, 'rectangle');
        this.bottomLeftRect.scale.setTo(0.47, 0.15);

        this.bottomRightRect = this.game.add.sprite(225, 167, 'rectangle');
        this.bottomRightRect.scale.setTo(0.47, 0.15);

        this.topLeftRect = this.game.add.sprite(60, 144, 'rectangle');
        this.topLeftRect.scale.setTo(0.47, 0.15);

        this.topRightRect = this.game.add.sprite(225, 144, 'rectangle');
        this.topRightRect.scale.setTo(0.47, 0.15);

    }
};
