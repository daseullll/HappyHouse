<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<c:set var="root" value="${pageContext.request.contextPath}" />
<%@ include file="/WEB-INF/views/include/header.jsp" %>


	<div class="container">


		<section id="index_section">
			<div class="card col-sm-12 mt-1" style="min-height: 850px;">
				<div class="card-body">
					<div class="form-group form-inline justify-content-center">
						<label class="mr-2" for="sido">시도 : </label>
						<select class="form-control" id="sido">
							<option value="0">선택</option>
						</select>
						<label class="mr-2 ml-3" for="gugun">구군 : </label>
						<select class="form-control" id="gugun">
							<option value="0">선택</option>
						</select>
						<label class="mr-2 ml-3" for="dong">읍면동 : </label>
						<select class="form-control" id="dong">
							<option value="0">선택</option>
						</select>
						<!-- <button type="button" id="aptSearchBtn">검색</button> -->
					</div>
					<table class="table mt-2">
						<colgroup>
							<col width="100">
							<col width="150">
							<col width="*">
							<col width="120">
							<col width="120">
						</colgroup>	
						<thead>
							<tr>
								<th>번호</th>
								<th>아파트이름</th>
								<th class="text-center">주소</th>
								<th>건축연도</th>
								<th>최근거래금액</th>
							</tr>
						</thead>
						<tbody id="searchResult"></tbody>
					</table>
				<div id="map" style="width:100%;height:500px;"></div>
				<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=08985b67250897bfb740eaa75f2f566f&libraries=services"></script>
				<script type="text/javascript" src="js/map.js"></script>
				<script type="text/javascript">
				let colorArr = ['table-primary','table-success','table-danger'];
				$(document).ready(function(){					
					$.get(root + "/map/sido"
						,function(data, status){
							$.each(data, function(index, vo) {
								$("#sido").append("<option value='"+vo.sidoCode+"'>"+vo.sidoName+"</option>");
							});
						}
						, "json"
					);
				});
				$(document).on("change", "#sido", function() {
					$.get(root + "/map/gugun"
							,{sido: $("#sido").val()}
							,function(data, status){
								$("#gugun").empty();
								$("#gugun").append('<option value="0">선택</option>');
								$.each(data, function(index, vo) {
									$("#gugun").append("<option value='"+vo.gugunCode+"'>"+vo.gugunName+"</option>");
								});
							}
							, "json"
					);
				});
				$(document).on("change", "#gugun", function() {
					$.get(root + "/map/dong"
							,{gugun: $("#gugun").val()}
							,function(data, status){
								$("#dong").empty();
								$("#dong").append('<option value="0">선택</option>');
								$.each(data, function(index, vo) {
									$("#dong").append("<option value='"+vo.dongCode+"'>"+vo.dongName+"</option>");
								});
							}
							, "json"
					);
				});
				$(document).on("change", "#dong", function() {
					$.get(root + "/map/apt"
							,{dong: $("#dong").val()}
							,function(data, status){
								$("tbody").empty();
								$.each(data, function(index, vo) {
									let str = `
										<tr class="\${colorArr[index%3]}">
										<td>\${vo.aptCode}</td>
										<td>\${vo.aptName}</td>
										<td>\${vo.sidoName} \${vo.gugunName} \${vo.dongName} \${vo.jibun}</td>
										<td>\${vo.buildYear}</td>
										<td>\${vo.recentPrice}</td>
									`;
									$("tbody").append(str);
								});
								displayMarkers(data);
							}
							, "json"
					);
				});
				
			
				</script>
				</div>
			</div>
		</section>
	</div>
	<c:if test="${!empty userinfo}">

		<script>
		alert("${userinfo.username}님 ${userinfo.visit}번째 로그인 입니다.");
		</script>
	</c:if>
</body>
</html>