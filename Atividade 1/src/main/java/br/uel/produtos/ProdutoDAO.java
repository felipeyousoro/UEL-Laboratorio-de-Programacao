package br.uel.produtos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;



//DAO para acessar tabela Contato
public class ProdutoDAO {
	
	private Connection connection;
	
	public ProdutoDAO(){
		
		this.connection = new ConnectionFactory().getConnection();
		
	}
	
	public void inserir(Produto produto){
		
		String sql = 
				"INSERT INTO produto (NOME, PRECO, QUANTIDADE) VALUES (?,?,?)";
		try {
			PreparedStatement prstate = connection.prepareStatement(sql);
			
			//prstate.setLong(1, produto.getId());
			prstate.setString(1, produto.getNome());
			prstate.setDouble(2, produto.getPreco());
			prstate.setInt(3, produto.getQuantia());
			
			prstate.execute();
			
			prstate.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
		}
				
		
	}
	
	public void alterar(Produto produto){
		
		String sql = 
				"UPDATE produto SET NOME=?, PRECO=?, QUANTIDADE=? WHERE ID=?";
		
		try {
			PreparedStatement prstate = connection.prepareStatement(sql);
			
			prstate.setLong(4, produto.getId());
			prstate.setString(1, produto.getNome());
			prstate.setDouble(2, produto.getPreco());
			prstate.setInt(3, produto.getQuantia());
			
			prstate.execute();
			
			prstate.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
		}
				
		
	}
	
	public void excluir(Long id){
		
		String sql = 
				"DELETE FROM produto WHERE ID=?";
		
		try {
			PreparedStatement prstate = connection.prepareStatement(sql);
			
			prstate.setLong(1, id);
			
			prstate.execute();
			
			prstate.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
		}
				
		
	}

	public List<Produto> buscarPorNome(String nome){
		
		String sql = 
				"SELECT * FROM produto WHERE NOME LIKE UPPER(?)";
		
		List<Produto> produtos = new ArrayList<Produto>();
		
		try {
			PreparedStatement prstate = connection.prepareStatement(sql);
			
			prstate.setString(1, new String("%"+nome+"%").toUpperCase());
					
			ResultSet resultado = 
					prstate.executeQuery();
			
			while (resultado.next()){
				Produto produto = new Produto();
				produto.setId(resultado.getLong("ID"));
				produto.setNome(resultado.getString("NOME"));
				produto.setPreco(resultado.getDouble("PRECO"));
				produto.setQuantia(resultado.getInt("QUANTIDADE"));

				
				produtos.add(produto);
			}
			resultado.close();
			prstate.close();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
		}
		
		return produtos;
		
	}
	
	public Produto buscarPorId(Long id){
			
		String sql = "SELECT * FROM produto WHERE ID = ?";
			
			//utilize sempre prepared statement pois ele é mais rápido que statement -> consulta parametrizada
			
		Produto produto = new Produto();
			
		try {
			PreparedStatement prstate = connection.prepareStatement(sql);
				
			prstate.setLong(1, id);
					
			ResultSet resultado = prstate.executeQuery();
				
			resultado.next();
				
			produto.setId(resultado.getLong("ID"));
			produto.setNome(resultado.getString("NOME"));
			produto.setPreco(resultado.getDouble("PRECO"));
			produto.setQuantia(resultado.getInt("QUANTIDADE"));

			resultado.close();
			prstate.close();
		} catch (SQLException e) {
				// TODO Auto-generated catch block
			throw new RuntimeException(e);
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
					// TODO Auto-generated catch block
				throw new RuntimeException(e);
			}
		}
			
		return produto;
			
	}
}
