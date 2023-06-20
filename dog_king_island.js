1. const plantSeed = (name, amountOfSun, amountOfWater, amountOfFertilizer, soilType) => {
2.     // create a plant object
3.     let plantObj = {
4.         name,
5.         amountOfSun,
6.         amountOfWater,
7.         amountOfFertilizer,
8.         soilType
9.     };
10.     // plant the seeds
11.    let planted = PlantSeed(plantObj);
12.    // track the growth
13.    let growth = [];
14.    // checks the amount of sunlight, water, and fertilizer
15.    let sunCheck = amountOfSun >= 8 ? true : false;
16.    let waterCheck = amountOfWater >= 6 ? true : false;
17.    let fertilizerCheck = amountOfFertilizer >= 5 ? true : false;
18.
19.    // check the soil type and adjust accordingly
20.    let soilTypeChecker = (type) => {
21.      if (type === 'clay') {
22.          return {
23.              amountOfWater: amountOfWater + 1,
24.              amountOfFertilizer: amountOfFertilizer + 1
25.          };
26.      } else if (type === 'sandy') {
27.          return {
28.              amountOfWater: amountOfWater - 1,
29.              amountOfFertilizer: amountOfFertilizer - 1
30.          };
31.      } else {
32.          return {
33.              amountOfWater,
34.              amountOfFertilizer
35.          };
36.      }
37.  };
38.
39.  // adjust the light, water, and fertilizer values
40.  let sunValue = sunCheck ? amountOfSun : amountOfSun + 1;
41.  let amountOfWaterChecked = soilTypeChecker(soilType).amountOfWater;
42.  let amountOfFertilizerChecked = soilTypeChecker(soilType).amountOfFertilizer;
43.
44.  // track the progress
45.  growth.push(sunValue, amountOfWaterChecked, amountOfFertilizerChecked);
46.
47.  // log the result
48.  let result = planted ?
49.        `${name} is planted. The plant is receiving ${sunValue} hours of sunlight, ${amountOfWaterChecked} cups of water, and ${amountOfFertilizerChecked} tablespoons of fertilizer.` :
50.        `${name} was not able to be planted. Please check the specified values and try again.`;
51.  console.log(result);
52.
53.  // return the plant object and the growth results
54.  return {
55.      plant: plantObj,
56.      growth
57.  };
58. };
59.
60. // invoke the function
61. plantSeed('Rosebush', 12, 7, 4, 'sandy');
62.
63. // expected output
64. // Rosebush is planted. The plant is receiving 12 hours of sunlight, 6 cups of water, and 3 tablespoons of fertilizer.