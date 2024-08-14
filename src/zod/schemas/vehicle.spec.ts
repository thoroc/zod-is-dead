import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import {
  ZodCommercialVehicle,
  ZodCommercialVehicleSchema,
  ZodPassengerVehicle,
  ZodPassengerVehicleSchema,
  ZodVehicle,
  ZodVehicleSchema,
} from './vehicle';

describe('Vehicle schema', () => {
  it('should validate a valid vehicle', () => {
    const vehicle: ZodVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(ZodVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});

describe('Passenger vehicle schema', () => {
  it('should validate a valid passenger vehicle', () => {
    const vehicle: ZodPassengerVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(ZodPassengerVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});

describe('Commercial vehicle schema', () => {
  it('should validate a valid commercial vehicle', () => {
    const vehicle: ZodCommercialVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      cargoCapacity: 1000,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(ZodCommercialVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});
