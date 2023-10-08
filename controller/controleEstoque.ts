import serviceEstoque from "../service/serviceEstoque";
import { Data } from "../model/estoque.interface";

export async function adicionarProduto(data: Data){
    try{
        await serviceEstoque.criar(data); 
        console.log("Produto adicionado com sucesso!\n");
    } catch(error){
        console.log("Erro ao adicionar produto:", error);
    }
}

export async function removerProduto(nome: String){
    try{
        await serviceEstoque.removerProduto(nome);
        console.log("Produto removido com sucesso!");
    } catch(error){
        console.log("Erro ao remover produto:", error);
    }
}

export async function listarItens(){
    try{
        const itens = await serviceEstoque.listarItens();
        console.log("Itens no estoque:", itens);
    } catch(error){
        console.log("Erro ao listar itens:", error);
    }
}

export async function calcularValorTotal(){
    try{
        const valorTotal = await serviceEstoque.calcularValorTotal();
        console.log("Valor total do estoque:", valorTotal);
    } catch(error){
        console.log("Erro ao calcular valor total:", error);
    }
}

export async function calcularMediaDeValor(){
    try{
        const mediaValor = await serviceEstoque.calcularMediaDeValor();
        console.log("Média de valor dos itens no estoque:", mediaValor);
    } catch(error){
        console.log("Erro ao calcular média de valor:", error);
    }
}

export async function calcularQuantidadeTotal(){
    try{
        const quantidadeTotal = await serviceEstoque.calcularQuantidadeTotal();
        console.log("Quantidade total de produtos no estoque:", quantidadeTotal);
    } catch(error){
        console.log("Erro ao calcular quantidade total:", error);
    }
}

export async function calcularPesoTotal(){
    try{
        const pesoTotal = await serviceEstoque.calcularPesoTotal();
        console.log("Peso total do estoque:", pesoTotal);
    } catch(error){
        console.log("Erro ao calcular peso total:", error);
    }
}

export async function calcularMediaDePeso(){
    try{
        const mediaPeso = await serviceEstoque.calcularMediaDePeso();
        console.log("Média de peso dos itens no estoque:", mediaPeso);
    } catch(error){
        console.log("Erro ao calcular média de peso:", error);
    }
}

export async function calcularItensTotal(){
    try{
        const itensTotal = await serviceEstoque.calcularItensTotal();
        console.log("Total de itens no estoque:", itensTotal);
    } catch(error){
        console.log("Erro ao calcular total de itens:", error);
    }
}