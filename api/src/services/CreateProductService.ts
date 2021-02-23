import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Product from '../models/products/product.entity';

interface Request {
  ProductName: string;
  ProductDescription: string;
  Price: string;
  categoryId: string;
  ProductImage: string;
}

class CreateProductService {
  public async execute({
    ProductName,
    ProductDescription,
    Price,
    categoryId,
    ProductImage,
  }: Request): Promise<Product> {
    const productRepository = getRepository(Product);

    const checkProductExists = await productRepository.findOne({
      where: { ProductName },
    });

    if (checkProductExists) {
      throw new AppError('Product already created.');
    }
    const product = productRepository.create({
      ProductName,
      ProductDescription,
      Price,
      categoryId,
      ProductImage,
    });

    await productRepository.save(product);

    return product;
  }
}

export default CreateProductService;
