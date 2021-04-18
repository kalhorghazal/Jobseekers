import { Injectable } from '@nestjs/common';
import AdminUserEntity from '../db/entity/adminUser.entity';
import { CreateAdminDto } from './dto/create_admin.dto'
import { getConnection} from "typeorm";

@Injectable()
export class AdminUsersService {

    async insert(adminDetails: CreateAdminDto): Promise<AdminUserEntity> {
        const adminEntity: AdminUserEntity = AdminUserEntity.create();
        const { username, password } = adminDetails;

        adminEntity.username = username;
        adminEntity.password = password;

        await AdminUserEntity.save(adminEntity);
        return adminEntity;
    }

  async findOne(username: string): Promise<AdminUserEntity> {
    console.log("##################################################")

    return await AdminUserEntity.findOne({where: {username: username}});
  }
}