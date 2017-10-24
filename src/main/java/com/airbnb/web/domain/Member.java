package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Member {
	private String member_id, member_password, name, regdate, birthdate, memberRole;
}
