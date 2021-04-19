import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class FriendEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  Email: string;

  @ManyToOne(() => UserEntity, user=>user.friends)
  user: UserEntity;
}