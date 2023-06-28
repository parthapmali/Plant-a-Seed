#plant_a_seed.py
#This program is meant to illustrate planting a seed

#importing necessary libraries
import math
import random

#Defining seed class
class Seed:
    def __init__(self, name):
        self.name = name
    
    def grow(self):
        print("The {} is growing!".format(self.name))
        
#Defining soil class        
class Soil:
    def __init__(self, type):
        self.type = type
        self.moisture = 0
       
    def nourish(self):
        if self.type == "sandy":
            self.moisture += 2
        elif self.type == "clay":
            self.moisture += 3
        else:
            self.moisture += 1
        print("Soil is nourished and now has a moisture level of {}".format(self.moisture))
 
#Defining plant class
class Plant:
    def __init__(self, name):
        self.name = name
        self.height = 0
        self.age = 0
        
    def water(self):
        if(self.age <= 3):
            self.height += 0.5
            print("Plant is watered and now is {}cm tall".format(self.height))
        else:
            self.height += 1
            print("Plant is watered and now is {} cm tall".format(self.height))
    
    def age_increment(self):
        self.age += 1
        print("Plant has aged by one day and is now {} days old".format(self.age))
        
#Defining environment class
class Environment:
    def __init__(self, temperature):
        self.temperature = temperature
        
    def sunny(self):
        self.temperature += 2
        print("It is sunny outside and the temperature is {} degrees Celsius".format(self.temperature))
        
    def cloudy(self):
        self.temperature -= 1
        print("It is cloudy outside and the temperature is {} degrees Celsius".format(self.temperature))

#Creating a seed object
seed = Seed("Sunflower")
print("A seed has been planted: {}!".format(seed.name))

#Creating a soil object
soil = Soil("clay")
print("The soil is {}".format(soil.type))

#Creating a plant object
plant = Plant("Sunflower")
print("A plant has grown from the seed: {}!".format(plant.name))

#Creating an environment
environment = Environment(20)

#Running the Plant a Seed program
for day in range(1, 21):
    print("Day {}:".format(day))
    
    #Checking weather conditions
    if random.choice([True, False]):
        environment.sunny()
    else:
        environment.cloudy()
    
    #Nourishing the soil
    soil.nourish()
    
    #Watering the plant
    plant.water()
    
    #Incrementing the plant age
    plant.age_increment()

#Celebrating the result
print("The {} plant is now {} cm tall after {} days!".format(plant.name, plant.height, plant.age))