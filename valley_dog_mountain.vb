Public Class PlantASeed
	
	Public Seed As Integer
	Public Soil As Integer
	Public Location As Integer
	Public Plant As Integer
	Public Planting As Integer
	
	Public Sub PlantTheSeed()
		'Gather the necessary material and tools
		Seed = InputBox("What type of seed would you like to plant?")
		Soil = InputBox("What type of soil will you need?")
		Location = InputBox("Where would you like to plant the seed?")
		
		'Plant the seed
		Plant = InputBox("How deep do you need to plant the seed?")
		Planting = InputBox("How often do you need to water the seed?")
		
		MsgBox("The seed has been planted!")
	End Sub
	
	Public Function GetSoilInfo() As Integer
		Dim SoilInfo As Integer
		
		SoilInfo = InputBox("What kind of soil is in the area you are planting the seed in?")
		Return SoilInfo
		
	End Function
	
	Public Sub WaterThePlant()
		Dim AmountWater As Integer
		
		AmountWater = InputBox("How much water do you need to give the seed?")
		MsgBox("You have watered the seed!")
	End Sub
	
	Public Function GetLocationInfo() As Integer
		Dim LocationInfo As Integer
		
		LocationInfo = InputBox("What is the temperature, light, and humidity of the area you are planting the seed in?")
		Return LocationInfo
	End Function
	
	Public Sub FertilizeThePlant()
		Dim Fertilizer As Integer
		
		Fertilizer = InputBox("How much fertilizer do you need to give the seed?")
		MsgBox("You have fertilized the seed!")
	End Sub
	
	Public Function GetPlantInfo() As Integer
		Dim PlantInfo As Integer
		
		PlantInfo = InputBox("What kind of plant will the seed become?")
		Return PlantInfo
	End Function
	
	Public Sub HarvestThePlant()
		Dim AmountHarvest As Integer
		
		AmountHarvest = InputBox("What will the yield of the harvest be?")
		MsgBox("The plant has been harvested!")
	End Sub
	
End Class