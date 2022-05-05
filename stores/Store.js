const { atom } = require("recoil");

export const scriptAtom = atom({
    key: 'scriptState', 
    default: {
        upi_id: '', 
        name: '', 
        button_label: ''
    }
})

export const emailAtom = atom({
    key: 'emailState',
    default: {
        name: '', 
        email: '', 
        is_valide: false
    }
})

export const errorAtom = atom({
    key: 'errorState', 
    default: {
        state: 0,
        message: '', 
    }
})

export const amountsAtom = atom({
    key: 'amountState', 
    default: [],
})

