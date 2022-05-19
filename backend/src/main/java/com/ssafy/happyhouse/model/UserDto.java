package com.ssafy.happyhouse.model;

public class UserDto {

	private String userid;
	private String username;
	private String userpwd;
	private int visit;
	
	public UserDto() {}

	public UserDto(int visit, String userid, String username, String userpwd) {
		this.userid = userid;
		this.username = username;
		this.userpwd = userpwd;
		this.visit = visit;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getUserpwd() {
		return userpwd;
	}

	public void setUserpwd(String userpwd) {
		this.userpwd = userpwd;
	}

	public int getVisit() {
		return visit;
	}

	public void setVisit(int visit) {
		this.visit = visit;
	}
	
	
	
}
