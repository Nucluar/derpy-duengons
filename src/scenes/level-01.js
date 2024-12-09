import Phaser from "phaser";
import { IMAGES, SCENES } from "../constants";
import { Preloader } from "./preloader";
import {Player } from "./player";

export class level01 extends Phaser.Scene {
    constructor() {
        super({key: SCENES.level01});

    }

    preload() {
        this.load.tilemapTiledJSON("level-01", "/tilemaps/level-01.json");
    }

    create() {

        const map = this.make.tilemap({
            key: "level01",
            tileHeight: 16,
            tileWidth: 16
        });

        const floorTiles = map.addTilesetImage("floors", IMAGES.floor);
       const floorLayer = map.createLayer("floor", floorTiles);
      
       const wallTiles = map.addTilesetImage("lower-wall", IMAGES.wall);
       const wallLayer = map.createLayer("wall", wallTiles);
   
        wallLayer.setCollisionsByProperty({ collides: true });

       const decorTiles = map.addTilesetImage("upper-wall", IMAGES.decor);
       const decorLayer = map.createLayer("decor", decorTiles);
   
        this.player = new Player(this, 50, 50);

        this.Physics.add.collider(this.player, wallLayer);

       //this.cameras.main.setOrigin(50, 50);
        this.cameras.main.zoom = 3;
        this.cameras.main.startFollow(this.player);
    }

    update() {
        this.player.update();
    }
}