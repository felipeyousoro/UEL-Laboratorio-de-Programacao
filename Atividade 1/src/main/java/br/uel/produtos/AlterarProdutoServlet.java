package br.uel.produtos;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class AlterarProdutoServlet
 */
@WebServlet("/alterar")
public class AlterarProdutoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AlterarProdutoServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#service(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		ProdutoDAO produtoDao = 
				new ProdutoDAO();
		
		Long id = 
				Long.parseLong(request.getParameter("id"));
		
		Produto produto = 
				produtoDao.buscarPorId(id);
		
		request.setAttribute("produto", produto);
		
		RequestDispatcher view = 
				request.getRequestDispatcher("alterar-produto.jsp");
		
		view.forward(request, response);
	}

}
