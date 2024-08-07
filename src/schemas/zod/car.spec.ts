import { describe, it, expect } from 'vitest';

import { ZodCar, ZodCarSchema } from './car';
import { faker } from '@faker-js/faker';

describe('Car schema', () => {
  it('should validate a valid car', () => {
    const car: ZodCar = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      bootSize: 500,
    };

    expect(ZodCarSchema.parse(car)).toEqual(car);
  });
});
