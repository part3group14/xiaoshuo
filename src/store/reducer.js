// 这里面是对state的操作
export default function(state,action){
    let {type} = action;
    switch(type){
        case "add":
            return {
                // ...state,
                num:state.num+1
            };
        case "j":
            return {
            // ...state,
            num:state.num-1
        };
        case "datax":
            
        default:
            break;
    }
    return state;
}