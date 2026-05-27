degLa = float(input("Enter the degree: "))
minLa = float(input("Enter the minutes: "))
secLa = float(input("Enter the seconds: "))

degLo = float(input("Enter the degree: "))
minLo = float(input("Enter the minutes: "))
secLo = float(input("Enter the seconds: "))

la = degLa + minLa / 60 + secLa / 3600
lo = degLo + minLo / 60 + secLo / 3600

print(f"{la:.4f}, {lo:.4f}")

