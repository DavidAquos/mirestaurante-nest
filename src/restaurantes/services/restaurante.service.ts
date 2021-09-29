import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurante } from '../interfaces/restaurante.interface';
import { Model } from 'mongoose';
import { RestauranteDto } from '../dto/restaurante.dto';

@Injectable()
export class RestauranteService {
  constructor(
    @InjectModel('Restaurante') private restauranteModel: Model<Restaurante>, // En model va el nombre que le hemos puesto en restaurante.module.ts
  ) {}

  async create(createRestauranteDTO: RestauranteDto): Promise<Restaurante> {
    const createdRestaurante = new this.restauranteModel(createRestauranteDTO);
    return await createdRestaurante.save();
  }

  async getRestaurantes(): Promise<Restaurante[]> {
    const restaurantes = await this.restauranteModel.find();
    return restaurantes;
  }

  async getRestaurante(idRestaurante: string): Promise<Restaurante> {
    const restaurante = this.restauranteModel.find();
  }

}
