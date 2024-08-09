import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import { purgeUnknowProperties } from './fix';
import { AjvTruck, AjvTruckSchema } from './truck';

describe('Truck schema', () => {
  it('should validate a valid truck', () => {
    const truck: AjvTruck = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      cargoCapacity: 1000,
      forwardCabin: faker.datatype.boolean(),
      wheels: 4,
      travelsOver: 'land',
    };

    purgeUnknowProperties(AjvTruckSchema['_schema'].properties);

    expect(AjvTruckSchema.parse(truck)).toEqual(truck);
  });
});
