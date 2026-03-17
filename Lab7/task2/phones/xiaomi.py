from phones.base import Phone

class Xiaomi(Phone):
    def __init__(self, brand, model, year, charge_type):
        super().__init__(brand, model, year)
        self.charge_type = charge_type

    def charge(self):
        return f"{self.model} is charging by {self.charge_type} charger.. Oh, it's already charged?.."
    
    def warning(self):
        return "BI*** I'M BOUTTA BLOW UP"