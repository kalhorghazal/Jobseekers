import { Injectable } from '@nestjs/common';
import { createQueryBuilder, getConnection } from 'typeorm';
import FriendEntity from 'src/db/entity/friend.entity';
import CreateFriendDto from "./dto/create-friend.dto";
import UserEntity from 'src/db/entity/user.entity';
import CreateFinancialInfoDto from "./dto/create-financialInfo.dto";
import FinancialInfoEntity from 'src/db/entity/financialInfo.entity';
import CreateSampleWorkDto from "./dto/create-sampleWork.dto";
import SampleWorkEntity from 'src/db/entity/sampleWork.entity';
import CreateTicketDto from "./dto/create-ticket.dto";
import TicketEntity from 'src/db/entity/ticket.entity';

@Injectable()
export class JobseekersService {
    async insertFriend(details: CreateFriendDto): Promise<FriendEntity> {
        const { name , Email, userID} = details;
        const friend = new FriendEntity();
        friend.name = name;
        friend.Email = Email;
        friend.user = await UserEntity.findOne(userID) ;
        await friend.save();
        return friend;
    }

    async insertFinancialInfo(details: CreateFinancialInfoDto): Promise<FinancialInfoEntity> {
        const { ownerName , shabaNumber, bank, userID} = details;
        const info = new FinancialInfoEntity();
        info.accountOwnerName = ownerName;
        info.shabaNumber = shabaNumber;
        info.bank = bank;
        info.user = await UserEntity.findOne(userID) ;
        await info.save();
        return info;
    }

    async updateFinancialInfo(infoID: number, infoDetails: CreateFinancialInfoDto): Promise<FinancialInfoEntity> {

        const new_user = await UserEntity.findOne(infoDetails.userID)
    
        await getConnection()
                    .createQueryBuilder()
                    .update(FinancialInfoEntity)
                    .set({ accountOwnerName:infoDetails.ownerName, shabaNumber:infoDetails.shabaNumber, 
                            bank:infoDetails.bank, user: new_user})
                    .where("id = :id", { id: infoID })
                    .execute();
        return FinancialInfoEntity.findOne(infoID);
      }

    async insertSampleWork(details: CreateSampleWorkDto): Promise<SampleWorkEntity> {
        const { name , description, photoAddress, userID} = details;
        const work = new SampleWorkEntity();
        work.name = name;
        work.description = description;
        work.photoAddress = photoAddress;
        work.user = await UserEntity.findOne(userID) ;
        await work.save();
        return work;
    }

    async deleteSampleWork(workID: number) {
        await SampleWorkEntity.delete(workID);
      }

    async insertTicket(details: CreateTicketDto): Promise<TicketEntity> {
        const { name , type, message, projectCode, userID} = details;
        const ticket = new TicketEntity();
        ticket.name = name;
        ticket.type = type;
        ticket.message = message;
        ticket.projectCode = projectCode;
        ticket.user = await UserEntity.findOne(userID) ;
        await ticket.save();
        return ticket;
    }

    async getAllTickets(): Promise<TicketEntity[] > {
        return TicketEntity.find();
      }
}
