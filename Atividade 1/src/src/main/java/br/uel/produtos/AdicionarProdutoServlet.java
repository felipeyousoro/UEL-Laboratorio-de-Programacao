package br.uel.produtos;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AdicionarProdutoServlet
 */
@WebServlet("/adicionar")
public class AdicionarProdutoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AdicionarProdutoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//String id = request.getParameter("id");
		String nome = request.getParameter("nome");
		String preco = request.getParameter("preco");
		String quantia = request.getParameter("quantia");
		
		//removi o try catch pois estava dando erros
		double p = Double.parseDouble(preco);			
		int q = Integer.parseInt(quantia);
		//Long i = Long.parseLong(id);
			
		Produto produto = new Produto();
			
		//produto.setId(i);
		produto.setNome(nome);
		produto.setPreco(p);
		produto.setQuantia(q);
		
		ProdutoDAO produtoDao = new ProdutoDAO();
			
		produtoDao.inserir(produto);
			
		RequestDispatcher view = request.getRequestDispatcher("add-produto-resposta.jsp");
			
		view.forward(request, response);
		
	}

}
