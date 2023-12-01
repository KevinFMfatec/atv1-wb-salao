import Entrada from "../../io/entrada";
import Servico from "../../modelo/servico";
import Cadastro from "../cadastro";

export default class CadastroServico extends Cadastro {
    private servicos: Array<Servico>;
    private entrada: Entrada;
    constructor(servicos: Array<Servico>) {
        super()
        this.servicos = servicos;
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        let nome = this.entrada.receberTexto("Digite o nome do serviço: ");
        let nomes = this.servicos.map(i => (i.nome))
        if (nomes.includes(nome)) {
            console.log(`${nome} já existe`);
            console.log();
        } else {
            let preco = this.entrada.receberNumero(`Qual é o preço do servico? R$`)
            let cadastrar = new Servico(nome, Number(preco));
            this.servicos.push(cadastrar);
            console.log();
        }
    }
    public gerar(): void {
        let servicos = [
            "Massagem",
            "Pintura de cabelo",
            "Manicure",
            "Tratamento de pele",
            "Hidratação de Cabelo"
        ]
        let preco = [
            320.00,
            75.0,
            48.00,
            234.00,
            43.00
        ]
        let sliceServico = servicos.slice();
        let sliceServicoPreco = preco.slice()
        for (let index = 0; index < sliceServico.length; index++) {
            let adicionarServico = new Servico(sliceServico[index], Number(sliceServicoPreco[index]))
            this.servicos.push(adicionarServico)
        }
    }
}