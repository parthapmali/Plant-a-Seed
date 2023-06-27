#include <iostream>
#include <string>
#include <cstdlib>

using namespace std;

// Function to generate random number
int generateRandomNumber()
{
	// Generate random number between 1 and 10
	int randomNumber = (rand() % 10) + 1;

	return randomNumber;
}

// Function to display options of planting a seed
void displayOptions()
{
	cout << "Please choose one of the following options:" << endl;
	cout << "1. Plant a seed in the ground" << endl;
	cout << "2. Plant a seed in a pot" << endl;
}

// Function to determine the amount of water to give 
int determineWaterAmount(int randomNumber)
{
	// determine water amount
	int waterAmount;
	if (randomNumber <= 5)
		waterAmount = 1;
	else
		waterAmount = 2;

	return waterAmount;
}

// function to display the amount of water to give to the seed
void displayWaterAmount(int waterAmount)
{
	cout << "You should give " << waterAmount << " cups of water to the seed." << endl;
}

// function to display the success message
void displaySuccessMessage()
{
	cout << "Success! You have planted a seed!" << endl;
}

int main()
{
	// generate random number
	int randomNumber = generateRandomNumber();

	// display options
	displayOptions();

	// input user's choice
	int option;
	cin >> option;

	// determine water amount
	int waterAmount = determineWaterAmount(randomNumber);

	// display water amount
	displayWaterAmount(waterAmount);

	// display success message
	displaySuccessMessage();

	return 0;
}