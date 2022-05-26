package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.SchoolDto;

@Mapper
public interface SchoolMapper {
	List<SchoolDto> getLoc(String address) throws Exception;
}
