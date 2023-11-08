export function loginReducer (state, action ) {
    console.log(state)
    if (action.type === "loggedIn") {
     
        return {...state, loggedIn:true, token:action.token};
    } else if (action.type === "loggedOut") {
        
        return {...state, loggedIn:false, token:""};
    } 

}