import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import { TravelType } from '../../common';
import { ZodTransport, ZodTransportSchema } from './transport';

describe('Transport schema', () => {
  it('should validate a car as a valid transport', () => {
    const transport: ZodTransport = {
      vehicle: {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 2021,
        seatingCapacity: 5,
        bootSize: 15,
        travelsOver: TravelType.Land,
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
        cargoCapacity: 6800,
        forwardCabin: faker.datatype.boolean(),
        wheels: 4,
        travelsOver: TravelType.Land,
      },
    };

    expect(ZodTransportSchema.parse(transport)).toEqual(transport);
  });

  it('should validate a passenger plane as a valid transport', () => {
    const transport: ZodTransport = {
      vehicle: {
        make: 'Boeing',
        model: '747',
        year: 2021,
        seatingCapacity: 150,
        wingspan: 50,
        engines: 4,
        travelsOver: TravelType.Air,
      },
    };

    expect(ZodTransportSchema.parse(transport)).toEqual(transport);
  });

  it('should validate a cargo plane as a valid transport', () => {
    const transport: ZodTransport = {
      vehicle: {
        make: 'Boeing',
        model: '747',
        year: 2021,
        cargoCapacity: 10000,
        wingspan: 50,
        engines: 4,
        travelsOver: TravelType.Air,
      },
    };

    expect(ZodTransportSchema.parse(transport)).toEqual(transport);
  });
});
