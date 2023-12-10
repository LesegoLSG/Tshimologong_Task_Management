package com.LesegoMhlongo.TaskManagement.Service.Impl;

import com.LesegoMhlongo.TaskManagement.Service.JWTService;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import java.security.Key;
import java.util.Date;
import java.util.Map;
import java.util.function.Function;
@Service
public class JWTServiceImpl implements JWTService {
    /**
     *
     * @param userDetails
     * @return token
     * generateToken method, is used to generate a JWT token. It takes a username as input,
     * create a set pf claims(e.g subject, issued-at, expiration), and then builds a JWT token
     * using the claims and the signing key. The resulting token is returned.
     */
    public String generateToken(UserDetails userDetails){
        return Jwts.builder().setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 24))//Token will be valid for 24 hours
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();

    }

    /**
     *
     * @param extraClaims
     * @param userDetails
     * @return token
     * generateRefreshToken, generates a new token if the current token has expired.
     */
    public String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails){
        return Jwts.builder().setClaims(extraClaims).setSubject(userDetails.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 604800000))//Token will be valid for seven days
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();

    }

    /**
     *
     * @param token
     * @return subject claim
     * extractUserName method takes ajwt token as input and extracts the subject(Usually the username)
     * from the token's claim. It uses the 'extractClaim' method to extract the subject claim
     */
    public String extractUserName(String token){
        return extractClaim(token, Claims::getSubject);
    }

    /**
     *
     * @param token
     * @param claimsResolver
     * @return extracted claim
     * @param <T>
     *  ExtractClaim method, is a generic method used to extract a specific claim from JWT token's claims.
     *  It takes a JWT token and a 'function' that specifies how to extract the desired claim(e.g subject or
     *  expiration) and returns the extracted claim.
     */
    private <T> T extractClaim(String token, Function<Claims,T> claimsResolver){
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);

    }

    /**
     * @return key
     * getSignInKey method, is used to obtain the signing key for JWT oken creation and validate. It decode the
     * 'SECRET' key, which is typically a Based64-encoded key and converts it into a cryptographic key
     * using the 'keys.hmacShaKeyFor' ,method.

     */
    private Key getSignInKey() {
        byte[] key = Decoders.BASE64.decode("413F4428472B4B6250655368566D5970337336763979244226452948404D6351");
        return Keys.hmacShaKeyFor(key);
    }

    /**
     *
     * @param token
     * @return All claims
     * ExtractAllClaims method, parses the JWT token and extract all of it's claims.
     * It uses the 'jwts' builder to create a parse that is configured with appropriate signing key and then
     * extracts the token's claims
     */
    private Claims extractAllClaims(String token){
        return Jwts
                .parserBuilder()
                .setSigningKey(getSignInKey())
                .build().
                parseClaimsJws(token).
                getBody();
    }

    /**
     *
     * @param token
     * @param userDetails
     * @return true or false based on expiration date
     * isTokenValid,is used to validate a JWT token. It first extracts the username from the token and then checks
     * whether it matches the username of the provided 'UserDetails' object. Additionally, it verifies whether the token
     * has expired, if token is valid return true otherwise return false.
     */
    public boolean isTokenValid(String token, UserDetails userDetails){
        final String username = extractUserName(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

    /**
     *
     * @param token
     * @return true or false based on the expiration date.
     * isTokenExpired method, cjecks whether a JWT token has expired by comparing the token's expiration date
     * (Obtained using 'extractExpiration') to the current date. If the token has expired it returns true
     * otherwise false.
     */
    private boolean isTokenExpired(String token){
        return extractClaim(token, Claims::getExpiration).before(new Date());
    }
}
