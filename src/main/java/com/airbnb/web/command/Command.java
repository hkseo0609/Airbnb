package com.airbnb.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;

import com.airbnb.web.constant.Extension;
import com.airbnb.web.constant.Path;


@Lazy
@Component
public class Command {
protected String dir,action, page,pageNumber,search,view,column,startRow,endRow;
	/*id,pw*/
	public String getStartRow() {
		return startRow;
	}

	public void setStartRow(String startRow){
		this.startRow = startRow;
	}

	public String getEndRow(){
		return endRow;
	}

	public void setEndRow(String endRow) {
		this.endRow = endRow;
	}

	/*dir & pageNumber는 무조건 있다*/
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
		if(action==null){
			this.action="move";
		}else {
			this.action=action;
		}
		/*this.action = (action==null)?"move":action;*/
		System.out.println("COmmand action:::"+action);
	}

	public String getPage() {
		return page;
	}

	public void setPage(String page) {
		this.page = page;
		System.out.println("페이지 이름 :: "+this.page);
	}

	public String getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(String pageNumber) {
		this.pageNumber = (pageNumber==null)?"1":pageNumber;
		System.out.println("command:: 페이지 번호::"+this.pageNumber);
	}

	public String getSearch() {
		return search;
	}

	public void setSearch(String search) {
		this.search=(search==null)? "none":search;
		System.out.println("commandDTO서치: "+this.search);
	}

	public String getColumn() {
		return column;
	}

	public void setColumn(String column) {
		this.column = (column==null)?"none":column;
		System.out.println("컬럼: "+this.column);
	}
	public String getView() {
		return view;
	}

	public void process() {
		/*VIEW를 정해준다*/
		this.view=(dir.equals("home"))?
				"/WEB-INF/view/common/home.jsp":
			Path.VIEW+dir+Path.SEPARATOR+page+Extension.JSP;
		System.out.println("이동페이지:"+this.view);
	}
	

}
