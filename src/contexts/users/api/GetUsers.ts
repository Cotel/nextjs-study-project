import { UserRepository } from '@/users/domain/UserRepository';

export const getUsers = async (repository: UserRepository) => {
  return repository.findAll();
};
