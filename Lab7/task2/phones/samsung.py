from phones.base import Phone

class Samsung(Phone):
    def __init__(self, brand, model, year, charge_type):
        super().__init__(brand, model, year)
        self.charge_type = charge_type

    def charge(self):
        return f"{self.model} is charging by {self.charge_type} charger very fast!!!"
    
    def argue(self):
        return "We have much more functionality than iPhone!!!"