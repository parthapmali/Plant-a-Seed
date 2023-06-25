import { Plant, Tree, Flower } from './plants';

// Helper function to plant a seed
function plantSeed(type: Plant): void {
    switch(type) {
        case Plant.Tree:
            new Tree().grow();
            break;
        case Plant.Flower:
            new Flower().grow();
            break;
    }
}

// Plant trees
for (let i = 0; i < 2000; i++) {
    plantSeed(Plant.Tree);
}

// Plant flowers
for (let i = 0; i < 2000; i++) {
    plantSeed(Plant.Flower);
}