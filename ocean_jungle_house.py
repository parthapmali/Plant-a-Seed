#  START OF FILE

# This code is designed to demonstrate the basics of how to plant a seed. 

#Import necessary packages
from math import pi
import random
 
# Define constants 
WATER_PER_CM_DEPTH = 0.5 #litres
SEED_SPACING = 10 #cm 

# Helper function to calculate water required
def calculate_water_required(plant_depth): 
  water_required = WATER_PER_CM_DEPTH * plant_depth 
  return water_required 

# Generate a random seed size
seed_size = random.randint(2,10) #cm

# Calculate water needed for the seeds 
water_needed = calculate_water_required(seed_size)

# Prepare seed bed
print("Start by preparing the seed bed. This involves breaking up the soil and removing weeds.")

# Make a planting hole 
print("Make a planting hole that is ",seed_size,"cm deep")

# Add water to the planting hole 
print("Add ",water_needed, "litres of water to the planting hole")

# Place the seed in the planting hole
print("Place the seed in the planting hole and cover with soil")

# Water the seed
print("Water the seed until the soil is damp")

# Place a marker
print("Place a marker near the planted seed so it is easy to identify")

# Make sure the seed bed is watered
print("Make sure the seed bed is watered regularly to keep the area moist")

# Monitor the seed
print("Monitor the seed for germination and growth")

# END OF FILE