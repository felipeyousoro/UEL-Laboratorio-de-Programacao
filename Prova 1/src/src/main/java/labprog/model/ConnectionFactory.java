package labprog.model;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConnectionFactory {
	
	public Connection getConnection(){
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			return DriverManager.getConnection(
					"jdbc:mysql://34.95.204.164:3306/"
					+ "produtos?useTimezone=true&serverTimezone=America/"
					+ "Sao_Paulo&useSSL=false", 
					"aluno", "gRnR2jutz73ow6H");
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
		
	}

}
