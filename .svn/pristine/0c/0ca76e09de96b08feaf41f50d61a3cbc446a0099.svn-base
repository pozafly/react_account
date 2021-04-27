package com.seoulit.erp.sys.dao;

import com.seoulit.erp.sys.to.CodeDetailTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CodeDetailDao {

	public List<CodeDetailTo> selectAllCodeDetailList();
	public List<CodeDetailTo> selectPayStepCodeDetailList(String divisionCode);

	public void insertDetailCode(CodeDetailTo codeDetailTo);

	public void updateDetailCode(CodeDetailTo codeDetailTo);

	public void deleteDetailCode(CodeDetailTo codeDetailTo);
}
