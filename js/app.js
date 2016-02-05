var MysticQuest = MysticQuest || {};

MysticQuest.game = new Phaser.Game(256, 224, Phaser.AUTO);

MysticQuest.game.state.add('Boot', MysticQuest.BootState);
MysticQuest.game.state.add('Preload', MysticQuest.PreloadState);
MysticQuest.game.state.add('Game', MysticQuest.GameState);
MysticQuest.game.state.add('Battle', MysticQuest.BattleState);

MysticQuest.game.state.start('Boot');
