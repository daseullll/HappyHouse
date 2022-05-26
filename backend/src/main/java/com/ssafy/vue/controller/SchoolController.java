package com.ssafy.vue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.SchoolDto;
import com.ssafy.vue.service.SchoolService;

@RestController
@RequestMapping("/school")
public class SchoolController {
	
	@Autowired
	private SchoolService schoolService;
	
	@GetMapping
	public ResponseEntity<List<SchoolDto>> location(@RequestParam("address") String address) throws Exception {
		return new ResponseEntity<List<SchoolDto>>(schoolService.getLoc(address), HttpStatus.OK);
	}
}
