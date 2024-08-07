import { describe, it, expect } from 'vitest';
import { faker } from '@faker-js/faker';

import { AjvTruck, AjvTruckSchema } from './truck';
import { purgeUnknowProperties } from './fix';

describe('Truck schema', () => {
  it('should validate a valid truck', () => {
    const truck: AjvTruck = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      commercialCapacity: 1000,
      forwardCabin: faker.datatype.boolean(),
      wheels: 4,
    };

    purgeUnknowProperties(AjvTruckSchema['_schema'].properties);

    expect(AjvTruckSchema.parse(truck)).toEqual(truck);
  });
});
