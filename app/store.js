const configureStore = require('@reduxjs/toolkit').configureStore;
const cakeReducer = require('../features/cake/cakeSlice');

const store = configureStore({
    reducer: cakeReducer
})

module.exports = store