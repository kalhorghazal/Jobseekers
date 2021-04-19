import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class TicketEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  type: string;

  @Column({ length: 500 })
  message: string;

  @Column({ length: 500 })
  projectCode: string;


  @ManyToOne(() => UserEntity, user=>user.tickets)
  user: UserEntity;
}