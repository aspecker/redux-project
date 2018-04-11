const game = (state = 0, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + action.value
        default:
            return state;
    }
}

export default game