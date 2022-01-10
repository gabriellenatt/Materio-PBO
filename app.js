class Kue {
    constructor(gulaJawa,aksesoris,berat){
        this._bahan = "Tepung";
        this._gula = gulaJawa;
        this._aksesoris = aksesoris;
        this._berat = berat;
    }

    //getter
    get Bahan() {
        return this.bahan
    };
    get gula() {
        return this.gulaJawa
    };
    get aksesoris() {
        return this.aksesoris
    };
    get berat() {
        return this.berat
    };

    //setter
    set gula (value){
        this._gula = value;
    };
}

class KuePutu extends Kue {
    constructor(gulaLevel, ...args){
        super(...args);
        this.gulaLevel = gulaLevel;
    }

    //getter
    get gulaLevel(){
        return this._gulaLevel
    };
    //setter
    set gulaLevel(value){
        this._gulaLevel = value;
    }
}

class KueCubit extends Kue{
    constructor(...args){
        super(...args)
        this._bahan =['tepung', 'telur'];
    }
};

class KueKetawa extends Kue{
    constructor(...args){
            super(...args)
            this.bahan = ['tepung', 'telur'];
    }
};

const kuePutu = new KuePutu(70,'gula merah', 10, 'daun');
const kueCubit = new KueCubit('gula pasir', 10, 'messes');
const kueKetawa = new KueKetawa('wkwkwk',10,'awkakwkw');
console.log(kuePutu)
console.log(kueCubit)
console.log(kueKetawa)