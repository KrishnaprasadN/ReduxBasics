const redux = require('redux')

// STEP 1: Create reducer
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'INCREMENT' ) {
        return {
            counter: state.counter + action.payload
        }
    }

    if (action.type === 'DECREMENT' ) {
        return {
            counter: state.counter - action.payload
        }
    }
    return state
}

// STEP 2: Create Store with reducer
const store = redux.createStore(counterReducer)

// STEP 3: Create Subscriber for the store
const counterSubscriber = () => {
    const latestState = store.getState()
    console.log(latestState)
}

// STEP 4: Subscribe for store changes
store.subscribe(counterSubscriber)

// STEP 5: Dispatch change events
store.dispatch({type: 'INCREMENT', payload: 2})
store.dispatch({type: 'DECREMENT', payload: 1})