const player = (state = true, action) =>{
    switch (action.type) {
        case 'TOGGLE_ACTIVE':
            return !state;
        default: 
            return state
    }
}

export default player