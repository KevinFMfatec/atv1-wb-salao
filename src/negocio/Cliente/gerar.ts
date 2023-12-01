import Cliente from "../../modelo/cliente"
import CPF from "../../modelo/cpf";
import Produto from "../../modelo/produto";
import RG from "../../modelo/rg";
import Servico from "../../modelo/servico";
import Telefone from "../../modelo/telefone";
import Geracao from "../geracao"

export default class GeradorDeClientes extends Geracao {
    private clientes: Array<Cliente>
    private produtos: Array<Produto>
    private servicos: Array<Servico>
    constructor(clientes: Array<Cliente>, produtos: Array<Produto>, servicos: Array<Servico>) {
        super()
        this.clientes = clientes;
        this.produtos = produtos;
        this.servicos = servicos;
    }
    public gerar(): void {
        let nome = "Kevin Ferreira Mirenda"
        let nomeSocial = "Kevin"
        let genero = "Masculino"
        let valor = "534.352.787-23";
        let date = new Date()
        date.getDate()
        let cpf = new CPF(valor, date);
        let cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "68.324.973-2"
        let rg = new RG(valor, date)
        let ddd = "12"
        let numero = "935689346"
        let telefone = new Telefone(ddd, numero)
        let produtos = [
            "Desodorante",
            "Shampoo",
            "Creme para mãos"
        ]
        let sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        let servico = [
            "Pintura de cabelo",
            "Massagem"]
        let sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Davi Lucas Almeida"
        nomeSocial = "Davi"
        genero = "Masculino"
        valor = "652.382.370-90"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "43.214.241.5"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "94657356"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Sabonete",
            "Cotonete",
            "Batom",
            "Escova de Dentes"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Massagem",
	        "Manicure",
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Clarice Moraes"
        nomeSocial = "Clarie"
        genero = "Feminino"
        valor = "049.840.860-41"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "53.645.964.6"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "87254577"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Máscara Hidratante",                           
            "Pinca",                                         
            "Aparelho de barbear",                     
            "Hidratante"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Manicure",
	        "Pintura de cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Luiz Henrique Pereira"
        nomeSocial = "Luizin"
        genero = "Masculino"
        valor = "124.327.330-53"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "45.873.435-7"
        rg = new RG(valor, date)
        ddd = "12"
        numero = "94567236"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Base facial",                                  
            "Creme esfoliante",                           
            "Máscara Hidratante",                           
            "Pinca",                                         
            "Aparelho de barbear"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
            "Pintura de cabelo",
	        "Tratamento de pele",
	        "Hidratação de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Maria Fernanda Lima"
        nomeSocial = "Marie"
        genero = "Feminino"
        valor = "117.266.470-64"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "86.245.987-2"
        rg = new RG(valor, date)
        ddd = "11"
        numero = "43765735"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Base facial",                                                           
            "Pinca",                                         
            "Aparelho de barbear",
            "Batom",
            "Escova de Dentes",
            "Shampoo",
            "Creme para pés"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Tratamento de pele",
	        "Hidratação de Cabelo",
            "Massagem",
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Bruna Rocha"
        nomeSocial = "Bruninha Pedra"
        genero = "Feminino"
        valor = "614.462.700-68"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "98.989.536-1"
        rg = new RG(valor, date)
        ddd = "67"
        numero = "21876886"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",
            "Creme para pés",
            "Hidratante",
            "Sabonete",
            "Cotonete"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Larissa Ribeiro"
        nomeSocial = "Larissinha123"
        genero = "Feminino"
        valor = "339.687.490-06"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "64.654.128-0"
        rg = new RG(valor, date)
        ddd = "45"
        numero = "98786678"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Base facial",                                  
            "Creme esfoliante",                           
            "Máscara Hidratante",                           
            "Pinca",                                         
            "Aparelho de barbear",                     
            "Hidratante",
            "Sabonete",
            "Cotonete",
            "Batom",
            "Escova de Dentes",
            "Shampoo",
            "Creme para pés",
            "Creme para mãos",
            "Protetor labial",
            "Desodorante"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Tratamento de pele",
	        "Hidratação de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Marcos Vinicius Rodrigues"
        nomeSocial = "Marcão"
        genero = "Masculino"
        valor = "579.133.690-00"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "32.517.576-6"
        rg = new RG(valor, date)
        ddd = "09"
        numero = "54879612"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Shampoo",
            "Creme para pés",
            "Creme para mãos",
            "Protetor labial",
            "Desodorante"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Massagem",
	        "Manicure",
	        "Pintura de cabelo",
	        "Tratamento de pele",
	        "Hidratação de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "João Pedro Azevedo"
        nomeSocial = "Jão"
        genero = "Masculino"
        valor = "781.949.510-38"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "82.973.576-9"
        rg = new RG(valor, date)
        ddd = "32"
        numero = "23498754"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Creme esfoliante",
            "Escova de Dentes",
            "Hidratante",
            "Sabonete",
            "Protetor labial"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Massagem",
	        "Manicure"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Felipe Costa"
        nomeSocial = "Lipinho do lol"
        genero = "Masculino"
        valor = "882.638.590-42"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "12.754.633-8"
        rg = new RG(valor, date)
        ddd = "14"
        numero = "21498542"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Creme esfoliante",
            "Hidratante",
            "Sabonete",
            "Cotonete",
            "Batom",
            "Escova de Dentes"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Massagem",
	        "Manicure",
            "Hidratação de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Bryan Barbosa"
        nomeSocial = "Brysa"
        genero = "Masculino"
        valor = "142.157.630-96"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "34.268.398-3"
        rg = new RG(valor, date)
        ddd = "23"
        numero = "43258733"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Batom",
            "Escova de Dentes",
            "Máscara Hidratante",                           
            "Pinca",                                         
            "Aparelho de barbear",                     
            "Hidratante",
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Hidratação de Cabelo"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Ana Júlia da Luz"
        nomeSocial = "Aninha Lux"
        genero = "Feminino"
        valor = "781.465.120-46"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "24.389.146-7"
        rg = new RG(valor, date)
        ddd = "71"
        numero = "87623564"
        telefone = new Telefone(ddd, numero)
        produtos = [
            "Batom",
            "Escova de Dentes",
            "Máscara Hidratante",                           
            "Pinca",                                         
            "Aparelho de barbear",                     
            "Hidratante",
            "Creme para pés",
            "Creme para mãos",
            "Protetor labial",
            "Desodorante"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Hidratação de Cabelo",
            "Pintura de cabelo",
	        "Tratamento de pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)

        nome = "Eloah Barbosa"
        nomeSocial = "Patricinha da zona sul"
        genero = "Feminino"
        valor = "338.743.370-06"
        date = new Date()
        date.getDate()
        cpf = new CPF(valor, date);
        cliente = new Cliente(nome, nomeSocial, cpf, genero)
        valor = "92.436.787-3"
        rg = new RG(valor, date)
        ddd = "98"
        numero = "87644557"
        telefone = new Telefone(ddd, numero)
        produtos = [                              
            "Aparelho de barbear",                     
            "Hidratante",
            "Creme para pés",
            "Creme para mãos",
            "Protetor labial",
            "Desodorante",
            "Hidratante",
            "Sabonete"
        ]
        sliceProdutos = produtos.slice();
        for (let index = 0; index < sliceProdutos.length; index++) {
            let nomes = this.produtos.map(i => (i.nome))
            let pegarPreco = this.produtos.filter(produto => produto.nome == sliceProdutos[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceProdutos[index])) {
                let produtoNovo = new Produto(sliceProdutos[index], Number(pegarPreco))
                cliente.getProdutosConsumidos.push(produtoNovo)
            }
        }
        servico = [
	        "Manicure",
            "Hidratação de Cabelo",
	        "Tratamento de pele"
        ]
        sliceServico = servico.slice();
        for (let index = 0; index < sliceServico.length; index++) {
            let nomes = this.servicos.map(i => (i.nome))
            let pegarPreco = this.servicos.filter(produto => produto.nome == sliceServico[index]).map(i => { return i.preco }).toString()
            if (nomes.includes(sliceServico[index])) {
                let adicionandoServico = new Servico(sliceServico[index], Number(pegarPreco))
                cliente.getServicosConsumidos.push(adicionandoServico)
            }
        };
        cliente.getRgs.push(rg);
        cliente.getTelefones.push(telefone);
        this.clientes.push(cliente)
    }
}