package com.LesegoMhlongo.TaskManagement.Service;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JWTService {

    public String extractUserName(String token);
    public String generateToken(UserDetails userDetails);

    public boolean isTokenValid(String token, UserDetails userDetails);

    public String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails);
}
