package com.ssafy.vue.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ssafy.vue.dto.NewsDto;

@Controller
@RequestMapping("/news")
public class NewsController {

	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	public static HashMap<String, String> map;

	@GetMapping("/crawl")
	public ResponseEntity<List<NewsDto>> crawling() throws Exception {
		String url = "https://land.naver.com/news/headline.naver";
		
		Document doc = Jsoup.connect(url).get();
		List<NewsDto> list = new ArrayList<>();
		
		Element newslist = doc.select(".section_headline .headline_list").get(0);
		Elements newsElements = newslist.select("li");
		int cnt=1;
		for(Element e : newsElements){
			if(cnt%10!=0 && cnt<=9) {
				NewsDto news = new NewsDto();
				news.setImg(e.getElementsByAttribute("src").attr("src"));
//				news.setTitle(e.getElementsByAttribute("alt").attr("alt"));
				news.setTitle(e.select("a").text());
				
				news.setUrl(e.getElementsByAttribute("href").attr("href"));
				list.add(news);
			}
			cnt++;
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
	
	@GetMapping("/crawl2")
	public ResponseEntity<List<NewsDto>> crawling2() throws Exception {
		
		String url = "http://www.eduinnews.co.kr/news/articleList.html?sc_section_code=S1N5&view_type=sm";
		
		Document doc = Jsoup.connect(url).get();
		List<NewsDto> list = new ArrayList<>();
		
		Element newslist = doc.select(".section-body").get(0);
		Elements newsElements = newslist.select("li");
		int cnt=1;
		for(Element e : newsElements){
			if(cnt%11!=0 && cnt<=10) {
				NewsDto news = new NewsDto();
				news.setImg(e.getElementsByAttribute("src").attr("src"));
//				news.setTitle(e.getElementsByAttribute("alt").attr("alt"));
				news.setTitle(e.select(".titles a").text());
				
				news.setUrl(e.getElementsByAttribute("href").attr("href"));
				
				
				list.add(news);
			}
			cnt++;
		}
		return new ResponseEntity<>(list, HttpStatus.OK);
	}
}
