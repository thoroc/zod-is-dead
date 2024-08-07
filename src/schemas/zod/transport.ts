import { z } from 'zod';
import { ZodCarSchema, ZodCar } from './car';
import { ZodTruckSchema, ZodTruck } from './truck';

/**
 * Represents a transportation schema.
 * @remarks
 * This schema defines the structure of a transportation object, including the vehicle type.
 * The vehicle can be either a car or a truck, and it must have either a seating capacity or a commercial capacity.
 */
export const ZodTransportSchema = z.object({
  vehicle: z.union([ZodCarSchema, ZodTruckSchema]).refine((data) => {
    return (data as ZodCar).seatingCapacity !== undefined || (data as ZodTruck).commercialCapacity !== undefined;
  }),
});

/**
 * Represents a transportation object.
 */
export type ZodTransport = z.infer<typeof ZodTransportSchema>;
