package com.airbnb.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.constant.Extension;
import com.airbnb.web.constant.Path;


@Lazy
@Component
public class Command {
	protected String dir,action, page,pageNumber,search,view,column,startRow,endRow;
	
	public String getDir() {
		return dir;
	}
	
	public void setDir(String dir) {
		this.dir = dir;
	}
	
	public String getAction() {
		return action;
	}
	
	public void setAction(String action) {
		this.action = action;
	}
	
	public String getPage() {
		return page;
	}
	
	public void setPage(String page) {
		this.page = page;
	}
	
	public String getPageNumber() {
		return pageNumber;
	}
	
	public void setPageNumber(String pageNumber) {
		this.pageNumber = pageNumber;
	}
	
	public String getSearch() {
		return search;
	}
	
	public void setSearch(String search) {
		this.search = search;
	}
	
	public String getView() {
		return view;
	}
	
	public void setView(String view) {
		this.view = view;
	}
	
	public String getColumn() {
		return column;
	}
	
	public void setColumn(String column) {
		this.column = column;
	}
	
	public String getStartRow() {
		return startRow;
	}
	
	public void setStartRow(String startRow) {
		this.startRow = startRow;
	}
	
	public String getEndRow() {
		return endRow;
	}
	
	public void setEndRow(String endRow) {
		this.endRow = endRow;
	}
		
	public void process() {
		// TODO Auto-generated method stub
		
	}
}
