import * as base from './index'

export function getDatex(){
    return base.get("/datax")
}

export function desk(){
    return base.get("/desk_data")
}