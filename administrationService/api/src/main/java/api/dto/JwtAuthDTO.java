package api.dto;

import lombok.Data;
import lombok.NonNull;


@Data
public class JwtAuthDTO {

    @NonNull
    private String accessToken;
    private String tokenType = "Bearer";
}
