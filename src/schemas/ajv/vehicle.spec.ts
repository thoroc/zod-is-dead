import { describe, it, expect } from 'vitest';

import { AjvVehicle, AjvVehicleSchema } from './vehicle';
import { faker } from '@faker-js/faker';

describe('Vehicle schema', () => {
  it('should validate a valid vehicle', () => {
    const vehicle: AjvVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
    };

    expect(AjvVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});
