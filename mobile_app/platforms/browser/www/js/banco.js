class Banco{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem('login')) || [];
	}
	tamanho()
	{
		return localStorage.length;
	}
	inserir(obj)
	{
		this.dados.push(obj);
		localStorage.setItem('login',  JSON.stringify(this.dados));
	}
}

class cadastro{
	constructor()
	{
		this.dados = JSON.parse(localStorage.getItem('cadastro')) || [];
	}
	tamanho()
	{
		return localStorage.length;
	}
	inserir(obj,objetinho)
	{
		this.dados.push(obj);
		localStorage.setItem('cadastro',  JSON.stringify(this.dados));
	}
}