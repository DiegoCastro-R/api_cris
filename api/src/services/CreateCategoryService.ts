import { getRepository } from 'typeorm';
import AppError from '../errors/AppError';
import Category from '../models/categorys/category.entity';

interface Request {
  CategoryName: string;
  Description: string;
  ParentId: string;
  Status: string;
  CategoryImage: string;
}

class CreateCategoryService {
  public async execute({
    CategoryName,
    Description,
    ParentId,
    Status,
    CategoryImage,
  }: Request): Promise<Category> {
    const categoryRepository = getRepository(Category);

    const checkCategoryExists = await categoryRepository.findOne({
      where: { CategoryName },
    });

    if (checkCategoryExists) {
      throw new AppError('Categoy already created.');
    }
    const category = categoryRepository.create({
      CategoryName,
      Description,
      ParentId,
      Status,
      CategoryImage,
    });

    await categoryRepository.save(category);

    return category;
  }
}

export default CreateCategoryService;
