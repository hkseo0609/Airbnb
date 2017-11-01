package com.airbnb.web.command;

import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Component;


import lombok.Data;


@Lazy
@Component
@Data
public class Command {
	protected String dir,action, page,pageNumber,search,view,column,startRow,endRow,kitchen,serial,cate,common;
	
	public void process() {
		// TODO Auto-generated method stub
		
	}
}
