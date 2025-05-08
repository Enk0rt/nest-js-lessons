import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateTableDto } from './dto/create-table.dto';
import { TableEntity } from './entities/table.entity';
import { TablesService } from './tables.service';
import { UpdateTableDto } from './dto/update-table.dto';
import { ResponseTableDto } from './dto/response-table.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Tables')
@Controller('tables')
export class TablesController {
  constructor(private readonly tablesService: TablesService) {}
  @ApiOperation({ summary: 'create new table' })
  @ApiResponse({ status: 201, type: ResponseTableDto })
  @Post()
  async create(@Body() createTableDto: CreateTableDto): Promise<TableEntity> {
    return await this.tablesService.create(createTableDto);
  }

  @Get()
  async getALl(): Promise<ResponseTableDto[]> {
    return await this.tablesService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<TableEntity> {
    return await this.tablesService.findById(+id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTableDto: UpdateTableDto,
  ): Promise<TableEntity> {
    return await this.tablesService.update(+id, updateTableDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.tablesService.delete(+id);
  }
}
