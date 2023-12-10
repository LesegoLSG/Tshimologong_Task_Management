package com.LesegoMhlongo.TaskManagement.Service;

import com.LesegoMhlongo.TaskManagement.Model.UserEntity;
import com.LesegoMhlongo.TaskManagement.dto.JwtAuthenticationResponse;
import com.LesegoMhlongo.TaskManagement.dto.RefreshTokenRequest;
import com.LesegoMhlongo.TaskManagement.dto.SignInRequest;
import com.LesegoMhlongo.TaskManagement.dto.SignUpRequest;

public interface AuthenticationService {
    public UserEntity signup(SignUpRequest signUpRequest);

    public JwtAuthenticationResponse signIn(SignInRequest signInRequest);

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
