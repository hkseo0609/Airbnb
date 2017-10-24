package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Residence {
	private String hostSerial, memberId, limitNo, residenceName, price, zipcode, detailImg, infoImg, resiContent, addr, adult, teen, child;

}
