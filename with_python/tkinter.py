#this code isn't completed
from tkinter import *
import random
print("started")
button = 559
stage = 559

window = Tk()
window.title("Kumar")


label1 = Label(window, text="", width=10,height=4,font=("Arial",12))
label1.grid(column=0,row=0)


entry1= Entry(window)
entry1.grid(column=1,row=0)

labelpara = Label(window, text="", width=10,height=2,anchor="ne")
labelpara.grid(column=3, row=0)

buton1 = Button(window, width=10,height=2)
buton1.grid(column=0, row=1)
buton2 = Button(window, width=10,height=2)
buton2.grid(column=1, row=1)
buton3 = Button(window, width=10,height=2)
buton3.grid(column=2, row=1)

sonraki = Button(window, text="start", width=7,height=2)
sonraki.grid(column=3, row=2)

"""
stage0 başlamadan önce
stage1 oyun Seç
stage2 bahis gir / developer mod aç
stage3 tahmin yap
stage4 sonuç başa dön
"""

def sonrakip():
    print("sonraki")
    global stage
    global button
    global oyun
    global a
    print(stage)
    if stage == 0:
        entry1.delete(0, END)
        sonraki.configure(text="sonraki")
        label1.configure(text="oyun seç")
        buton1.configure(text="tahmin")
        buton2.configure(text="")
        buton3.configure(text="")
        stage = 1
    elif stage == 1:
        buton1.configure(text="")
        oyun = button
        label1.configure(text=">>")
        entry1.delete(0, END)
        entry1.insert(0,"bahis gir")
        stage = 2

    elif stage == 2:
        bahis = entry1.get()
        entry1.delete(0, END)
        entry1.insert(0,"")
        if oyun == 1:
            label1.configure(text="tahmin et")
            buton1.configure(text="1")
            buton2.configure(text="2")
            buton3.configure(text="3")
            a = random.randint(1,3)
            stage = 3
        else :
            pass
    elif stage == 3:
        if oyun == 1:
            buton1.configure(text="")
            buton2.configure(text="")
            buton3.configure(text="")
            if a == button:
                label1.configure(text="kazandın")
            else:
                label1.configure(text="kaybettin\ncevap>>")
                entry1.delete(0, END)
                entry1.insert(0,str(a))

        stage = 0
"""
oyun1: sayıtahmin
"""

def button1p():
    global button
    button = 1
    sonrakip()
def button2p():
    global button
    button = 2
    sonrakip()
def button3p():
    global button
    button = 3
    sonrakip()


sonraki.configure(command=sonrakip)
buton1.configure(command=button1p)
buton2.configure(command=button2p)
buton3.configure(command=button3p)
print("window raise")
stage = 0
window.tkraise()




input()
