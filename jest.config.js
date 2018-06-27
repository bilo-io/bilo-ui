const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
// import * as router from 'react-router'

Enzyme.configure({ adapter: new Adapter() })

module.exports = {
    verbose: true,
    browser: true,
};