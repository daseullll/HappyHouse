package com.ssafy.vue.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.vue.dto.HouseDealDto;
import com.ssafy.vue.dto.HouseInfoDto;
import com.ssafy.vue.dto.SidoGugunCodeDto;
import com.ssafy.vue.service.HouseMapService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/map")
//@CrossOrigin("*")
public class HouseMapController {
	
	private final Logger logger = LoggerFactory.getLogger(HouseMapController.class);

	@Autowired
	private HouseMapService haHouseMapService;
	
	@GetMapping("/sido")
	public ResponseEntity<List<SidoGugunCodeDto>> sido() throws Exception {
		logger.debug("sido : {}", haHouseMapService.getSido());
		return new ResponseEntity<List<SidoGugunCodeDto>>(haHouseMapService.getSido(), HttpStatus.OK);
	}
	
	@GetMapping("/gugun")
	public ResponseEntity<List<SidoGugunCodeDto>> gugun(@RequestParam("sido") String sido) throws Exception {
//		logger.debug("gugun : {}", haHouseMapService.getGugunInSido(sido));
		return new ResponseEntity<List<SidoGugunCodeDto>>(haHouseMapService.getGugunInSido(sido), HttpStatus.OK);
	}
	
	@GetMapping("/dong")
	public ResponseEntity<List<HouseInfoDto>> dong(@RequestParam("gugun") String gugun) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(haHouseMapService.getDongInGugun(gugun), HttpStatus.OK);
	}
	
	@GetMapping("/apt")
	public ResponseEntity<List<HouseInfoDto>> apt(@RequestParam("dong") String dong) throws Exception {
		return new ResponseEntity<List<HouseInfoDto>>(haHouseMapService.getAptInDong(dong), HttpStatus.OK);
	}
	
	@GetMapping("/list")
	@ApiOperation(value = "아파트 거래내역 목록", notes = "아파트코드에 해당하는 아파트 거래내역 목록을 반환한다.", response = HouseDealDto.class)
	public ResponseEntity<List<HouseDealDto>> listApt(@RequestParam("aptCode") String aptCode) throws Exception {
		logger.info("listApt - 호출 ");
		return new ResponseEntity<List<HouseDealDto>>(haHouseMapService.getAptListForAptCode(aptCode.trim()), HttpStatus.OK); 		
	}
	
	@GetMapping("/search")
	@ApiOperation(value = "아파트 거래내역 목록", notes = "해당하는 이름의 아파트 거래내역 목록을 반환한다.", response = HouseDealDto.class)
	public ResponseEntity<List<HouseDealDto>> searchApt(@RequestParam("aptName") String aptName) throws Exception {
		logger.info("searchApt - 호출 ");
		return new ResponseEntity<List<HouseDealDto>>(haHouseMapService.getAptListForAptName(aptName.trim()), HttpStatus.OK); 		
	}
	
}
