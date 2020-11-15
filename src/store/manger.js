let initManger =[
  {"id":1}
]

export default function(manger=initManger,action){
  let {type,payload} = action;
  switch(type){
    case "GETALL":{
      // console.log("getall",payload.data)
      manger=payload.data
    }
    break;
    case "ADD":
      return [
      ...manger,
      payload
    ]
    case "REMOVE":{
      manger.splice(payload,1);
      return [...manger];
    }
    case "DELETELISTS":{
      console.log('payload',payload)
      manger.splice(payload,1);
      return [...manger]
    }
    case "UPDATE":{
      // payload传递修改的下标，和新的数据
      manger.splice(payload.index,1,payload.manger);
      return [...manger]
    }

  }
  return manger;
}