<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
	
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Framework Project</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="shortcut icon" href="img/favicon.ico">
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/apt.css">
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script
	src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
<script
	src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
		<header id="index_header" class="jumbotron text-center mb-1">
			<img id="logo" src="/img/happyhouse.png">
		</header>
		<!-- nav start -->
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark rounded">
			<ul class="navbar-nav">
				<li class="nav-item"><a class="nav-link" href="#">Home</a></li>
				<li class="nav-item dropdown"><a
					class="nav-link dropdown-toggle" href="#" id="navbardrop"
					data-toggle="dropdown"> 동네 정보 </a>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="#">APT 매매</a> <a
							class="dropdown-item" href="#">APT 전월세</a> <a
							class="dropdown-item" href="#">주택 매매</a> <a class="dropdown-item"
							href="#">주택 전월세</a> <a class="dropdown-item" href="#">상권 정보</a> <a
							class="dropdown-item" href="#">환경 정보</a>
					</div></li>
				<li class="nav-item"><a class="nav-link" href="#">Notice</a></li>
				<li class="nav-item"><a class="nav-link" href="#">News</a></li>
				<li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
				<li class="nav-item"><a class="nav-link" href="${root}/user/login">Login</a></li>
				<li class="nav-item"><a class="nav-link" href="${root}/user/register">회원가입</a></li>
				<li class="nav-item"><a class="nav-link" href="${root}/user/list">회원정보</a></li>
			
			</ul>
</nav>