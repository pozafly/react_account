//package com.seoulit.common.filter;
//
//import com.seoulit.common.util.JwtUtil;
//
//import javax.servlet.*;
//import javax.servlet.annotation.WebFilter;
//import javax.servlet.http.HttpServletRequest;
//import javax.servlet.http.HttpServletResponse;
//import java.io.IOException;
//import java.util.Arrays;
//import java.util.List;
//
//@WebFilter("/*")
//public class LoginFilter implements Filter {
//    private final List<String> ALLOW_PATH = Arrays.asList("", "/api/auth/login", "/api/auth/logout");
//    private JwtUtil jwtUtil = JwtUtil.getInstance();
//
//    @Override
//    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
//        HttpServletRequest request = (HttpServletRequest) servletRequest;
//        HttpServletResponse response = (HttpServletResponse) servletResponse;
//
//        String path = request.getRequestURI().substring(request.getContextPath().length()).replaceAll("[/]+$", "");
//        String authorization = request.getHeader("Authorization");
//
//        if(!request.getMethod().equals("OPTIONS") && !ALLOW_PATH.contains(path) && (authorization == null || !jwtUtil.isSigned(authorization)))
//            response.sendError(HttpServletResponse.SC_UNAUTHORIZED);
//
//        filterChain.doFilter(request, response);
//    }
//혜기야 16기가로 고고싱~}
