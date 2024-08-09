import { describe, it, expect } from 'vitest';

import { ZodTruck, ZodTruckSchema } from './truck';
import { faker } from '@faker-js/faker';

describe('Truck schema', () => {
  it('should validate a valid truck', () => {
    const truck: ZodTruck = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      cargoCapacity: 1000,
      forwardCabin: faker.datatype.boolean(),
      wheels: 4,
      travelsOver: 'land',
    };

    expect(ZodTruckSchema.parse(truck)).toEqual(truck);
  });
});
