import { describe, expect, it } from 'vitest';

import { TravelType } from '../../common';
import {
  ZodCargoPlane,
  ZodCargoPlaneSchema,
  ZodPassengerPlane,
  ZodPassengerPlaneSchema,
  ZodPlane,
  ZodPlaneSchema,
} from './plane';

describe('Plane schema', () => {
  it('should validate a valid plane', () => {
    const plane: ZodPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: TravelType.Air,
    };

    expect(ZodPlaneSchema.parse(plane)).toEqual(plane);
  });
});

describe('Cargo plane schema', () => {
  it('should validate a valid cargo plane', () => {
    const cargoPlane: ZodCargoPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: TravelType.Air,
      cargoCapacity: 10000,
    };

    expect(ZodCargoPlaneSchema.parse(cargoPlane)).toEqual(cargoPlane);
  });
});

describe('Passenger plane schema', () => {
  it('should validate a valid passenger plane', () => {
    const passengerPlane: ZodPassengerPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: TravelType.Air,
      seatingCapacity: 500,
    };

    expect(ZodPassengerPlaneSchema.parse(passengerPlane)).toEqual(passengerPlane);
  });
});
