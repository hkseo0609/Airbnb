package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class ReviewBoard {
	private String boardSeq, reviewStar, hostSerial;

}
