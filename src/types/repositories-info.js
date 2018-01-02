/**
 * Created by Durgaprasad Budhwani on 1/2/2018.
 */
import type { Repository } from './repository';

export type RepositoriesInfo = {
  currentPage: number,
  totalPage: number,
  size: number,
  repositories: Array<Repository>
}
