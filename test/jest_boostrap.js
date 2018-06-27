import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import * as router from 'react-router'
import 'react-dates/initialize'

Enzyme.configure({ adapter: new Adapter() })

router.browserHistory = { push: () => {} }

global.__E2E__ = false
global.fetch = require('jest-fetch-mock')
