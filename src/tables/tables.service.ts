import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TableEntity } from './entities/table.entity';
import { Repository } from 'typeorm';
import { CreateTableDto } from './dto/create-table.dto';
import { UpdateTableDto } from './dto/update-table.dto';

@Injectable()
export class TablesService {
  constructor(
    @InjectRepository(TableEntity)
    private readonly tableRepository: Repository<TableEntity>,
  ) {}

  async create(createTableDto: CreateTableDto): Promise<TableEntity> {
    const newTable = this.tableRepository.create(createTableDto);
    return this.tableRepository.save(newTable);
  }

  async findAll(): Promise<TableEntity[]> {
    return this.tableRepository.find();
  }

  async findById(id: number): Promise<TableEntity> {
    const table = await this.tableRepository.findOneBy({ id });

    if (!table) {
      throw new NotFoundException(`Table with this id ${id} is not found`);
    }
    return table;
  }

  async update(id: number, updateDto: UpdateTableDto): Promise<TableEntity> {
    await this.tableRepository.update(id, updateDto);
    return this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.tableRepository.delete(id);
  }
}
