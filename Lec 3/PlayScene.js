
class PlayScene extends Phaser.Scene{
    constructor(){
        super({key: "play", })
    }
    // var anim;
    preload(){
        this.load.image("tile_image", "assets/jungle tileset.png");
        this.load.tilemapTiledJSON('map', "assets/untitled.json"); 
        this.load.spritesheet('man', 'assets/run.png', {frameWidth: 21, frameHieght: 33});
    }
    create(){
        // this.add.text(100, 100, "Play", {fill: "#fff"})
        
    
        // this.scene.switch('menu')

        var map = this.add.tilemap("map");
        var player = this.physics.add.sprite(100, 100, 'man');
        var tileset = map.addTilesetImage("jungle_map", "tile_image")
        var layer = map.createStaticLayer("main", tileset); 

        var items = map.createFromObjects("object", 6, {}, this);

        
        game.physics.arcade.collide(player, items, handler, process, this);

        console.log(items)
    }


    handler(p,c){
        return true;
    }
    process(p,c){
        
    }
}