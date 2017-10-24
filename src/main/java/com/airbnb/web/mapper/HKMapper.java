package com.airbnb.web.mapper;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.airbnb.web.command.Command;
import com.airbnb.web.domain.Residence;
@Repository
public interface HKMapper {
	
	public void insert(Object o);
	public List<?> selectList(Command cmd);
	public Object selectOne (Command cmd);
	public String count(Command cmd);
	public void update (Object o);
	public void delete(Command cmd);
}
