import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('categorys')
class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  CategoryName: string;

  @Column()
  Description: string;

  @Column()
  ParentId: string;

  @Column()
  Status: string;

  @Column()
  CategoryImage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Category;
