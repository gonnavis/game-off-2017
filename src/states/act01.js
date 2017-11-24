// act01.js - level 1 implementation

import Renderer from './renderer';
import { GamePlay, TileMapConsts } from './gameplay';

class Act1 extends GamePlay {

  create() {
    super.create();

    this.createLevel('act1');
    this.arrangeLayers();
    this.attachHud();
    this.audio.play(this.audio.musics.maintheme);

    this.isGoHand = false;

    // edge of the screen
    this.nextLevelOffset = 24 * TileMapConsts.TILE_SIZE + TileMapConsts.TILE_SIZE / 2;
  }

  update() {
    /**
     * All enemies dead => go to Act #2
     */
    if (super.isEnemiesDead()) {
      if (!this.isGoHand) {
        this.isGoHand = true;
        this.playerHud.showThisWay();
      }
      if (this.player.sprite.x > this.nextLevelOffset) {
        this.state.start('loading', true, false, 'act2');
      }
    }

    // do collisions checks, etc. after player & NPC movements
    super.update();
  }

}

export { Act1 };
