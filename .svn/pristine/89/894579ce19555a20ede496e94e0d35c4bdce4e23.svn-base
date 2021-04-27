package com.seoulit.common.util;

import com.seoulit.erp.hr.pm.to.EmployeeTo;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class JwtUtil {
	private String key = "ZWFmYmVvO2Z2Ym87Z3ZlcmFvO2lndmJhZW9yO3ZnYiBlcjtidm5hZWtsO2J2IG5lcmFvdWlwdm5pb3dlO3ZnYmVyO3Zz";

	private static JwtUtil ourInstance = new JwtUtil();

	public static JwtUtil getInstance() {
		return ourInstance;
	}

	public boolean isSigned(String authorization) {
		return Jwts.parser().setSigningKey(key).isSigned(authorization);
	}

	public String encode(EmployeeTo employee) {
		System.out.println(this.key);

		String jwt = null;

		try {
			jwt = Jwts.builder().claim("empCode", employee.getEmpCode()).claim("empName", employee.getEmpName())
					.signWith(SignatureAlgorithm.HS256, key).compact();
		} catch (Exception e) {
			System.out.println("토큰을 생성하는데 실패하였습니다.");
		}

		return jwt;
	}

	public Claims decode(String token) {
		return Jwts.parser().setSigningKey(key).parseClaimsJwt(token).getBody();
	}
}
