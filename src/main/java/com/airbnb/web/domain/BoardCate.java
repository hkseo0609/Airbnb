package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class BoardCate {
	private String boardSeq, cateName, cateLevel, cateSeq;

}
