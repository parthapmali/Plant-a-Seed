// File: PlantASeed.ts

// 	1. Import necessary modules
import { Plant, Seed, Soil, Water, Sun } from './PlantingComponents';

// 	2. Define types
type PlantType = 'flower' | 'vegetable' | 'herb' | 'tree';

// 	3. Create a Plant class
class Plant {
	public type: PlantType;
	public seed: Seed;
	public soil: Soil;
	public water: Water;
	public sun: Sun;

	constructor(type: PlantType, seed: Seed, soil: Soil) {
		this.type = type;
		this.seed = seed;
		this.soil = soil;
	}
}

// 	4. Create a Seed class
class Seed {
	public type: PlantType;
	public size: number;
	public color: string;

	constructor(type: PlantType, size: number, color: string) {
		this.type = type;
		this.size = size;
		this.color = color;
	}
}

// 	5. Create a Soil class
class Soil {
	public type: string;
	public quality: number;

	constructor(type: string, quality: number) {
		this.type = type;
		this.quality = quality;
	}
}

// 	6. Create a Water class
class Water {
	public type: string;
	public temperature: number;
	public volume: number;

	constructor(type: string, temperature: number, volume: number) {
		this.type = type;
		this.temperature = temperature;
		this.volume = volume;
	}
}

// 	7. Create a Sun class
class Sun {
	public type: string;
	public duration: number;

	constructor(type: string, duration: number) {
	    this.type = type;
	    this.duration = duration;
	}
}

// 	8. Create a function to get a Plant object
function getPlant(type: PlantType, seedSize: number, seedColor: string, soilType: string, soilQuality: number) {
	const seed = new Seed(type, seedSize, seedColor);
	const soil = new Soil(soilType, soilQuality);
	
	const plant = new Plant(type, seed, soil);
	
	return plant;
}

// 	9. Create a function to add Water to a Plant
function addWater(plant: Plant, type: string, temperature: number, volume: number) {
    const water = new Water(type, temperature, volume);
	plant.water = water;
}

// 	10. Create a function to add Sun to a Plant
function addSun(plant: Plant, type: string, duration: number) {
	const sun = new Sun(type, duration);
	plant.sun = sun;
}

// 	11. Create a function to plant the seed
function plantSeed(type: PlantType, seedSize: number, seedColor: string, soilType: string, soilQuality: number, waterType: string, waterTemperature: number, waterVolume: number, sunType: string, sunDuration: number) {
	let plant = getPlant(type, seedSize, seedColor, soilType, soilQuality);
	addWater(plant, waterType, waterTemperature, waterVolume);
	addSun(plant, sunType, sunDuration);
	
	return plant;
}

// 	12. Create a function to monitor and nurture the Plant
function monitorAndNuture(plant: Plant, waterType: string, waterTemperature: number, waterVolume: number, sunType: string, sunDuration: number) {
	addWater(plant, waterType, waterTemperature, waterVolume);
	addSun(plant, sunType, sunDuration);
	
	return plant;
}

// 	13. Create a function to harvest the Plant
function harvest(plant: Plant) {
	// Logic to harvest the plant
}

// 	14. Test functions
let myFlower = plantSeed('flower', 5, 'blue', 'clay', 8, 'tap', 20, 500, 'natural', 4);
monitorAndNuture(myFlower, 'rain', 15, 600, 'artificial', 6);
harvest(myFlower);