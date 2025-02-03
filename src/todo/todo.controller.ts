import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Post('/:userId')
  create(@Body(ValidationPipe) createTodoDto: CreateTodoDto, @Param('userId') userId : number) {
    return this.todoService.create(createTodoDto,+userId);
  }

  @Get('/completed/:userId')
  findAllCompletedTodos(@Param('userId') userId : number) {
    return this.todoService.findAllIdCompletedUserId(+userId);
  }

  @Get('/incompleted/:userId')
  findAllInCompletedTodos(@Param('userId') userId : number) {
    return this.todoService.findAllIdCompletedUserId(+userId);
  }

  @Patch('/:userId')
  completeTodo(@Param('userId') userId: number) {
    return this.todoService.markAsComplete(+userId);
  }

  @Delete(':userId')
  remove(@Param('userId') userId: number) {
    return this.todoService.remove(+userId);
  }
}
