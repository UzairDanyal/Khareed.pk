import { EntityRepository, Repository } from 'typeorm';

import { Manufacturer } from '../models/ManufacturerModel';

@EntityRepository(Manufacturer)
export class ManufacturerRepository extends Repository<Manufacturer>  {

}
