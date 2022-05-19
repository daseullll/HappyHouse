<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ include file="/WEB-INF/views/include/header.jsp" %>

<script type="text/javascript">
		$(document).ready(function() {
			
			$('#mvWriteBtn').focusin(function() {
				$(location).attr("href", "${root}/article/write");
			});
			
			$("#searchBtn").click(function() {
				
				if($("#sword").val() == "") {
					alert("모든 목록 조회!!");
				} 
				$("#searchform").attr("action", "${root}/article/list").submit();
			});
			
			$(".page-item").click(function() {
				$("#pg").val(($(this).attr("data-pg")));
				$("#pageform").attr("action", "${root}/article/list").submit();
			});
			
		});

</script>

	</div>
</body>
</html>