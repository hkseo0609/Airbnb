package com.airbnb.web.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.command.Command;
import com.airbnb.web.domain.Board;
import com.airbnb.web.domain.Member;
import com.airbnb.web.mapper.BKMapper;
import com.airbnb.web.service.IGetService;



@RestController
public class BKController {
   private static final Logger logger = LoggerFactory.getLogger(BKController.class);
   @Autowired Member mem;
   @Autowired BKMapper mapper;
   @Autowired Board bod;
   
      
   
   @RequestMapping(value="/get/login",method=RequestMethod.POST)
   public @ResponseBody Map<?,?> put(@RequestBody Member mem ){
      logger.info("BKController::::: BKController {}","컨트롤러진입");
      System.out.println("id : "+ mem.getMember_id()+"비번 : "+mem.getMember_password());
      Map<String,Object> map=new HashMap<>();
      Command cmd=new Command();
      cmd.setAction(mem.getMember_id());
      cmd.setColumn(mem.getMember_password());
      String result;      
      Member m=(Member) new IGetService() {
         
         @Override
         public Object execute(Object o) {
            // TODO Auto-generated method stub
            return mapper.selectOne(cmd);
         }
      }.execute(cmd);
      
       if(m==null) {
            result="fail";
         }else {
            result="success";
         }
       
       map.put("user", m.getMember_id());
       map.put("list",m);
       map.put("msg", result);
       
       
      
            
   
      System.out.println("통신후"+m.toString());
   
      
      
      return map;
   }
      /*@RequestMapping(value="/get/loginPage",method=RequestMethod.POST)
      public @ResponseBody Map<?,?> getLoginPage(@RequestBody Map<String,Object> param){
         Map<String,Object> map=new HashMap<>();
         Map<String,Object> member=new HashMap<>();
         System.out.println("아이디 :"+param.get("member_id")+"비번 : "+param.get("pass"));
         command.setTable("login");
         command.setParam(param);
         getService=(x) ->{
            return mapper.selectOne(command);
         };
         String result="";
         
         member=(Map<String, Object>) getService.excute(command);
         System.out.println(member);
         
         if(getService.excute(command)==null) {
            result="fail";
         }else {
            result="success";
         }
         
         map.put("msg", result);
         map.put("member_id", member.get("member_id"));
         map.put("pass", member.get("pass"));
         return map;
      }*/
}