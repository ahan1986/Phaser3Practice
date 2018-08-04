// initialize the actual phaser game object
    //first set of parameters is the size of windows along with some internal phaser stuff
const game = new Phaser.Game(800, 600, Phaser.AUTO, '', {
    // create preload, create, update functions which will register the function within phaser objects
    preload: preload,
    create: create,
    update: update
});

function preload() {
    //load and define our game assets
    game.load.image('diamond', 'https://raw.githubusercontent.com/egee-irl/jumper/master/assets/diamond.png')
    game.load.image('sky', 'https://raw.githubusercontent.com/egee-irl/jumper/master/assets/sky.png')
    game.load.spritesheet('woof', 'https://raw.githubusercontent.com/egee-irl/jumper/master/assets/woof.png', 32, 32)
    game.load.image('plateform', 'https://raw.githubusercontent.com/egee-irl/jumper/master/assets/platform.png')
};
function create() {
    
};
function update() {};

// var config = {
//     type: Phaser.AUTO,
//     width: 800,
//     height: 600,
//     physics: {
//         default: 'arcade',
//         arcade: {
//             gravity: { y: 200 }
//         }
//     },
//     scene: {
//         preload: preload,
//         create: create
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.setBaseURL('http://labs.phaser.io');

//     this.load.image('sky', 'assets/skies/space3.png');
//     this.load.image('logo', 'assets/sprites/phaser3-logo.png');
//     this.load.image('red', 'assets/particles/red.png');
// }

// function create ()
// {
//     this.add.image(400, 300, 'sky');

//     var particles = this.add.particles('red');

//     var emitter = particles.createEmitter({
//         speed: 100,
//         scale: { start: 1, end: 0 },
//         blendMode: 'ADD'
//     });

//     var logo = this.physics.add.image(400, 100, 'logo');

//     logo.setVelocity(100, 200);
//     logo.setBounce(1, 1);
//     logo.setCollideWorldBounds(true);

//     emitter.startFollow(logo);
// }