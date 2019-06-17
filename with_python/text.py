import random


def sayıtahmin(para, bahis):
    if bahis > para:
        print("bahsin parandan fazla")
        return para

    print("Sayı Tahminine Hoşgeldin")
    tahmin = int(input("1 ile 3 arasında bi sayı tuttum\nTahmin Et"))
    a = random.randint(1, 3)
    if a == tahmin:
        print("Kazandın")
        return para + bahis * 2.5
    elif tahmin != 1 and tahmin != 2 and tahmin != 3:
        print("geçerli bi değer gir")

    else:
        print("Kaybettin\nCevap=", a, "\n")
        return para - bahis


para = 10

print("Hoşgeldin")

while True:
    print("Paran:", para)
    print("Oynayacağın oyunu seç\n"
          "1) Sayı Tahmini")
    oyun = int(input("Seç: "))

    if oyun == 1:
        bahis = float(input("Bahis?: "))
        para = sayıtahmin(para, bahis)
    elif oyun == 559:
        i = float(input("Dev Mod"))
        para = i
