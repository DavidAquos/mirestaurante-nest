import { Module } from '@nestjs/common';
import { RestauranteService } from './services/restaurante.service';
import { RestaurantesController } from './restaurantes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RestauranteSchema } from './schemas/restaurante.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Restaurante',
        schema: RestauranteSchema,
        // collection: 'misRestaurantes'
      },
    ]),
  ],
  providers: [RestauranteService],
  controllers: [RestaurantesController],
})
export class RestaurantesModule {}
