function receivesAFunction(callback) {
    callback()
  }

function returnsANamedFunction() {
    return function called() {
        console.log('My name is Sam.')
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log('I have no name')
    }
}