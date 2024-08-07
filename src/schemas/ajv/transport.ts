import { s } from 'ajv-ts';
import { AjvCarSchema } from './car';
import { AjvTruckSchema } from './truck';

// --------------------------------------------------
// Transportation Schema
// --------------------------------------------------

export const AjvTransportSchema = s.object({
  vehicle: s.union(AjvCarSchema, AjvTruckSchema),
});

export type AjvTransport = s.infer<typeof AjvTransportSchema>;
