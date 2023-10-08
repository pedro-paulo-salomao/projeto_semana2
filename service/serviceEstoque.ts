import { readCSV } from '../model/readCSV';
import { Data } from '../model/estoque.interface';
import { writeCSV } from '../model/writeCSV';
import fs from 'fs';

const filePath = './model/estoque.csv'

class estoqueService {

    async criar(data: Data) {
        if (!data || !data.nome || data.nome.trim() === '') {
            throw new Error("O nome é inválido.");
        }
    
        if (isNaN(data.peso) || isNaN(data.valor) || isNaN(data.quantidade)) {
            throw new Error("Peso, valor e quantidade devem ser números válidos.");
        }
    
        const produtos = await readCSV(filePath);
        const verify = produtos.find(p => p.nome === data.nome);
        if (verify) {
            throw new Error("Já existe um produto com este nome.");
        }
    
        await writeCSV(filePath, [data]);
    }

    async removerProduto(nome: String) {
        const produtos = await readCSV(filePath);
        const produtoIndex = produtos.findIndex((produto) => produto.nome == nome);

        if (produtoIndex === -1) {
            throw new Error(`Não foi encontrado um produto com o nome: ${nome}`);
        }

        produtos.splice(produtoIndex, 1);

        fs.writeFileSync(filePath, '');
        fs.appendFileSync(filePath, 'nome,peso,valor,quantidade\n');

        await writeCSV(filePath, produtos);
    }

    async listarItens() {
        return await readCSV(filePath);
    }

    async calcularValorTotal() {
        const data = await this.listarItens();
        if (data.length === 0) {
            return 0;
        }
        let total = 0;
    
        for (const item of data) {
            console.log("Valor: " + item.valor, "Quantidade: " + item.quantidade);
            if (!isNaN(item.valor) && !isNaN(item.quantidade)) {
                total += +(item.valor*item.quantidade);
            }
        }
        return total;
    }
    
    async calcularMediaDeValor() {
        const data = await this.listarItens();
        if (data.length === 0) {
            return 0;
        }
        const total = await this.calcularValorTotal();
        return (total / await this.calcularItensTotal());
    }

    async calcularQuantidadeTotal() {
        const data = await this.listarItens();
        return data.length;
    }
    
    async calcularPesoTotal() {
        const data = await this.listarItens();
        if (data.length === 0) {
            return 0;
        }
        let total = 0;
    
        for (const item of data) {
            console.log("Peso: " + item.peso, "Quantidade: " + item.quantidade);
            if (!isNaN(item.peso) && !isNaN(item.quantidade)) {
                total += +(item.peso*item.quantidade);
            }
        }
        return total;
    }

    async calcularMediaDePeso() {
        const data = await this.listarItens();
        if (data.length === 0) {
            return 0;
        }
        const total = await this.calcularPesoTotal();
        return (total / await this.calcularItensTotal());
    }
    async calcularItensTotal() {
        const data = await this.listarItens();
        if (data.length === 0) {
            return 0;
        }
        let total = 0;
    
        for (const item of data) {
            console.log("Quantidade: " + item.quantidade);
            if (!isNaN(item.quantidade)) {
                total += +item.quantidade;
            }
        }
        return total;
    }
}

export default new estoqueService()

