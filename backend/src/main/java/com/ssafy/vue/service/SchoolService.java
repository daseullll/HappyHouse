package com.ssafy.vue.service;

import java.util.List;

import com.ssafy.vue.dto.SchoolDto;

public interface SchoolService {
	List<SchoolDto> getLoc(String address) throws Exception;
}
