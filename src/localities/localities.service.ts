import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalitiesService {
    getAllStates(){
        return "retorna todo los estados"
    }
    getAllMunicipalities(){
        return "retorna todo los municipios"
    }
    getAllParishes(){
        return "retorna todo los parroquias"
    }
}
