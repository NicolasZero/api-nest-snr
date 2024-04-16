import { Injectable } from '@nestjs/common';

@Injectable()
export class LocalitiesService {
    getAllStates(){
        return [{
            id:1,
            name:"Caracas",
        },
        {
            id:2,
            name:"Miranda"
        }]
    }
    getAllMunicipalities(){}
    getAllParishes(){}
}
