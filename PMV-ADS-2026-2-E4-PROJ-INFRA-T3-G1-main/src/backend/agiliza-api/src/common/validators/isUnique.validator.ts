import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { EntityManager } from 'typeorm';

@ValidatorConstraint({ name: 'IsUnique', async: true })
export class IsUnique implements ValidatorConstraintInterface {
  private static entityManager: EntityManager;

  static init(entityManager: EntityManager) {
    IsUnique.entityManager = entityManager;
  }

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [tableName, column] = args.constraints as [string, string];

    const exists = await IsUnique.entityManager
      .createQueryBuilder()
      .from(tableName, tableName)
      .where(`${tableName}.${column} = :value`, { value })
      .getExists();

    return !exists;
  }

  defaultMessage(): string {
    return `validation.IS_UNIQUE`;
  }
}
