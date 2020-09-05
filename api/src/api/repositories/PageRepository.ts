import { EntityRepository, Repository } from 'typeorm';
import { Page } from '../models/Page';

@EntityRepository(Page)
export class PageRepository extends Repository<Page>  {

}
