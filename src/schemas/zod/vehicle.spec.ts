import { describe, it, expect } from 'vitest';

import { ZodVehicle, ZodVehicleSchema } from './vehicle';
import { faker } from '@faker-js/faker';

describe('Vehicle schema', () => {
  it('should validate a valid vehicle', () => {
    const vehicle: ZodVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
    };

    expect(ZodVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});
