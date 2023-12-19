import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards, ParseIntPipe, Patch,  } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto/user.dto'; 
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from 'src/auth/user.entity';
import { createProfileDto } from './dto/create-profile.dto';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

//  @UseGuards(JwtAuthGuard)
 
@Get()
  getUsers(): Promise<User[]>{
    return this.usersService.getUsers();
  }
@Post()
  createUser(@Body()newUser:CreateUserDto){
    return this.usersService.createUser(newUser)
  }
  @Get(':id')
  getUser(@Param('id', ParseIntPipe)id:number){
    console.log(id)
    return this.usersService.getUser(id);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe)id:number){
    console.log(id, 'se elimino de la lista de usuarios')
   return this.usersService.deleteUser(id)
  }
  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe)id:number, @Body() user:UpdateUserDto){
    return this.usersService.updateUser(id, user)
  }


  @Post(':id/profile')
  createProfile(@Param(':id', ParseIntPipe) id:number, @Body()profile:createProfileDto){
    return this.usersService.createProfile(id, profile)
  }
  
}
