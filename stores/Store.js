const { atom } = require("recoil");

export const scriptAtom = atom({
    key: 'scriptState', 
    default: {
        upi_id: 'pratiksharma@boi', 
        name: 'Pratik Sharma', 
        price_list: ['100', '200', '300', '400', '500']
    }
})

export const emailAtom = atom({
    key: 'emailState',
    default: {
        name: '', 
        email: ''
    }
})