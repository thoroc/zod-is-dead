import { describe, it, expect } from 'vitest';

import { AjvTransport, AjvTransportSchema } from './transport';
import { faker } from '@faker-js/faker';
import { purgeUnknowProperties } from './fix';

describe('Transport schema', () => {
  it('should validate a car as a valid transport', () => {
    const transport: AjvTransport = {
      vehicle: {
        make: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        year: 2021,
        seatingCapacity: 5,
        bootSize: 15,
        travelsOver: 'land',
      },
    };

    const anyOf = (AjvTransportSchema.schema.properties?.vehicle as { anyOf?: unknown[] })?.anyOf;

    for (const schema of anyOf as unknown[]) {
      const properties = (schema as { properties: Record<string, unknown> }).properties;
      purgeUnknowProperties(properties);
    }

    expect(AjvTransportSchema.parse(transport)).toEqual(transport);
  });

  it('should validate a truck as a valid transport', () => {
    const transport: AjvTransport = {
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

    expect(AjvTransportSchema.parse(transport)).toEqual(transport);
  });
});
