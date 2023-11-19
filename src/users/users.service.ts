import { Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  private users = [];

  findAll(): any[] {
    return [this.users];
  }

  findOne(id: number): any {
    return this.users.find(user => user.id === id);
  }

  create(userDto: CreateUserDto): any {
    const newUser = { id: this.users.length + 1, ...userDto };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updateUserDto: UpdateUserDto): any {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
      return this.users[userIndex];
    }
    return null;
  }

  remove(id: number): any {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
      const deletedUser = this.users[userIndex];
      this.users.splice(userIndex, 1);
      return deletedUser;
    }
    return null;
  }
}
