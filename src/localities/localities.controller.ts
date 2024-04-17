import { Controller,Get } from '@nestjs/common';
import { LocalitiesService } from "./localities.service";
import { ApiTags } from '@nestjs/swagger';

@ApiTags('localities')
@Controller('localities')
export class LocalitiesController {

    constructor(private localitiesService: LocalitiesService){}

    @Get()
    pruebas(){
        return "pruebas"
    }
    
    @Get('state')
    getAllStates(){
        return this.localitiesService.getAllStates()
    }

    @Get('municipality')
    getAllMunicipalities(){
        return this.localitiesService.getAllStates()
    }

    @Get('parish')
    getAllParishes(){
        return this.localitiesService.getAllStates()
    }
}
