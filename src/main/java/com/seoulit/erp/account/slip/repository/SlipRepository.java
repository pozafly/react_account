package com.seoulit.erp.account.slip.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.account.slip.to.SlipTO;

public interface SlipRepository extends JpaRepository<SlipTO, String> {

}
