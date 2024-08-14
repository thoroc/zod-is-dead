import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import { TravelType } from '../../common';
import { purgeUnknowProperties } from '../fix';
import { AjvCar, AjvCarSchema } from './car';

describe('Car schema', () => {
  it('should validate a valid car', () => {
    const car: AjvCar = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      bootSize: 500,
      travelsOver: TravelType.Land,
    };

    purgeUnknowProperties(AjvCarSchema['_schema'].properties);

    expect(AjvCarSchema.parse(car)).toEqual(car);
  });
});
