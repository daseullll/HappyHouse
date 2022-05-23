package com.ssafy.vue.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.ssafy.vue.dto.Board;
import com.ssafy.vue.dto.CommentDto;
@Mapper
public interface BoardMapper {
	
	public List<Board> selectBoard();
	public Board selectBoardByNo(int articleno);
	public void updateHit(int articleno);
	public int insertBoard(Board board);
	public int updateBoard(Board board);
	public int deleteBoard(int articleno);

	public int writeComment(CommentDto commentDto);
	public List<CommentDto> getListComment(int articleNo);
	public int updateComment(CommentDto commentDto);
	public int deleteComment(CommentDto commentDto);
	
	

}