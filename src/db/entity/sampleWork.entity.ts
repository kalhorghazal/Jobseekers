import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from 'typeorm';
import UserEntity from './user.entity';

@Entity()
export default class SampleWorkEntity extends BaseEntity 
{
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  description: string;

  @Column({ length: 500 })
  photoAddress: string;

  @ManyToOne(() => UserEntity, user=>user.sampleWorks)
  user: UserEntity;
}