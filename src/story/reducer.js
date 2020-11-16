// 这里面是对state的操作
export default function(state,action){
    let {type,payload} = action;
    switch(type){
        case "add":
            return {
                ...state,
                num:state.num+1
            }
        ;
        case "getclassFiedId":
            return{
                ...state,
                classFiedId:payload
            };
        case "getlist":
            return{
                ...state,
                dataList:payload
            }
        default:
            break;
    }
    return state;
}