import { Column, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()

export class User {

@PrimaryGeneratedColumn()
id: number;

@Column({ type: 'varchar', length: 30 })
firstName: string;

@Column({ type:'varchar', length: 15 })
lastName: string;

@Column({ type: 'varchar', length: 30 })
company: string;

@Column({ type: 'varchar', length: 30 })
occupancy: string;

@Column({ type: 'varchar', length: 40 })
email: string;

@Column({ type: 'varchar'})
password: string;

@Column({ type: 'enum', enum: ['m', 'f', 'u'] })
/*
m: male
f: female
u: unspecified
 */
gender: string;
}

user/entity/User.entity.ts
