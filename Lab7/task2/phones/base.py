class Phone:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year
        self.is_turned_on = False
    
    def turn_on(self):
        self.is_turned_on = True
        return f"{self.brand} {self.model} is turned on. Yappyyyy"
    
    def turn_off(self):
        self.is_turned_on = False
        return f"{self.brand} {self.model} is turned off. Womp womp"
    
    def charge(self):
        return "The phone is charging bro..."
    
    def __str__(self):
        return f"{self.brand} {self.model} {self.year}"