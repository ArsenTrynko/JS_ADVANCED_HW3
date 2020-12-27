class CofeeMake{
    constructor(mark){
        this.mark = mark
    }
    on(){
        return 'Coffe Machine start!!!'
    }
    off(){
        return 'Coffe Machine off!!!!'
    }
}


class DripMachine extends CofeeMake{
    constructor(mark){
        super(mark)
    }
    MakeTea(){
        return 'Making tea!'
    }
}

class CarobMachine extends CofeeMake{
    constructor(mark){
        super(mark)
    }
    MakeCacao(){
        return 'Making cacao!'
    }
}


class CoffeMachine extends CofeeMake{
    constructor(mark){
        super(mark)
    }
    MakeCoffe(){
        return 'Making coffe!'
    }
}




let Simens_S2000 = new DripMachine('simens')
console.log(Simens_S2000);
console.log(Simens_S2000.on());
console.log(Simens_S2000.off());
console.log(Simens_S2000.MakeTea());


let LG_MP250 = new CarobMachine('LG')
console.log(LG_MP250);
console.log(LG_MP250.on());
console.log(LG_MP250.off());
console.log(LG_MP250.MakeCacao());


let ELECTROLUX_BARISTA = new CoffeMachine('Electrolux')
console.log(ELECTROLUX_BARISTA);
console.log(ELECTROLUX_BARISTA.on());
console.log(ELECTROLUX_BARISTA.off());
console.log(ELECTROLUX_BARISTA.MakeCoffe());








