import { Controller,Get } from '@nestjs/common';
import { LocalitiesService } from "./localities.service";

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
}
