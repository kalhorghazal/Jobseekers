import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class FinancialInfoEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  accountOwnerName: string;

  @Column({ length: 500 })
  shabaNumber: string;

  @Column({ length: 500 })
  bank: string;

  @OneToOne(() => UserEntity, user=>user.financialInfo)
  user: UserEntity;
}