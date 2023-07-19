-- PLANT A SEED --

-- Begin the function to plant a seed
function plant_a_seed()

	-- Create a variable to store the seed type
	local seed_type

	-- Ask the user for input on what type of seed to plant
	print("What type of seed would you like to plant?")
	seed_type = io.read()

	-- Create a variable to store the planting location
	local planting_location

	-- Ask the user for input on where to plant the seed
	print("Where would you like to plant the seed?")
	planting_location = io.read()

	-- Create a variable to store the amount of water
	local amount_of_water

	-- Ask the user for input on the amount of water to use
	print("How much water will you give the seed?")
	amount_of_water = io.read()

	-- Create a variable to store the amount of sunlight
	local amount_of_sunlight

	-- Ask the user for input on the amount of sunlight to use
	print("How much sunlight will you give the seed?")
	amount_of_sunlight = io.read()

	-- Create a variable to store the amount of fertilizer
	local amount_of_fertilizer

	-- Ask the user for input on the amount of fertilizer to use
	print("How much fertilizer will you give the seed?")
	amount_of_fertilizer = io.read()

	-- Create a variable to store the amount of care given to the seed
	local amount_of_care

	-- Ask the user for input on the amount of care to give the seed
	print("How much care will you give the seed?")
	amount_of_care = io.read()

	-- Create a variable to store the seed planting success
	local seed_planting_success

	-- Calculate the success of the seed planting
	seed_planting_success = (seed_type * planting_location * 
		amount_of_water * amount_of_sunlight * amount_of_fertilizer * 
		amount_of_care) + 0.25

	-- Print out the success of the seed planting
	print("The success of planting your " .. seed_type .. " was: " .. seed_planting_success)

end

-- Call the function to plant a seed
plant_a_seed()