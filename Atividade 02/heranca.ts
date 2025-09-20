// Classe base Funcionario
class Funcionario {
  nome: string;
  salario: number;

  constructor(nome: string, salario: number) {
    this.nome = nome;
    this.salario = salario;
  }

  exibirDados(): string {
    return `Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}`;
  }

  aumentarSalario(porcentagem: number): void {
    this.salario += (this.salario * porcentagem) / 100;
  }
}

// Subclasse Gerente
class Gerente extends Funcionario {
  departamento: string;

  constructor(nome: string, salario: number, departamento: string) {
    super(nome, salario);
    this.departamento = departamento;
  }

  exibirDados(): string {
    return `Nome: ${this.nome}, Salário: R$${this.salario.toFixed(
      2
    )}, Departamento: ${this.departamento}`;
  }
}

// Teste
const funcionario1 = new Funcionario("Saulo", 2500);
const gerente1 = new Gerente("Aurora", 5000, "TI");

console.log(funcionario1.exibirDados());
console.log(gerente1.exibirDados());

funcionario1.aumentarSalario(10);
gerente1.aumentarSalario(20);

console.log(funcionario1.exibirDados());
console.log(gerente1.exibirDados());
