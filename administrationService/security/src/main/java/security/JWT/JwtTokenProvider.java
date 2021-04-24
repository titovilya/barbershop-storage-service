package security.JWT;

import model.models.Role;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpHeaders;
import security.exceptions.CustomException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import security.services.ServiceEmployeeDetails;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Base64;
import java.util.Date;


@Component
@PropertySource("classpath:security.properties")
public class JwtTokenProvider {

    private final String secretKey;
    private final long validityInMinutes;
    private final String bearerPrefix = "Bearer ";
    private final ServiceEmployeeDetails serviceEmployeeDetails;

    public JwtTokenProvider(@Value("${security.jwt.token.secret-key}") String secretKey,
                            @Value("${security.jwt.token.expire-length}") long validityInMinutes,
                            ServiceEmployeeDetails serviceEmployeeDetails) {
        this.validityInMinutes = validityInMinutes;
        this.serviceEmployeeDetails = serviceEmployeeDetails;
        this.secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(String username, Role role) {

        Claims claims = Jwts.claims().setSubject(username);
        claims.put("auth", new SimpleGrantedAuthority(role.getName()));

        LocalDateTime now = LocalDateTime.now();
        LocalDateTime validity = now.plusMinutes(validityInMinutes);

        return Jwts.builder()//
                .setClaims(claims)//
                .setIssuedAt(Date.from(now.atZone(ZoneId.systemDefault()).toInstant()))//
                .setExpiration(Date.from(validity.atZone(ZoneId.systemDefault()).toInstant()))//
                .signWith(SignatureAlgorithm.HS256, secretKey)//
                .compact();
    }

    public Authentication getAuthentication(String token) {
        UserDetails userDetails = serviceEmployeeDetails.loadUserByUsername(getUsername(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    public String resolveToken(HttpServletRequest req) {
        String bearerToken = req.getHeader(HttpHeaders.AUTHORIZATION);
        if (bearerToken != null && bearerToken.startsWith(this.bearerPrefix)) {
            return bearerToken.substring(this.bearerPrefix.length());
        }
        return null;
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            throw new CustomException("Expired or invalid security.JWT token", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
