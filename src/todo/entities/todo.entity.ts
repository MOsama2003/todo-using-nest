import { User } from "src/user/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    completed: boolean;
    
    @Column()
    title: string;

    @ManyToOne(()=>User, (user)=>user.todo)
    user : User
}
