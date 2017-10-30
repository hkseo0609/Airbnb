package com.airbnb.web.controller;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.airbnb.web.command.Command;
import com.airbnb.web.command.ResultMap;
import com.airbnb.web.domain.Reservation;
import com.airbnb.web.mapper.HKMapper;
import com.airbnb.web.service.IGetService;
import com.airbnb.web.service.IListService;
import com.airbnb.web.service.IPostService;

@RestController
public class HKController {
	private static final Logger logger = LoggerFactory.getLogger(HKController.class);
	@Autowired Command cmd;
	@Autowired HKMapper mapper;
	
	@RequestMapping(value="/get/{cate}/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> get(@PathVariable String cate, @PathVariable String seq) {
		logger.info("get 진입");
		System.out.println("###### 넘어온 시퀀스 값 : " +seq);
		Map<String,Object> map = new HashMap<>();
		cmd.setSearch(seq);
		map.put("detail", new IGetService() {
			@Override
			public Object execute(Object o) {
				return mapper.selectOne(cmd);
			}
		}.execute(null));
		//ResultMap rm = (ResultMap) map.get("detail");
		return map;
		
	};
	
	@RequestMapping(value="/list/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> list(@RequestBody Command cmd){
		System.out.println("@@@@ 넘어온 시퀀스 값 : " +cmd.getAction());
		Map<String,Object> map = new HashMap<>();
		
		IListService listService = null;
		IGetService countService = null;
		switch(cmd.getAction()) {
			case "revList":
				listService = (x)->{
					return mapper.selectList(cmd);
				};
				countService = (x)->{
					return mapper.count(cmd);
				};
				map.put("revList", listService.execute(cmd));
				map.put("count", countService.execute(cmd));
				
				break;
			case "revsearch":
				listService = (x)->{
					return mapper.selectList(cmd);
				};
				map.put("searchList", listService.execute(cmd));
		};
		
		return map;
	};
	
	@RequestMapping(value="/post/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> post(@RequestBody Reservation res){
		System.out.println("####post 넘어온 아이디값:"+res.getMemberId());
		Map<String,Object> map = new HashMap<>();
		
		/*int totalNo=Integer.parseInt(res.getAdult())+Integer.parseInt(res.getTeen())+Integer.parseInt(res.getChild());
		int totalPrice = totalNo * (Integer.parseInt(res.getResPrice()));*/
		int random = (int)(Math.random()*99999);
		String seq = "rev"+String.valueOf(random);
		/*res.setResPrice(String.valueOf(totalPrice));*/
		res.setRsvSeq(seq);
		
		new IPostService() {
			@Override
			public void execute(Object o) {
				mapper.insert(res);
			}
		}.execute(null);
		map.put("result", "success");
		return map;
	};

}
