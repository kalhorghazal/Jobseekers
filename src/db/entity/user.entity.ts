import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany, OneToOne } from 'typeorm';
import BookEntity from './book.entity';
import SampleWorkEntity from './sampleWork.entity';
import FinancialInfoEntity from './financialInfo.entity';
import FriendEntity from './friend.entity';
import TicketEntity from './ticket.entity';
@Entity()
export default class UserEntity extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  // 1:n relation with bookEntity 
  @OneToMany( type => BookEntity , book => book.user)
  books: BookEntity[];

  @OneToMany(() => SampleWorkEntity, sampleWork => sampleWork.user)
  sampleWorks: SampleWorkEntity[];

  @OneToOne(() => FinancialInfoEntity, financialInfo => financialInfo.user)
  financialInfo: FinancialInfoEntity;

  @OneToMany(() => FriendEntity, friend => friend.user)
  friends: FriendEntity[];

  @OneToMany(() => TicketEntity, ticket => ticket.user)
  tickets: TicketEntity[];
}

