import { faker } from '@faker-js/faker';

import { describe, expect, it } from 'vitest';

import {
  AjvCommercialVehicle,
  AjvCommercialVehicleSchema,
  AjvPassengerVehicle,
  AjvPassengerVehicleSchema,
  AjvVehicle,
  AjvVehicleSchema,
} from './vehicle';

describe('Vehicle schema', () => {
  it('should validate a valid vehicle', () => {
    const vehicle: AjvVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(AjvVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});

describe('Passenger vehicle schema', () => {
  it('should validate a valid passenger vehicle', () => {
    const vehicle: AjvPassengerVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      seatingCapacity: 5,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(AjvPassengerVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});

describe('Commercial vehicle schema', () => {
  it('should validate a valid commercial vehicle', () => {
    const vehicle: AjvCommercialVehicle = {
      make: faker.vehicle.manufacturer(),
      model: faker.vehicle.model(),
      year: 2020,
      cargoCapacity: 1000,
      travelsOver: faker.helpers.arrayElement(['land', 'sea', 'air']),
    };

    expect(AjvCommercialVehicleSchema.parse(vehicle)).toEqual(vehicle);
  });
});
