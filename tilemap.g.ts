// Automatisch generierter Code. Nicht bearbeiten.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Level1":
            case "Level1":return tiles.createTilemap(hex`1000100002020202020202020202020202020202050000000000000000000000000000050200000000000000000000000000000202010306030400010306030306030402020000000400000003000000000000020500000005000000060000000000000502000000020000000300000000000002020000000000000000000000000000020500000002000000030000000000000502000000050000000600000000000002020000000100000003000000000000020502070103000000030407020207020502000000030000000000000000000002020000000300000000000000000000020500000004000000000000000000000502050202050202050202050202050202`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 . . . 2 . . . 2 . . . . . . 2 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile":
            case "tile1":return tile1;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Automatisch generierter Code. Nicht bearbeiten.
