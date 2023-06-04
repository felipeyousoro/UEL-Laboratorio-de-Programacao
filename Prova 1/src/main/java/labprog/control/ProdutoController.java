package labprog.control;

import java.io.Serializable;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.enterprise.event.Event;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.faces.view.ViewScoped;
import javax.inject.Inject;
import javax.inject.Named;
import labprog.model.Produto;
import labprog.model.ProdutoDAO;

/*
 * Named: makes a bean accessible through the EL.
 * 
 * View scope: The attributes persist until the user has navigated to the next view.
 * 
 * A bean that uses these annotations is a CDI managed bean.
 */
@Named
@ViewScoped
public class ProdutoController implements Serializable{
	
	private Produto produto;
	
	private List<Produto> lista;
	
	@Inject
	protected Event<DataEvent> events;
	
	public List<Produto> getLista() {
		
		return this.lista;
	}

	public void setLista(List<Produto> lista) {
		this.lista = lista;
	}

	public Produto getProduto() {
		return produto;
	}

	public void setProduto(Produto produto) {
		this.produto = produto;
	}
	
	public void buscarPorNome() {
		ProdutoDAO pDao = 
				new ProdutoDAO();
		
		//System.out.println("Nome: "+this.produto.getNome());
		
		this.lista = 
				pDao.buscarPorNome(this.produto.getNome());
		
		
	}
	
	public void remover(Produto produto) {
		
		long idContato = 
				produto.getId();
		
		ProdutoDAO pDao = 
				new ProdutoDAO();
		
		pDao.excluir(idContato);
		
		lista.remove(produto);
		
		FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Produto removido com sucesso"));
		
		events.fire(new DataEvent(produto, DataEvent.DATA_UPATED));
	}
	
	public void alterar(Produto produto) {
		
		ProdutoDAO pDao = 
				new ProdutoDAO();
		
		pDao.alterar(produto);
		
		FacesContext.getCurrentInstance().addMessage(null,
				new FacesMessage("Produto alterado com sucesso"));
		
	}
	
	public void adicionar() {
		ProdutoDAO pDao = 
				new ProdutoDAO();
		
		pDao.inserir(this.produto);
		
		FacesContext.getCurrentInstance().addMessage(null, 
				new FacesMessage("Produto inserido com sucesso"));
	}
	
	
	@PostConstruct
	public void init() {
		produto = new Produto();
	}

}
