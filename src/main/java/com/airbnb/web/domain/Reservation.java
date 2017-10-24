package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Reservation {
	private String rsvSeq, checkin, checkout, adult, teen, child, solddays, hostSerial, MemberId, resPrice;

}
