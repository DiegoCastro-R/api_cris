import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  // eslint-disable-next-line prettier/prettier
  ProductName: string;

  @Column()
  ProductDescription: string;

  @Column()
  Price: string;

  @Column()
  categoryId: string;

  @Column()
  ProductImage: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Product;
