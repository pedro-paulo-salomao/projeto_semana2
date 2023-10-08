import readline from 'readline';
import { adicionarProduto, listarItens, calcularValorTotal, calcularMediaDeValor, calcularQuantidadeTotal, removerProduto, calcularPesoTotal, calcularMediaDePeso, calcularItensTotal} from './controller/controleEstoque';
import { Data } from './model/estoque.interface';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    console.log("Escolha uma opção:");
    console.log("1. Adicionar Produto");
    console.log("2. Remover Produto");
    console.log("3. Listar Itens");
    console.log("4. Valor Total dos Itens");
    console.log("5. Peso Total dos Itens");
    console.log("6. Média: valor por item");
    console.log("7. Média: peso por item");
    console.log("8. Quantidade total de itens");
    console.log("9. Quantidade total de produtos");
    console.log("0. Sair");
}

async function main() {
    while (true) {
        menu();

        const option = await askQuestion("Opção: ");

        switch (option) {
            case '1':
                const data: Data = {
                    nome: '',
                    peso: 0,
                    valor: 0,
                    quantidade: 0
                };

                data.nome = await askQuestion("Nome do produto: ");
                data.peso = parseFloat(await askQuestion("Peso do produto em KG: "));
                data.valor = parseFloat(await askQuestion("Valor do produto: "));
                data.quantidade = parseInt(await askQuestion("Quantidade do produto: "));

                await adicionarProduto(data);                
                break;
            case '2':
                const nome = await askQuestion("Nome do produto: ");
                await removerProduto(nome);
                break;
            case '3':
                await listarItens();
                break;
            case '4':
                await calcularValorTotal();
                break;
            case '5':
                await calcularPesoTotal();
                break;
            case '6':
                await calcularMediaDeValor();
                break;
            case '7':
                await calcularMediaDePeso();
                break;
            case '8':
                await calcularItensTotal();
                break;
            case '9':
                await calcularQuantidadeTotal();
                break;
            case '0':
                rl.close();
                return;
            default:
                console.log("Opção inválida!");
        }
    }
}

function askQuestion(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

main();