import 'pixi';
import 'p2';
import Phaser from 'phaser';

import { 
  Bootstrap, 
  Preloader, 
  MainMenu,
  Act1,
  Act2
} from './states';

window.onload = function () {
  // aspect ratio - (240/160)= 3:2
  const game = new Phaser.Game(240, 160, Phaser.AUTO, ''); 
  // const game = new Phaser.Game(360, 240, Phaser.AUTO, ''); // experiment

  game.state.add('bootstrap', new Bootstrap(game));
  game.state.add('preload', Preloader);
  game.state.add('mainmenu', MainMenu);
  game.state.add('act1', Act1);
  game.state.add('act2', Act2);

  game.state.start('bootstrap');
};
