class xeste{
    constructor(ad,soyad,FIN,cinsiyyet,dogumt){
    this.ad=ad
    this.soyad=soyad
    this.FIN=FIN
    this.cinsiyyet=cinsiyyet
    this.dogumt=dogumt
    }
}

class hekim{
    constructor(ad,soyad,ixtisasSahesi,xestelerSiyahisi){
    this.ad=ad
    this.soyad=soyad
    this.ixtisasSahesi=ixtisasSahesi
    this.xestelerSiyahisi=[]
    }

    xesteElaveEt(xeste){
    this.xestelerSiyahisi.push(xeste);
    }
    xesteSil(xeste){
    this.xestelerSiyahisi.pop(xeste);
    }
}

class rezervasiya{
    constructor(hekim,xeste,tarix){
    this.xeste=xeste
    this.hekim=hekim
    this.tarix=tarix
    }
    rezervasiyaMəlumati(){
    console.log(`hekim:${this.hekim.ad} xeste:${this.xeste.ad} tarix:${this.tarix}`);
    }
}

class idareetme{
    constructor(){
        this.hekimler=[]
        this.xesteler=[]
        this.rezervasiyalar=[]
    }
    XesteElaveEt(xeste){
        this.xesteler.push(xeste);
    }
    HekimElaveEt(hekim){
        this.hekimler.push(hekim);
    }
    rezervasiyaAl(rezervasiya){
        this.rezervasiyalar.push(rezervasiya);
    }
    rezervasiyaSiyahisiniGöstər(){
      for(let rezervler of this.rezervasiyalar){
       rezervler.rezervasiyaMəlumati();
      }
    }
}

let idaretme=new idareetme();
let xeste1=new xeste("Zahra", "Rzazada" ,1234534,"qadin",2003)
let xeste2=new xeste("Maleyka", "Heybatova" ,1234524,"qadin",2004)
let xeste3=new xeste("Emin", "Soltanov" ,1212534,"kişi",2004)
let xeste4=new xeste("Dilafruz", "Mammadova" ,1234539,"qadin",2003)
idaretme.XesteElaveEt(xeste1)
idaretme.XesteElaveEt(xeste2)
idaretme.XesteElaveEt(xeste3)
idaretme.XesteElaveEt(xeste4)

let hekim1=new hekim("Mahir","Abdulrahimli","stomotoloq")
let hekim2=new hekim("Dilrube","Memmedzate","psixoloq")
let hekim3=new hekim("Guluze","Soltanova","xalqtebabeti")
let hekim4=new hekim("Ayten","Ehmedova","kardioloq")
idaretme.HekimElaveEt(hekim1)
idaretme.HekimElaveEt(hekim2)
idaretme.HekimElaveEt(hekim3)
idaretme.HekimElaveEt(hekim4)

hekim1.xesteElaveEt(xeste1)
hekim2.xesteElaveEt(xeste3)
hekim3.xesteElaveEt(xeste4)
hekim4.xesteElaveEt(xeste2)
 
let rezervasiya1=new rezervasiya(hekim1,xeste1,"12.01.2023")
let rezervasiya2=new rezervasiya(hekim2,xeste2,"12.11.2023")
let rezervasiya3=new rezervasiya(hekim3,xeste3,"12.10.2023")
let rezervasiya4=new rezervasiya(hekim4,xeste4,"15.01.2023")
idaretme.rezervasiyaAl(rezervasiya1);
idaretme.rezervasiyaAl(rezervasiya2);
idaretme.rezervasiyaAl(rezervasiya3);
idaretme.rezervasiyaAl(rezervasiya4);

idaretme.rezervasiyaSiyahisiniGöstər();







