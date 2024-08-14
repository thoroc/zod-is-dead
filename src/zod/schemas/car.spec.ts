import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import { TravelType } from '../../common';
import { ZodCar, ZodCarSchema } from './car';

describe('Car schema', () => {
  it('should validate a valid car', () => {
    const car: ZodCar = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      bootSize: 500,
      travelsOver: TravelType.Land,
    };

    expect(ZodCarSchema.parse(car)).toEqual(car);
  });
});
