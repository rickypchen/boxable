class User::SessionsController < Devise::SessionsController
# before_filter :configure_sign_in_params, only: [:create]

  # GET /resource/sign_in
  # def new
  #   super
  # end

  # POST /resource/sign_in
  def create
    p "in sign in route"
    @user = User.find_by(email: params[:user][:email])
    p @user
    if params[:user][:password] != nil && @user.valid_password?(params[:user][:password]) 
      p "password good"
      session[:signed_in] = true
      render json: ["good"]
    else
      p "password bad"
      render json: @user.errors.full_messages
    end
  end

  # DELETE /resource/sign_out
  # def destroy
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_in_params
  #   devise_parameter_sanitizer.for(:sign_in) << :attribute
  # end
end
