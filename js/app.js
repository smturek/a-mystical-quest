var MysticQuest = MysticQuest || {};

MysticQuest.dim = MysticQuest.getGameLandscapeDimensions(440, 400);

MysticQuest.game = new Phaser.Game(MysticQuest.dim.w, MysticQuest.dim.h, Phaser.AUTO);

MysticQuest.game.state.add('Boot', MysticQuest.BootState);
MysticQuest.game.state.add('Preload', MysticQuest.PreloadState);
MysticQuest.game.state.add('Game', MysticQuest.GameState);
MysticQuest.game.state.add('Battle', MysticQuest.BattleState);

MysticQuest.game.state.start('Boot');
