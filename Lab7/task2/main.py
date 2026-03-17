from phones import iPhone, Samsung, Xiaomi

def test():
    ip = iPhone("Apple", "iPhone 18 Pro Max", 2026, "magnetic")
    sam = Samsung("Samsung", "Galaxy S26 Ultra", 2026, "type-c")
    xiao = Xiaomi("Xiaomi", "Redmi Note 13 POCO Loco Choco Super Duper", 2026, "type-c 3.0")
    technodom = [ip, sam, xiao]
    print("Well, well, well...")
    for phone in technodom:
        print(f"\nNew phone: {phone}")
        print(phone.turn_off())
        print(f"{phone.charge()}")
        print(phone.turn_on())
    print("\niPhone user: " + ip.flex())
    print("Samsung user: " + sam.argue())
    print("Xiaomi: " + xiao.warning())
    
if __name__ == '__main__':
    test()