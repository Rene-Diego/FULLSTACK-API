import { Table, Column, Model, DataType, Default } from "sequelize-typescript";

@Table({
    tableName: "products", 
    timestamps: true, 
    underscored: true,
})

class product extends Model {
    @Column({
        type: DataType.STRING(100),
    })
    nombre: string;

    @Column({
        type: DataType.FLOAT(5,2),      
    })
    precio: number;

    @Column({
        type: DataType.BOOLEAN      
    })
    disponibilidad: boolean;
}
export default product;