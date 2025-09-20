var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe base Funcionario
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
    Funcionario.prototype.exibirDados = function () {
        return "Nome: ".concat(this.nome, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2));
    };
    Funcionario.prototype.aumentarSalario = function (porcentagem) {
        this.salario += (this.salario * porcentagem) / 100;
    };
    return Funcionario;
}());
// Subclasse Gerente
var Gerente = /** @class */ (function (_super) {
    __extends(Gerente, _super);
    function Gerente(nome, salario, departamento) {
        var _this = _super.call(this, nome, salario) || this;
        _this.departamento = departamento;
        return _this;
    }
    Gerente.prototype.exibirDados = function () {
        return "Nome: ".concat(this.nome, ", Sal\u00E1rio: R$").concat(this.salario.toFixed(2), ", Departamento: ").concat(this.departamento);
    };
    return Gerente;
}(Funcionario));
// Teste
var funcionario1 = new Funcionario("Saulo", 2500);
var gerente1 = new Gerente("Aurora", 5000, "TI");
console.log(funcionario1.exibirDados());
console.log(gerente1.exibirDados());
funcionario1.aumentarSalario(10);
gerente1.aumentarSalario(20);
console.log(funcionario1.exibirDados());
console.log(gerente1.exibirDados());
