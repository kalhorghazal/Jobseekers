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

  @Column({ length: 500 })
  tags: Array<string>;

  @Column({ length: 500 })
  skills: Array<string>;

  @ManyToOne(() => UserEntity, user=>user.sampleWorks)
  user: UserEntity;
}