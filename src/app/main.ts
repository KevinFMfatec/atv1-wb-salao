import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa"
import atualizarCliente from "../negocio/Cliente/atualizarCliente";
import CadastroCliente from "../negocio/Cliente/cadastroCliente";
import excluirCliente from "../negocio/Cliente/excluirCliente";
import GeradorDeClientes from "../negocio/Cliente/gerar";
import ListagemClientes from "../negocio/Cliente/listagemClientes";
import listagemConsumoValor from "../negocio/listagem/ListagemConsumoValor";
import ListagemGenero from "../negocio/listagem/ListagemGenero";
import ListagemQuantidade from "../negocio/listagem/ListagemMaisConsumidor";
import ListagemMenosQuantidade from "../negocio/listagem/ListagemMenosConsumidor";
import ProdMaisConsumidos from "../negocio/listagem/ListagemProdServMaisConsumidos";
import ConsumidoGenero from "../negocio/listagem/ListagemProdServPorGenero";
import atualizarProduto from "../negocio/produto/atualizarProduto";
import CadastroProduto from "../negocio/produto/cadastroProduto";
import excluirProduto from "../negocio/produto/excluirProduto";
import ListagemProduto from "../negocio/produto/listagemProduto";
import atualizarServico from "../negocio/servico/atualizarServico";
import CadastroServico from "../negocio/servico/cadastroServico";
import excluirServico from "../negocio/servico/excluirServico";
import ListagemServico from "../negocio/servico/listagemServico";

console.log(`Bem-vindo ao cadastro de clientes do Grupo World Beauty`)
let empresa = new Empresa()
let execucao = true
let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos);
let cadastroProduto = new CadastroProduto(empresa.getProdutos);
let cadastroServico = new CadastroServico(empresa.getServicos);
let gerarClientes = new GeradorDeClientes(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
cadastroServico.gerar();
cadastroProduto.gerar();
gerarClientes.gerar();

while (execucao) {
    console.log(`Opções:`);
    console.log(`-----------------`);
    console.log(`-----CLIENTE-----`);
    console.log(`-----------------`);
    console.log(`1 - Cadastrar cliente `);
    console.log(`2 - Listar todos os clientes`);
    console.log(`3 - Atualizar Cliente `);
    console.log(`4 - Deletar Cliente   `);
    console.log(`-----------------`);
    console.log(`-----PRODUTO-----`);
    console.log(`-----------------`);
    console.log(`5 - Cadastrar Produtos`);
    console.log(`6 - Listar Produtos   `);
    console.log(`7 - Atualizar Produtos`);
    console.log(`8 - Deletar Produtos  `);
    console.log(`-----------------`);
    console.log(`-----SERVICO-----`);
    console.log(`-----------------`);
    console.log(`9 - Cadastrar Serviços`);
    console.log(`10 - Listar Serviços   `);
    console.log(`11 - Atualizar Serviço`);
    console.log(`12 - Deletar Serviço  `);
    console.log(`-------------------`);
    console.log(`-----LISTAGENS-----`);
    console.log(`-------------------`);
    console.log(`13 - Listar Por generos`);
    console.log(`14 - Listar Clientes que mais consumiram em quantidade`);
    console.log(`15 - Listar Clientes que menos consumiram`);
    console.log(`16 - Listar Produtos e Serviços mais consumidos`);
    console.log(`17 - Listar Produtos e Serviços mais consumidos por genero`);
    console.log(`18 - Listar dos clietes que mais consumiram por valor`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            cadastro.cadastrar()
            break;
        case 2:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 3:
            let atualizarClientes = new atualizarCliente(empresa.getClientes, empresa.getProdutos, empresa.getServicos)
            atualizarClientes.atualizar()
            break;
        case 4:
            let excluirClientes = new excluirCliente(empresa.getClientes)
            excluirClientes.excluir()
            break;
        case 5:
            let cadastroProdutos = new CadastroProduto(empresa.getProdutos)
            cadastroProdutos.cadastrar();
            break;
        case 6:
            let listagemProdutos = new ListagemProduto(empresa.getProdutos);
            listagemProdutos.listar();
            break;
        case 7:
            let atualizarProdutos = new atualizarProduto(empresa.getProdutos)
            atualizarProdutos.atualizar()
            break
        case 8:
            let excluirProdutos = new excluirProduto(empresa.getProdutos)
            excluirProdutos.excluir()
            break
        case 9:
            let cadastroServicos = new CadastroServico(empresa.getServicos);
            cadastroServicos.cadastrar();
            break
        case 10:
            let listagemServicos = new ListagemServico(empresa.getServicos);
            listagemServicos.listar();
            break
        case 11:
            let atualizarServicos = new atualizarServico(empresa.getServicos)
            atualizarServicos.atualizar()
            break
        case 12:
            let excluirServicos = new excluirServico(empresa.getServicos)
            excluirServicos.excluir()
        case 13:
            let listagemGenero = new ListagemGenero(empresa.getClientes);
            listagemGenero.listar();
            break
        case 14:
            let MaisConsumidos = new ListagemQuantidade(empresa.getClientes)
            MaisConsumidos.listar()
            break
        case 15:
            let MenosConsumido = new ListagemMenosQuantidade(empresa.getClientes)
            MenosConsumido.listar()
            break
        case 16:
            let ProdMaisConsumido = new ProdMaisConsumidos(empresa.getClientes)
            ProdMaisConsumido.listar()
            break
        case 17:
            let ConsumidosPorGenero = new ConsumidoGenero(empresa.getClientes)
            ConsumidosPorGenero.listar()
            break
        case 18:
            let valorConsumido = new listagemConsumoValor(empresa.getClientes)
            valorConsumido.listar()
            break;
        case 0:
            execucao = false
            console.log(`Muito obrigado pela preferência`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}