import { Table, Column, Model, DataType, CreatedAt, UpdatedAt, DeletedAt } from 'sequelize-typescript';

@Table
class Timeline extends Model<Timeline> {
    
    @Column({
        type: DataType.STRING
    })
    content: string;
    
    @CreatedAt
    creationDate: Date;

    @UpdatedAt
    updatedOn: Date;
  
    @DeletedAt
    deletionDate: Date;
}

export default Timeline;