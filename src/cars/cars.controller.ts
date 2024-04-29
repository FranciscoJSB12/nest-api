import { Controller, Get, Post, Patch, Delete, Body, Param, UsePipes, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDTO } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {

    constructor(
        private readonly carsService:CarsService,
    ){}

    @Get()
    getAllCars() {
        return this.carsService.findAll();
    }

    @Get(':id')
    findOneCar(@Param('id', ParseUUIDPipe) id: string) {
        const car = this.carsService.findOneById(id);

        return car;
    }

    @Post()
    createCar (@Body() createCarDTO:CreateCarDTO) {
        return {
            ok: true,
            method: 'POST',
            body: createCarDTO
        }
    }

    @Patch(':id')
    updateCar(
        @Param('id') id:string,
        @Body() body:any) {
        return {
            ok: true,
            method: 'PATCH',
            id,
            body
        }
    }

    @Delete(':id')
    deleteCar(@Param('id') id: string) {
        return {
            ok: true,
            method: 'DELETE',
            id
        }
    }
}
