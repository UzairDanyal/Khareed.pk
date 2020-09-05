import { EntityRepository, Repository } from 'typeorm';

import { Category } from '../models/CategoryModel';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category>  {

}
