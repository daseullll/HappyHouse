<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/header.jsp" %>


<script type="text/javascript">
	$(document).ready(function() {
		
		//회원 목록
		$.ajax({
			url:'${root}/admin/user',  
			type:'GET',
			contentType:'application/json;charset=utf-8',
			dataType:'json',
			success:function(users) {
				makeList(users);
			},
			error:function(xhr, status, error){
				console.log("상태값 : " + xhr.status + "\tHttp 에러메시지 : " + xhr.responseText);
			},
			statusCode: {
				500: function() {
					alert("서버에러.");
				},
				404: function() {
					alert("페이지없다.");
				}
			}	
		});
		
		$("#registerBtn").click(function() {
			let registerinfo = JSON.stringify({
				"username" : $("#username").val(), 
				"userid" : $("#userid").val(), 
				"userpwd" : $("#userpwd").val() 
			   });
			$.ajax({
				url:'${root}/admin/user',  
				type:'POST',
				contentType:'application/json;charset=utf-8',
				dataType:'json',
				data: registerinfo,
				success:function(users) {
					$("#username").val('');
					$("#userid").val('');
					$("#userpwd").val('');
					$("#userRegModal").modal("hide");
					makeList(users);
				},
				error:function(xhr,status,msg){
					console.log("상태값 : " + status + " Http에러메시지 : "+msg);
				}
			});
		});
		
	/* 	$(document).on("dblclick", "tr.view", function() {
			let vid = $(this).attr("data-id");
			$.ajax({
				url:'${root}/admin/user/' + vid,  
				type:'GET',
				contentType:'application/json;charset=utf-8',
				success:function(user) {
					$("#vid").text(user.userId);
					$("#vname").text(user.userName);
					$("#vemail").text(user.email);
					$("#vjoindate").text(user.joinDate);
					$("#userViewModal").modal();
				},
				error:function(xhr,status,msg){
					console.log("상태값 : " + status + " Http에러메시지 : "+msg);
				}				
			});			
		}); */
		
		// 회워 정보 수정 보기.
		$(document).on("click", ".modiBtn", function() {
			let mid = $(this).parents("tr").attr("data-id");
			$("#view_" + mid).css("display", "none");
			$("#mview_" + mid).css("display", "");
		});
		
		// 회워 정보 수정 실행.
		$(document).on("click", ".modifyBtn", function() {
			let mid = $(this).parents("tr").attr("data-id");
			let modifyinfo = JSON.stringify({
						"userId" : mid, 
						"userPwd" : $("#userpwd" + mid).val()
					   });
			$.ajax({
				url:'${root}/admin/user',  
				type:'PUT',
				contentType:'application/json;charset=utf-8',
				dataType:'json',
				data: modifyinfo,
				success:function(users) {
					makeList(users);
				},
				error:function(xhr,status,msg){
					console.log("상태값 : " + status + " Http에러메시지 : "+msg);
				}
			});
		});
		
		// 회워 정보 수정 취소.
		$(document).on("click", ".cancelBtn", function() {
			let mid = $(this).parents("tr").attr("data-id");
			$("#view_" + mid).css("display", "");
			$("#mview_" + mid).css("display", "none");
		});
		
		// 회워 탈퇴.
		$(document).on("click", ".delBtn", function() {
			if(confirm("정말 삭제?")) {
				let delid = $(this).parents("tr").attr("data-id");
				$.ajax({
					url:'${root}/admin/user/' + delid,  
					type:'DELETE',
					contentType:'application/json;charset=utf-8',
					dataType:'json',
					success:function(users) {
						makeList(users);
					},
					error:function(xhr,status,msg){
						console.log("상태값 : " + status + " Http에러메시지 : "+msg);
					}
				});
			}
		});
	});
	
	function makeList(users) {
		$("#userlist").empty();
		$(users).each(function(index, user) {
			let str = `
			<tr id="view_${'${user.userId}'}" class="view" data-id="${'${user.userId}'}">
				<td>${'${user.userid}'}</td>
				<td>${'${user.userpwd}'}</td>
				<td>${'${user.username}'}</td>
				
				<td>
					<button type="button" class="modiBtn btn btn-outline-primary btn-sm">수정</button>
					<button type="button" class="delBtn btn btn-outline-danger btn-sm">삭제</button>
				</td>
			</tr>
			<tr id="mview_${'${user.userid}'}" data-id="${'${user.userid}'}" style="display: none;">
				<td>${'${user.userid}'}</td>
				<td><input type="text" name="userpwd" id="userpwd${'${user.userId}'}" value="${'${user.userPwd}'}"></td>
				<td>${'${user.userName}'}</td>
				<td>
					<button type="button" class="modifyBtn btn btn-primary btn-sm">수정</button>
					<button type="button" class="cancelBtn btn btn-danger btn-sm">취소</button>
				</td>
			</tr>
			`;
			$("#userlist").append(str);
		});//each
	}
	</script>	  

	<div class="container text-center mt-3">
        <div class="col-lg-12 mx-auto">
            <h2 class="p-3 mb-3 shadow bg-light"><mark class="pink">회원목록</mark></h2>
			<div class="mb-3 text-right"><button type="button" class="modiBtn btn btn-outline-info" data-toggle="modal" data-target="#userRegModal">등록</button></div>
		  	<table class="table table-hover">
		  		<colgroup>
		            <col width="120">
		            <col width="120">
		            <col width="120">
		            <col width="170">
		            <!-- <col width="*"> -->
		            <col width="120">
		            <col width="130">
		        </colgroup>
		    	<thead>
			      	<tr>
			        	<th class="text-center">아이디</th>
			        	<th class="text-center">비밀번호</th>
			        	<th class="text-center">이름</th>
			        	
			        	<th class="text-center">수정/삭제</th>
			      	</tr>
		    	</thead>
		    	<tbody id="userlist"></tbody>
			</table>
		</div>
		

	</div>
</body>
</html>