import { describe, expect, it } from 'vitest';
import {
  AjvCargoPlane,
  AjvCargoPlaneSchema,
  AjvPassengerPlane,
  AjvPassengerPlaneSchema,
  AjvPlane,
  AjvPlaneSchema,
} from './plane';
import { purgeUnknowProperties } from './fix';

describe('Plane schema', () => {
  it('should validate a valid plane', () => {
    const plane: AjvPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: 'air',
    };

    purgeUnknowProperties(AjvPlaneSchema['_schema'].properties);

    expect(AjvPlaneSchema.parse(plane)).toEqual(plane);
  });
});

describe('Cargo plane schema', () => {
  it('should validate a valid cargo plane', () => {
    const cargoPlane: AjvCargoPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: 'air',
      cargoCapacity: 10000,
    };

    purgeUnknowProperties(AjvCargoPlaneSchema['_schema'].properties);

    expect(AjvCargoPlaneSchema.parse(cargoPlane)).toEqual(cargoPlane);
  });
});

describe('Passenger plane schema', () => {
  it('should validate a valid passenger plane', () => {
    const passengerPlane: AjvPassengerPlane = {
      make: 'Boeing',
      model: '747',
      year: 2020,
      wingspan: 68.4,
      engines: 4,
      travelsOver: 'air',
      seatingCapacity: 500,
    };

    purgeUnknowProperties(AjvCargoPlaneSchema['_schema'].properties);

    expect(AjvPassengerPlaneSchema.parse(passengerPlane)).toEqual(passengerPlane);
  });
});
