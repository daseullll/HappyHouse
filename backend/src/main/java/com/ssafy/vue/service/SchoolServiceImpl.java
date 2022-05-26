package com.ssafy.vue.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ssafy.vue.dto.SchoolDto;
import com.ssafy.vue.mapper.SchoolMapper;

@Service
public class SchoolServiceImpl implements SchoolService {

	@Autowired
	private SchoolMapper schoolMapper;
	
	@Override
	public List<SchoolDto> getLoc(String address) throws Exception {
		return schoolMapper.getLoc(address);
	}


}
