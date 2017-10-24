package com.airbnb.web.controller;

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
import com.airbnb.web.service.IPutService;

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
		IGetService detailService = null;
		cmd.setSearch(seq);
		detailService = (x)->{
			
			return mapper.selectOne(cmd);
		};
		map.put("detail", detailService.execute(cmd));
		//ResultMap rm = (ResultMap) map.get("detail");
		return map;
		
	};
	
	@RequestMapping(value="/list/{cate}/{seq}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> list(@PathVariable String cate, @PathVariable String seq){
		System.out.println("@@@@ 넘어온 시퀀스 값 : " +seq);
		Map<String,Object> map = new HashMap<>();
		IListService listService = null;
		IGetService countService = null;
		cmd.setSearch(seq);
		listService = (x)->{
			return mapper.selectList(cmd);
		};
		countService = (x)->{
			return mapper.count(cmd);
		};
		map.put("revList", listService.execute(cmd));
		map.put("count", countService.execute(cmd));
		return map;
	};
	
	@RequestMapping(value="/put/{cate}", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Map<?,?> put(@RequestBody Reservation res){
		System.out.println("####넘어온 아이디값:"+res.getMemberId());
		Map<String,Object> map = new HashMap<>();
		IPutService insertService = null;
		/*insertService=(x)->{
			mapper.insert(res);
		};
		insertService.execute(res);
		map.put("result", "success");*/
		return map;
	};

}
