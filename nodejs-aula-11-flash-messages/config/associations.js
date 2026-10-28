// Neste arquivo será definido os relacionamentos entre tabelas

// Model Cliente
import Cliente from "../model/Cliente.js";
// Model Pedido
import Pedido from "../model/Pedido.js";

// Definindo os relacionamentos entre os modelos
const defineAssociations = () => {
    // Um Cliente possui MUITOS Pedidos
    Cliente.hasMany(Pedido, { foreignKey : "cliente_id" });
    // Um Pedido pertence a UM cliente
    Pedido.belongsTo(Cliente, { foreignKey : "cliente_id"} );
};

// Exportando o módulo
export default defineAssociations;