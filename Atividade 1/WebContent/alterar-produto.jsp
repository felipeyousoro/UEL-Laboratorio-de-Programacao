<%@page import="java.text.SimpleDateFormat"%>
<%@page import="br.uel.produtos.Produto"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/fmt' prefix='fmt' %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Alterar Produto</title>
</head>
<body>

	<form action="efetuarAlteracao" method="POST">
		Novo nome: <input type="text" name="nome" 
			value="${requestScope['contato'].nome}"/> <br />
		Novo preco: <input type="text" name="preco" 
			value="${requestScope['contato'].preco}"/> <br />
		Nova quantidade: <input type="text" name="quantia" 
			value="${requestScope['contato'].quantia}"/> <br />
		<input type="hidden" name=id value="${requestScope['produto'].id}"/> <br />
		<input type="submit" value="Alterar" />
	</form>
</body>
</html>