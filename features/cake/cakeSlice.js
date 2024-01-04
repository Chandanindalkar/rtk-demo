const createSlice = require('@reduxjs/toolkit').createSlice;

const initialState = {
    noOfCakes: 10,
}

const cakeSlice = createSlice({ 
    name: 'cake',
    initialState: initialState,
    reducers: {
        ordered: (state) => {
            state.noOfCakes--
        },
        restocked: (state, action) => {
            state.noOfCakes += action.payload
        },
    }
})

module.exports = cakeSlice.reducer;
// named export for cakeActions
module.exports.cakeActions = cakeSlice.actions;