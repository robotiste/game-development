
class MenuScene extends Phaser.Scene{
    constructor(){
        super({key: "menu"})
    }
    preload(){
        // this.
    }
    create(){
        this.add.text(100, 100, "Menu", {fill: "#fff"})
        this.scene.switch('play')
    }
}