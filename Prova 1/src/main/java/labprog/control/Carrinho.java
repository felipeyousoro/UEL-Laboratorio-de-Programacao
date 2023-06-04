package labprog.control;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.enterprise.context.SessionScoped;
import javax.faces.application.FacesMessage;
import javax.faces.context.FacesContext;
import javax.inject.Named;
import labprog.model.Produto;
import javax.enterprise.event.Observes;


@Named
@SessionScoped
public class Carrinho implements Serializable{
	
	List<Produto> listaCarrinho;
	
	public List<Produto> getListaCarrinho() {
		return listaCarrinho;
	}

	public void setListaCarrinho(List<Produto> lista) {
		this.listaCarrinho = lista;
	}
	
	public Produto getProdutoOriginal(Produto produto) {
		for(Produto i : this.listaCarrinho) {
			if(i.getId().equals(produto.getId())) {
				return i;
			}
		}
				
		return null;
	}
	
	public void adicionarCarrinho(Produto produto) {
		
		Produto inserir = new Produto();
		inserir.setId(produto.getId());
		inserir.setNome(produto.getNome());
		inserir.setPreco(produto.getPreco());
		inserir.setQuantia(1);
		
		Produto repetido = getProdutoOriginal(inserir);
				
		if(repetido == null) {
			inserir.setQuantia(1);
			this.listaCarrinho.add(inserir);
		}
		else {
			if(produto.getQuantia() < repetido.getQuantia() + 1) {
				FacesContext.getCurrentInstance().addMessage(null, new FacesMessage("Nao ha mais produtos para adicionar!"));
				return;
		
			}
			else {
				repetido.setQuantia(repetido.getQuantia()+1);			
			}
		}
		
		FacesContext.getCurrentInstance().addMessage(null, 
				new FacesMessage("Produto adicionado ao carrinho!"));
		
	}
	
	public void diminuirQuantia(Produto produto, int total) {
		
		if(produto.getQuantia() == 1) {
			listaCarrinho.remove(produto);
		}
		else {
			produto.setQuantia(produto.getQuantia() - total);
		}
		
	}
	
	public void onDataEvent(@Observes DataEvent dataEvent) {
		  if (DataEvent.DATA_UPATED == dataEvent.getEventType()) {
			  Produto evento = (Produto) dataEvent.getData();
			  Produto original = getProdutoOriginal(evento);
			  if(original != null) {
				  listaCarrinho.remove(original);
			  }
			  
		  }
	}

	@PostConstruct
	public void init() {
		listaCarrinho = 
				new ArrayList<Produto>();
	}

}
