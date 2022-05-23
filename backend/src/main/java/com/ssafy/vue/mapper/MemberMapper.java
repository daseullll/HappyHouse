package com.ssafy.vue.mapper;

import java.sql.SQLException;
import java.util.List;

import com.ssafy.vue.dto.MemberDto;


public interface MemberMapper {

	public MemberDto login(MemberDto memberDto) throws SQLException;
	public MemberDto userInfo(String userid) throws SQLException;
	public void registerMember(MemberDto memberDto) throws SQLException;
	public List<MemberDto> listMember() throws SQLException;
	public MemberDto getMember(String userid) throws SQLException;
	public void updateMember(MemberDto memberDto) throws SQLException;
	public void deleteMember(String userid) throws SQLException;
	
}