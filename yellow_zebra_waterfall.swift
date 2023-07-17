//1
import UIKit 

//2
class PlantSeed { 

//3
    var seedName: String 

//4
    init(seedName: String) { 

//5
        self.seedName = seedName 

//6
    } 

//7
    func preparePot() { 

//8
        print("Preparing a pot of soil for planting") 

//9
    } 

//10
    func addWater() { 

//11
        print("Adding water to the soil") 

//12
    } 

//13
    func addSeeds() { 

//14
        print("Adding \(seedName) seeds to the soil") 

//15
    } 

//16
    func coverAndLabel() { 

//17
        print("Covering and labeling pot with seed name") 

//18
    } 

//19
    func placeInSunlight() { 

//20
        print("Placing pot in a sunny spot to encourage growth") 

//21
    } 

//22
    func plantSeed() { 

//23
        preparePot() 

//24
        addWater() 

//25
        addSeeds() 

//26
        coverAndLabel() 

//27
        placeInSunlight() 

//28
    } 

//29
} 

//30
let sunflowerSeeds = PlantSeed(seedName: "Sunflower") 

//31
sunflowerSeeds.plantSeed()

//32
// Output: 
// Preparing a pot of soil for planting 
// Adding water to the soil 
// Adding Sunflower seeds to the soil 
// Covering and labeling pot with seed name 
// Placing pot in a sunny spot to encourage growth