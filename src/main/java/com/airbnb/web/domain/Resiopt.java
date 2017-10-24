package com.airbnb.web.domain;

import org.springframework.stereotype.Component;

import lombok.Data;

@Data
@Component
public class Resiopt {
	private String hostSerial, wifi, bedNum, pet,  
	essentialItem, parking, bathroomNum, tv, washingMac, airCondi, kitchen;
}
