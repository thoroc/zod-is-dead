import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

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
      travelsOver: 'land',
    };

    purgeUnknowProperties(AjvCarSchema['_schema'].properties);

    expect(AjvCarSchema.parse(car)).toEqual(car);
  });
});
