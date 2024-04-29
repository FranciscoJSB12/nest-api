import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        {
          id: uuid(),
          brand: "Toyota",
        },
        {
          id: uuid(),
          brand: "Chevrolet",
        }
      ];

      findAll() {
        return this.cars;
      }

      findOneById(id:string) {
        const car = this.cars.find(c => c.id === id);

        if (!car) throw new NotFoundException(`Car with id ${id} not found`);

        return car;
      }
}
