<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/fmt' prefix='fmt' %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<style>
	table, th, td { border: 1px solid black; }
</style>
<title>Resultados da busca</title>
</head>
<body>
	<table>
		<tr>
			<th> ID </th>
			<th> Nome</th>
			<th> Preco </th>
			<th> Quantidade</th>
		</tr>
		
	<c:forEach var="produto" items="${requestScope['listaProdutos']}">
		<tr>
			<td style="color:green"> ${produto.id} </td>
			<td> ${produto.nome} </td>
			<td> ${produto.preco} </td>
			<td> ${produto.quantia} </td>
			<td><a href="/Ex1FelipeAbrahao/alterar?id=${produto.id}">Alterar</a></td>
			<td><a href="/Ex1FelipeAbrahao/excluir?id=${produto.id}">Excluir</a></td>
		</tr>
	</c:forEach>	
	</table>
	
	<br />
	<a href="#" onclick="javascript:location.href='http://localhost:8080/Ex1FelipeAbrahao/buscar-produto.jsp';" id="redirect">
        <img width="30%" src="retornar.png" alt="Redirecionar" />
   	</a>	
   	
</body>
</html>