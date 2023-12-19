import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto';
import { User } from 'src/auth/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Profile } from './profile.entity';
import { createProfileDto } from './dto/create-profile.dto';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)private userRepository:Repository<User>,
              @InjectRepository(Profile)private profileRepository:Repository<Profile>){}

  async createUser(user: CreateUserDto){
    const userFound= await this.userRepository.findOne({
      where:{
        username:user.username
      }
    })
    if(userFound){
      return new HttpException('User already exist', 400)
    }

    const newUser = this.userRepository.create(user)
    return this.userRepository.save(newUser)
  }
  getUsers(){
    return this.userRepository.find()
  }
  async getUser(id:number){
    const userFound = await this.userRepository.findOne({
      where:{
        id
      }
    })
    if(!userFound){
      return new HttpException('User not found', 400)
    }
    return userFound;
  }
  async deleteUser(id:number){
    const result= await this.userRepository.delete({id});
    if(result.affected === 0){
      return new HttpException('User not found',400)
    }
    return result;
  }

  async updateUser(id:number, user:UpdateUserDto){
    const userFound= await this.userRepository.findOne({
      where:{
        id,
      }
    })
    if(!userFound){
      return new HttpException('User not Found', 400)
    }
    const updateUser = Object.assign(userFound, user);
    return this.userRepository.save(updateUser);
  }


  async createProfile(id: number, profile:createProfileDto){
    const userFound= await this.userRepository.findOne({
      where:{id,}
    })
    if (!userFound){
      return new HttpException('User not found', 400)
    }
    const newProfile=this.profileRepository.create(profile)
    const savedProfile = await this.profileRepository.save(newProfile)
    userFound.profile = savedProfile
    return this.userRepository.save(userFound)
  }
  
}
