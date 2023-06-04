package br.uel.produtos;

//esta classe implementa o transfer object od design pattern DAO
public class Produto {
	
	private Long id;
	private String nome;
	private int quantia;
	private double preco;
	

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public double getPreco() {
		return this.preco;
	}
	
	public int getQuantia() {
		return this.quantia;
	}

	public void setPreco(double preco) {
		this.preco = preco;
	}
	
	public void setQuantia(int quantia) {
		this.quantia = quantia;
	}
}

