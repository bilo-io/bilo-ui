var colors = require('colors')

export const log = (caller, ...args) => {
    console.log(caller.blue + '\n', ...args)
}

export const warn = (caller, ...args) => {
    console.warn(caller.blue + '\n', ...args)
}

export const err = (caller, ...args) => {
    console.err(caller.blue + '\n', ...args)
}

export default class Logger {
    constructor(caller) {
        this.caller = caller;
    }

    log(...args) {
        log(this.caller, ...args)
    }

    err(...args) {
        err(this.caller, ...args)
    }

    warn(...args) {
        warn(this.caller, ...args)
    }
}