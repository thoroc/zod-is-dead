import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import { TravelType } from '../../common';
import { ZodTruck, ZodTruckSchema } from './truck';

describe('Truck schema', () => {
  it('should validate a valid truck', () => {
    const truck: ZodTruck = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      cargoCapacity: 1000,
      forwardCabin: faker.datatype.boolean(),
      wheels: 4,
      travelsOver: TravelType.Land,
    };

    expect(ZodTruckSchema.parse(truck)).toEqual(truck);
  });
});
