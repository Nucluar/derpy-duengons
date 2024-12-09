import "./css/style.css";
import Phaser from "phaser";
import { level01 } from "./scenes/level-01";
import { Preloader } from "./scenes/preloader";

const game = new Phaser.Game({
	width: window.innerWidth,
	height: window.innerHeight,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	autoRound: false,
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x: 0, y: 0 },
			debug: DEBUG,
		},
	},
	scene: [Preloader, level01],
    render: {
        pixelArt: true,
    },
});

//import './style.css'
// import Phaser, { Physics } from 'phaser'

// const game = new Phaser.game({
// width:window.innerWidth,
// height:window.innerHeight,
// scale {
// mode: Phaser.Scale.FIT,
// autocenter: Phaser.Scale.CENTER_BOTH,
// },
// autoRound: false,
// Physics: {
//     default: "arcade",
//     arcade:{
//         gravity: {x: 0, y: 0},
//         debug: true
//     },
// }
// scene: [],
// });// 