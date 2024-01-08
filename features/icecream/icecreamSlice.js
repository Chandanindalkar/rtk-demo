const createSlice = require('@reduxjs/toolkit').createSlice;
const { cakeActions } = require('../cake/cakeSlice');

const initialState = {
    noOfIcecreams: 10
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIcecreams--
        },
        restocked: (state, action) => {
            state.noOfIcecreams += action.payload
        }
    },
    // responding to other action types besides its own
    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, (state, action) => {
            state.noOfIcecreams--
        })
    }
})

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions;