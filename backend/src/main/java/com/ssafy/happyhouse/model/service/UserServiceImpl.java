package com.ssafy.happyhouse.model.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.happyhouse.model.UserDto;
import com.ssafy.happyhouse.model.mapper.UserMapper;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserMapper userMapper;
	
	@Override
	public UserDto login(Map<String, String> map) throws Exception {
		return userMapper.login(map);
	}

	@Override
	public int idCheck(String checkId) throws Exception {
		return userMapper.idCheck(checkId);
	}

	@Override
	public void registerMember(UserDto userDto) throws Exception {
		userMapper.registerMember(userDto);
	}

	@Override
	public List<UserDto> listMember() throws Exception {
		return userMapper.listMember();
	}

	@Override
	public UserDto getMember(String userId) throws Exception {
		return userMapper.getMember(userId);
	}

	@Override
	public void updateMember(UserDto userDto) throws Exception {
		userMapper.updateMember(userDto);
	}

	@Override
	public void deleteMember(String userId) throws Exception {
		userMapper.deleteMember(userId);
	}

	@Override
	public void update(String userId) {
		// TODO Auto-generated method stub
		userMapper.update(userId);
	}

}
