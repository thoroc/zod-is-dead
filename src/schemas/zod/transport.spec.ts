import { describe, it, expect } from 'vitest';

import { ZodTransport, ZodTransportSchema } from './transport';
import { faker } from '@faker-js/faker';

describe('Transport schema', () => {
  it('should validate a car as a valid transport', () => {
    const transport: ZodTransport = {
      vehicle: {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 2021,
        seatingCapacity: 5,
        bootSize: 15,
        travelsOver: 'land',
      },
    };

    expect(ZodTransportSchema.parse(transport)).toEqual(transport);
  });

  it('should validate a truck as a valid transport', () => {
    const transport: ZodTransport = {
      vehicle: {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 2021,
        commercialCapacity: 6800,
        forwardCabin: faker.datatype.boolean(),
        wheels: 4,
        travelsOver: 'land',
      },
    };

    expect(ZodTransportSchema.parse(transport)).toEqual(transport);
  });
});
