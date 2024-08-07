import { s } from 'ajv-ts';
import { AjvCarSchema } from './car';
import { AjvTruckSchema } from './truck';

// --------------------------------------------------
// Transportation Schema
// --------------------------------------------------

export const AjvTransportationSchema = s.object({
  vehicle: s.union(AjvCarSchema, AjvTruckSchema),
});

export type Transportation = s.infer<typeof AjvTransportationSchema>;
