import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

import { AjvCar, AjvCarSchema } from './car';
import { purgeUnknowProperties } from './fix';

describe('Car schema', () => {
  it('should validate a valid car', () => {
    const car: AjvCar = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      bootSize: 500,
    };

    purgeUnknowProperties(AjvCarSchema['_schema'].properties);

    expect(AjvCarSchema.parse(car)).toEqual(car);
  });
});
