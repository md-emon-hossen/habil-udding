// student schema
export const sSchema = {


    fName: String,
    lName: String,
    bName: String,
    bloodGroup: String,
    brithregi: Number,
    gender: String,
    photo: String,
    quata: String,
    wadmit: Number,
    sContact: Number,
    faterName: String,
    moterName: String,
    religion: String,
    residance: String,


    fOccupation: String,
    mOccupation: String,
    fmIncome: Number,
    mmIncome: Number,
    fpNumber: Number,
    mpNumber: Number,
    fEmail: String,
    mEmail: String,
    familyCall: Number,

    prCountry: String,
    prDistrict: String,
    prDivision: String,
    prPost: String,
    prUnion: String,
    prUpazila: String,
    prVillage: String,


    psCountry: String,
    psDistrict: String,
    psDivision: String,
    psPost: String,
    psUnion: String,
    psUpazila: String,
    psVillagem: String,


    //aditional info add from here
    status: {
        default: false,
        type: Boolean,
    },

}


// teacher schema
export const tSchema = {
    name: String,
    age: String
}