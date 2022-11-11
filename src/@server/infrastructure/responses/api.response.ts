import { IBaseEntity } from '../base/base-entity.interface';
import { IPaginationMeta } from '../index/index.interface';
import { IApiRes } from './api-response.interface';

export class ApiRes implements IApiRes<any> {
  message!: string
  meta?: IPaginationMeta
  data: any

  static from(
    data?: IBaseEntity | IBaseEntity[] | any,
    meta?: IPaginationMeta,
    message?: string,
  ): ApiRes {
    const res = new ApiRes()

    res.message = message || meta && 'Successfull fetch' || 'Successfull operation!'
    res.data = data
    res.meta = meta

    !meta && delete res.meta

    return res
  }
}
